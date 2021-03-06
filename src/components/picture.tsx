import React from 'react';
import Img from 'gatsby-image/withIEPolyfill';
import { useAnyImage } from '@src/hooks';
import { AspectRatio } from '@src/components';

type PictureType = Readonly<{
  relativePath: string;
  objectFit?: `fill` | `contain` | `cover` | `none` | `scale-down`;
  objectPosition?: string;
  fadeIn?: boolean;
  durationFadeIn?: number;
  alt?: string;
  className?: string | object;
  style?: object;
  loading?: `auto` | `lazy` | `eager`;
  draggable?: boolean;
  children?: never;
}>;

const Picture: React.FC<PictureType> = ({
  relativePath,
  objectFit,
  objectPosition,
  fadeIn,
  durationFadeIn,
  alt,
  className,
  style,
  loading,
  draggable,
}) => {
  const { mobileImage, desktopImage } = useAnyImage(relativePath);

  const source =
    mobileImage && desktopImage
      ? [
          mobileImage,
          {
            ...desktopImage,
            media: `(min-width: 1000px)`,
          },
        ]
      : desktopImage;

  return (
    <>
      {source ? (
        <div className='relative'>
          {mobileImage && (
            <AspectRatio
              className='test-none'
              width={mobileImage.presentationWidth}
              height={mobileImage.presentationHeight}
            />
          )}

          {desktopImage && (
            <AspectRatio
              className={mobileImage && `hidden test-block`}
              width={desktopImage.presentationWidth}
              height={desktopImage.presentationHeight}
            />
          )}

          <Img
            fluid={source}
            style={style}
            className={`absolute w-full h-full inset-0 ${className ?? ''}`}
            alt={alt}
            fadeIn={fadeIn}
            durationFadeIn={durationFadeIn}
            loading={loading}
            draggable={draggable}
            objectFit={objectFit}
            objectPosition={objectPosition}
          />
        </div>
      ) : (
        <div>
          <span className='text-red-500'>
            エラー<span className='font-bold'>"{relativePath}"</span>
            は存在しません。
          </span>
          <br />
          ogp.pngの様に指定してください。
          <br />
          または
          <br />
          common/ogp.pngの様に指定してください。
        </div>
      )}
    </>
  );
};

export default Picture;
