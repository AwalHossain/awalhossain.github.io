import React, { useEffect, useState } from 'react';
import moon from '../../images/mode/moon.svg';
import sun from '../../images/mode/sun.svg';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<string>(getDefaultTheme())

  useEffect(() => {
    if (isDark === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', isDark);
    }
  }, [isDark])

  return (
    <div className="global-toggle-switch uppercase">
      <button
        className=""
        onClick={() => setIsDark(isDark === 'dark' ? 'light' : 'dark')}
      >
        <img
          src={isDark === 'dark' ? sun : moon}
          alt={isDark === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
          className="w-6 h-6 min-w-[24px] min-h-[24px] object-contain"
        />
      </button>
    </div>
  )
}

function getDefaultTheme() {
  if (typeof window !== 'undefined') {
    const savedTheme = window.localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  }
  return 'light';
}