import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import blogItems from '../assets/data/blogs';
import ProductCat from '../assets/data/productCat';
import Category from '../assets/data/category';

import '../styles/home.css'

import Helmet from '../components/Helmet/Helmet';
import Clock from '../components/UI/Clock';
import ProductList from "../components/UI/ProductList";

import banner1 from '../assets/img/banner/bannerr.jpg'
import banner2 from '../assets/img/banner/salebanner.jpg'
import banner3 from '../assets/img/banner/salebanner2.png'
import banner4 from '../assets/img/banner/chuyendoibinhgas.png'
import mainBannerImg from '../assets/img/banner/modern-kitchen.png'
import counterImg from '../assets/img/product/Paloma-7PEJ_1.png'

import useGetData from "../custom-hooks/useGetData";

function Home() {
    const { data: products, loading } = useGetData('products');

    const [hotSalesProducts, setHotSalesProducts] = useState([])
    const [bestSalesProducts, setBestSalesProducts] = useState([])
    const [newProducts, setNewProducts] = useState([])
    const [recommendedProducts, setRecommendedProducts] = useState([])

    useEffect(() => {
        const filterHotSalesProducts = products.filter(item => item.displayHome === 'hotSale');
        setHotSalesProducts(filterHotSalesProducts)

        const filterBestSalesProducts = products.filter(item => item.displayHome === 'bestSale');
        setBestSalesProducts(filterBestSalesProducts)

        const filterNewProducts = products.filter(item => item.displayHome === 'new');
        setNewProducts(filterNewProducts)

        const filterRecommendedProducts = products.filter(item => item.displayHome === 'recommended');
        setRecommendedProducts(filterRecommendedProducts)
    }, [products])

    return (
        <>
            <Helmet title={'Trang chủ'} />
            <div className='mx-0'>
                {/* category + search bar */}
                <div className='wid-1200'>
                    <div className='header grid grid-cols-12 lg:gap-[24px] max-lg:grid-cols-1'>
                        <div className='col-span-3 max-lg:col-span-full'>
                            <div className="relative shadow-s0">
                                <label htmlFor='show-category' className='category-btn max-md:h-[46px]'>
                                    <i className='fa-solid fa-list-ul'></i>
                                    <span className='mx-[10px]'>Tất cả ngành hàng</span>
                                    <i className='fa-solid fa-angle-down'></i>
                                </label>
                                <input type="checkbox" hidden name="" id="show-category" />
                                <div className='category__list max-lg:h-0 lg:h-[400px]'>
                                    <ul className='list-none bg-white'>
                                        {Category.map((item, index) => (
                                            <li key={index} className='category__item'>
                                                <Link className='category__item-link' to={item.typeHref}>{item.type}</Link>
                                                <i className="fa-solid fa-angle-right"></i>
                                                <div className='category__child'>
                                                    {item.childCats.map((childCat, index) => (
                                                        <div key={index} className={childCat.title === '' ? 'hidden' : 'w-[180px]'}>
                                                            <div className="py-[10px] px-[12px]">
                                                                <span className='category__child--head'>{childCat.title}</span>
                                                            </div>
                                                            <ul className="list-none">
                                                                {childCat.childItems.map((childItem, index) => (
                                                                    <li key={index} className="px-[12px]">
                                                                        <a className="text-16 py-[10px] block hover:text-primary hover:font-medium" href={childItem.href}>{childItem.name}</a>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-9 max-lg:col-span-full'>
                            <div className='bg-primary h-[450px] max-md:h-auto rounded overflow-hidden max-lg:mt-[10px] grid grid-cols-2'>
                                <div className='text-white cursor-default col-span-1 px-5 pt-16 pb-4 max-md:col-span-full'>
                                    <span className='text-16 font-light'>Chào mừng quý khách <br/>Đến với website chính thức của</span>
                                    <h2 className='text-[3.2rem] max-md:text-24 my-6'>Cty tnhh Hiền Phát Vina</h2>
                                    <p className='text-16 font-light'>Chuyên cung cấp gas, bếp gas, điện gia dụng, máy lọc nước, máy làm mát, gạo, tấm</p>
                                    <button className='buy__btn bg-white text-primary mt-20'><Link to='/shop'>Đến mua ngay!</Link></button>
                                </div>
                                <div className='col-span-1 p-4 text-right max-md:col-span-full flex justify-center items-center'>
                                    <div className="relative">
                                        <img src={mainBannerImg} alt="" className="w-full" />
                                        <a className="text-333 text-sm absolute right-1/4 bottom-10" target="_blank" href="http://www.freepik.com">Designed by alexandercho / Freepik</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Home content */}
            <div className="content mt-[20px]">
                {/* Home catogory */}
                <div className='my-4'>
                    <div className='wid-1200'>
                        <div className='grid grid-cols-12 shadow-s0'>
                            {ProductCat.map((product, index) => (
                                <span key={index} className='product__cat-item'>
                                    <Link to={product.href} className='product__cat-item-link'>
                                        <img src={product.src} alt="" className='w-[80%] block bg-[#f8f9fa] rounded-[50%]'/>
                                        <span className='mt-[10px]'>{product.name}</span>
                                    </Link>
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
                        {
                            loading ? (
                                <div className='text-center'>
                                    <h5 className='font-bold text-18'>Loading... <i className="fa-solid fa-spinner fa-spin"></i></h5>
                                </div>) : (
                                    <div className='grid grid-cols-12 max-md:gap-[8px] gap-[24px]'>
                                        <ProductList data={hotSalesProducts} />
                                    </div>
                                )
                        }
                    </div>
                </div>
                
                {/* Banner 1 */}
                <div className='my-4'>
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
                        {loading ? (
                                <div className='text-center'>
                                    <h5 className='font-bold text-18'>Loading... <i className="fa-solid fa-spinner fa-spin"></i></h5>
                                </div>) : (
                                    <div className='grid grid-cols-12 max-md:gap-[8px] gap-[24px]'>
                                        <ProductList data={bestSalesProducts} />
                                    </div>
                                )
                        }
                    </div>
                </div>

                {/* Timer count */}
                <div className='my-4 bg-primary rounded'>
                    <div className="wid-1200">
                        <div className="counter grid grid-cols-12">
                            <div className="col-span-6 max-md:col-span-full">
                                <div>
                                    <h4 className='text-white text-20 mt-8 mb-4'>Ưu đãi giới hạn</h4>
                                    <h3 className='text-white text-24 mb-4'>Bếp gas Paloma nhập khẩu Nhật Bản</h3>
                                </div>
                                <Clock />
                                <button className='buy__btn bg-white text-primary mt-10'><Link to='/shop'>Đến xem ngay!</Link></button>
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
                        {loading ? (
                                <div className='text-center'>
                                    <h5 className='font-bold text-18'>Loading... <i className="fa-solid fa-spinner fa-spin"></i></h5>
                                </div>) : (
                                    <div className='grid grid-cols-12 max-md:gap-[8px] gap-[24px]'>
                                        <ProductList data={newProducts} />
                                    </div>
                                )
                        }
                    </div>
                </div>

                {/* Banner 2 */}
                <div className='my-4'>
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
                        {loading ? (
                                <div className='text-center'>
                                    <h5 className='font-bold text-18'>Loading... <i className="fa-solid fa-spinner fa-spin"></i></h5>
                                </div>) : (
                                    <div className='grid grid-cols-12 max-md:gap-[8px] gap-[24px]'>
                                        <ProductList data={recommendedProducts} />
                                    </div>
                                )
                        }
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
                                    <div className='text-14'>
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
                                            <Link to={`news/${blogItem.id}`}>
                                                {blogItem.blogName}
                                            </Link>
                                        </h2>
                                        <span className='blog-desc overflow-hidden list-disc'>{blogItem.blogDesc}</span>
                                    </div>
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