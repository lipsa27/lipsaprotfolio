'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';


const testimonials = [
  {
    quote: 'Lipsa brought structural design thinking to our campaign visual pipelines. Her ability to define color scripts and layout flows transformed how our digital delivery portals connected with clients.',
    author: 'Karan Shah',
    role: 'Creative Director',
    company: 'Studio Ethics',
  },
  {
    quote: 'Her expertise in design system variables and high-density SaaS dashboard grids was critical for Genie 360. She managed to translate highly abstract data models into intuitive visual matrix cards.',
    author: 'Elena Rostova',
    role: 'Product Lead',
    company: 'Genie Systems',
  },
  {
    quote: 'Working with Lipsa on the Transcriber app was a masterclass in collaboration. Her AI workflows automated user paths, reducing our handoff cycles to production code by 35%.',
    author: 'Sarah Chen',
    role: 'Engineering Lead',
    company: 'Transcriber SaaS',
  },
];

const metrics = [
  { target: 2.5, label: 'Years Experience', suffix: '+' },
  { target: 6, label: 'Projects Completed', suffix: '+' },
  { target: 6, label: 'Happy Clients', suffix: '+' },
  // { target: 100, label: 'Screens Designed', suffix: '+' },
];

function Counter({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const end = target;
    const isFloat = !Number.isInteger(target);
    const stepTime = 30; // Milliseconds per tick
    const totalTicks = (duration * 1000) / stepTime;
    const increment = (end - start) / totalTicks;
    let currentTick = 0;

    const timer = setInterval(() => {
      currentTick++;
      start += increment;
      if (currentTick >= totalTicks) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(isFloat ? Math.round(start * 10) / 10 : Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return <span ref={nodeRef}>{count}</span>;
}

export default function TestimonialsAndMetrics() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-900">
      {/* Background patterns */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Metrics Section */}
        <div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="glass-panel p-6 sm:p-8 rounded-3xl text-center flex flex-col justify-center items-center group border border-slate-200/5 hover:border-slate-250/10 hover:shadow-cyan-500/5 transition-all duration-300"
              >
                <div className="text-4xl sm:text-5xl font-black font-display font-mono text-cyan-400 mb-3 tracking-tight">
                  <Counter target={metric.target} />
                  <span className="text-indigo-400">{metric.suffix}</span>
                </div>
                <span className="text-xs font-bold text-slate-400 group-hover:text-slate-200 transition-colors uppercase tracking-wider">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
