import React, { useEffect } from 'react';

import Header from '@components/layout/Header';
import router from 'next/router';

interface IAppLayoutProps { }
const AppLayout: React.FC<IAppLayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Header isApp />
      <div className="app-body-container flex flex-col">{children}</div>
    </div >
  )
};

export default AppLayout;
