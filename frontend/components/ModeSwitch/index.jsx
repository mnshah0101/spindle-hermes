import React, { useEffect, useState } from 'react';
import Icon from '../Icon';

export default function ModeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem('Theme');
    if (currentTheme === 'dark_mode') {
      document.body.classList.add('is-dark');
      setDarkMode(true);
    } else {
      document.body.classList.remove('is-dark');
      setDarkMode(false);
      localStorage.setItem('Theme', 'light_mode');
    }
  }, []);

  const toggleMode = () => {
    if (darkMode) {
      document.body.classList.remove('is-dark');
      localStorage.setItem('Theme', 'light_mode');
    } else {
      document.body.classList.add('is-dark');
      localStorage.setItem('Theme', 'dark_mode');
    }
    setDarkMode(!darkMode);
  };

  return (
    <button
      className={`dark-mode-toggle ${darkMode ? 'dark-active' : ''}`}
      onClick={toggleMode}
    >
      <Icon icon={darkMode ? 'moon-fill' : 'sun-fill'} className="icon" />
    </button>
  );
}
