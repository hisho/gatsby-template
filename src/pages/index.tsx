import React, { FCP } from 'react';
import { Layout, SEO } from '@src/layouts';
import { Picture } from '@src/components';

const IndexPage: FCP = ({ path }) => {
  return (
    <Layout>
      <SEO
        currentPageData={{
          page_id: '1',
          title: 'トップページ',
          path,
        }}
      />
      <h1 className="text-4xl">index.page</h1>
      <h2 className={`text-[1.8125rem]`}>テスト</h2>
      <h2 className={`text-[1rem]`}>テスト</h2>
      <Picture relativePath="screenshot.png" />
    </Layout>
  );
};

export default IndexPage;
