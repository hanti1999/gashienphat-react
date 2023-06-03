import hpLogo from '../../assets/img/icon/gashienphatlogo.png';
import facebookLogo from '../../assets/img/icon/facebookLogo.png'
import zaloLogo from '../../assets/img/icon/zaloLogo.jpg'
import youtubeLogo from '../../assets/img/icon/youtubeLogo.png'

function AppFooter() {
    return (
        <footer className="appFooter bg-[#f5f5f5] border-t-2 border-primary mt-[20px]">
            <div className='bg-[#f8f9fa] pb-[20px] text-14'>
                <div className='wid-1200'>
                    <div className='grid grid-cols-12 gap-[24px]'>
                        <div className='col-span-4 max-lg:col-span-12'>
                            <div className='mt-[20px]'>
                                <a href="#" className='mb-[20px] block w-[60px]'>
                                    <img src={hpLogo} alt="" className='w-full' />
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
                        <div className='col-span-4 max-lg:col-span-12'>
                            <ul className="mt-[20px] w-1/2 float-left">
                                <li className='block mb-[10px]'><a className='text-primary' href="#">Giới thiệu về công ty</a></li>
                                <li className='block mb-[10px]'><a className='text-primary' href="#">Giao hàng & thanh toán</a></li>
                                <li className='block mb-[10px]'><a className='text-primary' href="#">Hướng dẫn mua online</a></li>
                                <li className='block mb-[10px]'><a className='text-primary' href="#">Cảng báo giá mạo</a></li>
                                <li className='block mb-[10px]'><a className='text-primary' href="#">Thông tin khuyến mãi</a></li>
                            </ul>
                            <ul className="mt-[20px] w-1/2 float-left">
                                <li className='block mb-[10px]'><a className='text-primary' href="#">Chính sách bảo hành</a></li>
                                <li className='block mb-[10px]'><a className='text-primary' href="#">Gửi góp ý, khiếu nại</a></li>
                                <li className='block mb-[10px]'><a className='text-primary' href="#">Liên hệ</a></li>
                                <li className='block mb-[10px]'><a className='text-primary' href="#">Chính sách bảo mật</a></li>
                                <li className='block mb-[10px]'><a className='text-primary' target="_blank" href="https://goo.gl/maps/yYy447eNamPJ1FYE9">Tìm cửa hàng</a></li>
                            </ul>
                        </div>
                        <div className='col-span-4 max-lg:col-span-12'>
                        <div className="mt-[20px]">
                                <h4 className='font-bold'>Theo dõi chúng tôi tại:</h4>
                                <a className='inline-block' target="_blank" href="https://www.facebook.com/hienphatvina">
                                    <img className='w-[30px] mt-[10px] mr-[10px] mb-[20px]' src={facebookLogo} alt=""/>
                                </a>
                                <a className='inline-block' target="_blank" href="https://zalo.me/0965266926">
                                    <img className='w-[30px] mt-[10px] mr-[10px] mb-[20px]' src={zaloLogo} alt=""/>
                                </a>
                                <a className='inline-block' target="_blank" href="https://www.youtube.com/c/gashienphat">
                                    <img className='w-[30px] mt-[10px] mr-[10px] mb-[20px]' src={youtubeLogo} alt=""/>
                                </a>
                                <h4 className='font-bold'>Hướng dẫn thêm ứng dụng gashienphat vào điện thoại:</h4>
                                <a className='inline-block' target="_blank" href="https://www.youtube.com/c/gashienphat">
                                    <img className='w-[30px] mt-[10px] mr-[10px] mb-[20px]' src={youtubeLogo} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-[6px] pb-[10px]'>
                <div className='w-full text-center text-14 mt-[4px] text-[#00000099]'>Công ty TNHH Hiền Phát Vina</div>
                <div className='w-full text-center text-14 mt-[4px] text-[#00000099]'>Mã số doanh nghiệp: 3603240938 do Sở Kế hoạch & Đầu tư tỉnh Đồng Nai cấp lần đầu ngày 30/12/2014</div>
                <div className='w-full text-center text-14 mt-[4px] text-[#00000099]'>
                    Phát triển bởi: <b>Nguyễn Thông Hoàng Anh</b>
                    <a target="_blank" href="https://www.instagram.com/hoangfanh.99/">
                        <i className="px-[3px] fa-brands fa-instagram"></i>
                    </a>
                    <a target="_blank" href="https://www.facebook.com/hoangfanh.99/">
                        <i className="px-[3px] fa-brands fa-facebook"></i>
                    </a>
                    <a target="_blank" href="https://zalo.me/0986359498">
                        <i className="px-[3px] fa-solid fa-phone"></i>
                    </a>
                    <a target="_blank" href="mailto:nth.anh020209@gmail.com">
                        <i className="px-[3px] fa-solid fa-envelope"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default AppFooter;