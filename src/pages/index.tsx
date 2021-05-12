import React, { PFC } from 'react';
import { Layout, SEO } from '@src/layouts';
import { PageContext } from '@src/store';
import { usePageReducer } from '@src/hooks';
import { Picture } from '@src/components';

const IndexPage: PFC = () => {
  const currentPage = usePageReducer('1');

  return (
    <PageContext.Provider value={currentPage}>
      <Layout>
        <SEO />
        <Picture src="screenshot.png" />
      </Layout>
    </PageContext.Provider>
  );
};

export default IndexPage;
