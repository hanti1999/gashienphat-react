
import React, { useState } from 'react'

import useGetData from '../custom-hooks/useGetData'

import '../styles/orders.css'

const Orders = () => {

    const { data: orders } = useGetData('orders');

    return (
        <>
            <div className="wid-1200">
                <div className='w-full mt-16 orders-table'>
                    <div className='grid grid-cols-12 font-semibold pb-4 border-b text-14'>
                        <div className='col-span-2'>Tên KH</div>
                        <div className='col-span-1'>Email</div>
                        <div className='col-span-1'>SĐT</div>
                        <div className='col-span-2'>Địa chỉ</div>
                        <div className='col-span-2'>Ghi chú</div>
                        <div className='col-span-3'>Giỏ hàng</div>
                        <div className='col-span-1'>Trạng thái</div>
                    </div>
                    {
                        orders.map((order, index) => (
                            <div key={index} className='grid grid-cols-12 pt-2'>
                                <div className='col-span-2'>{order.customerName}</div>
                                <div className='col-span-1'>{order.customerEmail}</div>
                                <div className='col-span-1'>{order.customerPhoneNumber}</div>
                                <div className='col-span-2'>{order.customerAddress}</div>
                                <div className='col-span-2'>{order.customerNote}</div>
                                <div className='col-span-3'>
                                    {
                                        order.customerOrders.map((cOrder, index) => (
                                            <div key={index} className='mb-2'>
                                                <div>{cOrder.productName}</div>
                                                <div>SL: {cOrder.quantity}</div>
                                                <div className='border-b'>ĐG {cOrder.price.toLocaleString()}</div>
                                                <div>TT: {cOrder.totalPrice.toLocaleString()}</div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className='col-span-1'>
                                    <button className='px-2 py-2 border rounded-lg bg-red-400'>
                                        <i className="fa-solid fa-xmark pr-1"></i>
                                        Chưa xử lý
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Orders