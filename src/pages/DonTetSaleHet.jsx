import React from 'react';
import { Link } from 'react-router-dom';

import ScrollToTop from '../components/UI/ScrollToTop';
import '../styles/don-tet-sale-het.css';
import Footer from '../components/Footer/index';
import logo from '../assets/img/icon/gashienphatlogo.png';
import banner from '../assets/img/banner/DonTetSaleHet1.png';
import banner2 from '../assets/img/banner/DonTetSaleHet_MayLocNuoc.png';
import banner3 from '../assets/img/banner/DonTetSaleHet_BepDien.png';
import ruleImg from '../assets/img/banner/asset-2bgr-20231120072644-om_8h.png';
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
            <div className=' px-4 py-2  text-16 md:text-20'>
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
        <ServiceList />
      </section>

      <section className='container-1 rule rounded-2xl '>
        <div className='mt-10 text-center px-6 py-6 text-333'>
          <div>
            <h3 className=' text-30 font-bold'>THỂ LỆ</h3>
            <ul className='text-20'>
              <li>- Mỗi mã hàng chỉ có thể mua 1 sản phẩm</li>
              <li>
                - Sản phẩm chính hãng được bảo hành theo chính sách của hãng
              </li>
              <li>
                - Áp dụng mua trực tiếp tại cửa hàng hoặc giao hàng trong khu
                vực Long Thành
              </li>
            </ul>
          </div>
          <div className='font-bold text-20 bg-white py-4 my-2 mx-10 rounded-2xl text-[#fb77c5]'>
            <i className='fa-solid fa-location-dot mr-2'></i>
            199, QL 51, Xã An Phước, huyện Long Thành, tỉnh Đồng Nai
            <a
              className='px-2 py-2 ml-2 text-white bg-[#fb77c5] md:mt-0 mt-2 rounded-lg inline-block'
              href='https://maps.app.goo.gl/YC47K6zwn6efQNK27'
              target='_blank'
            >
              <i className='fa-solid fa-hand-point-right mr-2'></i>
              Bản đồ
            </a>
          </div>
        </div>
      </section>

      <section className='container-1 rule rounded-2xl '>
        <div className='mt-10 px-6 py-6 text-333 grid md:grid-cols-2 grid-cols-1'>
          <div>
            <h3 className=' text-30 font-bold'>QUÀ TẶNG HẤP DẪN</h3>
            <ul className='text-20'>
              <li>
                - Giảm giá trực tiếp lên đến <b>50%</b>
              </li>
              <li>
                - Khi mua các sản phẩm của Daikiosan sẽ được tham gia chương
                trình <b>BÃO QUÀ 38 TỶ</b>, chi tiết chương trình:
              </li>
            </ul>
            <div className='text-20 bg-white py-4 px-4 my-2 rounded-2xl text-333'>
              <h4 className='text-[#fb77c5]'>
                <b>Lần 1: Kích hoạt bảo hành - trúng quà liền tay</b>
              </h4>
              <p>
                Khi khách hàng mua sản phẩm và được Đại Lý của Đại Việt kích
                hoạt bảo hành điện tử thành công thì sẽ có mã dự thưởng và được
                tham gia “Vòng Quay Trúng Thưởng” trên ứng dụng điện thoại "Đại
                Việt Go". Chọn mục “Vòng Quay Trúng Thưởng” và quét mã QR Code
                của tem bảo hành dán trên sản phẩm. Khách hàng bấm vào “Quay
                ngay” để thực hiện vòng quay và có cơ hội nhận được hàng ngàn
                quà có tổng giá trị gần <b>6 TỶ đồng</b>.
              </p>
              <h4 className='text-[#fb77c5]'>
                <b>Lần 2: Livestream quay số</b>
              </h4>
              <p>
                Mã dự thưởng của khách hàng sẽ lưu trữ trên hệ thống của chương
                trình để tiếp tục tham gia chương trình "Livestream quay số
                trúng thưởng" với giá trị lên đến gần 500 triệu đồng. (Chương
                trình Livestream sẽ diễn ra vào ngày <b>11.03.2024</b> tại
                Fanpage Daikiosan).
              </p>
            </div>
          </div>
          <div className='md:block hidden'>
            <img src={ruleImg} alt='' />
          </div>
        </div>
      </section>

      <section className='container-1 sub-banner'>
        <Banner img={banner2} />
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
            <div className=' grid grid-cols-2 md:grid-cols-4 gap-4 py-[20px]'>
              {mayLocNuoc.map((i, index) => (
                <ProductCard item={i} key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='container-1 sub-banner'>
        <Banner img={banner3} />
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
            <div className=' grid grid-cols-2 md:grid-cols-4 gap-4 py-[20px]'>
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

const Banner = ({ img }) => {
  return (
    <div className=' rounded-3xl overflow-hidden mt-10'>
      <img src={img} alt='' />
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
    <div className=' grid grid-cols-2 md:grid-cols-4 gap-10 justify-center items-center select-none mt-10'>
      {servicesData.map((item, index) => (
        <ServiceCard item={item} key={index} />
      ))}
    </div>
  );
};

const ServiceCard = ({ item }) => {
  const { icon, desc } = item;
  return (
    <div className=' rounded-3xl overflow-hidden border shadow-md h-60'>
      <div className=' flex items-center justify-center flex-col h-full px-10 py-10 service-card-item text-333'>
        <i className={`text-5xl ${icon}`}></i>
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
        <div className=' flex flex-col md:flex-row'>
          <span className='text-red-500 font-bold text-20 mr-2'>
            {currentPrice.toLocaleString()}đ
          </span>
          <span className=' line-through text-[#999] text-16'>
            {oldPrice.toLocaleString()}đ
          </span>
        </div>
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