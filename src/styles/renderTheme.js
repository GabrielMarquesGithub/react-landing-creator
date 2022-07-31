import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

export const renderTheme = (element) => {
  return render(<ThemeProvider theme={theme}>{element}</ThemeProvider>);
};
