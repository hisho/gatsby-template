import React, { FCP } from 'react';
import { Layout, SEO } from '@src/layouts';
import { PageContext } from '@src/store';
import { usePageReducer } from '@src/hooks';

const IndexPage: FCP = ({ location }) => {
  const currentPage = usePageReducer('999999', (page) => ({
    ...page,
    path: location.pathname,
  }));

  return (
    <PageContext.Provider value={currentPage}>
      <Layout>
        <SEO />
        <h1 className="text-4xl">index.page</h1>
      </Layout>
    </PageContext.Provider>
  );
};

export default IndexPage;
