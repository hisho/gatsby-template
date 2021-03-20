import React, { FCP } from 'react';
import { Layout, SEO } from '@src/layouts';
import { Picture } from '@src/components';
import { usePage } from '@src/hooks/usePage';

const IndexPage: FCP = () => {
  const page = usePage('1');

  return (
    <Layout>
      <SEO currentPageData={page} />
      <h1 className="text-4xl">index.page</h1>
      <h2 className={`text-[1.8125rem]`}>テスト</h2>
      <h2 className={`text-[30rem]`}>テスト</h2>
      <Picture relativePath="screenshot.png" />
    </Layout>
  );
};

export default IndexPage;
