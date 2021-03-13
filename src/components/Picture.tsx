import React, {FCX} from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {GatsbyImage, IGatsbyImageData} from 'gatsby-plugin-image';

type PicturePropsType = {
  relativePath: string;
};

type PictureQueryType = {
  allFile: {
    nodes: {
      relativePath: string;
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    }[];
  }
}


export const Picture: FCX<PicturePropsType> = ({relativePath}) => {
  const images = useStaticQuery<PictureQueryType>(graphql`
    query AllImages {
      allFile (
        filter: {
          sourceInstanceName: { eq: "images" }
          extension: { regex: "/(png|jpe?g)/" }
        }
      ) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              formats: [AUTO, WEBP, AVIF]
              placeholder: BLURRED
            )
          }
        }
      }
    }
  `);

  const currentImages = images.allFile.nodes.find(
    (n) => n.relativePath === relativePath
  );


  if (!currentImages) {
    return (
      <div>{relativePath}は存在しないよ</div>
    )
  } else {
    return (
      <div>
        <GatsbyImage
          image={currentImages.childImageSharp.gatsbyImageData}
          alt=""
        />
      </div>
    )
  }
};
