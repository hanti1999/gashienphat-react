import facebookLogo from '../../assets/img/icon/facebookLogo.png'
import zaloLogo from '../../assets/img/icon/zaloLogo.jpg'
import youtubeLogo from '../../assets/img/icon/youtubeLogo.png'
import HpLogo from '../../assets/img/icon/gashienphatlogo.png'
// import { links } from '../../assets/links'
import SideBar from './sidebar'
import firebase, { db, auth } from '../../firebase/config'
import React, { useState, useEffect } from 'react'
import { mainNavs } from '../../assets/mainNav';

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

    // change color nav
    const [action, setAction] = useState('Trang chủ');

    return (
        <header className='appHeader mx-0 max-md:mx-[8px]'>
            <div className='bg-rgb237 h-[46px] absolute inset-x-0 z-[-1]'></div>
            <div className='max-w-[1200px] my-0 ml-auto mr-auto md:max-lg:w-[644px]'>
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
                            <a href="#" className='text-333 no-underline'>
                                <i className='fa-solid fa-user text-16 mr-[8px]'></i>
                                <span className='text-16 max-lg:text-20'>Đăng nhập/Đăng ký</span>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Mobile nav bar */}
                <div className='hidden max-md:block fixed inset-x-0 bottom-0 h-[46px] bg-rgb237 z[1]'>
                    <div className='grid grid-cols-3 h-full'>
                        <div>
                            <a href="#" className='mobile-nav-link'>
                                <i className='text-20 fa-solid fa-user'></i>
                                <span>Tài khoản</span>
                            </a>
                        </div>
                        <div className='border-l border-solid border-[#e0e0e0]'>
                            <a href="#" className='mobile-nav-link'>
                                <i className='text-20 fa-solid fa-heart'></i>
                                <span>Yêu thích</span>
                            </a>
                        </div>
                        <div className='border-l border-solid border-[#e0e0e0]'>
                            <a href="#" className='mobile-nav-link'>
                                <i className='text-20 fa-solid fa-cart-shopping'></i>
                                <span>Giỏ hàng</span>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Nav bar */}
                <div className='items-center h-[80px] grid grid-cols-12 lg:gap-[24px] max-lg:grid-cols-1 max-lg:h-[46px]'>
                    <div className="col-span-3 max-lg:hidden">
                        <a href="#" className='text-transparent block w-[60px] no-underline'>
                            <img src={HpLogo} alt="" />
                        </a>
                    </div>
                    <nav className="col-span-9 max-lg:col-span-full">
                        <div className='flex items-center justify-center'>
                            <div className='flex flex-1 max-md:justify-between max-lg:justify-around'>
                                {mainNavs.map((mainNav, index) => (
                                   <div key={index} className='lg:mr-[40px]' onClick={() => {setAction(mainNav.title)}}>
                                        <a href={mainNav.href} className={action === mainNav.title ? 'navlink active' : 'navlink'}>{mainNav.title}</a>
                                   </div>
                                ))}
                            </div>
                        </div>
                    </nav>
                </div>
                {/* category + search bar */}
                <div className='grid grid-cols-12 lg:gap-[24px] max-lg:grid-cols-1'>
                    <div className='col-span-3 max-lg:col-span-full'>
                        <div className="relative shadow-s0">
                            <label htmlFor='show-category' className='category-btn max-md:h-[46px]'>
                                <i className='fa-solid fa-list-ul'></i>
                                <span className='mx-[10px]'>Tất cả ngành hàng</span>
                                <i className='fa-solid fa-angle-down'></i>
                            </label>
                            <input type="checkbox" hidden name="" id="show-category" />
                            <SideBar />
                        </div>
                    </div>
                    <div className='col-span-9 max-lg:col-span-full'>
                        <div className="flex h-[50px] mt-[10px] lg:my-0 max-md:mt-[4px] max-md:h-[46px]">
                            <div className="flex items-center shadow-s0 rounded relative flex-1">
                                <input className='flex-1 outline-none px-[16px] py-[8px] text-14' type="text" placeholder='Bạn cần tìm gì?' name="" id="" />
                                <button className='!bg-primary w-[100px] h-full text-center cursor-pointer rounded-r'>
                                    <span className='text-white text-14 font-bold leading-[5rem] block'>Tìm kiếm</span>
                                </button>
                            </div>
                            <div className='flex items-center max-md:hidden'>
                                <div className='w-[120px] relative text-center'>
                                    <a href="#" className='text-333'>
                                        <i className='text-26 cursor-pointer fa-solid fa-cart-shopping'></i>
                                        <span className='cart-badge'>0</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='mt-[10px] rounded overflow-hidden relative max-md:mt-[4px]'>
                            <div className="bg-mainBanner h-[420px] bg-no-repeat bg-center bg-cover blur-sm"></div>
                            <div className='absolute top-[60%] left-[10%] text-white cursor-default'>
                                <span className='text-20 font-medium'>Chào mừng quý khách <br/>Đến với website chính thức của</span>
                                <h2 className='text-[3.2rem] mt-[5px] font-bold'>CTY TNHH HIỀN PHÁT VINA</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;