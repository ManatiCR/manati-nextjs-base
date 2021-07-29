import { useQuery } from '@apollo/client';
import React from 'react';
import LayoutBuider from '../components/layout-builder/layout-builder';
import LandingPageData from '../graphql/landing-page-data.graphql';
import { addApolloState, initializeApollo } from '../lib/apolloClient';
import sgPageQuery from '../lib/sg-page-query';

// Use landing page with '/inicio' path as the homepage.
const HOMEPAGE_URL = '/inicio';

export default function HomePage() {
  const { loading, error, data } = useQuery(LandingPageData, {
    variables: {
      path: HOMEPAGE_URL,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Loading...</h1>;

  const landingPage = data.route;

  return (
    <div>
      <LayoutBuider sections={landingPage.sections} />
    </div>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const { document, variables } = sgPageQuery(LandingPageData);

  await apolloClient.query({
    query: document,
    variables: {
      ...variables,
      path: HOMEPAGE_URL,
    },
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
}
