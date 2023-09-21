import React from 'react';

import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';

interface ISiteLayout {}

const SiteLayout: React.FC<ISiteLayout> = ({ children }) => {
  return (
    <div className="bg-white min-h-screen h-full font-primary">
      <Header />
      <div className="body-container">{children}</div>
      <Footer />
    </div>
  );
};

export default SiteLayout;
