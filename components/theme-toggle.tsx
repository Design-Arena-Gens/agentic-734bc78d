'use client';

import { useEffect, useState, ReactNode } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

type IconProps = {
  className?: string;
};

function IconWrapper({ children }: { children: ReactNode }) {
  return <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent shadow-glow transition-all hover:bg-brand-accent/20">{children}</span>;
}

export function ThemeToggle({ className = '' }: IconProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  const isDark = (theme === 'system' ? resolvedTheme : theme) === 'dark';

  return (
    <button
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      className={`group flex items-center gap-2 rounded-full border border-white/10 bg-white/40 px-3 py-2 text-sm font-medium text-brand-accent backdrop-blur transition hover:bg-white ${className}`}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      type="button"
    >
      <IconWrapper>
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </IconWrapper>
      <span className="hidden sm:inline">{isDark ? 'Modo Claro' : 'Modo Noche'}</span>
    </button>
  );
}
