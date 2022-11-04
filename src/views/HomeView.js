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
import { FeaturedProductsContext, ThreeProductsContext, FourProductsContext } from '../contexts/Context';


const HomeView = () => {

    window.top.document.title = 'Fixxo.';

    const FeaturedProducts = useContext(FeaturedProductsContext);
    const FourProducts = useContext(FourProductsContext);
    const ThreeProducts = useContext(ThreeProductsContext);

    return (
        <>
            <NavBar />
            <StartBanner />
            <ClearanceNewArrivals />
            <FeaturedProduct title={"Featured Products"} items={FeaturedProducts} />
            <FocusedProducts />
            <Speciality />
            <BigLeft products={FourProducts} />
            <BigRight products={FourProducts} />
            <SeventyPercentOff />
            <ProductOverviewGrid latestProducts={ThreeProducts} bestSellingProducts={ThreeProducts} topReactedProducts={ThreeProducts} />
            <SiteDisclaimerIconsFour />
            <Footer />
        </>
    )
}

export default HomeView