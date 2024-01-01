import React from 'react';
import { Link } from 'react-router-dom';

import ScrollToTop from '../components/UI/ScrollToTop';
import '../styles/don-tet-sale-het.css';
import logo from '../assets/img/icon/gashienphatlogo.png';
import banner from '../assets/img/banner/DonTetSaleHet1.png';
import banner2 from '../assets/img/banner/DonTetSaleHet_BepDien.png';
import Footer from '../components/Footer/index';
import mayLocNuoc from '../assets/data/mayLocNuoc.js';
import bepDien from '../assets/data/bepDien.js';

const DonTetSaleHet = () => {
  return (
    <div className='sale-page'>
      <Header />
      <Body />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

// Header
const Header = () => {
  return (
    <div className=' h-[60px] fixed w-full top-0 bg-white shadow-sm z-50'>
      <div className='container-1 h-full'>
        <div className='flex justify-between items-center h-full'>
          <Link
            to='/'
            className='block w-[60px] max-lg:w-[50px] max-[320px]:w-[40px]'
          >
            <img src={logo} alt='' />
          </Link>

          <div className=' border-2 rounded-full border-333 text-333'>
            <div className=' px-4 py-2'>
              <i className='fa-solid fa-phone-volume pr-2'></i>
              <a href='tel:0986359498'>
                <b>0986 359 498</b>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// End Header

// Body
const Body = () => {
  return (
    <div className='mt-[60px]'>
      <section className='banner bg-[#fb77c5] flex justify-center'>
        <img src={banner} alt='' />
      </section>

      <section className='container-1 services'>
        <div className=' my-10'>
          <ServiceList />
        </div>
      </section>

      <section className='container-1 sub-banner'>
        <div className=' rounded-3xl overflow-hidden'>
          <img src={banner2} alt='' />
        </div>
      </section>

      <section className=' border-b-4 border-[#fb77c5]'>
        <div className='text-center mt-10'>
          <h1 className=' text-[40px] font-bold text-[#fb77c5]'>
            MÁY LỌC NƯỚC
          </h1>
        </div>
        <div
          style={{
            backgroundImage: `url(https://tapdoandaiviet.com.vn/manage/responsive_filemanager/source/MTSP%20MLN/Daikiosan/NongNguoi/3-buoc-loc-sach-may-loc-nuoc-ro-daikiosan-01.jpg)`,
          }}
          className=' bg-fixed bg-cover bg-no-repeat w-full mt-10'
        >
          <div className='container-1'>
            <div className=' grid grid-cols-4 gap-4 py-[20px]'>
              {mayLocNuoc.map((i, index) => (
                <ProductCard item={i} key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='text-center mt-10'>
          <h1 className=' text-[40px] font-bold text-[#fb77c5]'>BẾP ĐIỆN TỪ</h1>
        </div>
        <div
          style={{
            backgroundImage: `url(https://tapdoandaiviet.com.vn/manage/responsive_filemanager/source/MTSP%20MLN/may-loc-nuoc-dat-quy-chuan-quoc-gia-ve-nuoc-uong-truc-tiep.jpg)`,
          }}
          className=' bg-fixed bg-cover bg-no-repeat w-full mt-10 mb-[-20px]'
        >
          <div className='container-1'>
            <div className=' grid grid-cols-4 gap-4 py-[20px]'>
              {bepDien.map((i, index) => (
                <ProductCard item={i} key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const servicesData = [
  {
    icon: 'fa-solid fa-award',
    desc: '100% chính hãng',
  },
  {
    icon: 'fa-solid fa-shield',
    desc: 'Bảo hành tận nhà',
  },
  {
    icon: 'fa-solid fa-truck-fast',
    desc: 'Miễn phí giao hàng trong khu vực Long Thành',
  },
  {
    icon: 'fa-solid fa-money-check',
    desc: 'Đang dạng phương thức thanh toán như COD, chuyển khoản',
  },
];

const ServiceList = () => {
  return (
    <div className='flex justify-around select-none'>
      {servicesData.map((item, index) => (
        <ServiceCard item={item} key={index} />
      ))}
    </div>
  );
};

const ServiceCard = ({ item }) => {
  const { icon, desc } = item;
  return (
    <div className=' rounded-3xl overflow-hidden border shadow-md w-72 h-72'>
      <div className=' flex items-center justify-center flex-col h-full px-10 py-10 service-card-item text-primary'>
        <i className={`text-4xl ${icon}`}></i>
        <p className='text-16 text-center mt-4'>{desc}</p>
      </div>
    </div>
  );
};

const ProductCard = ({ item }) => {
  const { imgUrl, productName, oldPrice, currentPrice, description } = item;
  return (
    <div className='product-card rounded-2xl overflow-hidden'>
      <div className=' bg-[#ffffff99] mx-6 mt-6 rounded-lg relative'>
        <div className='absolute bg-red-500 rounded-br-lg rounded-tl-lg'>
          <span className='block px-2 py-1 text-white text-16 font-bold'>
            Giảm {100 - (currentPrice * 100) / oldPrice} %
          </span>
        </div>
        <img src={imgUrl} alt='' />
      </div>
      <div className='mx-6 my-6'>
        <h2 className='font-medium text-20'>{productName}</h2>
        <span className='text-red-500 font-bold text-20 mr-2'>
          {currentPrice.toLocaleString()}đ
        </span>
        <span className=' line-through text-[#999] text-16'>
          {oldPrice.toLocaleString()}đ
        </span>
      </div>
      {/* <div className='mx-6 my-6'>
        {description.map((d, index) => (
          <p key={index}>{d}</p>
        ))}
      </div> */}
    </div>
  );
};

// End Body

export default DonTetSaleHet;
