import React, { VFC } from 'react';
import { MenuButton } from '@src/layouts/Navigation/MenuButton';
import { CommonPropsType } from '@src/configs';

type HeaderPropsType = Partial<Pick<CommonPropsType, 'style'>>;

export const Header: VFC<HeaderPropsType> = () => {
  return (
    <>
      <header>
        <MenuButton />
      </header>
    </>
  );
};
