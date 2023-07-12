import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import ProductList from '../components/UI/ProductList'
import React, { useState, useEffect } from 'react'

import useGetData from '../custom-hooks/useGetData'

import ReactPaginate from 'react-paginate'

const BepGas = () => {
  return (
    <Helmet title='Bếp gas'>
      <CommonSection title='Bếp gas'/>
      <PaginatedItems itemsPerPage={12} />
    </Helmet>
  )
}

function Items({ currentItems }) {

  const [productsData, setProductsData] = useState(currentItems);
  const { data: products } = useGetData('products');

  useEffect(()=> {
    setProductsData(currentItems)
  }, [currentItems])

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
    setProductsData(searchedProducts);
  }

  const handleBrand = (e) => {
    const filteredValue = e.target.value;
    if (filteredValue === 'Lọc theo hãng') {
      setProductsData(currentItems);
    } else {
      const filteredProds = products.filter(item => item.productName.toLowerCase().includes(filteredValue.toLowerCase()))
      setProductsData(filteredProds);
    }
  }

  const handleSortPrice = (e) => {
    const sortedPrice = e.target.value;
    if (sortedPrice === 'ascending') {
      const sortedProducts = [...currentItems].sort((a, b) => a.price - b.price);
      setProductsData(sortedProducts);
    } else if (sortedPrice === 'descending') {
      const sortedProducts = [...currentItems].sort((a, b) => b.price - a.price);
      setProductsData(sortedProducts);
    } else {
      setProductsData(currentItems);
    }
  }

  return (
    <>
      <section className="wid-1200">
        <div className="shop__filter grid grid-cols-12 my-8 gap-3">
            <div className="col-span-3 max-lg:col-span-6 sm:max-lg:text-center">
                <div className="filter__widget">
                    <select onChange={handleBrand} className="cursor-pointer rounded-lg bg-primary text-white py-3 px-8 border border-solid border-primary w-full">
                        <option>Lọc theo hãng</option>
                        <option value="namilux">Namilux</option>
                        <option value="rinnai">Rinnai</option>
                        <option value="akia">Akia</option>
                        <option value="sanka">Sanka</option>
                        <option value="nasonal">Nasonal</option>
                        <option value="paloma">Paloma</option>
                        <option value="thaiflame">Thaiflame</option>
                        <option value="ogawa">Ogawa</option>
                        <option value="sakura">Sakura</option>
                    </select>
                </div>
            </div>
            <div className="col-span-3 max-lg:col-span-6 sm:max-lg:text-end">
                <div className="filter__widget">
                    <select onChange={handleSortPrice} className="cursor-pointer rounded-lg bg-primary text-white py-3 px-8 border border-solid border-primary w-full">
                        <option>Sắp xếp sản phẩm</option>
                        <option value="ascending">Giá Tăng dần</option>
                        <option value="descending">Giá giảm dần</option>
                    </select>
                </div>
            </div>
            <div className="col-span-6 max-lg:col-span-12">
                <div className="search__box w-full flex items-center justify-between border border-primary rounded-lg pr-5 pl-1 cursor-pointer">
                    <input 
                        className="w-full border-none outline-none px-4 py-3" 
                        type="text" 
                        placeholder="Tìm kiếm ..." 
                        onChange={handleSearch}
                    />
                    <span><i className="fa-solid fa-magnifying-glass text-primary"></i></span>
                </div>
            </div>
        </div>
      </section>

      <section className='wid-1200'>
        <div className="shop__products grid grid-cols-12 max-md:gap-[8px] gap-[24px]">
          {productsData.length === 0 ? (
            <h1 className="text-center col-span-full text-20 text-primary font-medium">Không tìm thấy sản phẩm!</h1>
            ) : <ProductList data={productsData} />
          }
        </div>
      </section>
    </>
  );
}
  
function PaginatedItems({ itemsPerPage }) {
  const { data: products } = useGetData('products');

  const filteredProducts = products.filter(item => item.category === 'bep-gas');

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredProducts.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <section className='wid-1200'>
        <div className='shop__paginate mt-16'>
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
        </div>
      </section>
    </>
  );
}

export default BepGas