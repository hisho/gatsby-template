import React, { FCX } from 'react';

type HeaderPropsType = Readonly<{
  children?: never;
}>;

export const Header: FCX<HeaderPropsType> = ({ className = '' }) => {
  return (
    <>
      <header className={className}>header</header>
    </>
  );
};
