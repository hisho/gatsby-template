import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { pageDataType } from '@src/types/page';
import { useSEO } from '@src/hooks/useSEO';

type SEOPropsType = {
  currentPageData: pageDataType;
};

export const SEO: FC<SEOPropsType> = ({ currentPageData }) => {
  const SEO = useSEO(currentPageData);

  return (
    <>
      <Helmet>
        <html lang={SEO.lang} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0 " />
        <meta name="format-detection" content="telephone=no" />
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={SEO.locale} />
        <meta property="og:url" content={SEO.path} />
        <meta property="og:site_name" content={SEO.name} />
        <meta property="og:title" content={SEO.title} />
        <meta property="og:description" content={SEO.description} />
        <meta property="og:image" content={SEO.image} />
      </Helmet>
    </>
  );
};
