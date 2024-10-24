import React, { createContext, useState } from 'react';

export const ThemeCounterContext = createContext();

export const ThemeCounterProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeCounterContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeCounterContext.Provider>
  );
};
