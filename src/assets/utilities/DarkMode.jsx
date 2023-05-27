import { useState, useEffect } from 'react';
import { Moon, Sun } from './DarkModeIcons';

const DarkMode = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.remove('dark', 'light');
    body.classList.add(theme);
  }, [theme]);

  return (
    <span
      className={`w-12 h-12 rounded-full cursor-pointer ${theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'}`}
      onClick={toggleTheme}
    >
      {theme === 'light' ? <Moon /> : <Sun />}
    </span>
  );
};

export default DarkMode;
