import React, { createContext, useState } from 'react';

export const ThemeCounterContext = createContext();

export const ThemeCounterProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  // const [counter, setCounter] = useState(0);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // const incrementCounter = () => {
  //   setCounter((prevCounter) => prevCounter + 1);
  // };

  // const decrementCounter = () => {
  //   setCounter((prevCounter) => prevCounter - 1);
  // };

  return (
    <ThemeCounterContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeCounterContext.Provider>
  );
};
