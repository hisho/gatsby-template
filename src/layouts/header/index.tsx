import React from 'react';

type HeaderType = Readonly<{
  children?: never;
}>;

const Header: React.FC<HeaderType> = () => {
  return (
    <>
      <header>ヘッダーだよ</header>
    </>
  );
};

export default Header;
