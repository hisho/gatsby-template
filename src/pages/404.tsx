import React, { FCP } from 'react';
import { Layout, SEO } from '@src/layouts';

const IndexPage: FCP = () => {
  return (
    <Layout>
      <SEO />
      <h1 className="text-4xl">index.page</h1>
    </Layout>
  );
};

export default IndexPage;
