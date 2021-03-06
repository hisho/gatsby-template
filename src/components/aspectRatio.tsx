import React from 'react';
import { percentage } from 'src/utilities';

type AspectRatioType = Readonly<{
  className?: string;
  width: number;
  height: number;
  children?: never;
}>;

const AspectRatio: React.FC<AspectRatioType> = ({ className, width, height }) => {
  return (
    <>
      <div
        aria-hidden='true'
        className={className}
        style={{
          display: 'block',
          width: '100%',
          paddingTop: percentage(height / width),
        }}
      />
    </>
  );
};

export default AspectRatio;
