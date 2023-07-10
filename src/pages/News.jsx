import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection'

import blogPic from '../assets/img/banner/thang7.png'

import { motion } from 'framer-motion';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

import { useState } from 'react';

import blogs from '../assets/data/blogs'

import '../styles/news.css'

function News() {
    return (
        <Helmet title={'Tin tức'} >
            <CommonSection title={'Tin tức'} />
            <div className="wid-1200">
                {/* <div className="new-blogs mt-8">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-7 max-md:col-span-12">
                            <div className='relative overflow-hidden rounded-lg '>
                                <div className='aspect-video'>
                                    <motion.img whileHover={{scale: 1.05}} className='absolute object-cover brightness-50' src={blogPic} alt="Giá gas tháng 07/2023" />
                                </div>
                                <div className='absolute p-8 max-md:p-4 bottom-0 w-full text-white cursor-default'>
                                    <h3 className='text-18 max-md:text-14 font-bold mb-6'>Giá gas tháng 07/2023</h3>
                                    <span className='text-14 max-md:text-12'>
                                        Giá gas tháng 07/2023 chính thức tiếp tục gảm 18.000đ/b 12kg | 30.000đ/b 20kg | 67.500đ/b 45kg
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-5 max-md:col-span-12">
                            {
                                blogs.slice(0,5).map((blog, index)=> (
                                    <div className='flex mb-8 max-lg:mb-4 blog__mini' key={index}>
                                        <div className='overflow-hidden w-40 aspect-video rounded-lg mr-4 flex-2'>
                                            <img src={blog.blogImg} alt="" className='object-cover' />
                                        </div>
                                        <div className='flex-1'>
                                            <Link to={`/news/${blog.id}`}>
                                                <h3 className='font-bold text-16 text-333 mb-4'>{blog.blogName}</h3>
                                            </Link>
                                            <span className='text-[#6c757d]'>{blog.blogDate}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div> */}

                <h3 className='main__paginate my-8 text-26 font-bold'>Tin tức</h3>
                <PaginatedItems itemsPerPage={6} />
            </div>
        </Helmet>
    )
}

function Items({ currentItems }) {
    return (
      <>
        <div className='main__paginate grid grid-cols-12 gap-6'>
            {
                currentItems.map((blog, index) => (
                    <div key={index} className="col-span-4 max-md:col-span-6">
                        <div className='blog-card rounded-lg overflow-hidden transition-all duration-150 hover:shadow-s4 border'>
                            <Link to={`/news/${blog.id}`} className='aspect-video w-full block' >
                                <img src={blog.blogImg} alt="" className='w-full h-full object-cover' />
                            </Link>
                            <div className='p-4 text-333'>
                                <Link to={`/news/${blog.id}`}>
                                    <h3 className='font-bold text-18 hover:text-primary'>{blog.blogName}</h3>
                                </Link>
                                <p className='text-[#6c757d] py-4'>{blog.blogDate}</p>
                                <span className='blog-desc text-14'>
                                    {blog.blogDesc}
                                </span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
      </>
    );
}

function PaginatedItems({ itemsPerPage }) {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = blogs.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(blogs.length / itemsPerPage);
  
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % blogs.length;
        setItemOffset(newOffset);
    };
  
    return (
      <>
        <Items currentItems={currentItems} />
        <div className='news__paginate mt-8'>
            <ReactPaginate
                breakLabel="..."
                nextLabel="Tiếp >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< Lùi"
                renderOnZeroPageCount={null}
                containerClassName='page-ul'
            />
        </div>
      </>
    );
  }

export default News;