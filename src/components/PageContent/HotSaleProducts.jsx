import { HotSaleList } from '../../assets/hotSaleList'

function HotSaleProducts() {
    return (
        <div className="my-[10px]">
            <div className="wid-1200">
                <div className="flex items-center justify-between px-[8px]">
                    <div className="text-[#ff0000] text-24 font-medium">
                        <i className="fa-solid fa-fire"></i>
                        KHUYẾN MÃI HOT
                    </div>
                    <div className="text-14 text-primary cursor-pointer">
                        <a href="#">Xem tất cả</a>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-[24px]">
                    {HotSaleList.map((HotSale, index) => (
                        <div key={index} className='col-span-3 max-lg:col-span-4 max-md:col-span-6'>
                            <a href={HotSale.href} className='block rounded shadow-s3 overflow-hidden text-333 mt-[8px] relative transition-all duration-150 hover:shadow-s4'>
                                <div className='px-[8px]'>
                                    <div className='relative'>
                                        <img className='w-full' src={HotSale.img} alt="" />
                                        <div className='inline-block px-[8px] py-[4px] text-[#fff] absolute bottom-[40px] text-13 rounded-lg bg-[#ffd21ee6]'>
                                            {HotSale.apr}
                                        </div>
                                        <div className='inline-block px-[8px] py-[4px] text-[#fff] absolute bottom-[10px] text-13 rounded-lg bg-[#ff0000]'>
                                            {HotSale.sale}
                                        </div>
                                        <img className='absolute w-[90px] top-0 right-0' src={HotSale.warranty} alt="" />
                                    </div>
                                    <div className='overflow-hidden'>
                                        <h1 className='text-16 font-bold product-name'>{HotSale.name}</h1>
                                    </div>
                                    <div className='py-[8x]'>
                                        <span className='line-through text-14 mr-[5px]'>{HotSale.oldPrice}</span>
                                        <span className='text-[#ff0000] text-20 font-medium'>{HotSale.newPrice}</span>
                                    </div>
                                    <div className='bg-[#f8f9fa] rounded-t p-[8px]'>
                                        <ul className='ml-[12px]'>
                                            {HotSale.description.map((des, index) => (
                                                <li key={index} className='text-13 mb-[4px]'>{des}</li>
                                            ))}
                                            <span className='text-14 italic'>{HotSale.gift}</span>
                                        </ul>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HotSaleProducts;