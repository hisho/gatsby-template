import React, { FCP } from 'react';
import { Layout, SEO } from '@src/layouts';
import * as styles from '@src/pages/template/index.module.css';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import {usePage} from "@src/hooks/usePage";

const IndexPage: FCP = ({ path }) => {
  const page = usePage('111111');

  return (
    <Layout>
      <SEO currentPageData={page}/>
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
  );
};

export default IndexPage;
