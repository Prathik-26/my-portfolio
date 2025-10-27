import { createSignal, createEffect, onMount } from 'solid-js';

export default function ThemeToggle() {
  const [theme, setTheme] = createSignal<'dark' | 'light'>('dark');
  const [mounted, setMounted] = createSignal(false);

  onMount(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
    }
    
    setMounted(true);
  });

  createEffect(() => {
    if (!mounted()) return;
    
    const root = document.documentElement;
    
    if (theme() === 'light') {
      root.classList.add('light-theme');
      root.classList.remove('dark-theme');
    } else {
      root.classList.add('dark-theme');
      root.classList.remove('light-theme');
    }
    
    localStorage.setItem('theme', theme());
  });

  const toggleTheme = () => {
    setTheme(theme() === 'dark' ? 'light' : 'dark');
  };

  return (
    <button 
      onClick={toggleTheme}
      class="fixed top-6 right-6 z-50 p-3 rounded-lg border-2 border-accent text-accent hover:bg-accent hover:bg-opacity-10 transition-all duration-300 font-mono text-sm"
      aria-label="Toggle theme"
    >
      {theme() === 'dark' ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
