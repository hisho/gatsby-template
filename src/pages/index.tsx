import React, {FCP,useReducer} from 'react';
import {Layout, SEO} from '@src/layouts';
import {Picture} from '@src/components';
import {usePage} from '@src/hooks/usePage';
import {PageContext, PageContextReducer} from "@src/store";

const IndexPage: FCP = () => {
  const [page, dispatch] = useReducer(PageContextReducer, usePage('1'));

  return (
    <PageContext.Provider value={{page, dispatch}}>
      <Layout>
        <SEO/>
        <h1 className="text-4xl">index.page</h1>
        <h2 className={`text-[1.8125rem]`}>テスト</h2>
        <h2 className={`text-[30rem]`}>テスト</h2>
        <Picture relativePath="screenshot.png"/>
      </Layout>
    </PageContext.Provider>
  );
};

export default IndexPage;
