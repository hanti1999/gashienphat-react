import React, { useState, useEffect } from 'react'
import { Link, Outlet, NavLink } from 'react-router-dom';

import facebookLogo from '../../assets/img/icon/facebookLogo.png'
import zaloLogo from '../../assets/img/icon/zaloLogo.jpg'
import youtubeLogo from '../../assets/img/icon/youtubeLogo.png'
import HpLogo from '../../assets/img/icon/gashienphatlogo.png'

import firebase, { db, auth } from '../../firebase/config';

import Notice from './Notice';

const mainNavs = [
    {
        title: 'Trang chủ',
        href: '/'
    },
    {
        title: 'Mua hàng',
        href: '/Shop'
    }
    ,{
        title: 'Tin tức',
        href: '/News'
    },
    {
        title: 'Giỏ hàng',
        href: '/Cart'
    },
];

function AppHeader() {
    // Get 'links' from firebase (test)
    const [links, setlinks] = useState([]);
    useEffect(() => {
        db.collection("links").onSnapshot((snapshot) => {
            setlinks(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })));
        });
        // console.log({ links });
    }, []);

    return (
        <>
            <Notice />
            <div className='bg-rgb237 h-[46px] absolute inset-x-0 z-[-1]'></div>
            <div className='wid-1200'>
                {/* Top header */}
                <div className="flex h-[46px] justify-between items-center max-md:justify-center">
                    <div className="flex items-center">
                        <div className="flex items-center lg:pr-[20px]">
                            <i className="fa-solid fa-phone text-16"></i>
                            {links?.map(({id, data}) => (
                                <div className='flex' key={id}>
                                    <a className="phone-number" href={data.call072}>0986 573 072</a>
                                    <a className="phone-number" href={data.call610}>02513 511 610</a>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center pl-[20px] border-l border-solid border-[#ccc] max-lg:hidden">
                            <i className="fa-solid fa-motorcycle text-14 mr-[8px]"></i>
                            <span className="text-16 text-333">
                                Miễn phí giao hàng cho đơn hàng từ <b className="text-16 font-antonio">999.000đ</b>
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center max-md:hidden">
                        {links?.map(({id, data}) => (
                            <div key={id} className="flex items-center pr-[20px] max-lg:hidden">
                                <a className="ml-[16px] text-transparent" target="_blank" href={data.facebookHP}>
                                    <img className='w-[20px]' src={facebookLogo} alt="" />
                                </a>
                                <a className="ml-[16px] text-transparent" target="_blank" href={data.zaloLink926}>
                                    <img className='w-[20px]' src={zaloLogo} alt="" />
                                </a>
                                <a className="ml-[16px] text-transparent" target="_blank" href={data.youtubeLink}>
                                    <img className='w-[20px]' src={youtubeLogo} alt="" />
                                </a>
                            </div>
                        ))}
                        <div className="flex items-center lg:pl-[20px] lg:border-l lg:border-solid lg:border-[#ccc]">
                            <Link to="/SignIn" className='text-333 no-underline'>
                                <i className='fa-solid fa-user text-16 mr-[8px]'></i>
                                <span className='text-16 max-lg:text-20'>Đăng nhập/Đăng ký</span>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Mobile nav bar */}
                <div className='hidden max-md:block fixed inset-x-0 bottom-0 h-[46px] bg-rgb237 z-10'>
                    <div className='grid grid-cols-3 h-full'>
                        <div>
                            <Link to="/" className='mobile-nav-link'>
                                <i className='text-20 fa-solid fa-user'></i>
                                <span>Tài khoản</span>
                            </Link>
                        </div>
                        <div className='border-l border-solid border-[#e0e0e0]'>
                            <Link to="/" className='mobile-nav-link'>
                                <i className='text-20 fa-solid fa-heart'></i>
                                <span>Yêu thích</span>
                            </Link>
                        </div>
                        <div className='border-l border-solid border-[#e0e0e0]'>
                            <Link to='/Cart' className='mobile-nav-link'>
                                <i className='text-20 fa-solid fa-cart-shopping'></i>
                                <span>Giỏ hàng</span>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Nav bar */}
                <div className='max-md:mx-[8px] items-center h-[80px] grid grid-cols-12 lg:gap-[24px] max-lg:grid-cols-1 max-lg:h-[46px]'>
                <div className="col-span-3 max-lg:hidden">
                    <Link to="/" className='text-transparent block w-[60px] no-underline'>
                        <img src={HpLogo} alt="" />
                    </Link>
                </div>
                <nav className="col-span-9 max-lg:col-span-full">
                    <div className='flex items-center justify-center'>
                        <div className='flex flex-1 max-md:justify-between max-lg:justify-around'>
                            {mainNavs.map((mainNav, index) => (
                                <nav key={index} className='lg:mr-[40px] navlink'>
                                    <NavLink 
                                        to={mainNav.href} 
                                        className={(navClass) => navClass.isActive ? 'active' : '' }
                                    >
                                        {mainNav.title}
                                    </NavLink>
                                </nav>
                            ))}
                        </div>
                    </div>
                </nav>
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default AppHeader;