import { ProductCat } from '../../assets/productCatList'

function ProductCategory() {
    return (
        <div className='my-[10px]'>
            <div className='wid-1200'>
                <div className='grid grid-cols-12 shadow-s0'>
                    {ProductCat.map((product, index) => (
                        <span key={index} className='product-cat-item'>
                            <a href="#" className='product-cat-item-link'>
                                <img src={product.src} alt="" className='w-[80%] block bg-[#f8f9fa] rounded-[50%]'/>
                                <span className='mt-[10px]'>{product.name}</span>
                            </a>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductCategory;