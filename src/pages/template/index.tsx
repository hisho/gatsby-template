import React, { PFC } from 'react';
import { Layout, SEO } from '@src/layouts';
import * as styles from '@src/pages/template/index.module.css';
import { PageContext } from '@src/store';
import { usePageReducer } from '@src/hooks';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';

const IndexPage: PFC = () => {
  const currentPage = usePageReducer('0');

  return (
    <PageContext.Provider value={currentPage}>
      <Layout>
        <SEO />
        <Accordion>
          <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            アコーディオン
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <div className="wrapper">
          <section>
            <h2 className={styles.test}>css modules</h2>
            <h2 className={styles.testTest}>css modules kebab to camelcase</h2>
          </section>
        </div>
      </Layout>
    </PageContext.Provider>
  );
};

export default IndexPage;
