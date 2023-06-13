import blogImg1 from '../../assets/img/banner/Thang6.jpg';
import blogImg2 from '../../assets/img/banner/safe.jpg';
import blogImg3 from '../../assets/img/luadao.jpg';

const blogItems = [
    {
        blogName: 'Giá gas tháng 06/2023 giảm 35.000đ/b',
        blogDate: '01/06/2023',
        blogCmt: '0',
        blogImg: blogImg1,
        blogHref: '#',
        blogDesc: 'Gía gas trong nước tiếng tục giảm. Công ty Cổ phần Kinh doanh Khí Miền Nam (Gas South) thông báo từ ngày 1-6, giá gas giảm 2.917đồng/kg so với tháng trước'
    },
    {
        blogName: 'Hướng dẫn sử dụng gas an toàn và tiết kiệm',
        blogDate: '01/06/2023',
        blogCmt: '0',
        blogImg: blogImg2,
        blogHref: '#',
        blogDesc: 'Bếp gas là sản phẩm luôn có mặt trong hầu hết các hộ gia đình, việc sử dụng cũng vô cùng đơn giản và dễ tiếp cận, tuy nhiên cần phải biết sử dụng thế nào để an toàn và hiệu quả tránh những sự cố không mong muốn!'
    },
    {
        blogName: 'Cảnh báo lừa đảo',
        blogDate: '01/06/2023',
        blogCmt: '0',
        blogImg: blogImg3,
        blogHref: '#',
        blogDesc: 'Hiện nay các đối tượng lừa đảo liên tục mạo danh "Người của cty Gas Hiền Phát", "Tập đoàn Gas Hiền Phát" nhằm lợi dụng lòng tin của khách hàng với thương hiệu Gas Hiền Phát để bán những sản phẩm giả mạo, kém chất lượng với giá rất cao'
    }
]

function Blog() {
    return (
        <div id='tin-tuc' className="blog wid-1200">
            <div className='bg-white rounded shadow-s0 p-[8px]'>
                <div className='flex items-center justify-between mb-[8px]'>
                    <h3 className='text-24 text-red-600 font-medium'>
                        <i className='fa-regular fa-newspaper mr-[4px]'></i>
                        Tin tức
                    </h3>
                    <div className='text-14'>
                        <a href="#">Xem tất cả</a>
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
    )
}

export default Blog;