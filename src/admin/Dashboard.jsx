
import React from 'react'
import '../styles/dashboard.css'

import useGetData from '../custom-hooks/useGetData'

const Dashboard = () => {
  const { data: products } = useGetData('products');
  const { data: users } = useGetData('users');

  return (
    <section>
      <div className="wid-1200">
        <div className="grid grid-cols-12 mt-16 md:gap-6">
          <div className="col-span-3">
            <div className="revenue__box">
              <h5>Tổng sản lượng</h5>
              <span>0 vnd</span>
            </div>
          </div>
          <div className="col-span-3">
            <div className="order__box">
              <h5>Số đơn hàng</h5>
              <span>0</span>
            </div>
          </div>
          <div className="col-span-3">
            <div className="products__box">
              <h5>Số sản phẩm</h5>
              <span>{products.length}</span>
            </div>
          </div>
          <div className="col-span-3">
            <div className="users__box">
              <h5>Số người dùng</h5>
              <span>{users.length}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard;