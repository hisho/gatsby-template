import { PageProps } from 'gatsby';
import React from 'react';
import Layout from 'src/layouts';
import { SEO } from 'src/components';
import { useSiteMetaData } from 'src/hooks';

type NotFoundPageType = PageProps &
  Readonly<{
    children?: never;
  }>;

const NotFoundPage: React.FC<NotFoundPageType> = ({ location }) => {
  const NotFoundMeta = useSiteMetaData('999');
  return (
    <>
      <Layout>
        <SEO siteMetadata={{ ...NotFoundMeta, path: location.pathname }} />
        404 not found
      </Layout>
    </>
  );
};

export default NotFoundPage;
