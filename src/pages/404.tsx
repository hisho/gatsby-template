import React, {FCP, useReducer} from 'react';
import {Layout, SEO} from '@src/layouts';
import {usePage} from '@src/hooks/usePage';
import {PageContext, PageContextReducer} from "@src/store";

const IndexPage: FCP = () => {
  const [page, dispatch] = useReducer(PageContextReducer, usePage('999999'));

  return (
    <PageContext.Provider value={{page, dispatch}}>
      <Layout>
        <SEO/>
        <h1 className="text-4xl">index.page</h1>
      </Layout>
    </PageContext.Provider>
  );
};

export default IndexPage;
