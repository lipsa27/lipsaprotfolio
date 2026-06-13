'use client';

import { useTheme } from './ThemeProvider';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Process', href: '#process' },
  { name: 'Case Studies', href: '#work' },
  { name: 'AI Workflow', href: '#ai-workflow' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Update hash in browser URL history
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', href);
    }
    
    const target = document.querySelector(href);
    if (target) {
      // Use Lenis smooth scroll if active
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(target);
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/70 dark:bg-slate-950/70 border-b border-slate-200/10 dark:border-slate-800/50 backdrop-blur-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          id="nav-logo"
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="group relative flex items-center gap-2 font-display text-xl font-bold tracking-tight text-slate-800 dark:text-slate-100"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white text-sm font-black shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
            L
          </span>
          <span className="hidden sm:inline">
            Lipsa<span className="text-cyan-500">.</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="w-px h-5 bg-slate-200/15 dark:bg-slate-800/80" />

          {/* Theme Toggler */}
          <button
            suppressHydrationWarning
            id="theme-toggler"
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-slate-200/10 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-100/10 dark:hover:bg-slate-900/40 transition-all duration-200"
            aria-label="Toggle visual theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* CTA */}
          <a
            id="nav-cta"
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full bg-gradient-to-r from-cyan-500/10 to-indigo-600/10 hover:from-cyan-500/20 hover:to-indigo-600/20 border border-cyan-500/30 text-cyan-400 hover:text-cyan-300 transition-all duration-300"
          >
            Let's Talk
            <ArrowUpRight size={14} />
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            suppressHydrationWarning
            id="theme-toggler-mobile"
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-slate-200/10 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            suppressHydrationWarning
            id="mobile-menu-toggler"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-80 z-40 bg-slate-950/95 dark:bg-slate-950/95 border-l border-slate-800 backdrop-blur-xl p-8 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="mt-12 flex flex-col gap-6">
            <h3 className="font-display text-xs font-semibold tracking-wider text-slate-500 uppercase">
              Navigation
            </h3>
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-lg font-bold text-slate-200 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-slate-800 pt-6">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 font-semibold text-white tracking-wide shadow-lg shadow-cyan-500/20"
            >
              Let's Talk
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
