import { Link } from 'gatsby';
import React from 'react';
import Layout from 'src/layouts';
import { SEO, Picture } from 'src/components';
import { useSiteMetaData } from 'src/hooks';

type templatePageType = Readonly<{
  children?: never;
}>;

const templatePage: React.FC<templatePageType> = () => {
  const templateMeta = useSiteMetaData('10000');
  return (
    <>
      <Layout>
        <SEO siteMetadata={templateMeta} />
        <h1>Hello World</h1>
        <Picture relativePath='screenshot.png' className='text-red-500' />
        <div className='h-screen' />
        <Picture relativePath='test/screenshot.png' />
        <Link to='/'>リンク</Link>
      </Layout>
    </>
  );
};

export default templatePage;
