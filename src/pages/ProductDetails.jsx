
import React, { useState, useRef, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import ProductList from '../components/UI/ProductList'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import { toast } from 'react-toastify'

import {motion} from 'framer-motion'

import '../styles/product-details.css'

const ProductDetails = () => {
    const [tab, setTab] = useState('desc')
    const reviewUser = useRef('')
    const reviewMsg = useRef('')
    const dispatch = useDispatch()

    const [rating, setRating] = useState(null)
    const {id} = useParams()
    const product = products.find(item => item.id === id)

    const {imgUrl, productName, oldPrice, price, avgRating, reviews, description, category} = product;

    const relatedProduct = products.filter(item => item.category === category)

    const submitHandler = (e) => {
        e.preventDefault()
        const reviewUserName = reviewUser.current.value;
        const reviewUserMgs = reviewMsg.current.value;

        const reviewObj = {
            userName: reviewUserName,
            text: reviewUserMgs,
            rating: rating,
        }

        console.log(reviewObj);
        toast.success('Gửi đánh giá thành công!');
    }

    const addToCart = () => {
        dispatch(cartActions.addItem({
            id,
            image: imgUrl,
            productName,
            price,
        }))
        toast.success('Đã thêm sản phẩm vào giỏ hàng!')
    }

    // Kéo về đầu màn hình khi ấn vào sp
    useEffect(() => {
        window.scrollTo(0,0)
    }, [product])
  return (
    <Helmet title={productName}>
        <CommonSection title={productName}/>
        <section>
            <div className='wid-1200'>
                <div className='grid grid-cols-12'>
                    <div className="col-span-6">
                        <img src={imgUrl} alt="" />
                    </div>
                    <div className="col-span-6">
                        <div className="product__details mt-20">
                            <h2 className='text-18'>{productName}</h2>
                            <div className='product__rating flex items-center gap-6 my-4'>
                                <div>
                                    <span><i className="fa-solid fa-star"></i></span>
                                    <span><i className="fa-solid fa-star"></i></span>
                                    <span><i className="fa-solid fa-star"></i></span>
                                    <span><i className="fa-solid fa-star"></i></span>
                                    <span><i className="fa-solid fa-star-half-stroke"></i></span>
                                </div>

                                <p className='text-[#ff7f50] font-medium'>({avgRating})</p>
                            </div>
                            <div className='product__price flex items-center gap-5'>
                                <span className='line-through mr-2 text-14'>{oldPrice}</span>
                                <span className='text-18 font-medium'>{price} vnđ</span>
                                <span>Danh mục: {category}</span>
                            </div>

                            <motion.button 
                                whileTap={{scale: 1.1}} 
                                className='buy__btn bg-primary text-white mt-10'
                                onClick={addToCart}
                            >
                                Thêm vào giỏ hàng
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='lower-section'>
            <div className="wid-1200">
                <div className="grid grid-cols-12 max-md:gap-[8px] gap-[24px]">
                    <div className="col-span-12">
                        <div className="tab__wrapper flex items-center gap-5">
                            <h6 
                                className={`${tab === 'desc' ? 'active__tab' : ''}`}
                                onClick={() => setTab('desc')}
                            >
                                Thông tin sản phẩm
                            </h6>
                            <h6 
                                className={`${tab === 'rev' ? 'active__tab' : ''}`}
                                onClick={() => setTab('rev')}
                            >
                                Đánh giá ({reviews.length})
                            </h6>
                        </div>

                        {tab === 'desc' ? (
                            <div className='tab__content mt-6 text-333'>
                                {description.map((des,index) => (
                                    <li key={index}>{des}</li>
                                ))}
                            </div>) : (
                            <div className='product__review mt-6 text-333'>
                                <div className="review__wrapper">
                                    <ul className='font-semibold'>
                                        {reviews.map((item, index) => (
                                            <li key={index} className='mb-4'>
                                                <h6>Hong Cuc</h6>
                                                <span>{item.rating}</span>
                                                <p className='mt-4 font-normal'>{item.text}</p>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="review__form w-[70%] m-auto mt-20">
                                        <h4 className='text-14 font-semibold mb-12'>Đánh giá của bạn: </h4>
                                        <form action="" onSubmit={submitHandler}>
                                            <div className="form__group">
                                                <input ref={reviewUser} type="text" placeholder='Nhập tên ...' required/>
                                            </div>
                                            <div className="form__group flex items-center gap-5">
                                                <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(1)}>1<i className="fa-solid fa-star"></i></motion.span>
                                                <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(2)}>2<i className="fa-solid fa-star"></i></motion.span>
                                                <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(3)}>3<i className="fa-solid fa-star"></i></motion.span>
                                                <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(4)}>4<i className="fa-solid fa-star"></i></motion.span>
                                                <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(5)}>5<i className="fa-solid fa-star"></i></motion.span>
                                            </div>
                                            <div className="form__group">
                                                <textarea ref={reviewMsg} rows={4} type="text" placeholder='Nội dung ...' required/>
                                            </div>

                                            <motion.button whileTap={{scale: 1.2}} type='submit' className='buy__btn !bg-primary text-white'>Gửi đánh giá</motion.button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <div className='col-span-12 mt-5'>
                        <h2 className="related__title text-14 font-semibold mt-12">Có thể bạn cũng thích</h2>
                    </div>
                    <ProductList data={relatedProduct} />
                </div>
            </div>
        </section>
    </Helmet>
  )
}

export default ProductDetails