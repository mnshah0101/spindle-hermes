import React, { useEffect, useState } from 'react';
import Icon from '../Icon';

export default function ModeSwitch() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const currentTheme = 'dark_mode'
    if (currentTheme === 'dark_mode') {
      document.body.classList.add('is-dark');
      setDarkMode(true);
    } else {
      document.body.classList.remove('is-dark');
      setDarkMode(false);
      localStorage.setItem('Theme', 'is-dark');
    }
  }, []);

  const toggleMode = () => {
    if (darkMode) {
      document.body.classList.remove('is-dark');
      localStorage.setItem('Theme', 'dark_mode');
    } else {
      document.body.classList.add('is-dark');
      localStorage.setItem('Theme', 'dark_mode');
    }
    setDarkMode(!darkMode);
  };

  return (
    <></>
  );
}
