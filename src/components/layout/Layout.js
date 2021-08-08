import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="font-mono text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
