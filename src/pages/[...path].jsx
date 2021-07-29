import { useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import React from 'react';
import LayoutBuider from '../components/layout-builder/layout-builder';
import LandingPageData from '../graphql/landing-page-data.graphql';
import LandingPageRoutes from '../graphql/landing-page-routes.graphql';
import { addApolloState, initializeApollo } from '../lib/apolloClient';
import sgPageQuery from '../lib/sg-page-query';

export default function LandingPage({ path }) {
  const { loading, error, data } = useQuery(LandingPageData, {
    variables: {
      path,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error!</h1>;

  const landingPage = data.route;

  return (
    <div>
      <LayoutBuider sections={landingPage.sections} />
    </div>
  );
}

LandingPage.propTypes = {
  path: PropTypes.string.isRequired,
};

export async function getStaticProps({ params }) {
  const apolloClient = initializeApollo();

  const { document, variables } = sgPageQuery(LandingPageData);

  const path = `/${params.path.join('/')}`;

  await apolloClient.query({
    query: document,
    variables: {
      ...variables,
      path,
    },
  });

  return addApolloState(apolloClient, {
    props: {
      path,
    },
    revalidate: 1,
  });
}

export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  const response = await apolloClient.query({
    query: LandingPageRoutes,
  });

  const paths = response.data.landingPages.items.map((node) => ({
    params: {
      path: node.url.substring(1).split('/'),
    },
  }));

  return {
    paths,
    fallback: true,
  };
}
