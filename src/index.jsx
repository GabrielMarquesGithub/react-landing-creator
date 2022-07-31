import React from 'react';
import ReactDOM from 'react-dom/client';

//components
import Home from './templates/Home';

//styles
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global-styles';
import { theme } from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
);
