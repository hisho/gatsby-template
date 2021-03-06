import { Link } from 'gatsby';
import React from 'react';
import Layout from 'src/layouts';
import { SEO, Picture } from 'src/components';
import { useVariables, useSiteMetaData } from 'src/hooks';
import { Button, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { withStyles, makeStyles, createStyles } from '@material-ui/core/styles';
import tw, { css, styled } from 'twin.macro';

// const TestAccordion = withStyles({
//   root: {
//     '&.Mui-expanded': {
//       margin: '0px',
//     },
//   }
// })(Accordion);

const Test = styled.h1`
  color: red;
`;

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      '&.Mui-expanded': {
        margin: '0px',
      },
    },
  })
);

type IndexPageTypes = Readonly<{
  children?: never;
}>;

const IndexPage: React.FC<IndexPageTypes> = () => {
  const indexMeta = useSiteMetaData('1');
  const variables = useVariables();
  const classes = useStyles();
  return (
    <>
      <Layout>
        <SEO siteMetadata={indexMeta} />
        <h1>{variables.breakpoints.lg}</h1>
        <Test>タイトルああああああああああ</Test>
        <Button variant='contained' color='primary'>
          テスト
        </Button>
        <Accordion className={classes.root}>
          <AccordionSummary aria-controls='panel2a-content' id='panel2a-header'>
            アコーディオン
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Picture relativePath='ogp.png' />
        <Picture relativePath='test/screenshot.png' />
        <h1>Hello World</h1>
        <div className='h-screen' />
        <Link to='/test'>下層ページ</Link>
      </Layout>
    </>
  );
};

export default IndexPage;
