import React, { FCX } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
  GatsbyImage,
  IGatsbyImageData,
  withArtDirection,
} from 'gatsby-plugin-image';
import { AspectRatio } from '@src/components';
import * as styles from '@src/components/Picture/picture.module.css';

type PicturePropsType = {
  relativePath: string;
};

export type anyImageQueryType = {
  relativePath: string;
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
};

type PictureQueryType = {
  nodes: anyImageQueryType[];
};

export const Picture: FCX<PicturePropsType> = ({ relativePath }) => {
  const { desktopImages, mobileImages } = useStaticQuery<{
    desktopImages: PictureQueryType;
    mobileImages: PictureQueryType;
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
    return n.relativePath.replace(/sp_.+\.(png|jpe?g)$/, '') === relativePath;
  });

  function test({
    desktopImage,
    mobileImage,
  }: {
    desktopImage: {
      relativePath: string;
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
    mobileImage:
      | {
          relativePath: string;
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
          };
        }
      | undefined;
  }) {
    if (desktopImage && mobileImage) {
      return withArtDirection(mobileImage.childImageSharp.gatsbyImageData, [
        {
          media: '(min-width: 768px)',
          image: desktopImage.childImageSharp.gatsbyImageData,
        },
      ]);
    } else {
      return desktopImage.childImageSharp.gatsbyImageData;
    }
  }

  const images = test({
    desktopImage: currentDesktopImage,
    mobileImage: currentMobileImage,
  });

  return (
    <div className="relative">
      {currentMobileImage && (
        <AspectRatio
          className="block md:hidden"
          width={currentMobileImage.childImageSharp.gatsbyImageData.width}
          height={currentMobileImage.childImageSharp.gatsbyImageData.height}
        />
      )}
      <AspectRatio
        className="hidden md:block"
        width={currentDesktopImage.childImageSharp.gatsbyImageData.width}
        height={currentDesktopImage.childImageSharp.gatsbyImageData.height}
      />
      <GatsbyImage
        className={styles.gatsbyImageWrapper}
        image={images}
        alt=""
      />
    </div>
  );
};
