import cLogo from '../../assets/img/icon/gashienphatlogo.png';
import fLogo from '../../assets/img/icon/facebookLogo.png'
import zLogo from '../../assets/img/icon/zaloLogo.jpg'
import yLogo from '../../assets/img/icon/youtubeLogo.png'

import { Link } from 'react-router-dom';

const footerLinks = [
    {
        text: 'Giới thiệu về công ty',
        href: '#',
        target: '',
    },
    {
        text: 'Giao hàng & thanh toán',
        href: '#',
        target: '',
    },
    {
        text: 'Hướng dẫn mua online',
        href: '#',
        target: '',
    },
    {
        text: 'Cảnh báo giả mạo',
        href: '#',
        target: '',
    },
    {
        text: 'Chính sách bảo hành',
        href: '#',
        target: '',
    },
    {
        text: 'Tìm cửa hàng',
        href: 'https://goo.gl/maps/yYy447eNamPJ1FYE9',
        target: '_blank',
    }
]

function AppFooter() {
    const year = new Date().getFullYear;
    return (
        <footer className="appFooter bg-[#f5f5f5] border-t-4 border-primary mt-[20px]">
            <div className='bg-[#f8f9fa] pb-[20px] text-14 max-md:mx-[8px]'>
                <div className='wid-1200'>
                    <div className='grid grid-cols-12 gap-[24px]'>
                        <div className='col-span-4 max-lg:col-span-12'>
                            <div className='mt-[20px]'>
                                <a href="#" className='mb-[20px] block w-[60px]'>
                                    <img src={cLogo} alt="" className='w-full' />
                                </a>
                                <span className='block my-[10px]'>
                                    Địa chỉ: 199, Quốc Lộ 51, ấp 7, xã An Phước, huyện Long Thành, tỉnh Đồng Nai
                                    <a className='text-primary' href="https://goo.gl/maps/yYy447eNamPJ1FYE9" target='_blank'>(xem trên Google Map)</a>
                                </span>
                                <span className='block my-[10px]'>Điện thoại: <a className='text-primary' href="tel:02513511610"><b>02513 511 610</b></a></span>
                                <span className='block my-[10px]'>Di động: <a className='text-primary' href="tel:0986573072"><b>0986 573 072</b></a></span>
                                <span className='block my-[10px]'>Email: <a className='text-primary' target="_blank" href="mailto:gashienphat1979@gmail.com">gashienphat1979@gmail.com</a></span>
                            </div>
                        </div>
                        <div className='col-span-2 max-lg:col-span-6'>
                            <ul className="mt-[20px]">
                                <h4 className='font-bold mb-4'>Truy cập nhanh:</h4>
                                {footerLinks.map((items, index) => (
                                    <li key={index} className='block mb-[10px]'><a className='text-primary' target={items.target} href={items.href}>{items.text}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className='col-span-2 max-lg:col-span-6'>
                            <ul className="mt-[20px]">
                                <h4 className='font-bold mb-4'>Danh mục nổi bật:</h4>
                                <li className='block mb-[10px] text-primary'>
                                    <Link to='/shop'>Bếp gas</Link>
                                </li>
                                <li className='block mb-[10px] text-primary'>
                                    <Link to='/shop'>Bếp điện</Link>
                                </li>
                                <li className='block mb-[10px] text-primary'>
                                    <Link to='/shop'>Điện gia dụng</Link>
                                </li>
                                <li className='block mb-[10px] text-primary'>
                                    <Link to='/shop'>Phụ kiện</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-span-4 max-lg:col-span-12'>
                        <div className="mt-[20px]">
                                <h4 className='font-bold'>Theo dõi chúng tôi tại:</h4>
                                <a className='inline-block' target="_blank" href="https://www.facebook.com/hienphatvina">
                                    <img className='w-[30px] mt-[10px] mr-[10px] mb-[20px]' src={fLogo} alt=""/>
                                </a>
                                <a className='inline-block' target="_blank" href="https://zalo.me/0975841582">
                                    <img className='w-[30px] mt-[10px] mr-[10px] mb-[20px]' src={zLogo} alt=""/>
                                </a>
                                <a className='inline-block' target="_blank" href="https://www.youtube.com/c/gashienphat">
                                    <img className='w-[30px] mt-[10px] mr-[10px] mb-[20px]' src={yLogo} alt=""/>
                                </a>
                                <h4 className='font-bold'>Hướng dẫn thêm ứng dụng gashienphat vào điện thoại:</h4>
                                <a className='inline-block' target="_blank" href="https://www.youtube.com/c/gashienphat">
                                    <img className='w-[30px] mt-[10px] mr-[10px] mb-[20px]' src={yLogo} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-[6px] pb-[10px] max-md:pb-[50px] max-md:mx-[8px]'>
                <div className='w-full text-center text-14 mt-[4px] text-[#00000099]'>Công ty TNHH Hiền Phát Vina</div>
                <div className='w-full text-center text-14 mt-[4px] text-[#00000099]'>Mã số doanh nghiệp: 3603240938 do Sở Kế hoạch & Đầu tư tỉnh Đồng Nai cấp lần đầu ngày 30/12/2014</div>
                <div className='w-full text-center text-14 mt-[4px] text-[#00000099]'>
                    Phát triển bởi: <b>Nguyễn Thông Hoàng Anh</b>
                    <a target="_blank" href="https://www.instagram.com/hoangfanh.99/">
                        <i className="text-16 px-[3px] fa-brands fa-instagram"></i>
                    </a>
                    <a target="_blank" href="https://www.facebook.com/hoangfanh.99/">
                        <i className="text-16 px-[3px] fa-brands fa-facebook"></i>
                    </a>
                    <a target="_blank" href="https://zalo.me/0986359498">
                        <i className="text-16 px-[3px] fa-solid fa-phone"></i>
                    </a>
                    <a target="_blank" href="mailto:nth.anh020209@gmail.com">
                        <i className="text-16 px-[3px] fa-solid fa-envelope"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default AppFooter;