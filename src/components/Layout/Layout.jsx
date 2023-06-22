import Header from '../Header'
import Footer from '../Footer'
import ScrollToTop from '../UI/ScrollToTop'
import React from 'react'

import { Routers } from '../../routers/Routers'

import AdminNav from '../../admin/AdminNav'

import { useLocation } from 'react-router-dom';


const Layout = () => {
    const location = useLocation();
    return (
        <>
            {location.pathname.startsWith('/dashboard') ? <AdminNav /> : <Header />}
            <ScrollToTop />
            <Footer />
        </>
    )
}

export default Layout