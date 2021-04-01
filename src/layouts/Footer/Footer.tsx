import React, { FC } from 'react';

type FooterPropsType = Readonly<{
  children?: never;
}>;

export const Footer: FC<FooterPropsType> = () => {
  return (
    <>
      <footer className="wrapper"></footer>
    </>
  );
};
