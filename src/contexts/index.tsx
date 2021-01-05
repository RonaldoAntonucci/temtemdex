import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import theme from '../styles/theme';

import { TemstemsContextProvider } from './TemtemsContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <TemstemsContextProvider>{children}</TemstemsContextProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
