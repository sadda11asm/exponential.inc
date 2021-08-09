import React from 'react';
import Footer from './Footer';
import Header from './Header';
import google_office from '../../images/google-office.jpg';

const Layout = ({ children }) => {
  return (
    // <div className="relative bg-fixed before:absolute before:inset-0 before:bg-black/70 bg-cover bg-opacity-75" style={{backgroundImage: `url(${google_office})`}}>
    // <div className="bg-primary bg-opacity-25">
    <>
      <Header />
      <main className="font-mono text-gray-900">{children}</main>
      <Footer />
    </>
    // </div>
    // </div>
  );
};

export default Layout;
