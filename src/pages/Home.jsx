import Helmet from '../components/Helmet/Helmet';
import SideBar from "../components/Header/sidebar";
import ProductList from "../components/UI/ProductList";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import products from '../assets/data/products'
import blogItems from '../assets/data/blogs';
import { ProductCat } from '../assets/data/productCat';

import Clock from '../components/UI/Clock';

import banner1 from '../assets/img/banner/bannerr.jpg'
import banner2 from '../assets/img/banner/salebanner.jpg'
import banner3 from '../assets/img/banner/salebanner2.png'
import banner4 from '../assets/img/banner/chuyendoibinhgas.png'
import counterImg from '../assets/img/product/Paloma-7PEJ_1.png'

function Home() {
    const [hotSalesProducts, setHotSalesProducts] = useState([])
    const [bestSalesProducts, setBestSalesProducts] = useState([])
    const [newProducts, setNewProducts] = useState([])
    const [recommendedProducts, setRecommendedProducts] = useState([])
    const [gasStoveProducts, setGasStoveProducts] = useState([])
    const [electricStoveProducts, setElectricStoveProducts] = useState([])

    useEffect(() => {
        const filterHotSalesProducts = products.filter(item => item.displayHome === 'hotSale');
        setHotSalesProducts(filterHotSalesProducts)

        const filterBestSalesProducts = products.filter(item => item.displayHome === 'bestSale');
        setBestSalesProducts(filterBestSalesProducts)

        const filterNewProducts = products.filter(item => item.displayHome === 'new');
        setNewProducts(filterNewProducts)

        const filterRecommendedProducts = products.filter(item => item.displayHome === 'recommended');
        setRecommendedProducts(filterRecommendedProducts)

        const filterGasStoveProducts = products.filter(item => item.category === 'bep-gas');
        setGasStoveProducts(filterGasStoveProducts)

        const filterElectricStoveProducts = products.filter(item => item.category === 'bep-dien');
        setElectricStoveProducts(filterElectricStoveProducts)
    }, [])

    return (
        <>
            <Helmet title={'Trang chủ'} />
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
                                    <div className='w-[50px] relative text-center'>
                                        <Link to="/Cart" className='text-333'>
                                            <i className='text-22 cursor-pointer fa-solid fa-cart-shopping transiton'></i>
                                            <span className='cart-badge'>0</span>
                                        </Link>
                                    </div>
                                    <div className='w-[50px] relative text-center'>
                                        <Link to="/Cart" className='text-333'>
                                            <i className='text-22 cursor-pointer fa-solid fa-heart transiton'></i>
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
            {/* Home content */}
            <div className="mt-[20px] max-md:mx-[8px]">
                {/* Home catogory */}
                <div className='my-4'>
                    <div className='wid-1200'>
                        <div className='grid grid-cols-12 shadow-s0'>
                            {ProductCat.map((product, index) => (
                                <span key={index} className='product-cat-item'>
                                    <a href={product.href} className='product-cat-item-link'>
                                        <img src={product.src} alt="" className='w-[80%] block bg-[#f8f9fa] rounded-[50%]'/>
                                        <span className='mt-[10px]'>{product.name}</span>
                                    </a>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Hot sale */}
                <div className='my-4'>
                    <div className='wid-1200'>
                        <div className="flex items-center justify-between px-[8px]">
                            <div className="text-[#ff0000] text-24 max-md:text-18 font-medium">
                                <i className="fa-solid fa-fire mr-2"></i>
                                KHUYẾN MÃI HOT
                            </div>
                            <div className="text-14 text-primary cursor-pointer">
                                <Link to="/shop">Xem tất cả</Link>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 max-md:gap-[8px] gap-[24px]'>
                            <ProductList data={hotSalesProducts} />
                        </div>
                    </div>
                </div>
                
                {/* Banner 1 */}
                <div className='my-[10px]'>
                    <div className='wid-1200'>
                        <Link to='/shop'>
                            <img src={banner1} alt="" className='w-full rounded shadow-s0'/>
                        </Link>
                    </div>
                </div>

                {/* Best Sale */}
                <div className='my-4'>
                    <div className='wid-1200'>
                        <div className="flex items-center justify-between px-[8px]">
                            <div className="text-[#ff0000] text-24 max-md:text-18 font-medium">
                                <i className="fa-solid fa-fire mr-2"></i>
                                SẢN PHẨM BÁN CHẠY
                            </div>
                            <div className="text-14 text-primary cursor-pointer">
                                <Link to="/shop">Xem tất cả</Link>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 max-md:gap-[8px] gap-[24px]'>
                            <ProductList data={bestSalesProducts} />
                        </div>
                    </div>
                </div>

                {/* Timer count */}
                <div className='my-4 bg-primary'>
                    <div className="wid-1200 max-md:px-3">
                        <div className="grid grid-cols-12">
                            <div className="col-span-6 max-md:col-span-full">
                                <div>
                                    <h4 className='text-white text-20 mt-8 mb-4'>Ưu đãi giới hạn</h4>
                                    <h3 className='text-white text-24 mb-4'>Bếp gas Paloma nhập khẩu Nhật Bản</h3>
                                </div>
                                <Clock />
                                <button className='bg-white text-14 text-primary font-semibold px-3 py-4 mt-10 rounded-lg'><Link to='/shop'>Đến xem ngay!</Link></button>
                            </div>

                            <div className="col-span-6 max-md:col-span-full">
                                <img className='w-[500px]' src={counterImg} alt="counter img" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* New arrivals */}
                <div className='my-4'>
                    <div className='wid-1200'>
                        <div className="flex items-center justify-between px-[8px]">
                            <div className="text-[#ff0000] text-24 max-md:text-18 font-medium">
                                <i className="fa-solid fa-fire mr-2"></i>
                                SẢN PHẨM MỚI
                            </div>
                            <div className="text-14 text-primary cursor-pointer">
                                <Link to="/shop">Xem tất cả</Link>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 max-md:gap-[8px] gap-[24px]'>
                            <ProductList data={newProducts} />
                        </div>
                    </div>
                </div>

                {/* Banner 2 */}
                <div className='my-[10px]'>
                    <div className='wid-1200'>
                        <Link to='/shop'>
                            <img src={banner4} alt="" className='w-full rounded shadow-s0'/>
                        </Link>
                    </div>
                </div>

                {/* Recommend */}
                <div className='my-4'>
                    <div className='wid-1200'>
                        <div className="flex items-center justify-between px-[8px]">
                            <div className="text-[#ff0000] text-24 max-md:text-18 font-medium">
                                <i className="fa-solid fa-fire mr-2"></i>
                                SẢN PHẨM GỢI Ý
                            </div>
                            <div className="text-14 text-primary cursor-pointer">
                                <Link to="/shop">Xem tất cả</Link>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 max-md:gap-[8px] gap-[24px]'>
                            <ProductList data={recommendedProducts} />
                        </div>
                    </div>
                </div>

                {/* Blog */}
                <div id='tin-tuc' className="blog wid-1200">
                    <div className='bg-white rounded shadow-s0 p-[8px]'>
                        <div className='flex items-center justify-between mb-[8px]'>
                            <h3 className='text-24 text-red-600 font-medium'>
                                <i className='fa-regular fa-newspaper mr-[4px]'></i>
                                Tin tức
                            </h3>
                            <div className='text-14'>
                                <Link to="/news">Xem tất cả</Link>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 gap-[24px]'>
                            {blogItems.map((blogItem, index) => (
                                <div key={index} className='col-span-4 max-md:col-span-12'>
                                    <a href={blogItem.blogHref} className='text-14'>
                                        <div className='shadow-s0 overflow-hidden rounded aspect-video'>
                                            <img src={blogItem.blogImg} alt="" className='w-full' />
                                        </div>
                                        <div className='my-[10px]'>
                                            <i className='fa-regular fa-calendar'></i>
                                            <span className='mx-[4px]'>{blogItem.blogDate}</span>
                                            <i className='fa-regular fa-comment'></i>
                                            <span className='mx-[4px]'>{blogItem.blogCmt}</span>
                                        </div>
                                        <h2 className='blog-name overflow-hidden text-18 font-semibold text-333'>
                                            {blogItem.blogName}
                                        </h2>
                                        <span className='blog-desc overflow-hidden list-disc'>{blogItem.blogDesc}</span>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;