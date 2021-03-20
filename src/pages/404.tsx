import React, { FCP } from 'react';
import { Layout, SEO } from '@src/layouts';
import { usePage } from '@src/hooks/usePage';

const IndexPage: FCP = ({ path }) => {
  const page = usePage('999999');
  page.path = path;

  return (
    <Layout>
      <SEO currentPageData={page} />
      <h1 className="text-4xl">index.page</h1>
    </Layout>
  );
};

export default IndexPage;
