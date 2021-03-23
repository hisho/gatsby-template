import { useSiteMeta } from '@src/hooks/useSiteMeta';
import { pageDataType } from '@src/configs';
import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData, getSrc } from 'gatsby-plugin-image';

type useSEOType = {
  lang: string;
  locale: string;
  name: string;
  title: string;
  description: string;
  url: string;
  image: string;
  path: string;
};

type useSEOFunctionType = (props: pageDataType) => useSEOType | never;

export const useSEO: useSEOFunctionType = ({
  page_id,
  title,
  description,
  image = 'screenshot.png',
  path,
}) => {
  const ogpImageQuery = useStaticQuery<{
    allFile: {
      nodes: {
        relativePath: string;
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      }[];
    };
  }>(graphql`
    query ogpImageQuery {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          extension: { regex: "/(png|jpe?g)/" }
        }
      ) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(
              layout: FIXED
              aspectRatio: 1.9047619047619047
            )
          }
        }
      }
    }
  `);

  const ogpImage = ogpImageQuery.allFile.nodes.find(
    (n) => n.relativePath === image
  );

  if (!ogpImage) {
    throw new Error(`${image} does not exist`);
  }

  const siteMetaData = useSiteMeta();
  const isTopPage = page_id === '1';
  const pageTitle = isTopPage
    ? siteMetaData.name
    : siteMetaData.name + ' | ' + title;
  const pageDescription = description ? description : siteMetaData.description;
  const pagePath = siteMetaData.siteUrl + path;
  const pageOGPImage =
    siteMetaData.siteUrl + getSrc(ogpImage.childImageSharp.gatsbyImageData);

  return {
    lang: siteMetaData.lang,
    locale: siteMetaData.locale,
    name: siteMetaData.name,
    title: pageTitle,
    description: pageDescription,
    url: siteMetaData.siteUrl,
    image: pageOGPImage,
    path: pagePath,
  };
};
