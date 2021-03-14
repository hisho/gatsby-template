import React, {FCX} from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {GatsbyImage, IGatsbyImageData, withArtDirection} from 'gatsby-plugin-image';
import {AspectRatio} from "@src/components";

type PicturePropsType = {
  relativePath: string;
};

type PictureQueryType = {
  nodes: {
    relativePath: string;
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  }[];
};

export const Picture: FCX<PicturePropsType> = ({relativePath}) => {
  const {desktopImages, mobileImages} = useStaticQuery<{
    desktopImages: PictureQueryType;
    mobileImages: PictureQueryType
  }>(graphql`
    query AllImages {
      desktopImages: allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          extension: { regex: "/(png|jpe?g)/" }
          name: { regex: "/^(?!sp_)/" }
        }
      ) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              formats: [AUTO, WEBP, AVIF]
              placeholder: BLURRED
            )
          }
        }
      },
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
              layout: FULL_WIDTH
              formats: [AUTO, WEBP, AVIF]
              placeholder: BLURRED
            )
          }
        }
      }
    }
  `);

  const currentDesktopImage = desktopImages.nodes.find(
    (n) => n.relativePath === relativePath
  );

  if (!currentDesktopImage) {
    return <div>{relativePath}は存在しないよ</div>;
  }

  const currentMobileImage = mobileImages.nodes.find((n) => {
    return n.relativePath.replace(/sp_/, '') === relativePath;
  });


  function test({desktopImage, mobileImage}: {
    desktopImage: {
      relativePath: string;
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      }
    },
    mobileImage: {
      relativePath: string;
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      }
    } | undefined,
  }) {
    if (desktopImage && mobileImage) {
      return withArtDirection(mobileImage.childImageSharp.gatsbyImageData, [
        {
          media: "(min-width: 768px)",
          image: desktopImage.childImageSharp.gatsbyImageData,
        },
      ]);
    } else {
      return desktopImage.childImageSharp.gatsbyImageData;
    }
  }

  const images = test({desktopImage: currentDesktopImage, mobileImage: currentMobileImage});

  return (
    <div className="relative">
      {currentMobileImage && <AspectRatio className="block md:hidden" width={currentMobileImage.childImageSharp.gatsbyImageData.width} height={currentMobileImage.childImageSharp.gatsbyImageData.height}/>}
      <AspectRatio className="hidden md:block" width={currentDesktopImage.childImageSharp.gatsbyImageData.width} height={currentDesktopImage.childImageSharp.gatsbyImageData.height}/>
      <GatsbyImage
        className="absolute inset-0"
        image={images}
        alt=""
      />
    </div>
  );
};
