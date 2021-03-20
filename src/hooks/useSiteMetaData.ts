import { graphql, useStaticQuery } from 'gatsby';

export type siteMetadataType = {
  description: string;
  lang: string;
  name: string;
  siteUrl: string;
  locale: string;
};

export type SEOSiteMetaData = {
  site: {
    siteMetadata: siteMetadataType;
  };
};

export const useSiteMetaData = (): siteMetadataType => {
  const data: SEOSiteMetaData = useStaticQuery(graphql`
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

  return data.site.siteMetadata;
};
