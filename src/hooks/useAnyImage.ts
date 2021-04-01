import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData, withArtDirection } from 'gatsby-plugin-image';

export type anyImageQueryType = {
  relativePath: string;
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
};

export type PictureQueryType = {
  nodes: anyImageQueryType[];
};

type createArtDirectionType = (
  images: {
    desktopImage: anyImageQueryType;
    mobileImage?: anyImageQueryType;
  },
  media?: string
) => IGatsbyImageData;

type useAnyImageType = (
  relativePath: string
) => {
  anyImage?: anyImageQueryType;
  mobileImage?: anyImageQueryType;
  createArtDirection: createArtDirectionType;
};

export const useAnyImage: useAnyImageType = (relativePath) => {
  const { anyImages, mobileImages } = useStaticQuery<{
    anyImages: PictureQueryType;
    mobileImages: PictureQueryType;
  }>(graphql`
    query AllImageas {
      anyImages: allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          extension: { regex: "/(png|jpe?g)/" }
        }
      ) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(
              quality: 90
              webpOptions: { quality: 90 }
              layout: CONSTRAINED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
      mobileImages: allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          extension: { regex: "/(png|jpe?g)/" }
          name: { regex: "/^sp_/" }
        }
      ) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(
              quality: 90
              webpOptions: { quality: 90 }
              layout: CONSTRAINED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    }
  `);

  const currentAnyImage = anyImages.nodes.find(
    (n) => n.relativePath === relativePath
  );

  const currentMobileImage = mobileImages.nodes.find((n) => {
    return n.relativePath.replace(/sp_/, '') === relativePath;
  });

  const createArtDirection: createArtDirectionType = (
    { desktopImage, mobileImage },
    media = `min-width: ${768 / 16}em`
  ) => {
    if (desktopImage && mobileImage) {
      return withArtDirection(mobileImage.childImageSharp.gatsbyImageData, [
        {
          media: `(${media})`,
          image: desktopImage.childImageSharp.gatsbyImageData,
        },
      ]);
    } else {
      return desktopImage.childImageSharp.gatsbyImageData;
    }
  };

  return {
    anyImage: currentAnyImage,
    mobileImage: currentMobileImage,
    createArtDirection,
  };
};
