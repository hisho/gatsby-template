import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type SEOType = {
  siteMetadata: Partial<{
    title: string;
    description: string;
    path: string;
    image: string;
  }>;
};

type SEOSiteMetadata = {
  site: {
    siteMetadata: {
      description: string;
      lang: string;
      title: string;
      siteUrl: string;
      locale: string;
    };
  };
  imageSharp: {
    fixed: {
      src: string;
    };
  };
  allImageSharp: {
    nodes: [
      {
        fixed: {
          src: string;
          originalName: string;
        };
      }
    ];
  };
};

const SEO: React.FC<SEOType> = ({ siteMetadata }) => {
  const data: SEOSiteMetadata = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          description
          lang
          title
          siteUrl
          locale
        }
      }
      imageSharp(fixed: { originalName: { eq: "ogp.png" } }) {
        fixed(width: 1200, height: 630) {
          src
        }
      }
      allImageSharp {
        nodes {
          fixed(width: 1200, height: 630) {
            src
            originalName
          }
        }
      }
    }
  `);

  const title = siteMetadata?.title
    ? `${data.site.siteMetadata.title} | ${siteMetadata.title}`
    : data.site.siteMetadata.title;
  const description = siteMetadata?.description ?? data.site.siteMetadata.description;
  const url = siteMetadata?.path
    ? `${data.site.siteMetadata.siteUrl}${siteMetadata.path}`
    : data.site.siteMetadata.siteUrl;
  const defaultImage = data.imageSharp;
  const customImage = data.allImageSharp.nodes.find((n) => n.fixed.originalName === siteMetadata.image);
  const imageName = customImage ?? defaultImage;
  const image = `${data.site.siteMetadata.siteUrl}${imageName.fixed.src}`;

  return (
    <Helmet>
      <html lang={data.site.siteMetadata.lang} />
      <title>{title}</title>
      <link rel='canonical' href={url} />
      <meta name='description' content={description} />
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content={data.site.siteMetadata.title} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={url} />
      <meta property='og:locale' content={data.site.siteMetadata.locale} />
      <meta property='og:image' content={image} />
      <meta property='og:image:secure_url' content={image} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
    </Helmet>
  );
};

export default SEO;
