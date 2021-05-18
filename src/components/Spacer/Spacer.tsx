import React from 'react';
import { rem } from '@src/helper';
import { CommonPropsType } from '@src/configs';

type SpacerPropsType = Partial<Pick<CommonPropsType, 'className'>> & {
  size: number | 'auto';
  style?: Omit<React.CSSProperties, 'height'>;
};

export const Spacer: React.VFC<SpacerPropsType> = ({
  className = '',
  style = {},
  size,
}) => {
  return (
    <span
      aria-hidden={true}
      className={`block ${className}`}
      style={{
        ...{
          height: size === 'auto' ? 'auto' : rem(size),
        },
        ...style,
      }}
    />
  );
};
