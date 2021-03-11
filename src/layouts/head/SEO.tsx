import React, { FC } from 'react';
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from 'gatsby';

type SEOPropsType = Readonly<{
  // title: string;
  // description: string;
}>;

type SEOSiteMetadata = {
  site: {
    siteMetadata: {
      description: string;
      lang: string;
      name: string;
      siteUrl: string;
      locale: string;
    };
  };
};

export const SEO: FC<SEOPropsType> = () => {
  const data: SEOSiteMetadata = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          description
          lang
          name
          siteUrl
          locale
        }
      }
    }
  `);

  return (
    <>
      <Helmet>
        <html lang={data.site.siteMetadata.lang} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0 " />
        <meta name="format-detection" content="telephone=no" />
        <title>{data.site.siteMetadata.name}</title>
        <meta name="description" content="{{ SEO::description() }}" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={data.site.siteMetadata.locale} />
        <meta
          property="og:url"
          content="{{ SEO::url().Page::permalink(CURRENT_PAGE) }}"
        />
        <meta property="og:site_name" content={data.site.siteMetadata.name} />
        <meta property="og:title" content="{{ SEO::title() }}" />
        <meta property="og:description" content="{{ SEO::description() }}" />
        <meta property="og:image" content="{{ SEO::ogp() }}" />
      </Helmet>
    </>
  );
};
