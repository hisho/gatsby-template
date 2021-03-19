import React, { FCP } from 'react';
import { Layout, SEO } from '@src/layouts';

const IndexPage: FCP = ({ path }) => {
  return (
    <Layout>
      <SEO
        currentPageData={{
          page_id: '999',
          title: '404ページ',
          path,
          parent_id: '1',
        }}
      />
      <h1 className="text-4xl">index.page</h1>
    </Layout>
  );
};

export default IndexPage;
