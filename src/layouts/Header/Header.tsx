import React, { FC } from 'react';
import { MenuButton } from '@src/layouts/Navigation/MenuButton';

type HeaderPropsType = Readonly<{
  style?: React.CSSProperties;
  children?: never;
}>;

export const Header: FC<HeaderPropsType> = () => {
  return (
    <>
      <header>
        <MenuButton />
      </header>
    </>
  );
};
