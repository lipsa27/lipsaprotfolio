'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';

const LinkedinIcon = ({ size = 16, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'SaaS Design',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required.';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required.';
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email address.';
    }

    if (formData.message.trim().length < 10) {
      tempErrors.message = 'Please write a message of at least 10 characters.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', projectType: 'SaaS Design', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for that field
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-900">
      {/* Background gradients */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none -translate-y-1/2 opacity-20 -z-10 bg-radial from-cyan-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            Let's Collaborate
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-white">
            LET'S TALK
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-indigo-600 mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">

          {/* Left info column (Col span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-display text-slate-100 leading-snug">
                Have a dashboard, design library, or SaaS product that needs refining?
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I am always excited to partner on enterprise SaaS platforms, AI integration workspaces, and interface auditing projects. Let's build something scalable.
              </p>
            </div>

            {/* Info details */}
            <div className="space-y-4 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-950 border border-slate-900 hover:border-slate-800 transition-colors">
                <div className="p-2 bg-cyan-500/10 text-cyan-400 rounded-lg">
                  <Mail size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-slate-500 block uppercase font-bold mb-0.5">Email</span>
                  <a href="mailto:faldulipsa27@gmail.com" className="hover:text-cyan-400 transition-colors break-all">
                    faldulipsa27@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-950 border border-slate-900 hover:border-slate-800 transition-colors">
                <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-lg">
                  <LinkedinIcon size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-slate-500 block uppercase font-bold mb-0.5">LinkedIn</span>
                  <a href="https://in.linkedin.com/in/lipsa-faldu-b46521208" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors flex items-center gap-1 flex-wrap break-all">
                    https://in.linkedin.com/in/lipsa-faldu-b46521208

                    <ArrowUpRight size={12} className="flex-shrink-0" />
                  </a>
                </div>
              </div>
            </div>

            {/* Sub branding footer */}
            <div className="text-[10px] text-slate-500 font-mono select-none">
              &copy; {new Date().getFullYear()} LIPSA FALDU. ALL RIGHTS RESERVED.
            </div>
          </div>

          {/* Right Form column (Col span 7) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl relative">
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5 font-mono">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="lipsa faldu"
                  className={`w-full py-2.5 px-4 rounded-xl bg-slate-950 border text-xs text-white placeholder:text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/10 transition-all ${errors.name ? 'border-rose-500/50 focus:border-rose-500' : 'border-slate-850 focus:border-cyan-500/50'
                    }`}
                />
                {errors.name && (
                  <span className="text-[10px] text-rose-500 font-medium mt-1.5 block">{errors.name}</span>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5 font-mono">
                  Email Address
                </label>
                <input
                  suppressHydrationWarning
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="faldulipsa27@gmail.com"
                  className={`w-full py-2.5 px-4 rounded-xl bg-slate-950 border text-xs text-white placeholder:text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/10 transition-all ${errors.email ? 'border-rose-500/50 focus:border-rose-500' : 'border-slate-850 focus:border-cyan-500/50'
                    }`}
                />
                {errors.email && (
                  <span className="text-[10px] text-rose-500 font-medium mt-1.5 block">{errors.email}</span>
                )}
              </div>

              {/* Project Type Dropdown */}
              <div>
                <label htmlFor="projectType" className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5 font-mono">
                  Sought Speciality
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-950 border border-slate-850 text-xs text-slate-300 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 transition-all"
                >
                  <option value="SaaS Design">Enterprise SaaS Redesign</option>
                  <option value="Design Systems">Design Tokens & Libraries</option>
                  <option value="UX Audits">Usability Redline Audits</option>
                  <option value="General Interaction">AI assisted interfaces</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5 font-mono">
                  Message Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your design objectives..."
                  className={`w-full py-2.5 px-4 rounded-xl bg-slate-950 border text-xs text-white placeholder:text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/10 transition-all ${errors.message ? 'border-rose-500/50 focus:border-rose-500' : 'border-slate-850 focus:border-cyan-500/50'
                    }`}
                />
                {errors.message && (
                  <span className="text-[10px] text-rose-500 font-medium mt-1.5 block">{errors.message}</span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-650 hover:from-cyan-400 hover:to-indigo-550 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-cyan-500/15 hover:shadow-cyan-500/30 flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed select-none"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
                <Send size={12} />
              </button>

            </form>

            {/* Success Visual Overlay Popup */}
            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-slate-900/90 rounded-3xl backdrop-blur flex flex-col items-center justify-center text-center p-6"
                >
                  <motion.div
                    initial={{ scale: 0.9, y: 10 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 10 }}
                    className="space-y-4"
                  >
                    <div className="flex justify-center text-emerald-500">
                      <CheckCircle2 size={48} className="animate-bounce" />
                    </div>
                    <h4 className="text-lg font-bold font-display text-white">Message Sent Successfully!</h4>
                    <p className="text-xs text-slate-400 max-w-xs leading-relaxed mx-auto">
                      Thank you. I have received your request and will follow up within 24 business hours.
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
