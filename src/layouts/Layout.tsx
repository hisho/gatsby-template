import React, { FCX } from 'react';
import { Header } from '@src/layouts/Header/Header';
import { Footer } from '@src/layouts/Footer/Footer';

type LayoutPropsType = Readonly<{
  children: React.ReactNode;
}>;

export const Layout: FCX<LayoutPropsType> = ({ className = '', children }) => {
  return (
    <>
      <Header />
      <main className={className}>{children}</main>
      <Footer />
    </>
  );
};
