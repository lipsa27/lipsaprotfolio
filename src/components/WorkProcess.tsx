'use client';

import { motion } from 'framer-motion';
import { Search, BarChart3, GitFork, Compass, Grid, Palette, Cpu, CheckCircle2, Terminal } from 'lucide-react';

const processSteps = [
  {
    step: '01',
    title: 'Research',
    subtitle: 'Understanding the Domain',
    description:
      'Deep dive into the problem space, conducting user interviews, surveys, and gathering analytics to understand pain points, objectives, and market trends.',
    color: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/5',
    icon: Search,
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full stroke-cyan-500/80 fill-none stroke-2">
        <circle cx="50" cy="50" r="30" />
        <circle cx="50" cy="50" r="10" />
        <line x1="71" y1="71" x2="90" y2="90" strokeWidth="4" />
        <path d="M35 50 a15 15 0 0 1 30 0" strokeDasharray="3" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Analysis',
    subtitle: 'Synthesizing Findings',
    description:
      'Translating research into personas, empathy maps, and competitor grids to define clear UX requirements and actionable product directions.',
    color: 'text-indigo-400 border-indigo-500/20 bg-indigo-500/5',
    icon: BarChart3,
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full stroke-indigo-500/80 fill-none stroke-2">
        <rect x="20" y="20" width="60" height="60" rx="5" />
        <line x1="35" y1="40" x2="65" y2="40" />
        <line x1="35" y1="50" x2="55" y2="50" />
        <line x1="35" y1="60" x2="45" y2="60" />
        <circle cx="70" cy="65" r="8" className="fill-indigo-500/10" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'User Flow',
    subtitle: 'Structuring Interactions',
    description:
      'Mapping core navigation pathways and user flows using FigJam and Flowstep AI to verify seamless, friction-free paths before wireframing.',
    color: 'text-pink-400 border-pink-500/20 bg-pink-500/5',
    icon: GitFork,
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full stroke-pink-500/80 fill-none stroke-2">
        <circle cx="25" cy="50" r="8" className="fill-pink-500/10" />
        <circle cx="75" cy="30" r="8" className="fill-pink-500/10" />
        <circle cx="75" cy="70" r="8" className="fill-pink-500/10" />
        <path d="M33 50 h15 M48 50 v-20 h19 M48 50 v 20 h19" strokeWidth="2" />
        <polygon points="65,27 70,30 65,33" className="fill-pink-500" />
        <polygon points="65,67 70,70 65,73" className="fill-pink-500" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Wireframe',
    subtitle: 'Establishing Architecture',
    description:
      'Building low-fidelity to high-fidelity wireframe layouts using Google Stitch, focusing on content hierarchy, accessibility ratios, and screen spatial layouts.',
    color: 'text-purple-400 border-purple-500/20 bg-purple-500/5',
    icon: Compass,
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full stroke-purple-500/80 fill-none stroke-2">
        <rect x="15" y="15" width="70" height="70" rx="4" />
        <line x1="15" y1="35" x2="85" y2="35" />
        <rect x="25" y="45" width="20" height="30" />
        <rect x="55" y="45" width="20" height="12" />
        <line x1="55" y1="68" x2="75" y2="68" />
        <line x1="55" y1="74" x2="65" y2="74" />
      </svg>
    ),
  },
  {
    step: '05',
    title: 'Design System',
    subtitle: 'Creating Component Libraries',
    description:
      'Crafting global typography scales, semantic color libraries, dynamic interactive inputs, and responsive card systems using token-based foundations.',
    color: 'text-violet-400 border-violet-500/20 bg-violet-500/5',
    icon: Grid,
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full stroke-violet-500/80 fill-none stroke-2">
        <rect x="20" y="20" width="25" height="25" rx="3" className="fill-violet-500/10" />
        <rect x="55" y="20" width="25" height="25" rx="3" />
        <rect x="20" y="55" width="25" height="25" rx="3" />
        <rect x="55" y="55" width="25" height="25" rx="3" className="fill-violet-500/10" />
      </svg>
    ),
  },
  {
    step: '06',
    title: 'High Fidelity',
    subtitle: 'Polishing the Interface',
    description:
      'Applying styles, harmonic brand colors, high-quality images, and refined UI components to translate dry wireframes into beautiful visual realities.',
    color: 'text-amber-400 border-amber-500/20 bg-amber-500/5',
    icon: Palette,
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full stroke-amber-500/80 fill-none stroke-2">
        <path d="M50 15 C30 15 15 30 15 50 C15 70 30 85 50 85 C55 85 60 81 60 76 C60 73 58 71 58 68 C58 63 61 60 66 60 H74 C83 60 90 51 90 40 C90 26 72 15 50 15 Z" />
        <circle cx="35" cy="35" r="5" fill="#f59e0b" />
        <circle cx="50" cy="30" r="5" fill="#10b981" />
        <circle cx="65" cy="35" r="5" fill="#3b82f6" />
        <circle cx="35" cy="55" r="5" fill="#ec4899" />
      </svg>
    ),
  },
  {
    step: '07',
    title: 'Prototype',
    subtitle: 'Animating Experiences',
    description:
      'Linking screens using advanced Figma prototyping, setting up micro-interactions, smart-animating states, and testing flow logic transitions.',
    color: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5',
    icon: Cpu,
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full stroke-emerald-500/80 fill-none stroke-2">
        <polygon points="40,25 70,50 40,75" className="fill-emerald-500/10" />
        <circle cx="50" cy="50" r="40" strokeWidth="2" strokeDasharray="4" />
      </svg>
    ),
  },
  {
    step: '08',
    title: 'Usability Testing',
    subtitle: 'Validating Decisions',
    description:
      'Conducting remote audits, user interviews, and observing task completion logs to discover friction, validate readability, and record accessibility.',
    color: 'text-blue-400 border-blue-500/20 bg-blue-500/5',
    icon: CheckCircle2,
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full stroke-blue-500/80 fill-none stroke-2">
        <circle cx="50" cy="50" r="35" />
        <path d="M35 52 L45 62 L65 40" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    step: '09',
    title: 'Handoff',
    subtitle: 'Connecting with Devs',
    description:
      'Translating variables directly to tokens, annotating layouts, setting up asset exports, and pairing with developers using Cursor for high-fidelity code execution.',
    color: 'text-teal-400 border-teal-500/20 bg-teal-500/5',
    icon: Terminal,
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full stroke-teal-500/80 fill-none stroke-2">
        <polyline points="25,35 10,50 25,65" strokeWidth="3" />
        <polyline points="75,35 90,50 75,65" strokeWidth="3" />
        <line x1="58" y1="25" x2="42" y2="75" strokeWidth="3" />
      </svg>
    ),
  },
];

export default function WorkProcess() {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-900">
      {/* Background patterns */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-white">
            HOW I WORK
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-indigo-600 mt-4 rounded-full" />
          <p className="text-slate-400 text-sm max-w-lg mt-6">
            A comprehensive, end-to-end design pipeline combining analytical research, design libraries, and modern AI acceleration.
          </p>
        </div>

        {/* Vertical Alternating Timeline */}
        <div className="relative mt-16">
          
          {/* Central Connecting Line — hidden on mobile, shown lg+ */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 -translate-x-1/2 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500 via-indigo-500 to-teal-400 opacity-60 rounded-full" />
          </div>

          {/* Mobile vertical line */}
          <div className="lg:hidden absolute left-5 top-0 bottom-0 w-[2px] bg-slate-800 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500 via-indigo-500 to-teal-400 opacity-60 rounded-full" />
          </div>

          <div className="space-y-16">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.step}
                  className={`relative flex flex-col lg:flex-row items-start lg:items-center w-full ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Left/Right Text Box */}
                  <div className="w-full lg:w-1/2 pl-12 lg:pl-0 lg:px-12 flex justify-start lg:justify-end">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.6 }}
                      className={`w-full max-w-md glass-panel p-5 sm:p-8 rounded-3xl border ${step.color} relative hover:shadow-xl transition-all`}
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-2xl sm:text-3xl font-black font-mono leading-none tracking-tight opacity-20">
                          {step.step}
                        </span>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold font-display text-white">
                            {step.title}
                          </h3>
                          <p className="text-xs text-slate-400 font-semibold font-mono">
                            {step.subtitle}
                          </p>
                        </div>
                      </div>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Central Node Dot */}
                  <div className="absolute left-5 lg:left-1/2 top-6 w-8 h-8 rounded-full bg-slate-950 border-2 border-slate-800 flex items-center justify-center -translate-x-1/2 z-10 shadow-lg shadow-black">
                    <Icon size={14} className="text-cyan-400" />
                  </div>

                  {/* Staggered Graphic Column — desktop only */}
                  <div className="hidden lg:flex w-full lg:w-1/2 lg:px-12 mt-6 lg:mt-0 justify-start">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-slate-900/40 border border-slate-800 flex items-center justify-center p-6 shadow shadow-black/20 hover:scale-105 transition-transform"
                    >
                      {step.svg}
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
