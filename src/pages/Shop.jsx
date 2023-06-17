import CommonSection from "../components/UI/CommonSection";
import Helmet from '../components/Helmet/Helmet'
import { useState } from "react";

import '../styles/shop.css'

import products from "../assets/data/products";
import ProductList from "../components/UI/ProductList";

function Shop() {
    
    const [productsData, setProductsData] = useState(products);

    const handleFilter = (e) => {
        const filterValue = e.target.value;
        if (filterValue === 'bep-gas') {
            const filteredProducts = products.filter(item => item.category === 'bep-gas');
            setProductsData(filteredProducts);
        }

        if (filterValue === 'bep-dien') {
            const filteredProducts = products.filter(item => item.category === 'bep-dien');
            setProductsData(filteredProducts);
        }

        if (filterValue === 'dien-gia-dung') {
            const filteredProducts = products.filter(item => item.category === 'dien-gia-dung');
            setProductsData(filteredProducts);
        }

        if (filterValue === 'may-loc-nuoc') {
            const filteredProducts = products.filter(item => item.category === 'may-loc-nuoc');
            setProductsData(filteredProducts);
        }

        if (filterValue === 'phu-kien') {
            const filteredProducts = products.filter(item => item.category === 'phu-kien');
            setProductsData(filteredProducts);
        }
    }

    const handleSearch = (e) => {
        const searchTerm = e.target.value;

        const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
        
        setProductsData(searchedProducts);
    }

    return (
        <Helmet title={'Mua hàng'}>
            <CommonSection title='Sản phẩm'/>
            <section className="wid-1200">
                <div className="shop__filter grid grid-cols-12 my-8">
                    <div className="col-span-3 max-lg:col-span-6">
                        <div className="filter__widget text-">
                            <select onChange={handleFilter} className="cursor-pointer rounded-lg bg-primary text-white py-3 px-8 border border-solid border-primary">
                                <option>Lọc theo danh mục</option>
                                <option value="bep-gas">Bếp gas</option>
                                <option value="bep-dien">Bếp điện</option>
                                <option value="dien-gia-dung">Diện gia dụng</option>
                                <option value="may-loc-nuoc">Máy lọc nước</option>
                                <option value="phu-kien">Phụ kiện</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-span-3 max-lg:col-span-6 max-lg:text-end">
                        <div className="filter__widget">
                            <select className="cursor-pointer rounded-lg bg-primary text-white py-3 px-8 border border-solid border-primary">
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

            <section className="wid-1200">
                <div className="shop__products grid grid-cols-12 max-md:gap-[8px] gap-[24px]">
                    {productsData.length === 0 ? <h1 className="text-center col-span-full text-20 text-primary font-medium">Không tìm thấy sản phẩm!</h1> : <ProductList data={productsData} />}
                </div>
            </section>
        </Helmet>
    )
}

export default Shop;