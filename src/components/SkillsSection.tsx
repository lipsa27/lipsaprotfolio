'use client';

import { motion } from 'framer-motion';
import { Layers, Search, Wrench, Cpu, Code } from 'lucide-react';

const skillCategories = [
  {
    title: 'Design',
    icon: Layers,
    color: 'from-cyan-500 to-blue-500',
    glowColor: 'group-hover:shadow-cyan-500/15',
    skills: ['UX Design', 'UI Design', 'Interaction Design', 'Design Systems', 'Accessibility'],
  },
  {
    title: 'Research',
    icon: Search,
    color: 'from-indigo-500 to-purple-500',
    glowColor: 'group-hover:shadow-indigo-500/15',
    skills: ['User Research', 'Competitor Analysis', 'UX Audit', 'User Interviews', 'Information Architecture'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    color: 'from-pink-500 to-rose-500',
    glowColor: 'group-hover:shadow-pink-500/15',
    skills: ['Figma', 'FigJam', 'Photoshop', 'Illustrator'],
  },
  {
    title: 'AI Tools',
    icon: Cpu,
    color: 'from-emerald-500 to-teal-500',
    glowColor: 'group-hover:shadow-emerald-500/15',
    skills: ['Google Stitch', 'Flowstep AI', 'Figma AI', 'Cursor', 'ChatGPT', 'Claude', 'Bolt', 'Lovable'],
  },
  {
    title: 'Frontend',
    icon: Code,
    color: 'from-amber-500 to-orange-500',
    glowColor: 'group-hover:shadow-amber-500/15',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as any },
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-900">
      {/* Background gradients */}
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-10 left-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            My Toolbox
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-white">
            SKILLS & SPECIALTIES
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-indigo-600 mt-4 rounded-full" />
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="group glass-panel p-6 rounded-3xl flex flex-col justify-between relative overflow-hidden border border-slate-200/5 hover:border-slate-200/10 hover:shadow-2xl transition-all duration-300"
              >
                {/* Visual Accent Corner Glow */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-bl-3xl pointer-events-none" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-2xl bg-gradient-to-tr ${category.color} text-white shadow-md shadow-black/10`}>
                      <Icon size={18} />
                    </div>
                    <h3 className="font-display font-bold text-base text-slate-100 uppercase tracking-wide group-hover:text-white transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills tags list */}
                  <ul className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-slate-900/60 dark:bg-slate-900/60 border border-slate-200/5 dark:border-slate-800/80 text-slate-400 dark:text-slate-400 hover:text-cyan-400 hover:border-cyan-500/20 hover:bg-cyan-500/5 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subtle bottom line transition */}
                <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${category.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Summary note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 max-w-lg mx-auto">
            Focusing on scalable user architectures, structured variables design systems, AI tooling efficiency, and smooth visual handoffs.
          </p>
        </div>

      </div>
    </section>
  );
}
