import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { allProjects, getCaseStudyById } from '@/data/caseStudies';
import {
  ArrowLeft,
  ShieldAlert,
  Award,
  Compass,
  Eye,
  Activity,
  Database,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

function renderOverview(text: string) {
  const lines = text.split('\n').filter(l => l.trim() !== '');
  const items: string[] = [];
  let current = '';
  lines.forEach(line => {
    if (/^\d+\.\s/.test(line)) {
      if (current) items.push(current.trim());
      current = line.replace(/^\d+\.\s/, '');
    } else {
      current += ' ' + line.trim();
    }
  });
  if (current) items.push(current.trim());

  return (
    <ul className="list-disc space-y-2 pl-5 text-slate-300">
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  );
}


export async function generateStaticParams() {
  return allProjects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const study = getCaseStudyById(id);
  if (!study) return { title: 'Case Study Not Found' };
  return {
    title: `${study.title} — Lipsa Faldu Portfolio`,
    description: study.overview ?? study.problem,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const study = getCaseStudyById(id);
  if (!study) notFound();

  const typeLabel = study.type === 'mobile' ? 'Mobile App' : 'Web & Graphics';
  const otherProjects = allProjects.filter((p) => p.id !== study.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">

      {/* ─── Top Nav Bar ─── */}
      <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
          <Link
            href="/latest"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
          >
            Latest Work
          </Link>
          <Link href="/" className="text-xl font-black font-display text-white tracking-tight">
            Lipsa<span className="text-cyan-400">.</span>
          </Link>
          {/* {study.prototypeUrl && study.prototypeUrl !== '#' && (
            <a
              href={study.prototypeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              View Live <ExternalLink size={12} />
            </a>
          )} */}
        </div>
      </nav>

      {/* ─── Hero Banner ─── */}
      <div className="relative h-72 sm:h-96 w-full overflow-hidden">
        <Image
          src={study.thumbnail}
          alt={study.title}
          fill
          className="object-cover opacity-25"
          priority
        />
        {/* gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-indigo-600/10" />

        {/* Hero text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="inline-block mb-4 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[11px] font-bold uppercase tracking-widest text-cyan-400">
            {typeLabel}
          </span>
          <h1 className="text-4xl sm:text-6xl font-black font-display text-white mb-4 leading-tight">
            {study.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
            {study.category}
          </p>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Main Content ─── */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">

        {/* Overview */}
        {study.overview && (
          <section className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">Overview</h2>
            {renderOverview(study.overview)}
          </section>
        )}

        {/* Screen Gallery */}
        {study.gallery && study.gallery.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">App Screens</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {study.gallery.map((image) => (
                <figure
                  key={image.src}
                  className="group overflow-hidden rounded-3xl bg-slate-900/60 border border-slate-800"
                >
                  <div className="relative aspect-[9/16] max-h-[520px] w-full bg-slate-950">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain p-4 group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                  {image.caption && (
                    <figcaption className="px-5 py-3 text-sm font-semibold text-slate-300 border-t border-slate-800">
                      {image.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Problem / Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 bg-slate-900/60 border border-slate-800 rounded-3xl space-y-3">
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <ShieldAlert size={16} /> Problem
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">{study.problem}</p>
          </div>
          <div className="p-8 bg-slate-900/60 border border-slate-800 rounded-3xl space-y-3">
            <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-2">
              <Award size={16} /> Solution
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">{study.solution}</p>
          </div>
        </div>

        {/* Design Process */}
        <div className="p-8 bg-slate-900/60 border border-slate-800 rounded-3xl space-y-3">
          <h2 className="text-sm font-bold text-pink-400 uppercase tracking-wider flex items-center gap-2">
            <Compass size={16} /> Design Process
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">{study.process}</p>
        </div>

        {/* UX Research */}
        {study.research && (
          <div className="p-8 bg-slate-900/60 border border-slate-800 rounded-3xl space-y-3">
            <h2 className="text-sm font-bold text-violet-400 uppercase tracking-wider flex items-center gap-2">
              <Eye size={16} /> UX Research & Findings
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">{study.research}</p>
          </div>
        )}



        {/* User Flow */}
        {study.userFlow && (
          <div className="p-8 bg-slate-900/60 border border-slate-800 rounded-3xl space-y-3">
            <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
              <Activity size={16} /> User Flow
            </h2>
            <p className="font-mono text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-850">
              {study.userFlow}
            </p>
          </div>
        )}

        {/* Wireframing & Design System */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {study.wireframesDescription && (
            <div className="p-8 bg-slate-900/60 border border-slate-800 rounded-3xl space-y-3">
              <h2 className="text-sm font-bold text-amber-400 uppercase tracking-wider">Wireframing Specs</h2>
              <p className="text-sm text-slate-300 leading-relaxed">{study.wireframesDescription}</p>
            </div>
          )}
          {study.designSystemTokens && (
            <div className="p-8 bg-slate-900/60 border border-slate-800 rounded-3xl space-y-3">
              <h2 className="text-sm font-bold text-violet-400 uppercase tracking-wider flex items-center gap-2">
                <Database size={16} /> Design Tokens
              </h2>
              <p className="font-mono text-xs text-slate-400 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-850">
                {study.designSystemTokens}
              </p>
            </div>
          )}
        </div>

        {/* Results & Impact */}
        {/* <div className="p-8 bg-slate-900/60 border border-slate-800 rounded-3xl space-y-5">
          <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
            <CheckCircle2 size={16} /> Results & Impact
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">{study.results}</p>
          {study.impactMetrics && (
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-800 pt-6 mt-2">
              {study.impactMetrics.map((metric, i) => (
                <li
                  key={i}
                  className="flex flex-col gap-2 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-semibold text-slate-200 leading-relaxed">{metric}</span>
                </li>
              ))}
            </ul>
          )}
        </div> */}

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-slate-900">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 border border-slate-800 text-sm font-bold text-slate-300 hover:text-white hover:border-slate-700 transition-all"
          >
            <ArrowLeft size={14} />
            Back to All Work
          </Link>
          {/* {study.prototypeUrl && study.prototypeUrl !== '#' && (
            <a
              href={study.prototypeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-sm font-bold hover:opacity-90 transition-opacity"
            >
              View Live Project <ExternalLink size={14} />
            </a>
          )} */}
        </div>

        {/* ─── More Projects ─── */}
        {otherProjects.length > 0 && (
          <section className="pt-12 border-t border-slate-900 space-y-8">
            <h2 className="text-xl font-black font-display text-white">More Work</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {otherProjects.map((p) => (
                <Link
                  key={p.id}
                  href={`/work/${p.id}`}
                  className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div className="relative h-36 w-full overflow-hidden">
                    <Image
                      src={p.thumbnail}
                      alt={p.title}
                      fill
                      className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                  </div>
                  <div className="p-4">
                    <p className="text-[10px] font-bold uppercase text-cyan-400 tracking-wider mb-1">
                      {p.type === 'mobile' ? 'Mobile App' : 'Web & Graphics'}
                    </p>
                    <h3 className="text-sm font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">{p.category}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

      </div>

      {/* ─── Footer ─── */}
      <footer className="border-t border-slate-900 py-8 text-center">
        <p className="text-xs text-slate-600">
          © 2025 Lipsa Faldu · All rights reserved
        </p>
      </footer>
    </div>
  );
}
