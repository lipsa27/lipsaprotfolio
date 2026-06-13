'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, ShieldCheck, Flame, Compass, RefreshCcw } from 'lucide-react';

export default function UXAuditSection() {
  const [sliderPos, setSliderPos] = useState(50); // 0 to 100
  const [auditCase, setAuditCase] = useState<'transcriber' | 'vendor'>('transcriber');

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  const currentAudit = {
    transcriber: {
      title: 'Transcriber Workspace Redesign',
      scoreBefore: 45,
      scoreAfter: 94,
      problems: [
        'Lack of typography hierarchy; transcript lines bled into header cells.',
        'Audio player seek controls were disconnected from transcripts, forcing users to click timeline seek bar blindly.',
      ],
      accessibility: [
        'Contrast ratio of audio waveforms was 2.1:1, failing WCAG AA (requires 4.5:1).',
        'No focus indicators on transcript editing fields during keyboard tab flows.',
      ],
      solutions: [
        'Synced scrolling engine highlighting active words in real-time.',
        'Established 4.8:1 contrast waveforms and added keyboard tab focus rings.',
      ],
    },
    vendor: {
      title: 'Logistics Fleet Portal Redesign',
      scoreBefore: 38,
      scoreAfter: 91,
      problems: [
        'Alert cards had no priority indexing; minor updates cluttered urgent delivery failures.',
        'No interactive maps; dispatchers cross-referenced spreadsheet cells with Google Maps tabs.',
      ],
      accessibility: [
        'Warning alerts relied purely on red color without icons, failing accessibility guidelines for colorblindness.',
        'Touch targets for fleet pins on mobile maps were 24px, violating the 44px minimum.',
      ],
      solutions: [
        'Implemented alert-priority queues (Urgent, Warning, Normal) with clear icons.',
        'Integrated custom map canvas and updated map pin target size to 48px.',
      ],
    },
  }[auditCase];

  return (
    <section id="ux-audit" className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-900">
      {/* Background gradients */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
              Performance Redlines
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-white">
              UX REDESIGN AUDIT
            </h2>
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-indigo-600 mt-4 rounded-full" />
            <p className="text-slate-400 text-sm max-w-lg mt-6">
              Analyzing critical usability blockers and accessibility failures to engineer high-fidelity visual solutions.
            </p>
          </div>

          {/* Redesign select selector */}
          <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setAuditCase('transcriber')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                auditCase === 'transcriber' ? 'bg-slate-950 text-cyan-400 border border-slate-800' : 'text-slate-500 hover:text-slate-350'
              }`}
            >
              Transcriber App
            </button>
            <button
              onClick={() => setAuditCase('vendor')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                auditCase === 'vendor' ? 'bg-slate-950 text-cyan-400 border border-slate-800' : 'text-slate-500 hover:text-slate-350'
              }`}
            >
              Logistics Portal
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Interactive Slider Column (Col span 7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="relative h-96 w-full rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 select-none">
              
              {/* After: Redesigned (Bottom Layer) */}
              <div className="absolute inset-0 bg-slate-900 p-8 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-wider text-cyan-400 uppercase font-mono">REDESIGN AFTER</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow shadow-cyan-500/50" />
                </div>
                
                {/* Mock UI components */}
                <div className="space-y-4 max-w-sm mt-4">
                  <div className="p-4 rounded-2xl glass-panel border-cyan-500/25">
                    <span className="text-[9px] font-bold tracking-wider text-slate-500 uppercase font-mono">WORKSPACE_01.MP3</span>
                    <h4 className="text-sm font-bold text-white mt-1">Interactive Synchronized Player</h4>
                    <div className="flex items-center gap-3 mt-3">
                      <div className="w-8 h-8 rounded-full bg-cyan-500/15 flex items-center justify-center text-cyan-400 font-black text-xs">
                        ▶
                      </div>
                      <div className="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500" style={{ width: '60%' }} />
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-slate-950/40 rounded-xl border border-slate-850">
                    <p className="text-xs text-slate-300">
                      The user click on <span className="bg-cyan-500/20 text-cyan-300 font-bold border-b border-cyan-500 px-1">this timeline word</span> selects that exact timestamp.
                    </p>
                  </div>
                </div>

                <div className="text-[10px] text-slate-500 font-mono mt-4">98% Accessibility Index</div>
              </div>

              {/* Before: Original (Top Layer - Clipped) */}
              <div
                className="absolute inset-y-0 left-0 right-0 bg-slate-950 border-r border-slate-700/50 z-10 overflow-hidden"
                style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
              >
                <div className="absolute inset-0 w-full h-full p-8 bg-zinc-900 flex flex-col justify-between text-zinc-500 font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-wider uppercase">ORIGINAL BEFORE</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                  </div>
                  
                  {/* Mock dry original UI */}
                  <div className="space-y-4 max-w-sm mt-4 opacity-40">
                    <div className="p-4 rounded-xl border border-zinc-700 bg-zinc-950">
                      <span className="text-[9px] uppercase">TRACKFILE</span>
                      <h4 className="text-xs font-bold text-zinc-300 mt-1">Audio Player</h4>
                      <div className="h-1 bg-zinc-800 mt-3" />
                    </div>
                    <div className="p-3 rounded-lg border border-zinc-700 bg-zinc-950">
                      <p className="text-xs">
                        Linear transcription block with missing seek tags or player links.
                      </p>
                    </div>
                  </div>

                  <div className="text-[10px]">Uncertified Accessibility Score</div>
                </div>
              </div>

              {/* Slider Controller Range Input */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={handleSliderChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                aria-label="Drag vertical divider to compare before and after redesigns"
              />

              {/* Slider visible divider handle */}
              <div
                className="absolute inset-y-0 w-0.5 bg-cyan-400 z-15 pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 left-1/2 w-6 h-6 rounded-full bg-cyan-400 border border-slate-900 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 shadow shadow-cyan-400/50 text-slate-950 text-xs font-bold">
                  ↔
                </div>
              </div>

            </div>
          </div>

          {/* Right: Score and Issues Column (Col span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Score comparison card */}
            <div className="glass-panel p-6 rounded-3xl flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono block mb-1">
                  Improvement Index
                </span>
                <h4 className="text-base font-bold text-slate-100">{currentAudit.title}</h4>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-bold font-mono text-slate-500">BEFORE</span>
                  <span className="text-xl font-bold font-mono text-slate-400">{currentAudit.scoreBefore}%</span>
                </div>
                <span className="text-slate-600 text-lg">➔</span>
                <div className="flex flex-col items-center bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-xl shadow shadow-cyan-500/5">
                  <span className="text-[10px] font-bold font-mono text-cyan-400">AFTER</span>
                  <span className="text-2xl font-black font-mono text-cyan-300">{currentAudit.scoreAfter}%</span>
                </div>
              </div>
            </div>

            {/* UX Issues Card */}
            <div className="glass-panel p-6 rounded-3xl space-y-4">
              <h4 className="text-xs font-bold font-display text-rose-400 uppercase tracking-widest flex items-center gap-2">
                <AlertTriangle size={14} />
                Identified UX Blockers
              </h4>
              <ul className="space-y-3">
                {currentAudit.problems.map((prob, i) => (
                  <li key={i} className="text-xs text-slate-400 leading-relaxed flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 flex-shrink-0" />
                    <span>{prob}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Accessibility / Solutions Card */}
            <div className="glass-panel p-6 rounded-3xl space-y-4">
              <h4 className="text-xs font-bold font-display text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                <ShieldCheck size={14} />
                Accessibility Solutions
              </h4>
              <ul className="space-y-3">
                {currentAudit.solutions.map((sol, i) => (
                  <li key={i} className="text-xs text-slate-300 leading-relaxed flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
