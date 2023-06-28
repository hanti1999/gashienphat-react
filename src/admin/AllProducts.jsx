
import React from 'react'
import useGetData from '../custom-hooks/useGetData'
import { db } from '../firebase.config';
import { doc, deleteDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const AllProducts = () => {

  const { data: productData, loading } = useGetData('products');

  const deleteProduct = async(id) => {
    await deleteDoc(doc(db, 'products', id));
    toast.success('Đã xóa!');
  }

  return (
    <section>
      <div className="wid-1200">
        <div className="grid grid-cols-12 mt-16">
          <div className="col-span-12">
            <table className='table w-full'>
              <thead>
                <tr>
                  <th>Ảnh</th>
                  <th>Tên</th>
                  <th>Danh mục</th>
                  <th>Giá cũ</th>
                  <th>Giá</th>
                  <th>Xoá</th>
                </tr>
              </thead>
              <tbody>
                {
                  loading ? (
                    <tr className='text-center w-full mt-10'>
                      <td className='font-bold text-18'>Loading... <i className="fa-solid fa-spinner fa-spin"></i></td>
                    </tr>) : (
                    productData.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <img src={item.imgUrl} alt="" className='w-[220px] h-[220px]' />
                        </td>
                        <td>{item.productName}</td>
                        <td>{item.category}</td>
                        <td>{item.oldPrice.toLocaleString()}</td>
                        <td>{item.price.toLocaleString()}</td>
                        <td>
                          <button 
                            className='buy__btn bg-red-500 text-white'
                            onClick={() => {
                              deleteProduct(item.id)
                            }}
                            >
                            Xóa
                          </button>
                        </td>
                      </tr>
                    ))
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllProducts