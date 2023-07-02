import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'

import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { useNavigate } from 'react-router-dom'

import '../styles/checkout.css'

import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const Checkout = () => {

  const totalQty = useSelector(state => state.cart.totalQuantity)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  const cartItems = useSelector(state => state.cart.cartItems);

  let shipping = 0;

  // checkout
  const [enterName, setEnterName] = useState('');
  const [enterEmail, setEnterEmail] = useState('');
  const [enterPhoneNumber, setEnterPhoneNumber] = useState('');
  const [enterAddress, setEnterAddress] = useState('');
  const [enterNote, setEnterNote] = useState('');

  const navigate = useNavigate();

  const completeCheckout = async(e) => {
    e.preventDefault();
    try {
      const docRef = await collection(db, 'orders');
      await addDoc(docRef, {
        customerName: enterName,
        customerEmail: enterEmail,
        customerPhoneNumber: enterPhoneNumber,
        customerAddress: enterAddress,
        customerNote: enterNote,
        customerOrders: cartItems,
        orderState: 'Chưa xử lý',
      })
      toast.success('Đã gửi đơn hàng thành công!');
      navigate('/')
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      toast.error('Có lỗi xảy ra, vui lòng thử lại!');
    }
  }
  
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
                  <input 
                    value={enterName} 
                    onChange={e => setEnterName(e.target.value)}
                    type="text" 
                    placeholder='Nhập tên của bạn ...' 
                    required 
                  />
                </div>
                <div className='form__group'>
                  <input 
                    value={enterEmail}
                    onChange={e => setEnterEmail(e.target.value)}
                    type="email" 
                    placeholder='Nhập mail của bạn ... (Không bắt buộc)' 
                  />
                </div>
                <div className='form__group'>
                  <input 
                    value={enterPhoneNumber}
                    onChange={e => setEnterPhoneNumber(e.target.value)} 
                    type="number" 
                    placeholder='Nhập số điện thoại của bạn ...' 
                    required
                  />
                </div>
                <div className='form__group'>
                  <input 
                    value={enterAddress} 
                    onChange={e => setEnterAddress(e.target.value)}
                    type="text" 
                    placeholder='Nhập địa chỉ của bạn ...' 
                    required
                  />
                </div>
                <div className='form__group'>
                  <textarea 
                    value={enterNote} 
                    onChange={e => setEnterNote(e.target.value)}
                    type="text" 
                    placeholder='Ghi chú ... (Không bắt buộc)'
                  />
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
                  </span> 
                  <span>{totalAmount > 999000 ? 0 : (shipping = 35000)} vnđ</span>
                </h6>
                <h4>Tổng tiền: <span>{(totalAmount + shipping).toLocaleString()} vnđ</span></h4>
                <button onClick={completeCheckout} className='buy__btn bg-white text-primary mt-8 w-full'>Đặt hàng</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  )
}

export default Checkout