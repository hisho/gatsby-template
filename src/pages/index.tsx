import React, { FCP } from 'react';
import { Layout, SEO } from '@src/layouts';

const IndexPage: FCP = ({path}) => {
  return (
    <Layout>
      <SEO currentPageData={{
        page_id: '1',
        title: 'トップページ',
        path
      }} />
      <h1 className="text-4xl">index.page</h1>
    </Layout>
  );
};

export default IndexPage;
