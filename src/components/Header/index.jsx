import SideBar from './sidebar'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function AppHeader() {
    // show sidebar cat
    // const [showSB, setShowSB] = useState(false)
    // const toggleSB = () => {
    //     setShowSB(!showSB)
    // }

    return (
        <div className='appHeader mx-0 max-md:mx-[8px]'>
            {/* category + search bar */}
            <div className='wid-1200'>
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
                            {/* Dùng thay label + checkbox nhưng bị warning code 400
                            <button onClick={toggleSB} className='category-btn max-md:h-[46px]'>
                                <i className='fa-solid fa-list-ul'></i>
                                <span className='mx-[10px]'>Tất cả ngành hàng</span>
                                <i className='fa-solid fa-angle-down'></i>
                            </button>
                            <div className={`category-list ${showSB ? 'max-lg:h-[430px]' : 'max-lg:h-0'}`}>
                                <SideBar />
                            </div> */}
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
                                    <Link to="/Cart" className='text-333'>
                                        <i className='text-26 cursor-pointer fa-solid fa-cart-shopping transiton'></i>
                                        <span className='cart-badge'>0</span>
                                    </Link>
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
        </div>
    )
}

export default AppHeader;