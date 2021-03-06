import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';

type imageSize = {
  presentationWidth: number;
  presentationHeight: number;
};

type useAnyImageQueryType = {
  edges: {
    node: {
      relativePath: string;
      childImageSharp: {
        fluid: FluidObject & imageSize;
      };
    };
  }[];
};

type anyImageType = {
  desktopImage: (FluidObject & imageSize) | undefined;
  mobileImage: (FluidObject & imageSize) | undefined;
};

const useAnyImage = (relativePath: string): anyImageType => {
  const { desktopImages, mobileImages } = useStaticQuery<{
    desktopImages: useAnyImageQueryType;
    mobileImages: useAnyImageQueryType;
  }>(graphql`
    query useAnyImage {
      desktopImages: allFile(
        filter: {
          extension: { regex: "/(png|jpe?g)/" }
          sourceInstanceName: { eq: "images" }
          name: { regex: "/^(?!sp_)/" }
        }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 2000, quality: 90) {
                presentationWidth
                presentationHeight
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      mobileImages: allFile(
        filter: {
          extension: { regex: "/(png|jpe?g)/" }
          sourceInstanceName: { eq: "images" }
          name: { regex: "/^sp_/" }
        }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 1000, quality: 90) {
                presentationWidth
                presentationHeight
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const desktopImageName = relativePath;
  const mobileImageName = relativePath.replace(/((?!.*\/).+\.(png|jpe?g))$/, 'sp_$1');

  const desktopImage = desktopImages.edges.find((n) => n.node.relativePath.includes(desktopImageName))?.node
    .childImageSharp.fluid;
  const mobileImage = mobileImages.edges.find((n) => n.node.relativePath.includes(mobileImageName))?.node
    .childImageSharp.fluid;

  return {
    desktopImage,
    mobileImage,
  };
};

export default useAnyImage;
