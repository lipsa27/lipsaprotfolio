'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function PageReveal() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 text-white select-none"
        >
          <div className="flex flex-col items-center gap-4">
            {/* Logo box */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-black text-xl shadow-lg shadow-cyan-500/25 text-white"
            >
              L
            </motion.div>
            
            {/* Text lines */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center gap-2 text-xs font-bold font-mono tracking-widest text-slate-400 uppercase"
            >
              Lipsa Faldu <span className="text-cyan-400">//</span> Product Designer
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
