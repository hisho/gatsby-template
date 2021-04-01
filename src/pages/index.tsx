import React, { FCP } from 'react';
import { Layout, SEO } from '@src/layouts';
import { PageContext } from '@src/store';
import { usePageReducer } from '@src/hooks';

const IndexPage: FCP = () => {
  const currentPage = usePageReducer('1');

  return (
    <PageContext.Provider value={currentPage}>
      <Layout>
        <SEO />
      </Layout>
    </PageContext.Provider>
  );
};

export default IndexPage;
