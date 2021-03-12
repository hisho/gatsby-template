import React, { FCP } from 'react';
import { Layout, SEO } from '@src/layouts';
import * as styles from '@src/pages/template/index.module.css';

const IndexPage: FCP = () => {
  return (
    <Layout>
      <SEO />
      <div className="wrapper">
        <section>
          <h2 className={styles.test}>css modules</h2>
          <h2 className={styles.testTest}>css modules kebab to camelcase</h2>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;
