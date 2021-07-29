import { ApolloProvider } from '@apollo/client';
import { css, Global } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'theme-ui';
import PageLayoutWrapper from '../components/wrappers/page-layout-wrapper';
import { useApollo } from '../lib/apolloClient';
import theme from '../theme';

// TODO: Adjust google fonts to match design requirements.
const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,300;1,700&display=swap');
`;

export default function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  const pageContent = pageProps.isEmbed ? (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Component {...pageProps} />
  ) : (
    <>
      <PageLayoutWrapper>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </PageLayoutWrapper>
    </>
  );

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        {pageContent}
      </ThemeProvider>
    </ApolloProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};
