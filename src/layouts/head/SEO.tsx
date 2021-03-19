import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import {useSiteMetaData} from "@src/hooks";

type SEOPropsType = Readonly<{
  // title: string;
  // description: string;
}>;

export const SEO: FC<SEOPropsType> = () => {
  const siteMetadata = useSiteMetaData();
  return (
    <>
      <Helmet>
        <html lang={siteMetadata.lang} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0 " />
        <meta name="format-detection" content="telephone=no" />
        <title>{siteMetadata.name}</title>
        <meta name="description" content="{{ SEO::description() }}" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={siteMetadata.locale} />
        <meta
          property="og:url"
          content="{{ SEO::url().Page::permalink(CURRENT_PAGE) }}"
        />
        <meta property="og:site_name" content={siteMetadata.name} />
        <meta property="og:title" content="{{ SEO::title() }}" />
        <meta property="og:description" content="{{ SEO::description() }}" />
        <meta property="og:image" content="{{ SEO::ogp() }}" />
      </Helmet>
    </>
  );
};
