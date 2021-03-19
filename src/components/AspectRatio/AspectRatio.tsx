import React, { FCX } from 'react';

type AspectRatioPropsType = {
  width: number;
  height: number;
};

export const AspectRatio: FCX<AspectRatioPropsType> = ({
  className = '',
  children,
  width,
  height,
}) => {
  return (
    <div
      className={className}
      style={{ paddingTop: `${(height / width) * 100}%` }}
    >
      {children}
    </div>
  );
};
