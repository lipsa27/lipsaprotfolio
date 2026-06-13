'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, Briefcase, Zap, Target, ArrowRight } from 'lucide-react';
import { and } from 'three/tsl';

const milestones = [
  {
    year: '2023',
    title: 'Internship',
    role: 'Intern',
    description:
      'Understanding the company Workflow, and Frontend Intern',
    bullets: [
      'understand the Frontend Work',
      'Learn the Languages Like Html,CSS, JS , React for the Frontent Part',
      'work in the live Projects',
    ],
    icon: Calendar,
  },
  {
    year: '2024-2025',
    title: 'Alpha-e Barcode Solutions Pvt. Ltd.',
    role: 'UI/UX Designer',
    description:
      'Led end-to-end UI/UX design for web and mobile applications, from ideation to final interface delivery.Created wireframes, user flows, and interactive prototypes in Figma to validate functionality and reduce development revisions.Delivered custom responsive web designs ensuring seamless cross-device performance.Improved user satisfaction by simplifying workflows and enhancing interaction design.Worked closely with developers to maintain design consistency and smooth implementation.',
    bullets: [
      'Designed responsive web and mobile interfaces based on user needs and business requirements',
      'Created user flows, wireframes, and interactive prototypes to streamline user journeys',
      'Conducted UI analysis and usability improvements to enhance user experience and workflow efficiency',
      'Designed frontend experiences using HTML, CSS, JavaScript, and Figma for seamless user interactions',
      'Translated software requirements into intuitive and user-friendly design solutions',
      'Collaborated with developers to ensure design implementation accuracy and consistency',
      'Built design systems, reusable components, and responsive layouts for scalable products',
    ],
    icon: User,
  },
  {
    year: '2025-Present',
    title: 'MavenVista Technology',
    role: 'Product Designer',
    description:
      'Transitioned into designing complex, multi-tenant enterprise dashboards. Created extensive, reusable Figma design libraries and styled complex datasets for systems like Transcriber, Vendor Tracking, and Genie 360.',
    bullets: [
      'Improved design efficiency by utilizing AI-assisted research, ideation, and prototyping techniques to provide faster design solutions.',
      'Optimized design processes through AI-assisted research, wireframing, and prototyping, reducing turnaround time and increasing productivity',
      'Reduced user task-completion time by 22% in testing',
      'Converted complex software requirements into simple, intuitive, and user-centered design experiences',
    ],
    icon: Briefcase,
  },
  {
    year: 'Freelance Work',
    title: 'Freelance UI/UX Designer',
    role: 'UI UX Designer, Video Editing',
    description:
      'Collaborating with diverse clients, I deliver tailored UI/UX solutions that align with their unique goals and brand identities. By combining creativity, strategy, and user-centered design principles, I transform ideas into compelling digital experiences.',
    bullets: [
      'Collaborated with clients to understand project requirements and deliver tailored design solutions',
      'Created wireframes, mockups, and prototypes to visualize design concepts and gather feedback',
      'Collaborated closely with clients to ensure design solutions aligned with their brand and business goals',
      'Automated user flows from prompts with Flowstep AI',
      'Bridged mockup-to-react code translation',
      'Editing the Clients Marketing Video Adds, Reels, Thumbnails and other promotional videos'
    ],
    icon: Zap,
  },
];

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(3);
  const activeMilestone = milestones[activeIndex];
  const ActiveIcon = activeMilestone.icon;

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-900">
      {/* Subtle background grids */}
      <div className="absolute inset-y-0 right-0 w-1/3 grid-bg opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <div className="flex flex-col mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            My Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-white">
            ABOUT ME
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-indigo-600 mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Text Col */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold font-display text-slate-100 leading-snug">
              Designing interfaces that bridge human intuition and system intelligence.
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              I am a Product Designer with 2.5+ years of experience who thrives at the intersection of UX research, enterprise SaaS layouts, and automated AI tooling. My journey started with a fascination for human interaction patterns and evolved into designing scalable visual architectures.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Whether styling high-density data tables, establishing tokens for design systems, or writing frontend React code alongside AI subagents, my focus remains: building accessible, high-performance digital products that solve real problems.
            </p>

            <div className="p-5 rounded-2xl glass-panel border-cyan-500/10 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 flex-shrink-0">
                <Target size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-100 mb-1 uppercase tracking-wide">
                  Current Goal
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Building scalable digital products by merging structural design systems with speed-optimized AI workflows.
                </p>
              </div>
            </div>
          </div>

          {/* Right Interactive Timeline Col */}
          <div className="lg:col-span-7 flex flex-col space-y-10">

            {/* Timeline Progress Bar Wrapper */}
            <div className="relative pt-6">
              {/* Main Line */}
              <div className="absolute top-[38px] left-0 right-0 h-[2px] bg-slate-800" />

              {/* Active Segment Fill */}
              <div
                className="absolute top-[38px] left-0 h-[2px] bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-500"
                style={{
                  width: `${(activeIndex / (milestones.length - 1)) * 100}%`,
                }}
              />

              {/* Milestones Nodes */}
              <div className="relative flex justify-between items-center z-10">
                {milestones.map((milestone, idx) => {
                  const Icon = milestone.icon;
                  const isActive = idx === activeIndex;
                  const isPast = idx < activeIndex;

                  return (
                    <button
                      key={milestone.year}
                      onClick={() => setActiveIndex(idx)}
                      className="flex flex-col items-center group focus:outline-none"
                    >
                      <span
                        className={`text-xs font-bold tracking-wider font-mono mb-3 transition-colors ${isActive
                          ? 'text-cyan-400'
                          : 'text-slate-500 group-hover:text-slate-300'
                          }`}
                      >
                        {milestone.year}
                      </span>
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${isActive
                          ? 'bg-slate-950 border-cyan-400 scale-110 shadow shadow-cyan-400/50'
                          : isPast
                            ? 'bg-cyan-500 border-cyan-500'
                            : 'bg-slate-900 border-slate-700 group-hover:border-slate-500'
                          }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full transition-colors ${isActive ? 'bg-cyan-400' : isPast ? 'bg-white' : 'bg-transparent'
                            }`}
                        />
                      </span>
                      <span
                        className={`text-[10px] mt-2 font-semibold tracking-wide uppercase transition-colors hidden sm:block ${isActive ? 'text-slate-200' : 'text-slate-500 group-hover:text-slate-400'
                          }`}
                      >
                        {milestone.year === '2026' ? 'Now' : milestone.year === '2023' ? 'Internship' : 'JOb'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Timeline Detail Card */}
            <div className="min-h-[260px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMilestone.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="glass-panel p-6 sm:p-8 rounded-3xl"
                >
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                        <ActiveIcon size={18} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold font-display text-white">
                          {activeMilestone.title}
                        </h4>
                        <p className="text-xs font-semibold text-slate-400 font-mono">
                          {activeMilestone.role}
                        </p>
                      </div>
                    </div>
                    <span className="text-2xl font-black font-display text-slate-800 dark:text-slate-800/60 leading-none select-none">
                      {activeMilestone.year}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {activeMilestone.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-slate-900 pt-6">
                    {activeMilestone.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <ArrowRight size={12} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
