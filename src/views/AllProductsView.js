import React, { useContext } from 'react';
import NavBar from "../components/NavBar";
import TopAdBar from "../components/TopAdBar";
import TopNav from "../components/TopNav";
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
            <ProductGrid title={"All Products"} items={productContext} />
            <Footer />
        </>
    )
}

export default ProductDetailsView