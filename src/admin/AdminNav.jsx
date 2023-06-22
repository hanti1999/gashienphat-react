
import React from 'react'
import useAuth from '../custom-hooks/useAuth'

import '../styles/admin-nav.css'

import { NavLink, Outlet } from 'react-router-dom'

const admin__nav = [
    {
        display: 'Dashboard',
        path: '/dashboard'
    },
    {
        display: 'Sản phẩm',
        path: '/dashboard/all-products'
    },
    {
        display: 'Đơn hàng',
        path: '/dashboard/orders'
    },
    {
        display: 'Người dùng',
        path: '/dashboard/users'
    },
]

const AdminNav = () => {
    const {currentUser} = useAuth()
    return (
    <>
        <header className='admin__header w-full py-8 bg-primary'>
            <div className="admin__navbar-top w-full">
                <div className="wid-1200">
                    <div className="admin__nav-wrapper-top flex items-center justify-between">
                        <div className="logo">
                            <h2 className='text-16 text-[#f5f5f5]'>Gas Hiền Phát</h2>
                        </div>

                        <div className="search__box flex flex-1 items-center justify-between">
                            <input className='text-14 px-2 py-4 w-full' type="text" placeholder='Tìm kiếm' />
                            <button className='h-full bg-white block px-4 py-4'>
                                <i className="fa-solid fa-magnifying-glass text-primary"></i>  
                            </button>
                        </div>

                        <div className="admin__nav-top-right flex items-center">
                            <span><i className="fa-regular fa-bell"></i></span>
                            <span><i className="fa-solid fa-gear"></i></span>
                            <img className='w-16 h-16 rounded-[50px] cursor-pointer' src={currentUser.photoURL} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <section className='admin__menu w-full h-[70px] leading-[70px]'>
            <div className="wid-1200">
                <div className="admin__navigation text-center">
                    <ul className="admin__menu-list flex items-center justify-center text-14">
                        {admin__nav.map((item, index) => (
                            <li key={index} className="admin__menu-item">
                                <NavLink 
                                    className={navClass => navClass.isActive ? 'active__admin-menu' : ''}
                                    to={item.path}>
                                    {item.display}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

        <div>
            <Outlet />
        </div>
    </>
  )
}

export default AdminNav