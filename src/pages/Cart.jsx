import Helmet from '../components/Helmet/Helmet';
import '../styles/cart.css'
import CommonSection from '../components/UI/CommonSection'

import { motion } from 'framer-motion'
import { cartActions } from '../redux/slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'

function Cart() {
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = useSelector(state => state.cart.totalAmount)

    return (
        <Helmet title={'Giỏ hàng'}>
            <CommonSection title={'Giỏ hàng'}/>
            <section className='wid-1200'>
                <div className='cart__wrapper grid grid-cols-12 md:gap-8 mt-8 text-333'>
                    <div className="col-span-9 max-md:col-span-12">
                        {
                            cartItems.length === 0 ? (<div className='text-20 text-center font-medium'>Chưa có sản phẩm trong giỏ hàng!</div>) : (
                            <table className='table w-full'>
                                <thead>
                                    <tr>
                                        <th className='max-sm:hidden'>Hình ảnh</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Đơn giá</th>
                                        <th>SL</th>
                                        <th>Xóa</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {cartItems.map((item, index) => (
                                        <Tr item={item} key={index} />
                                    ))}
                                </tbody>
                            </table>)
                        }
                    </div>
                    <div className="col-span-3 max-md:col-span-12 max-md:mt-8">
                        <div className='flex justify-between items-center'>
                            <h6 className='text-16'>Tổng tiền:</h6>
                            <span className='font-bold text-20'>{totalAmount.toLocaleString()} vnđ</span>
                        </div>
                        <p className='mt-4'>Thuế và phí vận chuyển sẽ được tính khi thanh toán</p>
                        <div>
                            <button className='buy__btn bg-primary text-white w-full mt-6'><Link to='/shop'>Tiếp tục mua sắm</Link></button>
                            <button className='buy__btn bg-primary text-white w-full mt-4'><Link to='/checkout'>Thanh toán</Link></button>
                        </div>
                    </div>
                </div>
            </section>
        </Helmet>
    )
}

const Tr = ({item}) => {
    const dispatch = useDispatch()

    const handleProduct = () => {
        dispatch(cartActions.deleteItem(item.id))
    }

    return (
        <tr className='cart__table-body'>
            <td className='max-sm:hidden'><img className='!w-32 !h-32 object-cover' src={item.imgUrl} alt="" /></td>
            <td>{item.productName}</td>
            <td>{item.price.toLocaleString()}</td>
            <td>{item.quantity}</td>
            <td><motion.i 
                whileTap={{scale: 1.2}} 
                onClick={handleProduct}
                className="fa-solid fa-trash-can cursor-pointer"
            >
                </motion.i>
            </td>
        </tr>
    )
}

export default Cart;