import React, {FCP, useReducer} from 'react';
import {Layout, SEO} from '@src/layouts';
import * as styles from '@src/pages/template/index.module.css';
import {GatsbyImage, StaticImage} from 'gatsby-plugin-image';
import {graphql, useStaticQuery} from 'gatsby';
import {usePage} from '@src/hooks/usePage';
import {PageContext, PageContextReducer} from "@src/store";

const IndexPage: FCP = () => {
  const [page, dispatch] = useReducer(PageContextReducer, usePage('111111'));

  return (
    <PageContext.Provider value={{page, dispatch}}>
      <Layout>
        <SEO/>
        <div className="wrapper">
          <section>
            <h2 className={styles.test}>css modules</h2>
            <h2 className={styles.testTest}>css modules kebab to camelcase</h2>
            <StaticImage
              aspectRatio={1200 / 630}
              src="../../images/screenshot.png"
              alt=""
              formats={['auto', 'webp', 'avif']}
            />
          </section>
        </div>
      </Layout>
    </PageContext.Provider>
  );
};

export default IndexPage;
