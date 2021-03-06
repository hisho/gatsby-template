import { graphql, useStaticQuery } from 'gatsby';

type siteMetaDataType = Readonly<{
  page_id: string;
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}>;

// page_idからpage-config.jsonのオブジェクトを返す関数
const useSiteMetaData = (pageId: siteMetaDataType['page_id']): siteMetaDataType => {
  const {
    file: {
      childDataJson: { pages },
    },
  } = useStaticQuery<{
    file: {
      childDataJson: {
        pages: siteMetaDataType[];
      };
    };
  }>(
    graphql`
      query useSiteMetaDataQuery {
        file(relativePath: { eq: "page-config.json" }) {
          childDataJson {
            pages {
              page_id
              title
              description
              path
              image
            }
          }
        }
      }
    `
  );

  const findPageIdMetaData = pages.find((n) => n.page_id.includes(pageId));
  return findPageIdMetaData as siteMetaDataType;
};

export default useSiteMetaData;
