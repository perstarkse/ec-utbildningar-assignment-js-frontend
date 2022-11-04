import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from "../components/NavBar";
import TopAdBar from "../components/TopAdBar";
import TopNav from "../components/TopNav";
import ProductDetailedSpecific from "../components/ProductDetailedSpecific";
import RelatedProductsSpecific from "../components/RelatedProductsSpecific";
import Footer from "../components/Footer";
import { ProductContext } from '../contexts/Context';


const ProductDetailsViewSpecific = () => {

    window.top.document.title = 'Product Details | Fixxo.';

    const productContext = useContext(ProductContext);

    const params = useParams();

    return (
        <>
            <NavBar />
            <TopAdBar />
            <TopNav subPage="Product Details" />
            <ProductDetailedSpecific articleNumber={params.articleNumber} />
            <RelatedProductsSpecific products={productContext.allProducts} />
            <Footer />
        </>
    )
}

export default ProductDetailsViewSpecific