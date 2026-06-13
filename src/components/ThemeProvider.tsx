'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
} | null>(null);

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');

  // Apply theme to <html> element
  const applyTheme = (t: Theme) => {
    const html = document.documentElement;
    if (t === 'light') {
      html.classList.add('light');
      html.style.colorScheme = 'light';
    } else {
      html.classList.remove('light');
      html.style.colorScheme = 'dark';
    }
  };

  useEffect(() => {
    const saved = (localStorage.getItem('theme') as Theme) || 'dark';
    setTheme(saved);
    applyTheme(saved);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    applyTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
}
