import React, { useState } from 'react'
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

const HomeView = () => {

    window.top.document.title = 'Fixxo.';

    const [featuredProducts, setFeaturedProducts] = useState([
        { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", salePrice: "$29.00", rating: 5, img: "https://images.pexels.com/photos/8957613/pexels-photo-8957613.png?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
        { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/8957613/pexels-photo-8957613.png?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
        { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/8957613/pexels-photo-8957613.png?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
        { id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", salePrice: "$29.00", rating: 5, img: "https://images.pexels.com/photos/8957613/pexels-photo-8957613.png?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
        { id: 5, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/8957613/pexels-photo-8957613.png?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
        { id: 6, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/8957613/pexels-photo-8957613.png?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
        { id: 7, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", salePrice: "$29.00", rating: 5, img: "https://images.pexels.com/photos/8957613/pexels-photo-8957613.png?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
        { id: 8, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/8957613/pexels-photo-8957613.png?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
    ])
    const [bigLeftProducts, setBigLeftProducts] = useState([
        { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", salePrice: "$29.00", rating: 5, img: "https://images.pexels.com/photos/8957613/pexels-photo-8957613.png?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
        { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/8957613/pexels-photo-8957613.png?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
        { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", salePrice: "$29.00", rating: 5, img: "https://images.pexels.com/photos/8957613/pexels-photo-8957613.png?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
        { id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/8957613/pexels-photo-8957613.png?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
    ])
    const [bigRightProducts, setBigRightProducts] = useState([
        { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/8957613/pexels-photo-8957613.png?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
        { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", salePrice: "$29.00", rating: 5, img: "https://images.pexels.com/photos/8957613/pexels-photo-8957613.png?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
        { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/8957613/pexels-photo-8957613.png?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
        { id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/8957613/pexels-photo-8957613.png?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
    ])
    const [latestProducts, setLatestProducts] = useState([
        { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/8957613/pexels-photo-8957613.png?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
        { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", salePrice: "$29.00", rating: 5, img: "https://images.pexels.com/photos/8957613/pexels-photo-8957613.png?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
        { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/8957613/pexels-photo-8957613.png?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
    ])
    const [bestSellingProducts, setBestSellingProducts] = useState([
        { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/8957613/pexels-photo-8957613.png?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
        { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", salePrice: "$29.00", rating: 5, img: "https://images.pexels.com/photos/8957613/pexels-photo-8957613.png?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
        { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/8957613/pexels-photo-8957613.png?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
    ])
    const [topReactedProducts, setTopReactedProducts] = useState([
        { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/8957613/pexels-photo-8957613.png?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
        { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", salePrice: "$29.00", rating: 5, img: "https://images.pexels.com/photos/8957613/pexels-photo-8957613.png?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
        { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/8957613/pexels-photo-8957613.png?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
    ])


    return (
        <>
            <NavBar />
            <StartBanner />
            <ClearanceNewArrivals />
            <FeaturedProduct products={featuredProducts} />
            <FocusedProducts />
            <Speciality />
            <BigLeft products={bigLeftProducts} />
            <BigRight products={bigRightProducts} />
            <SeventyPercentOff />
            <ProductOverviewGrid latestProducts={latestProducts} bestSellingProducts={bestSellingProducts} topReactedProducts={topReactedProducts} />
            <SiteDisclaimerIconsFour />
            <Footer />
        </>
    )
}

export default HomeView