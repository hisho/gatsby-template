import React, { FCP } from 'react';
import { Layout, SEO } from '@src/layouts';
import { Picture } from '@src/components';
import { PageContext } from '@src/store';
import { usePageReducer } from '@src/hooks';

const IndexPage: FCP = () => {
  const currentPage = usePageReducer('1');

  return (
    <PageContext.Provider value={currentPage}>
      <Layout>
        <SEO />
        <h1 className="text-4xl">index.page</h1>
        <h2 className={`text-[1.8125rem]`}>テスト</h2>
        <h2 className={`text-[30rem]`}>テスト</h2>
        <Picture relativePath="screenshot.png" />
      </Layout>
    </PageContext.Provider>
  );
};

export default IndexPage;
