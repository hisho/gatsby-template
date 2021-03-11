import React, { FCX } from 'react';

type FooterPropsType = Readonly<{
  children?: never;
}>;

export const Footer: FCX<FooterPropsType> = ({ className = '' }) => {
  return (
    <>
      <footer className={className}>footer</footer>
    </>
  );
};
