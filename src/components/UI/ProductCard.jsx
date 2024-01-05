import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slices/cartSlice';

import { toast } from 'react-toastify';

import '../../styles/product-card.css';

import ConvertVie from '../../assets/ConvertVie';

function ProductCard({ item }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
    toast.success('Đã thêm sản phẩm vào giỏ hàng');
  };

  return (
    <div className='col-span-3 max-lg:col-span-4 max-md:col-span-6'>
      <div className='block rounded shadow-s3 overflow-hidden text-333 mt-[8px] relative transition-all duration-150 hover:shadow-s4'>
        <div className='px-[8px]'>
          <div className='relative'>
            <img className='w-full' src={item.imgUrl} alt='' />
            <div
              className={
                item.warranty === ''
                  ? 'hidden'
                  : 'inline-block px-[8px] py-[4px] text-[#fff] absolute bottom-[40px] text-13 max-md:text-12 rounded-lg bg-[#ffd21ee6]'
              }
            >
              BH {item.warranty} năm
            </div>
            <div
              className={
                item.sale === undefined || item.sale < 0
                  ? 'hidden'
                  : 'inline-block px-[8px] py-[4px] text-[#fff] absolute bottom-[10px] text-13 max-md:text-12 rounded-lg bg-[#ff0000]'
              }
            >
              Giảm {item.sale.toLocaleString()}
            </div>
          </div>
          <div className='overflow-hidden'>
            <h1 className='text-16 max-md:text-14 font-bold product-name'>
              {/* <Link to={`/shop/${ConvertVie(item.productName)}${item.id}`}>
                {item.productName}
              </Link> */}
              {item.productName}
            </h1>
          </div>
          <div className='py-[8x]'>
            <p
              className={
                item.oldPrice === 0
                  ? 'hidden'
                  : 'line-through text-14 max-md:text-13 mr-[5px]'
              }
            >
              {item.oldPrice.toLocaleString()}
            </p>
            <div className='flex justify-between items-center'>
              <span className='text-[#ff0000] text-20 max-md:text-18 font-medium'>
                {item.price.toLocaleString()}
              </span>
              <motion.span
                whileTap={{ scale: 1.2 }}
                onClick={addToCart}
                className='flex items-center justify-center cursor-pointer'
              >
                <i className='fa-solid fa-shopping-cart text-white rounded-full p-[6px] bg-primary'></i>
              </motion.span>
            </div>
          </div>
          <div className='bg-[#f8f9fa] rounded-t-md p-[8px]'>
            <ul className='ml-[12px]'>
              {item.description.map((des, index) => (
                <li
                  key={index}
                  className='text-13 max-md:text-12 mb-[4px] list-disc'
                >
                  {des}
                </li>
              ))}
              <span className='text-14 italic'>{item.gift}</span>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
