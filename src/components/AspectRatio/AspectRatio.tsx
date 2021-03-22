import React, {FCX} from 'react';
import {percentage} from "@src/helper";

type AspectRatioPropsType = {
  width: number;
  height: number;
};

export const AspectRatio: FCX<AspectRatioPropsType> = (
  {
    className = '',
    children,
    width,
    height,
  }) => {
  return (
    <div
      className={className}
      style={{paddingTop: percentage(height / width)}}
    >
      {children}
    </div>
  );
};
