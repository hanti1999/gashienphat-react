import { GasStoveList } from '../../assets/gasStoveList'

function GasStove() {
    return (
        <div className="my-[10px]">
            <div className="wid-1200">
                <div className="flex items-center justify-between px-[8px]">
                    <div className="text-[#ff0000] text-24 font-medium">
                        <i className="fa-regular fa-thumbs-up mr-[4px]"></i>
                        BẾP GAS BÁN CHẠY
                    </div>
                    <div className="text-14 text-primary cursor-pointer">
                        <a href="#">Xem tất cả</a>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-[24px]">
                    {GasStoveList.map((GasStove, index) => (
                        <div key={index} className='col-span-3 max-lg:col-span-4 max-md:col-span-6'>
                            <a href={GasStove.href} className='block rounded shadow-s3 overflow-hidden text-333 mt-[8px] relative transition-all duration-150 hover:shadow-s4'>
                                <div className='px-[8px]'>
                                    <div className='relative'>
                                        <img className='w-full' src={GasStove.img} alt="" />
                                        <div className={GasStove.apr === '' ? 'hidden' : 'inline-block px-[8px] py-[4px] text-[#fff] absolute bottom-[40px] text-13 rounded-lg bg-[#ffd21ee6]'}>
                                            {GasStove.apr}
                                        </div>
                                        <div className={GasStove.sale === '' ? 'hidden' : 'inline-block px-[8px] py-[4px] text-[#fff] absolute bottom-[10px] text-13 rounded-lg bg-[#ff0000]'}>
                                            {GasStove.sale}
                                        </div>
                                        <img className='absolute w-[90px] top-0 right-0' src={GasStove.warranty} alt="" />
                                    </div>
                                    <div className='overflow-hidden'>
                                        <h1 className='text-16 font-bold product-name'>{GasStove.name}</h1>
                                    </div>
                                    <div className='py-[8x]'>
                                        <span className='line-through text-14 mr-[5px]'>{GasStove.oldPrice}</span>
                                        <span className='text-[#ff0000] text-20 font-medium'>{GasStove.newPrice}</span>
                                    </div>
                                    <div className='bg-[#f8f9fa] rounded-t p-[8px]'>
                                        <ul className='ml-[12px]'>
                                            {GasStove.description.map((des, index) => (
                                                <li key={index} className='text-13 mb-[4px] list-disc'>{des}</li>
                                            ))}
                                            <span className='text-14 italic'>{GasStove.gift}</span>
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

export default GasStove;