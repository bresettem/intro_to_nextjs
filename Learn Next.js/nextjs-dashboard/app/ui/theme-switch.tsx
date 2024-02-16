'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <button
      className="flex items-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 dark:bg-slate-700 dark:bg-slate-800"
      onClick={toggleTheme}
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className="w-6 cursor-pointer" />
      ) : (
        <MoonIcon className="w-6 cursor-pointer" />
      )}
      <div className="hidden md:block">Toggle Theme</div>
    </button>
  );
}
