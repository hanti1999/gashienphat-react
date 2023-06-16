import { Link } from 'react-router-dom';

function ProductCard({item}) {
    return (
        <div className='col-span-3 max-lg:col-span-4 max-md:col-span-6'>
            <div className='block rounded shadow-s3 overflow-hidden text-333 mt-[8px] relative transition-all duration-150 hover:shadow-s4'>
                <div className='px-[8px]'>
                    <div className='relative'>
                        <img className='w-full' src={item.img} alt="" />
                        <div className={item.apr === '' ? 'hidden' : 'inline-block px-[8px] py-[4px] text-[#fff] absolute bottom-[40px] text-13 max-md:text-12 rounded-lg bg-[#ffd21ee6]'}>
                            {item.apr}
                        </div>
                        <div className={item.sale === '' ? 'hidden' : 'inline-block px-[8px] py-[4px] text-[#fff] absolute bottom-[10px] text-13 max-md:text-12 rounded-lg bg-[#ff0000]'}>
                            {item.sale}
                        </div>
                        <img className='absolute w-[90px] max-md:w-[70px] top-0 right-0' src={item.warranty} alt="" />
                    </div>
                    <div className='overflow-hidden'>
                        <h1 className='text-16 max-md:text-14 font-bold product-name'><Link to={`/shop/${item.id}`}>{item.name}</Link></h1>
                    </div>
                    <div className='py-[8x]'>
                        <p className='line-through text-14 max-md:text-13 mr-[5px]'>{item.oldPrice}</p>
                        <div className='flex justify-between items-center'>
                            <span className='text-[#ff0000] text-20 max-md:text-18 font-medium'>{item.newPrice}</span>
                            <span className='flex items-center justify-center cursor-pointer'>
                                <i className="fa-solid fa-plus text-white rounded-full p-[6px] bg-primary"></i>
                            </span>
                        </div>
                    </div>
                    <div className='bg-[#f8f9fa] rounded-t p-[8px]'>
                        <ul className='ml-[12px]'>
                            {item.description.map((des, index) => (
                                <li key={index} className='text-13 max-md:text-12 mb-[4px] list-disc'>{des}</li>
                            ))}
                            <span className='text-14 italic'>{item.gift}</span>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;