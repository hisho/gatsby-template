import React, { FCX } from 'react';
import { GatsbyImage, GatsbyImageProps } from 'gatsby-plugin-image';
import { AspectRatio } from '@src/components';
import * as styles from '@src/components/Picture/picture.module.css';
import { useAnyImage } from '@src/hooks';

type PicturePropsType = {
  aspect?: boolean;
  relativePath: string;
  alt?: string;
  GatsbyImageProps?: Omit<GatsbyImageProps, 'alt' | 'image' | 'className'>;
};

export const Picture: FCX<PicturePropsType> = ({
  aspect = true,
  relativePath,
  alt = '',
  GatsbyImageProps = {},
}) => {
  const { anyImage, mobileImage, createArtDirection } = useAnyImage(
    relativePath
  );

  if (!anyImage) {
    return <div>{`${relativePath}は存在しません！`}</div>;
  }

  const images = createArtDirection({ desktopImage: anyImage, mobileImage });

  return (
    <div className="relative w-full" style={{ height: 'inherit' }}>
      {aspect && mobileImage && (
        <AspectRatio
          className="block sm:hidden"
          width={mobileImage.childImageSharp.gatsbyImageData.width}
          height={mobileImage.childImageSharp.gatsbyImageData.height}
        />
      )}
      {aspect && (
        <AspectRatio
          className={mobileImage && `hidden sm:block`}
          width={anyImage.childImageSharp.gatsbyImageData.width}
          height={anyImage.childImageSharp.gatsbyImageData.height}
        />
      )}
      <GatsbyImage
        className={styles.gatsbyImageWrapper}
        image={images}
        alt={alt}
        {...GatsbyImageProps}
      />
    </div>
  );
};
