import { graphql, useStaticQuery } from 'gatsby';

export type SEOSiteMetaData = {
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

export const useSiteMetaData = () => {
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
