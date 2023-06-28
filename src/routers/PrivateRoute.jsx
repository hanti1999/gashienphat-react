
import React from 'react'
import useAuth from '../custom-hooks/useAuth'
import { Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    const {currentUser} = useAuth();
    return currentUser.email === 'nth.anh020209@gmail.com' ? <Outlet /> : <div className='w-full text-center mt-8'><h1 className='text-20 font-bold'>Bạn không có quyền truy cập trang này!</h1></div>
}

export default PrivateRoute