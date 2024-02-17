import React, { useState } from 'react';
import sun from '../../images/mode/sun.svg';
import moon from '../../images/mode/moon.svg';




export default function ThemeToggle() {
  const [isDark, setIsDark] =useState<string>(getDefaultTheme())

  React.useEffect(() => {
    if (isDark === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    if(typeof window !== 'undefined'){
      window.localStorage.setItem('theme', isDark);
    }
  }, [isDark])

  return (
    <div className="global-toggle-switch uppercase">
      <span  className="inline-block">
        {isDark === 'dark' ? (<img src={sun} className='w-6 h-6 object-cover' onClick={() => setIsDark('light')} />) :
         (<img src={moon} onClick={() => setIsDark('dark')}  className='w-6 h-6 object-cover'/>)}
      </span>
    </div>
  )
}


function getDefaultTheme() {
  if(typeof window !== 'undefined'){
    const savedTheme = window.localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  }
  return 'light';
}