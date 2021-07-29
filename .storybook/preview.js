import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { Global, css } from '@emotion/react';
import { RouterContext } from "next/dist/next-server/lib/router-context";
import * as nextImage from 'next/image';
import theme from '../src/theme';

// Google Fonts. Change to match project design requirements.
const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,300;1,700&display=swap');
`;

// Next image mock component.
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => <div><img {...props} /></div>
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Story />
    </ThemeProvider>
  ),
];
