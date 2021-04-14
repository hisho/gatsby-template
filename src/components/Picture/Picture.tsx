import React, { FCX } from 'react';
import { GatsbyImage, GatsbyImageProps } from 'gatsby-plugin-image';
import { AspectRatio } from '@src/components';
import * as styles from '@src/components/Picture/picture.module.css';
import { useAnyImage, useVariables } from '@src/hooks';
import { breakpointsNamesType } from '@src/configs/variables';

type PicturePropsType = Omit<GatsbyImageProps, 'alt' | 'image' | 'className'> & {
  aspect?: boolean;
  breakpoint?: breakpointsNamesType;
  src: string;
  alt?: string;
};

export const Picture: FCX<PicturePropsType> = ({
  breakpoint = 'sm',
  aspect = true,
  src,
  alt = '',
  ...GatsbyImageProps
}) => {
  const { breakpoints } = useVariables();
  const { anyImage, mobileImage, createArtDirection } = useAnyImage(src);

  if (!anyImage) {
    return <div>{`${src}は存在しません！`}</div>;
  }

  const images = createArtDirection(
    { desktopImage: anyImage, mobileImage },
    `min-width: ${breakpoints[breakpoint] / 16}em`
  );

  return (
    <div className="relative w-full" style={{ height: 'inherit' }}>
      {aspect && mobileImage && (
        <AspectRatio
          className={`block ${breakpoint}:hidden`}
          width={mobileImage.childImageSharp.gatsbyImageData.width}
          height={mobileImage.childImageSharp.gatsbyImageData.height}
        />
      )}
      {aspect && (
        <AspectRatio
          className={mobileImage && `hidden ${breakpoint}:block`}
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
