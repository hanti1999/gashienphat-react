import ProductCategory from './productCategory';
import banner1 from '../../assets/img/banner/bannerr.jpg'
import banner2 from '../../assets/img/banner/salebanner.jpg'
import banner3 from '../../assets/img/banner/salebanner2.png'
import banner4 from '../../assets/img/banner/chuyendoibinhgas.png'
import HotSaleProducts from './HotSaleProducts';
import GasStove from './GasStove';
import ElectricStove from './ElectricStove';
import WaterPurification from './WaterPurification';
import Recommend from './Recommend';
import Blog from './Blog';

function PageContent() {
    return (
        <div className="pageContent mt-[20px] max-md:mx-[8px]">
            <ProductCategory />
            <div className='my-[10px]'>
                <div className='wid-1200'>
                    <a href='#'>
                        <img src={banner1} alt="" className='w-full rounded shadow-s0'/>
                    </a>
                </div>
            </div>
            <HotSaleProducts />
            <div className='my-[10px]'>
                <div className='wid-1200'>
                    <a href='#'>
                        <img src={banner2} alt="" className='w-full rounded shadow-s0'/>
                    </a>
                </div>
            </div>
            <GasStove />
            <div className='my-[10px]'>
                <div className='wid-1200'>
                    <a href='#'>
                        <img src={banner3} alt="" className='w-full rounded shadow-s0'/>
                    </a>
                </div>
            </div>
            <ElectricStove />
            <div className='my-[10px]'>
                <div className='wid-1200'>
                    <a href='#'>
                        <img src={banner4} alt="" className='w-full rounded shadow-s0'/>
                    </a>
                </div>
            </div>
            <WaterPurification />
            <div className='my-[10px]'>
                <div className='wid-1200'>
                    <a href='#'>
                        <img src={banner2} alt="" className='w-full rounded shadow-s0'/>
                    </a>
                </div>
            </div>
            <Recommend />
            <Blog />
        </div>
    )
}

export default PageContent;