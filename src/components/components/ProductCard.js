import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCard = ({ item }) => {

    const addToWishlist = (e) => {
        console.log(` ${e.target}" added to wishlist"`);
    }
    const addToCompare = (e) => {
        console.log("added to compare");
    }
    const addToCart = (e) => {
        console.log("added to cart");
    }

    return (
        <div className="card">
            <div className="product-image">
                <img src={item.imageName} alt={item.name} />
                <ul className="menu">
                    <li className="icons">
                        {/* <p className="menu-item-description">Favorite</p> */}
                        <button onClick={addToWishlist} className="circle"><i className="fa-regular fa-heart"></i></button>
                    </li>
                    <li className="icons">
                        {/* <p className="menu-item-description">Compare</p> */}
                        <button onClick={addToCompare} className="circle"><i className="fa-regular fa-shuffle"></i></button>
                    </li>
                    <li className="icons">
                        {/* <p className="menu-item-description">Add to cart</p> */}
                        <button onClick={addToCart} className="circle"><i className="fa-regular fa-bag-shopping"></i></button>
                    </li>
                </ul>
                <NavLink to={`/products/${item.articleNumber}`} className={"quick-view btn-themed"}>
                    QUICK VIEW
                </NavLink>
            </div >
            <div className="text-holder">
                <div className="category">{item.category}</div>
                <h5 className="title">{item.name}</h5>
                <div className="rating">
                    {/* {
                    for (var rating in {item.rating}) {console.log(rating)}
                    } */}
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                </div>
                <div className='price-holder'>
                    <div className="salePrice">{item.salePrice}</div>
                    <div className="price">{item.price}</div>
                </div>
            </div>
        </div >
    )
}

export default ProductCard