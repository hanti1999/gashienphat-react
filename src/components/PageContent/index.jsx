import ProductCategory from './productCategory';
import banner1 from '../../assets/img/banner/bannerr.jpg'

function PageContent() {
    return (
        <div className="pageContent mt-[20px] max-md:mx-[8px]">
            <ProductCategory />
            <div className='my-[10px]'>
                <div className='max-w-[1200px] my-0 ml-auto mr-auto md:max-lg:w-[644px]'>
                    <a href='#'>
                        <img src={banner1} alt="" className='w-full rounded shadow-s0'/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PageContent;