import React, { VFC, useReducer } from 'react';
import { Header } from '@src/layouts/Header/Header';
import { Footer } from '@src/layouts/Footer/Footer';
import { MobileNavigation } from '@src/layouts/Navigation/MobileNavigation';
import { NavigationContext, NavigationContextReducer } from '@src/store';
import { CommonPropsType } from '@src/configs';

type LayoutPropsType = Partial<Pick<CommonPropsType, 'className'>> &
  Pick<CommonPropsType, 'children'> &
  Readonly<{
    hero?: React.ReactNode;
  }>;

export const Layout: VFC<LayoutPropsType> = ({
  hero,
  className = '',
  children,
}) => {
  const headerHeight = 'var(--header-height)';
  const [state, dispatch] = useReducer(NavigationContextReducer, {
    open: false,
  });

  return (
    <>
      <NavigationContext.Provider value={{ state, dispatch }}>
        <Header style={{ height: headerHeight }} />
        <MobileNavigation />
      </NavigationContext.Provider>
      <div style={{ marginTop: headerHeight }} />
      {hero}
      <main className={`wrapper ${className}`}>{children}</main>
      <Footer />
    </>
  );
};
