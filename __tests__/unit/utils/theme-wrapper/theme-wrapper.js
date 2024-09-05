import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { LightTheme } from '~src/theme/colors';
import { propTypes } from './props';

/*
  While we are testing any component,we
  need to inject theme to all nested component
  for styling.
*/
const ThemeWrapper = ({ children }) => <ThemeProvider theme={LightTheme}>{children}</ThemeProvider>;

const customRender = (ui, options) => render(ui, { wrapper: ThemeWrapper, ...options });

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { customRender as render };

ThemeWrapper.propTypes = propTypes;
