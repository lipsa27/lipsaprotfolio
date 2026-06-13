'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowDown, Search, GitFork, Compass, Palette, Terminal, Zap } from 'lucide-react';

const workflowNodes = [
  {
    phase: 'Research',
    tool: 'ChatGPT',
    desc: 'Automates user persona outlines, generates domain survey questionnaires, and structures telemetry analysis plans.',
    icon: Search,
    color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400',
    toolColor: 'text-emerald-400',
  },
  {
    phase: 'User Flow',
    tool: 'Flowstep AI',
    desc: 'Translates functional prompt descriptions into dynamic interaction map steps, revealing edge cases instantly.',
    icon: GitFork,
    color: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-400',
    toolColor: 'text-cyan-400',
  },
  {
    phase: 'Wireframe',
    tool: 'Google Stitch',
    desc: 'Scaffolds low-fi layouts and spatial grids from flow models, establishing base column skeletons rapidly.',
    icon: Compass,
    color: 'from-purple-500/20 to-indigo-500/20 border-purple-500/30 text-purple-400',
    toolColor: 'text-purple-400',
  },
  {
    phase: 'UI Design',
    tool: 'Figma AI',
    desc: 'Generates color palettes, automates styling variations, and establishes token references across design libraries.',
    icon: Palette,
    color: 'from-pink-500/20 to-rose-500/20 border-pink-500/30 text-pink-400',
    toolColor: 'text-pink-400',
  },
  {
    phase: 'Dev Handoff',
    tool: 'Cursor',
    desc: 'Translates high-fidelity design schemas directly into responsive React code, automating component compilation.',
    icon: Terminal,
    color: 'from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400',
    toolColor: 'text-amber-400',
  },
];

export default function AIWorkflowSection() {
  return (
    <section id="ai-workflow" className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-900">
      {/* Background visual grids */}
      <div className="absolute inset-y-0 right-0 w-1/4 grid-bg opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2 flex items-center gap-1.5">
            <Sparkles size={12} className="animate-pulse" />
            AI Pipeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-white">
            HOW I DESIGN FASTER WITH AI
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-indigo-600 mt-4 rounded-full" />
          <p className="text-slate-400 text-sm max-w-lg mt-6">
            Connecting modern artificial intelligence models with structural design frameworks to multiply execution speed while preserving design quality.
          </p>
        </div>

        {/* Node Graph Container */}
        <div className="relative max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Main animated flowchart connector SVG (Behind nodes) */}
          <div className="absolute inset-y-0 w-2 z-0 hidden lg:block">
            <svg className="w-full h-full stroke-slate-800 fill-none stroke-2 absolute left-1/2 -translate-x-1/2">
              <line x1="4" y1="0" x2="4" y2="1000" className="process-dash" stroke="#1e293b" />
              <line x1="4" y1="0" x2="4" y2="1000" className="process-dash" stroke="url(#gradient-line)" />
              
              <defs>
                <linearGradient id="gradient-line" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="25%" stopColor="#06b6d4" />
                  <stop offset="50%" stopColor="#6366f1" />
                  <stop offset="75%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Node List */}
          <div className="w-full space-y-12 z-10 relative">
            {workflowNodes.map((node, idx) => {
              const Icon = node.icon;
              const isEven = idx % 2 === 0;

              return (
                <div key={node.phase} className="flex flex-col items-center">
                  
                  {/* Alternating layout wrappers */}
                  <div className={`flex flex-col lg:flex-row items-center w-full justify-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}>
                    
                    {/* Node Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.5 }}
                      className={`w-full max-w-md p-6 rounded-3xl border bg-gradient-to-br ${node.color} glass-panel relative group`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
                            <Icon size={16} />
                          </div>
                          <div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-mono">PHASE 0{idx + 1}</span>
                            <h3 className="text-base font-bold text-white font-display uppercase tracking-wider">{node.phase}</h3>
                          </div>
                        </div>
                        <span className={`text-xs font-bold font-mono px-3 py-1 rounded bg-slate-950/80 border border-slate-800 ${node.toolColor}`}>
                          {node.tool}
                        </span>
                      </div>
                      
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {node.desc}
                      </p>

                      {/* Small visual connection indicator on card side for desktop */}
                      <div className={`absolute top-1/2 w-4 h-0.5 bg-slate-800 hidden lg:block ${
                        isEven ? 'right-full border-t border-slate-700/50' : 'left-full border-t border-slate-700/50'
                      }`} />
                    </motion.div>

                  </div>

                  {/* Pulsing arrow for mobile users between cards */}
                  {idx < workflowNodes.length - 1 && (
                    <div className="my-4 lg:hidden p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-500 animate-bounce">
                      <ArrowDown size={14} />
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
