'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Image from "next/image";
import ThreeCanvas from './ThreeCanvas';
import { ArrowRight, Download, Sparkles, Layout, Database, Terminal } from 'lucide-react';

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

  useEffect(() => {
    const interval = setInterval(() => {
      setToolIndex((prev) => (prev + 1) % tools.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 opacity-20 dark:opacity-20 z-0 bg-radial from-cyan-500/30 via-indigo-500/10 to-transparent"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />

      {/* Static grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none -z-10" />

      {/* Ambient Gradient glow layers */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative">

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
            UI/UX Designer & <span className="text-cyan-400 font-semibold">AI-Powered</span> Product Designer with <span className="text-indigo-400 font-semibold underline decoration-wavy decoration-cyan-500/30">2.5+ Years</span> Experience.
          </h3>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-10 text-base sm:text-lg font-medium text-slate-400 min-h-[44px]">
            <span>Designing with</span>
            <div className="relative inline-block w-32 sm:w-44 h-8 overflow-hidden align-middle">
              <AnimatePresence mode="wait">
                <motion.span
                  key={tools[toolIndex]}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 text-cyan-400 font-display font-black text-lg sm:text-xl tracking-wide uppercase border-b border-cyan-400/20 whitespace-nowrap"
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
            {/* <a
              href="/resume.pdf"
              download
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-400 hover:text-slate-200 hover:bg-slate-900/40 rounded-full transition-colors"
            >
              <Download size={16} />
              Resume
            </a> */}
          </motion.div>
        </div>

        {/* Right floating UI design elements column */}
        <div className="lg:col-span-5 relative h-[450px] hidden md:block select-none">
          <Image src="/assets/images/me/Photo.jpeg" alt="Lipsa Faldu" fill className="rounded-xl object-cover" />

          {/* Component Card 1: Button Variants (Floats Top Left) */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-4 left-6 glass-panel p-5 rounded-2xl w-60 animate-float"
            style={{ animationDelay: '0s' }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase flex items-center gap-1.5">
                <Layout size={10} className="text-cyan-400" />
                Button.tsx
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
            </div>
            <div className="flex flex-col gap-3">
              <button className="w-full py-2 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-[11px] text-white font-bold text-center pointer-events-none shadow shadow-cyan-500/20">
                Primary Button
              </button>
              <button className="w-full py-2 px-4 rounded-xl border border-slate-200/10 dark:border-slate-800 text-[11px] text-slate-300 font-bold text-center pointer-events-none">
                Secondary Accent
              </button>
            </div>
          </motion.div> */}

          {/* Component Card 2: User Flow Link (Floats Middle Right) */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute top-1/3 right-4 glass-panel p-5 rounded-2xl w-64 animate-float"
            style={{ animationDelay: '2s' }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase flex items-center gap-1.5">
                <Database size={10} className="text-indigo-400" />
                UserFlow.json
              </span>
            </div>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 py-2 px-3 rounded-lg bg-slate-950/60 border border-slate-900">
                <div className="w-2 h-2 rounded-full bg-cyan-500" />
                <span className="text-[11px] font-medium text-slate-300 font-mono">/auth/login</span>
              </div>
              <div className="flex justify-center">
                <div className="h-4 w-0.5 bg-slate-800 border-dashed border-l border-slate-700" />
              </div>
              <div className="flex items-center gap-2.5 py-2 px-3 rounded-lg bg-slate-950/60 border border-slate-900">
                <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                <span className="text-[11px] font-medium text-slate-300 font-mono">/dashboard/onboard</span>
              </div>
            </div>
          </motion.div> */}

          {/* Component Card 3: Color Palette (Floats Bottom Left) */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-6 left-12 glass-panel p-4 rounded-2xl w-48 animate-float"
            style={{ animationDelay: '4s' }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[9px] font-bold tracking-wider text-slate-500 uppercase flex items-center gap-1">
                <Terminal size={10} className="text-pink-500" />
                Tokens
              </span>
            </div>
            <div className="flex items-center gap-2 justify-between">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-cyan-500 border border-cyan-400/20 shadow-md shadow-cyan-500/20" />
                <span className="text-[9px] text-slate-500 font-mono mt-1">#06B6D4</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-indigo-600 border border-indigo-500/20 shadow-md shadow-indigo-600/20" />
                <span className="text-[9px] text-slate-500 font-mono mt-1">#6366F1</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-pink-500 border border-pink-400/20 shadow-md shadow-pink-500/20" />
                <span className="text-[9px] text-slate-500 font-mono mt-1">#EC4899</span>
              </div>
            </div>
          </motion.div> */}

          {/* Floating Figma Icon Node */}
          {/* <div className="absolute top-10 right-1/4 w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer animate-pulse">
            <svg width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 0C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10H10V5C10 2.24 7.76 0 5 0Z" fill="#F24E1E" />
              <path d="M5 10C2.24 10 0 12.24 0 15C0 17.76 2.24 20 5 20H10V10H5Z" fill="#A259FF" />
              <path d="M5 20C2.24 20 0 22.24 0 25C0 27.76 2.24 30 5 30C7.76 30 10 27.76 10 25V20H5Z" fill="#1ABCFE" />
              <path d="M15 10C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0C12.24 0 10 2.24 10 5V10H15Z" fill="#0ACF83" />
              <path d="M15 20C17.76 20 20 17.76 20 15C20 12.24 17.76 10 15 10C12.24 10 10 12.24 10 15V20H15Z" fill="#FF7262" />
            </svg>
          </div> */}
        </div>
      </div>
    </section>
  );
}
