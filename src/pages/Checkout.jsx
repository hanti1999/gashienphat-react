import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'

import '../styles/checkout.css'

import { useSelector } from 'react-redux'

const Checkout = () => {

  const totalQty = useSelector(state => state.cart.totalQuantity)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  return (
    <Helmet title='Thanh toán' >
      <CommonSection title={'Thanh toán'}/>
      <section>
        <div className="wid-1200">
          <div className="checkout__wrapper grid grid-cols-12 mt-8 max-md:gap-[8px] gap-[24px]">
            <div className="checkout__item col-span-8 max-lg:col-span-12">
              <h6 className='mb-4 text-20 font-bold'>Thông tin thanh toán</h6>
              <form className='billing__form'>
                <div className='form__group'>
                  <input type="text" placeholder='Nhập tên của bạn ...' required />
                </div>
                <div className='form__group'>
                  <input type="email" placeholder='Nhập mail của bạn ... (Không bắt buộc)' />
                </div>
                <div className='form__group'>
                  <input type="number" placeholder='Nhập số điện thoại của bạn ...' required/>
                </div>
                <div className='form__group'>
                  <input type="text" placeholder='Nhập địa chỉ của bạn ...' required/>
                </div>
                <div className='form__group'>
                  <input type="text" placeholder='Nhập tên của bạn ...' required/>
                </div>
              </form>
            </div>
            <div className="checkout__item col-span-4 max-lg:col-span-12">
              <div className="checkout__cart">
                <h6>Tổng số lượng: <span>{totalQty}</span></h6>
                <h6>Số tiền: <span>{totalAmount.toLocaleString()} vnd</span></h6>
                <h6>
                  <span>
                    Phí vận chuyển: <br/>
                    Miễn phí vận chuyển
                  </span> 
                  <span>0.000 vnd</span>
                </h6>
                <h4>Tổng tiền: <span>{totalAmount.toLocaleString()} vnd</span></h4>
                <button className='buy__btn bg-white text-primary mt-8 w-full'>Đặt hàng</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  )
}

export default Checkout