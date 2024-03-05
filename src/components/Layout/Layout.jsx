import Header from '../Header';
import Footer from '../Footer';
import ScrollToTop from '../UI/ScrollToTop';
import React from 'react';
import { Analytics } from '@vercel/analytics/react';

import AdminNav from '../../admin/AdminNav';

import { useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname.startsWith('/dashboard') ? <AdminNav /> : <Header />}
      <ScrollToTop />
      <Analytics />
      <Footer />
    </>
  );
};

export default Layout;
