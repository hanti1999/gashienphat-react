
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ProductList from '../UI/ProductList';
import useGetData from '../../custom-hooks/useGetData';

import './pagination.css'

const Pagination = ({ itemsPerPage }) => {

  const { data: products } = useGetData('products');

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const pageCount = Math.ceil(products.length / itemsPerPage);
  const currentItems = products.slice(itemOffset, endOffset);

  // test state
  const [productData, setProductData] = useState(currentItems);
  // console.log(productData);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {/* <section className="wid-1200">
        <div className="shop__products grid grid-cols-12 max-md:gap-[8px] gap-[24px]">
          <ProductList data={currentItems} />
        </div>
      </section> */}

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

export default Pagination