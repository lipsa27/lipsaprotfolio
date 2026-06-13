'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Create scene
    const scene = new THREE.Scene();

    // Create camera
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 35;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Setup particles
    const particleCount = 200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      // Create particle inside a space coordinate system
      const x = (Math.random() - 0.5) * 60;
      const y = (Math.random() - 0.5) * 40;
      const z = (Math.random() - 0.5) * 30;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Custom circle texture for soft round particles
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 16, 16);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    // Points Material using custom theme colors
    const material = new THREE.PointsMaterial({
      size: 0.8,
      sizeAttenuation: true,
      map: particleTexture,
      transparent: true,
      alphaTest: 0.001,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: new THREE.Color('#06b6d4'), // Cyan
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // Handle mouse move
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.targetX = ((e.clientX - rect.left) / container.clientWidth) * 2 - 1;
      mouse.targetY = -((e.clientY - rect.top) / container.clientHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    });
    resizeObserver.observe(container);

    // Animation Loop
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Rotate particle cloud slowly
      particleSystem.rotation.y = elapsedTime * 0.02;
      particleSystem.rotation.x = elapsedTime * 0.01;

      // Interaction physics
      const positionAttr = geometry.attributes.position as THREE.BufferAttribute;
      const array = positionAttr.array as Float32Array;

      // Project mouse into 3D coordinates
      const mouse3D = new THREE.Vector3(mouse.x * 30, mouse.y * 20, 0);

      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        const idy = i * 3 + 1;
        const idz = i * 3 + 2;

        const ox = originalPositions[idx];
        const oy = originalPositions[idy];
        const oz = originalPositions[idz];

        // Apply a gentle floating motion
        const floatX = Math.sin(elapsedTime * 0.5 + ox) * 0.1;
        const floatY = Math.cos(elapsedTime * 0.5 + oy) * 0.1;

        const particlePos = new THREE.Vector3(array[idx], array[idy], array[idz]);
        const dist = particlePos.distanceTo(mouse3D);

        // Repel force if close to mouse
        if (dist < 15) {
          const repelForce = (15 - dist) / 15;
          const repelDir = new THREE.Vector3()
            .subVectors(particlePos, mouse3D)
            .normalize();
          
          array[idx] += repelDir.x * repelForce * 0.6;
          array[idy] += repelDir.y * repelForce * 0.6;
        } else {
          // Return to home coordinate with floating offset
          array[idx] += (ox + floatX - array[idx]) * 0.03;
          array[idy] += (oy + floatY - array[idy]) * 0.03;
          array[idz] += (oz - array[idz]) * 0.03;
        }
      }

      positionAttr.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-45 dark:opacity-40"
    />
  );
}
