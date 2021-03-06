import React from 'react';

type FooterType = Readonly<{
  children?: never;
}>;

const Footer: React.FC<FooterType> = () => {
  return (
    <>
      <footer>フッターだよ</footer>
    </>
  );
};

export default Footer;
