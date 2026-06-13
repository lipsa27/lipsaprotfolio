'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Compass, Users, GitFork, Frown, Landmark, Check, AlertCircle } from 'lucide-react';

const competitorFeatures = [
  { feature: 'Multi-speaker AI transcripts', compA: 'Basic text', compB: 'No speech sync', ours: 'Dynamic audio-timestamp sync' },
  { feature: 'Real-time route latency alerts', compA: 'SMS updates only', compB: 'Static maps', ours: 'Predictive alert vectors on map' },
  { feature: 'Visual HR matrices', compA: 'Tabular sheets', compB: 'Basic bar charts', ours: 'Interactive radar radar charts' },
  { feature: 'Accessibility compliance', compA: 'Varies', compB: 'Failed contrast tests', ours: '98% WCAG 2.1 AA compliant' },
];

const empathyQuadrants = [
  {
    quadrant: 'Says',
    quote: '"I waste too much time scrolling back and forth on audio files trying to find where they said this specific word."',
    desc: 'Verbatim quotes from interviews.',
  },
  {
    quadrant: 'Thinks',
    quote: '"The system is tracking routes but it doesn\'t tell me *why* a shipment is delayed or how it affects my SLA."',
    desc: 'Implicit feelings and unvoiced doubts.',
  },
  {
    quadrant: 'Does',
    quote: 'Exports transcripts to external documents to highlight, and calls truck drivers manually to check delays.',
    desc: 'Observed workarounds and user tasks.',
  },
  {
    quadrant: 'Feels',
    quote: 'Frustrated by layout clutter, anxious about meeting delivery timelines, and overwhelmed by high-density tabular sheets.',
    desc: 'Emotional states and stressors.',
  },
];

const journeySteps = [
  { stage: 'Discover', feeling: 'Neutral', userNeed: 'Understand value proposition', pain: 'Cluttered homepages', emotionScore: 60 },
  { stage: 'Upload File', feeling: 'Anxious', userNeed: 'Clear progress indicators', pain: 'No upload speed indicator', emotionScore: 40 },
  { stage: 'Processing', feeling: 'Frustrated', userNeed: 'Accurate time prediction', pain: 'Sudden timeouts without saving', emotionScore: 25 },
  { stage: 'Workspace Edit', feeling: 'Relieved', userNeed: 'Sync seeks and easy edits', pain: 'Rigid text fields', emotionScore: 85 },
];

export default function UXResearchSection() {
  const [activeResearchTab, setActiveResearchTab] = useState<'competitors' | 'empathy' | 'journey' | 'ia'>('competitors');

  return (
    <section id="ux-research" className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-900">
      {/* Background visual graphics */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
              Discovery & Syntheses
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-white">
              UX RESEARCH
            </h2>
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-indigo-600 mt-4 rounded-full" />
          </div>

          {/* Nav pills */}
          <div className="flex flex-wrap gap-2 p-1 bg-slate-900 border border-slate-800 rounded-2xl w-fit">
            {[
              { id: 'competitors', label: 'Competitors', icon: Landmark },
              { id: 'empathy', label: 'Empathy Map', icon: Users },
              { id: 'journey', label: 'Journey Map', icon: Compass },
              { id: 'ia', label: 'Information Architecture', icon: GitFork },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeResearchTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`research-tab-${tab.id}`}
                  onClick={() => setActiveResearchTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'bg-slate-950 border border-slate-800 text-cyan-400'
                      : 'text-slate-500 hover:text-slate-350'
                  }`}
                >
                  <Icon size={12} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Display Panel */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 min-h-[400px]">
          <AnimatePresence mode="wait">
            
            {/* Competitor Analysis Tab */}
            {activeResearchTab === 'competitors' && (
              <motion.div
                key="competitors"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-2 mb-4 border-b border-slate-900 pb-3">
                  <Landmark size={16} className="text-cyan-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Market Feature Comparison</h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-slate-800">
                        <th className="py-4 px-4 font-bold text-slate-400 font-mono uppercase tracking-wider">Target Feature</th>
                        <th className="py-4 px-4 font-bold text-slate-500">Competitor A</th>
                        <th className="py-4 px-4 font-bold text-slate-500">Competitor B</th>
                        <th className="py-4 px-4 font-bold text-cyan-400 bg-cyan-500/5 rounded-t-xl">Our Redesign</th>
                      </tr>
                    </thead>
                    <tbody>
                      {competitorFeatures.map((row, i) => (
                        <tr key={i} className="border-b border-slate-900 hover:bg-slate-900/10">
                          <td className="py-4 px-4 font-bold text-slate-200">{row.feature}</td>
                          <td className="py-4 px-4 text-slate-500">{row.compA}</td>
                          <td className="py-4 px-4 text-slate-500">{row.compB}</td>
                          <td className="py-4 px-4 text-cyan-300 bg-cyan-500/5 font-semibold">{row.ours}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {/* Empathy Map Tab */}
            {activeResearchTab === 'empathy' && (
              <motion.div
                key="empathy"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-2 mb-4 border-b border-slate-900 pb-3">
                  <Users size={16} className="text-cyan-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">User Empathy Grid</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {empathyQuadrants.map((quad) => (
                    <div
                      key={quad.quadrant}
                      className="p-5 bg-slate-950/60 border border-slate-850 rounded-2xl flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 font-mono mb-2 block">
                          {quad.quadrant}
                        </span>
                        <p className="text-xs sm:text-sm italic text-slate-200 leading-relaxed mb-4">
                          {quad.quote}
                        </p>
                      </div>
                      <span className="text-[10px] text-slate-500 font-sans border-t border-slate-900 pt-2 block">
                        {quad.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* User Journey Map Tab */}
            {activeResearchTab === 'journey' && (
              <motion.div
                key="journey"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-2 mb-4 border-b border-slate-900 pb-3">
                  <Compass size={16} className="text-cyan-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">User Flow Emotion Mapping</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                  {journeySteps.map((step, idx) => (
                    <div
                      key={step.stage}
                      className="p-5 bg-slate-950/60 border border-slate-850 rounded-2xl space-y-4 relative"
                    >
                      {/* Step Number */}
                      <span className="absolute top-4 right-4 text-2xl font-black font-mono text-slate-800">
                        0{idx + 1}
                      </span>

                      <div>
                        <span className="text-xs font-bold text-white block mb-1 font-display">
                          {step.stage}
                        </span>
                        <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
                          step.feeling === 'Relieved' ? 'bg-emerald-500/10 text-emerald-400' :
                          step.feeling === 'Neutral' ? 'bg-slate-800 text-slate-400' :
                          'bg-rose-500/10 text-rose-400'
                        }`}>
                          {step.feeling}
                        </span>
                      </div>

                      <div className="space-y-1.5 text-xs text-slate-400 leading-relaxed">
                        <p><strong>Goal:</strong> {step.userNeed}</p>
                        <p><strong>Pain:</strong> {step.pain}</p>
                      </div>

                      {/* Spark line rating */}
                      <div className="border-t border-slate-900 pt-3">
                        <div className="flex justify-between text-[10px] font-mono text-slate-500 mb-1">
                          <span>Satisfaction:</span>
                          <span>{step.emotionScore}%</span>
                        </div>
                        <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              step.emotionScore > 70 ? 'bg-emerald-500' :
                              step.emotionScore > 40 ? 'bg-cyan-500' : 'bg-rose-500'
                            }`}
                            style={{ width: `${step.emotionScore}%` }}
                          />
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Information Architecture Tab */}
            {activeResearchTab === 'ia' && (
              <motion.div
                key="ia"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-2 mb-4 border-b border-slate-900 pb-3">
                  <GitFork size={16} className="text-cyan-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Dashboard Navigation Architecture</h3>
                </div>

                {/* Tree Visual Schema */}
                <div className="p-4 sm:p-6 bg-slate-950/40 border border-slate-850 rounded-2xl overflow-x-auto">
                  <div className="flex flex-col gap-6 items-center min-w-[600px] text-center text-xs font-mono text-slate-200">
                    
                    {/* Root */}
                    <div className="px-5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl font-bold shadow-md shadow-black">
                      Root Dashboard
                    </div>
                    
                    {/* Level 1 Lines */}
                    <svg className="w-96 h-8 stroke-slate-800 fill-none stroke-2">
                      <path d="M192,0 v8 M192,8 h-120 v12 M192,8 h120 v12 M192,8 v12" />
                    </svg>

                    {/* Level 1 Nodes */}
                    <div className="flex justify-between w-full max-w-2xl">
                      <div className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl">
                        Transcription
                        <span className="block text-[9px] text-slate-500 font-semibold mt-1">Files, Workspace</span>
                      </div>
                      <div className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl">
                        Logistics
                        <span className="block text-[9px] text-slate-500 font-semibold mt-1">Alerts, Fleet Map</span>
                      </div>
                      <div className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl">
                        Employee Audits
                        <span className="block text-[9px] text-slate-500 font-semibold mt-1">radar evaluations</span>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
