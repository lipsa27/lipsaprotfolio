'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { mobileProjects, webGraphicsProjects, CaseStudy } from '@/data/caseStudies';

export default function CaseStudiesSection() {
  const [activeTab, setActiveTab] = useState<'mobile' | 'web_graphics'>('mobile');

  const projects: CaseStudy[] = activeTab === 'mobile' ? mobileProjects : webGraphicsProjects;

  return (
    <section id="work" className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-900">
      {/* Ambient blobs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2 block">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-white">
              CASE STUDIES
            </h2>
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-indigo-600 mt-4 rounded-full" />
          </div>

          {/* Tab switcher */}
          <div className="inline-flex p-1.5 rounded-full bg-slate-900 border border-slate-800">
            {([
              { key: 'mobile', label: 'Mobile Apps' },
              { key: 'web_graphics', label: 'Web & Graphics' },
            ] as const).map(({ key, label }) => (
              <button
                key={key}
                id={`case-tab-${key}`}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.35 }}
              >
                <Link
                  href={`/work/${project.id}`}
                  className="group glass-panel rounded-3xl overflow-hidden flex flex-col cursor-pointer block h-full"
                >
                  {/* Thumbnail */}
                  <div className="relative h-52 w-full bg-slate-900 overflow-hidden shrink-0">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    {/* Type badge */}
                    <span className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-[10px] font-bold text-cyan-400 uppercase tracking-wider">
                      {project.type === 'mobile' ? 'Mobile App' : 'Web & Graphics'}
                    </span>

                    {/* Arrow icon on hover */}
                    <span className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-900/80 border border-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight size={14} className="text-cyan-400" />
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-display font-bold text-lg text-slate-100 group-hover:text-cyan-400 transition-colors mb-2 leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs font-medium text-slate-400 mb-5 line-clamp-2">
                        {project.category}
                      </p>
                    </div>

                    <div>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] font-bold px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 group-hover:gap-2.5 transition-all duration-200">
                        View Case Study
                        <ArrowUpRight size={13} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
