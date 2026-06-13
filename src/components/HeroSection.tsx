'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";
import ThreeCanvas from './ThreeCanvas';
import { ArrowRight, Download, Sparkles, Layout, Database, Terminal, X } from 'lucide-react';

const tools = [
  'Figma',
  'Framer',
  'Google Stitch',
  'Flowstep AI',
  'Figma AI',
  'Claude',
  'ChatGPT',
  'Cursor',
  'Bolt',
  'Lovable',
];

export default function HeroSection() {
  const [toolIndex, setToolIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);


  // Cycle through tools
  useEffect(() => {
    const interval = setInterval(() => {
      setToolIndex((prev) => (prev + 1) % tools.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Track mouse for radial glow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(target);
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-slate-950"
    >
      {/* Three.js Background Canvas */}
      <ThreeCanvas />

      {/* Mouse follow radial glow */}
      <div
        className="absolute rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 opacity-20 dark:opacity-20 z-0 bg-radial from-cyan-500/30 via-indigo-500/10 to-transparent w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px]"
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      />

      {/* Static grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none -z-10" />

      {/* Ambient Gradient glow layers */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 py-12 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center z-10 relative">
        {/* Left text column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left relative">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-semibold text-cyan-400 mb-6 shadow-lg shadow-cyan-950/20"
          >
            <Sparkles size={12} className="animate-pulse" />
            Product Designer
          </motion.div>

          <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white leading-[1.1] mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-500 bg-clip-text text-transparent">Lipsa Faldu</span>
          </h2>

          <h3 className="text-xl sm:text-2xl font-medium text-slate-300 mb-8 max-w-xl leading-relaxed">
            UI/UX Designer &nbsp;<span className="text-cyan-400 font-semibold">AI-Powered</span> Product Designer with <span className="text-indigo-400 font-semibold underline decoration-wavy decoration-cyan-500/30">2.5+ Years</span> Experience.
          </h3>

          <div className="flex flex-col items-start gap-y-2 mb-10 text-base sm:text-lg font-medium text-slate-400 w-full max-w-md">
            <span>Designing with</span>
            <div className="relative w-full h-10 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={tools[toolIndex]}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 w-full text-cyan-400 font-display font-black text-2xl sm:text-3xl tracking-wide uppercase border-b border-cyan-400/20 whitespace-nowrap pb-1"
                >
                  {tools[toolIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => scrollToSection('#work')}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-300"
            >
              View Case Studies
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:bg-slate-850 hover:border-slate-700 transition-all duration-300"
            >
              Let's Connect
            </a>
          </motion.div>
        </div>

        {/* Desktop image column (visible on md and up) */}
        <div className="hidden md:block lg:col-span-5 relative h-[450px] select-none">
          <Image src="/assets/images/me/Photo.jpeg" alt="Lipsa Faldu" fill className="rounded-xl object-cover" />
        </div>

        {/* Mobile image column (visible on small screens) */}
        <div className="lg:col-span-5 block md:hidden relative h-[450px] select-none">
          <Image src="/assets/images/me/Photo.jpeg" alt="Lipsa Faldu" fill className="rounded-xl object-cover" />
        </div>

      </div>
    </section>
  );
}
