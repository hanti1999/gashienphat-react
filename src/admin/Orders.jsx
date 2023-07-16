
import React from 'react'

import useGetData from '../custom-hooks/useGetData'
import { updateDoc, doc } from 'firebase/firestore'
import { db } from '../firebase.config'

import '../styles/orders.css'

const Orders = () => {

    const { data: orders } = useGetData('orders');

    const changeOrderState = async(id) => {
        try {
            const docRef = doc(db, 'orders', id);
            await updateDoc(docRef, {
                orderState: 'Đã xử lý'
            });
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
        }
    }

    return (
        <>
            <div className="container mx-auto px-4">
                <div className='w-full mt-16 orders-table'>
                    <div className='grid grid-cols-12 font-semibold pb-4 border-b text-14'>
                        <div className='col-span-2'>Tên KH</div>
                        <div className='col-span-1'>SĐT</div>
                        <div className='col-span-3'>Địa chỉ</div>
                        <div className='col-span-2'>Ghi chú</div>
                        <div className='col-span-3'>Giỏ hàng</div>
                        <div className='col-span-1'>Trạng thái</div>
                    </div>
                    {
                        orders.map((order, index) => (
                            <div key={index} className='grid grid-cols-12 pt-2 border-b'>
                                <div className='col-span-2'>{order.customerName}</div>
                                <div className='col-span-1'>{order.customerPhoneNumber}</div>
                                <div className='col-span-3'>{order.customerAddress}</div>
                                <div className='col-span-2'>{order.customerNote}</div>
                                <div className='col-span-3'>
                                    {
                                        order.customerOrders.map((cOrder, index) => (
                                            <div key={index} className='mb-2'>
                                                <div>{cOrder.productName}</div>
                                                <span>{cOrder.price.toLocaleString()}</span> 
                                                <span> x {cOrder.quantity}</span>
                                                <span className='font-medium text-14'> = {cOrder.totalPrice.toLocaleString()}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className='col-span-1'>
                                    <button 
                                        onClick={() => changeOrderState(order.id)} 
                                        className={`px-2 py-2 border rounded-lg ${order.orderState === 'Chưa xử lý' ? 'bg-red-400' : 'bg-blue-400'}`}
                                    >
                                        <i className={`pr-1 ${order.orderState === 'Chưa xử lý' ? 'fa-solid fa-xmark' : 'fa-solid fa-check'}`}></i>
                                        {order.orderState}
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