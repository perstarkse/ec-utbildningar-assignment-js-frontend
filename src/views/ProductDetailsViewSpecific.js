import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from "../components/NavBar";
import TopAdBar from "../components/TopAdBar";
import TopNav from "../components/TopNav";
import ProductDetailedSpecific from "../components/ProductDetailedSpecific";
import RelatedProductsSpecific from "../components/RelatedProductsSpecific";
import Footer from "../components/Footer";
import { FourProductsContext, ProductContext } from '../contexts/Context';


const ProductDetailsViewSpecific = () => {

    window.top.document.title = 'Product Details | Fixxo.';

    const fourProducts = useContext(FourProductsContext);
    const productContext = useContext(ProductContext);
    const [currentProduct, setCurrentProduct] = useState({})

    const params = useParams();

    useEffect(() => {
        const getCurrentProduct = () => {
            productContext.forEach(element => {
                if (element.articleNumber === params.articleNumber) {
                    setCurrentProduct(element);
                }
            })
        }
        getCurrentProduct();
    }, [productContext, params.articleNumber])


    return (
        <>
            <NavBar />
            <TopAdBar />
            <TopNav subPage="Product Details" />
            <ProductDetailedSpecific currentProduct={currentProduct} />
            <RelatedProductsSpecific products={fourProducts} />
            <Footer />
        </>
    )
}

export default ProductDetailsViewSpecific