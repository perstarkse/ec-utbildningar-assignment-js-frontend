import React, { useContext, useState } from 'react';
import NavBar from "../components/NavBar";
import TopAdBar from "../components/TopAdBar";
import TopNav from "../components/TopNav";
import RelatedProductsSpecific from "../components/RelatedProductsSpecific";
import Footer from "../components/Footer";
import ProductGrid from '../components/components/ProductGrid';
import { ProductContext } from '../contexts/Context';


const ProductDetailsView = () => {

    window.top.document.title = 'Product Details | Fixxo.';

    const productContext = useContext(ProductContext);

    return (
        <>
            <NavBar />
            <TopAdBar />
            <TopNav subPage="Product Details" />
            <ProductGrid title={"All Products"} items={productContext.allProducts} />
            <Footer />
        </>
    )
}

export default ProductDetailsView