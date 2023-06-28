import React, { useEffect, useRef } from 'react'
import { Link, Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

import cLogo from '../../assets/img/icon/gashienphatlogo.png'
import userIcon from '../../assets/img/icon/user.png'

import useAuth from '../../custom-hooks/useAuth'

import { motion } from 'framer-motion'

import { auth } from '../../firebase.config';

import './header.css'
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

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
    const headerRef = useRef(null);

    const totalQuantity = useSelector(state => state.cart.totalQuantity);

    const menuRef = useRef(null);
    const menuRef2 = useRef(null);

    const profileActionRef = useRef(null)

    const navigate = useNavigate();
    
    const { currentUser } = useAuth();

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header');
            } else {
                headerRef.current.classList.remove('sticky__header');
            }
        })
    }

    const logout = () => {
        signOut(auth).then(() => {
            toast.success('Đã đăng xuất!');
            navigate('/');
        }).catch(err => {
            toast.error(err.message);
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

    const navigateToCart = () => {
        navigate('/Cart');
    }

    const toggleProfileActions = () => profileActionRef.current.classList.toggle('show__profile-actions')

    return (
        <>
            <header ref={headerRef} className='h-[70px] leading-[7rem] max-lg:h-[60px] max-lg:leading-[6rem]'>
                {/* Nav bar */}
                <div className='wid-1200 h-full'>
                    <div className='header items-center h-full grid grid-cols-12 lg:gap-[24px]'>
                        <div className="col-span-3 max-lg:col-span-6 flex items-center">
                            <Link to="/" className='text-transparent block w-[60px] no-underline max-lg:w-[50px] max-[320px]:w-[40px]'>
                                <img src={cLogo} alt="" />
                            </Link>
                            <h1 className='text-primary leading-[2rem] max-md:hidden text-20 font-bold ml-4 cursor-default max-md:text-16'>Gas Hiền Phát</h1>
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
                        <div className='col-span-3 max-lg:col-span-6 leading-none flex items-center justify-end'>
                            <span className='relative cursor-pointer mr-10'>
                                <i className='max-[320px]:text-14 text-20 fa-solid fa-heart text-333'></i>
                                <span className='header__badge'>0</span>
                            </span>
                            <span className='relative cursor-pointer mr-10' onClick={navigateToCart}>
                                <i className='max-[320px]:text-14 text-20 fa-solid fa-shopping-cart text-333'></i>
                                <span className='header__badge'>{totalQuantity}</span>
                            </span>
                            <div className='profile cursor-pointer max-lg:mr-10 inline-block'>
                                <motion.img whileTap={{scale: 1.2}} src={currentUser ? currentUser.photoURL : userIcon} alt="" onClick={toggleProfileActions} />
                                {/* <p>Xin chào {currentUser.displayName}</p> */}
                                <div className="profile__actions" ref={profileActionRef}>
                                    {currentUser ? (
                                        <span onClick={logout}>Đăng xuất</span>
                                    ) : (
                                        <div className='flex flex-col items-center text-14'>
                                            <Link to='/signup'>Đăng ký</Link>
                                            <Link className='border-t border-solid border-[#ccc]' to='/login'>Đăng nhập</Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <span onClick={menuToggle} className='hidden max-lg:inline-block'>
                                <i className="max-[320px]:text-14 fa-solid fa-bars text-20 text-333"></i>
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