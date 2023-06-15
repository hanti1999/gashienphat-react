import React, { useState, useEffect, useRef } from 'react'
import { Link, Outlet, NavLink } from 'react-router-dom';

import cLogo from '../../assets/img/icon/gashienphatlogo.png'

import firebase, { db, auth } from '../../firebase/config';

import './header.css'

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

function Header() {
    // Get 'links' from firebase (test)
    // const [links, setlinks] = useState([]);
    // useEffect(() => {
    //     db.collection("links").onSnapshot((snapshot) => {
    //         setlinks(snapshot.docs.map(doc => ({
    //             id: doc.id,
    //             data: doc.data(),
    //         })));
    //     });
    // }, []);

    const headerRef = useRef(null);

    const menuRef = useRef(null)
    const menuRef2 = useRef(null)

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header');
            } else {
                headerRef.current.classList.remove('sticky__header');
            }
        })
    }

    useEffect(() => {
        stickyHeaderFunc();
        return () => window.removeEventListener('scroll', stickyHeaderFunc)
    })

    const menuToggle = () => {
        menuRef.current.classList.toggle('active__menu')
        menuRef2.current.classList.toggle('active__menu')
    }

    return (
        <>
            <header ref={headerRef} className='h-[70px] leading-[7rem] max-lg:h-[60px] max-lg:leading-[6rem]'>
                {/* Nav bar */}
                <div className='wid-1200'>
                    <div className='max-md:mx-[8px] items-center grid grid-cols-12 lg:gap-[24px]'>
                        <div className="col-span-3 max-lg:col-span-6 flex items-center">
                            <Link to="/" className='text-transparent block w-[60px] no-underline max-lg:w-[50px]'>
                                <img src={cLogo} alt="" />
                            </Link>
                            <h1 className='text-primary leading-[2rem] max-md:hidden text-20 font-bold ml-4 max-md:text-16'>Gas Hiền Phát</h1>
                        </div>
                        <nav ref={menuRef} onClick={menuToggle} className="navigation col-span-6">
                            <div className='flex items-center justify-center'>
                                <div ref={menuRef2} className='menu flex flex-1 max-lg:justify-around'>
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
                        <div className='col-span-3 text-right max-lg:col-span-6'>
                            <span className='relative cursor-pointer mr-10'>
                                <i className='text-20 fa-solid fa-heart text-333'></i>
                                <span className='cart-badge'>0</span>
                            </span>
                            <span className='relative cursor-pointer mr-10'>
                                <i className='text-20 fa-solid fa-shopping-cart text-333'></i>
                                <span className='cart-badge'>0</span>
                            </span>
                            <span className='cursor-pointer max-lg:mr-10'>
                                <i className='text-20 fa-solid fa-user text-333'></i>
                            </span>
                            <span onClick={menuToggle} className='hidden max-lg:inline-block'>
                                <i className="fa-solid fa-bars text-20 text-333"></i>
                            </span>
                        </div>
                    </div>

                </div>
            </header>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Header;