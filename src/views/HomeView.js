import React, { useState, useContext } from 'react'
import NavBar from "../components/NavBar";
import StartBanner from '../components/StartBanner';
import ClearanceNewArrivals from "../components/ClearanceNewArrivals";
import FeaturedProduct from "../components/FeaturedProduct";
import FocusedProducts from "../components/FocusedProducts";
import Speciality from "../components/Speciality";
import BigLeft from "../components/BigLeft";
import BigRight from "../components/BigRight";
import SeventyPercentOff from "../components/SeventyPercentOff";
import ProductOverviewGrid from "../components/ProductOverviewGrid";
import SiteDisclaimerIconsFour from "../components/SiteDisclaimerIconsFour";
import Footer from "../components/Footer";
import { ProductContext } from '../contexts/Context';

const HomeView = () => {

    window.top.document.title = 'Fixxo.';

    const productContext = useContext(ProductContext);

    return (
        <>
            <NavBar />
            <StartBanner />
            <ClearanceNewArrivals />
            <FeaturedProduct title={"Featured Products"} items={productContext.featuredProducts} />
            <FocusedProducts />
            <Speciality />
            <BigLeft products={productContext.featuredProducts} />
            <BigRight products={productContext.featuredProducts} />
            <SeventyPercentOff />
            <ProductOverviewGrid latestProducts={productContext.featuredProducts} bestSellingProducts={productContext.featuredProducts} topReactedProducts={productContext.featuredProducts} />
            <SiteDisclaimerIconsFour />
            <Footer />
        </>
    )
}

export default HomeView