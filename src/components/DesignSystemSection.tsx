'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Info, RefreshCw, Layout, Type, Palette, Compass, Move } from 'lucide-react';

const colors = [
  { name: 'Bg Primary', token: 'var(--bg-primary)', hex: '#09090D', desc: 'Main window background color.' },
  { name: 'Bg Secondary', token: 'var(--bg-secondary)', hex: '#0F0F15', desc: 'Panels and container card backgrounds.' },
  { name: 'Brand Cyan', token: 'var(--color-brand-cyan)', hex: '#06B6D4', desc: 'Primary interactive links, focus states, and primary glows.' },
  { name: 'Brand Indigo', token: 'var(--color-brand-indigo)', hex: '#6366F1', desc: 'Accent borders, secondary buttons, and gradients.' },
  { name: 'Brand Pink', token: 'var(--color-brand-pink)', hex: '#EC4899', desc: 'Alert badges and notification glows.' },
  { name: 'Text Primary', token: 'var(--text-primary)', hex: '#F8FAFC', desc: 'Main readable title text.' },
];

const spacingTokens = [
  { name: 'space-xs', value: '4px', class: 'h-1' },
  { name: 'space-sm', value: '8px', class: 'h-2' },
  { name: 'space-md', value: '16px', class: 'h-4' },
  { name: 'space-lg', value: '24px', class: 'h-6' },
  { name: 'space-xl', value: '32px', class: 'h-8' },
  { name: 'space-2xl', value: '64px', class: 'h-16' },
];

const systemTokens = {
  theme: 'dark',
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  typography: {
    fontDisplay: 'var(--font-syne)',
    fontBody: 'var(--font-inter)',
    letterSpacing: '-0.02em',
  },
  shadows: {
    card: '0 8px 32px 0 rgba(0, 0, 0, 0.15)',
    active: '0 12px 40px 0 rgba(99, 102, 241, 0.1)',
  },
};

export default function DesignSystemSection() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [activePlaygroundTab, setActivePlaygroundTab] = useState<'colors' | 'type' | 'buttons' | 'spacing'>('colors');
  const [buttonLoading, setButtonLoading] = useState(false);
  const [inputText, setInputText] = useState('');

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <section id="design-system" className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-900">
      {/* Background gradients */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            Standards & Atoms
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-white">
            DESIGN SYSTEM
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-indigo-600 mt-4 rounded-full" />
          <p className="text-slate-400 text-sm max-w-lg mt-6">
            A comprehensive visual and interactive guideline tracking component states, spacing frameworks, and custom token foundations.
          </p>
        </div>

        {/* Workspace Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Navigation Tabs (Col span 3) */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col flex-wrap gap-2.5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 pl-3 w-full hidden lg:block">
              Design Categories
            </h3>
            {[
              { id: 'colors', label: 'Color Swatches', icon: Palette },
              { id: 'type', label: 'Typography Scale', icon: Type },
              { id: 'buttons', label: 'Component States', icon: Layout },
              { id: 'spacing', label: 'Spacing system', icon: Move },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activePlaygroundTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`ds-tab-${tab.id}`}
                  onClick={() => setActivePlaygroundTab(tab.id as any)}
                  className={`flex-1 min-w-[140px] lg:w-full flex items-center justify-center lg:justify-start gap-3 px-4 py-3 rounded-xl border text-center lg:text-left text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'bg-slate-900 border-cyan-500/30 text-cyan-400 shadow-md shadow-cyan-950/20'
                      : 'bg-transparent border-transparent text-slate-500 hover:text-slate-300 hover:bg-slate-900/30'
                  }`}
                >
                  <Icon size={14} className={isActive ? 'text-cyan-400' : 'text-slate-500'} />
                  {tab.label}
                </button>
              );
            })}

            <div className="mt-8 border-t border-slate-900 pt-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 pl-3 flex items-center gap-1.5">
                <Compass size={12} className="text-indigo-400" />
                Global Tokens
              </h4>
              <div className="bg-slate-950 border border-slate-900 rounded-2xl p-4 font-mono text-[10px] text-slate-400 overflow-x-auto select-none">
                <pre>{JSON.stringify(systemTokens, null, 2)}</pre>
              </div>
            </div>
          </div>

          {/* Right Interactive Viewport (Col span 9) */}
          <div className="lg:col-span-9 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[480px]">
            
            <AnimatePresence mode="wait">
              {/* Colors panel */}
              {activePlaygroundTab === 'colors' && (
                <motion.div
                  key="colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-2 mb-4 border-b border-slate-900 pb-3">
                    <Palette size={16} className="text-cyan-400" />
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Semantic Colors</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    {colors.map((color) => (
                      <div
                        key={color.name}
                        className="bg-slate-950/60 border border-slate-850 p-4 rounded-2xl hover:border-slate-800 transition-all flex flex-col justify-between group"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-bold text-slate-200">{color.name}</span>
                            <button
                              onClick={() => copyToClipboard(color.hex)}
                              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-500 hover:text-white transition-colors"
                              title="Copy hex code"
                            >
                              {copiedColor === color.hex ? (
                                <Check size={12} className="text-emerald-500" />
                              ) : (
                                <Copy size={12} />
                              )}
                            </button>
                          </div>
                          
                          <div
                            className="h-10 rounded-xl mb-3 shadow-inner border border-white/5"
                            style={{ backgroundColor: color.token }}
                          />
                        </div>
                        
                        <div className="space-y-1 text-[10px] font-mono text-slate-400">
                          <p><strong>Token:</strong> {color.token}</p>
                          <p><strong>Hex:</strong> {color.hex}</p>
                          <p className="text-slate-500 font-sans mt-2">{color.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Typography panel */}
              {activePlaygroundTab === 'type' && (
                <motion.div
                  key="type"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-2 mb-4 border-b border-slate-900 pb-3">
                    <Type size={16} className="text-cyan-400" />
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Scale Specifications</h4>
                  </div>

                  <div className="space-y-6">
                    <div className="p-4 bg-slate-950/40 border border-slate-850 rounded-xl">
                      <span className="text-[10px] text-slate-500 font-mono block mb-1">font-display / size-3xl (30px / 36px)</span>
                      <h1 className="text-3xl font-display font-black text-white">
                        Futuristic Heading Bold
                      </h1>
                    </div>

                    <div className="p-4 bg-slate-950/40 border border-slate-850 rounded-xl">
                      <span className="text-[10px] text-slate-500 font-mono block mb-1">font-sans / size-base (16px / 24px)</span>
                      <p className="text-base text-slate-300 font-sans leading-relaxed">
                        Design systems represent a single source of truth, organizing typography, layouts, and interactive modules into standard variable tokens to improve design and engineering coordination.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-950/40 border border-slate-850 rounded-xl">
                      <span className="text-[10px] text-slate-500 font-mono block mb-1">font-mono / size-xs (12px)</span>
                      <p className="text-xs font-mono text-cyan-400 leading-none">
                        const themeTokens = &#123; colorPrimary: '#06b6d4' &#125;;
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Component States panel */}
              {activePlaygroundTab === 'buttons' && (
                <motion.div
                  key="buttons"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-2 mb-4 border-b border-slate-900 pb-3">
                    <Layout size={16} className="text-cyan-400" />
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Button & Input States</h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Buttons Column */}
                    <div className="space-y-4">
                      <span className="text-xs font-bold tracking-wider text-slate-500 block uppercase">Buttons</span>
                      
                      <div className="flex flex-col gap-3">
                        <button className="py-2.5 px-5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-xs font-bold text-white shadow shadow-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                          Primary Standard
                        </button>
                        
                        <button
                          onClick={() => {
                            setButtonLoading(true);
                            setTimeout(() => setButtonLoading(false), 2000);
                          }}
                          className="py-2.5 px-5 rounded-xl border border-slate-800 text-xs font-bold text-slate-200 hover:bg-slate-900 transition-colors flex items-center justify-center gap-2"
                        >
                          {buttonLoading ? (
                            <RefreshCw size={12} className="animate-spin text-cyan-400" />
                          ) : (
                            <span>Interactive Loading Demo</span>
                          )}
                        </button>

                        <button disabled className="py-2.5 px-5 rounded-xl bg-slate-900 border border-slate-950 text-xs font-bold text-slate-600 cursor-not-allowed select-none">
                          Disabled Component
                        </button>
                      </div>
                    </div>

                    {/* Inputs Column */}
                    <div className="space-y-4">
                      <span className="text-xs font-bold tracking-wider text-slate-500 block uppercase">Input Fields</span>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="text-[10px] font-bold text-slate-500 block mb-1.5 uppercase font-mono">Interactive Text Input</label>
                          <input
                            type="text"
                            placeholder="Type here..."
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            className="w-full py-2.5 px-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 transition-all placeholder:text-slate-600"
                          />
                        </div>

                        <div>
                          <label className="text-[10px] font-bold text-rose-500 block mb-1.5 uppercase font-mono">Error State Input</label>
                          <input
                            type="text"
                            disabled
                            placeholder="Invalid entries..."
                            className="w-full py-2.5 px-4 rounded-xl bg-slate-950 border border-rose-500/30 text-xs text-slate-500 focus:outline-none cursor-not-allowed"
                          />
                          <span className="text-[9px] text-rose-500 font-medium mt-1.5 block">SLA token reference not found.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Spacing panel */}
              {activePlaygroundTab === 'spacing' && (
                <motion.div
                  key="spacing"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-2 mb-4 border-b border-slate-900 pb-3">
                    <Move size={16} className="text-cyan-400" />
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Spacing Framework</h4>
                  </div>

                  <div className="space-y-4">
                    {spacingTokens.map((token) => (
                      <div key={token.name} className="flex items-center justify-between gap-4 p-3 bg-slate-950/40 border border-slate-850 rounded-xl">
                        <div className="w-24 flex-shrink-0">
                          <span className="text-xs font-bold text-slate-200 block">{token.name}</span>
                          <span className="text-[10px] text-slate-500 font-mono">{token.value}</span>
                        </div>
                        
                        <div className="flex-1 flex items-center bg-slate-950 rounded-lg p-1 overflow-hidden border border-slate-900">
                          <div className={`spacing-stripes rounded ${token.class} w-full`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom panel footer */}
            <div className="mt-8 border-t border-slate-900 pt-4 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1.5">
                <Info size={12} className="text-cyan-400" />
                Playground interactive sandbox
              </span>
              <span>v1.0.4-tokens</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
