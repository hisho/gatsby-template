import { Link } from 'gatsby';
import React from 'react';
import Layout from '@src/layouts';
import { SEO } from '@src/components';
import { useSiteMetaData } from '@src/hooks';

type TestPageType = Readonly<{
  children?: never;
}>;

const TestPage: React.FC<TestPageType> = () => {
  const testMeta = useSiteMetaData('2');
  return (
    <>
      <Layout>
        <SEO siteMetadata={testMeta} />
        下層ページ
        <Link to='/'>トップページ</Link>
      </Layout>
    </>
  );
};

export default TestPage;
