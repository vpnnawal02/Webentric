'use client';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const light = theme === 'light';
  return (
    <button
      type="button"
      onClick={(e) => toggleTheme({ x: e.clientX, y: e.clientY })}
      aria-pressed={light}
      aria-label={light ? 'Switch to dark theme' : 'Switch to light theme'}
      title={light ? 'Switch to dark theme' : 'Switch to light theme'}
      className={`theme-toggle ${className}`}
    >
      <Sun size={17} strokeWidth={1.8} className="tt-sun" aria-hidden="true" />
      <Moon size={17} strokeWidth={1.8} className="tt-moon" aria-hidden="true" />
    </button>
  );
}
