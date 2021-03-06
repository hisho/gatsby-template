import React from 'react';
import Header from 'src/layouts/header';
import Footer from 'src/layouts/footer';

type LayoutType = Readonly<{
  children: React.ReactNode;
}>;

const Layout: React.FC<LayoutType> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
