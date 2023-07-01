
import React, {useState} from 'react'
import useGetData from '../custom-hooks/useGetData'
import { db } from '../firebase.config';
import { doc, deleteDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import ReactPaginate from 'react-paginate';

const AllProducts = () => {
  return (
    <>
      <section className='wid-1200'>
        <div className="mt-16">
          <PaginationItems itemsPerPage={12} />
        </div>
      </section>
    </>
  )
}

const Items = ({ currentItems }) => {
  
  const deleteProduct = async(id) => {
    await deleteDoc(doc(db, 'products', id));
    toast.success('Đã xóa!');
  }

  return (
    <>
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
          {currentItems.map((item, index) => (
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
              )
            )
          }
        </tbody>
      </table>
    </>
  )
}

const PaginationItems = ({ itemsPerPage }) => {
  const { data: productData } = useGetData('products');

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const pageCount = Math.ceil(productData.length / itemsPerPage);
  const currentItems = productData.slice(itemOffset, endOffset);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % productData.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <section className='mt-16'>
        <ReactPaginate
            breakLabel="..."
            nextLabel="Tiếp >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< Lùi"
            renderOnZeroPageCount={null}
            containerClassName='page-ul'
        />
      </section>
    </>
  );
}

export default AllProducts