import React, { useState } from 'react'
import MenuIcon from './components/MenuIcon'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const [showSearchBar, setSearchBar] = useState(true);

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    const toggleSearchBar = () => {
        setSearchBar(!showSearchBar)
    }

    return (
        <header className="header-bar container">
            <div className="logo">
                <NavLink to="/" end><h1>Fixxo.</h1></NavLink>
            </div>
            <div className={`links ${!showMenu ? "d-none" : ""}`}>
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/categories" end>Categories</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/contacts" end>Contact</NavLink>
            </div>
            <div className="icons">
                {/* <MenuIcon link={"/"} id="searchIcon" icon="fa-regular fa-magnifying-glass" /> */}
                <button onClick={toggleSearchBar} className="circle searchIcon"><i className="fa-regular fa-magnifying-glass"></i></button>
                <MenuIcon link={"/compare"} hideOnMobile={true} icon="fa-regular fa-code-compare" />
                <MenuIcon link={"/wishlist"} hideOnMobile={true} icon="fa-regular fa-heart" quantity="3" />
                <MenuIcon link={"/shoppingcart"} icon="fa-regular fa-bag-shopping" quantity="9" />
                {/* <MenuIcon link={"/"} id="menuIconHandler" icon="fa-solid fa-bars" /> */}
                <button onClick={toggleMenu} className="circle menuIcon"><i className="fa-regular fa-bars"></i></button>
            </div>
            <div className={`searchBar ${!showSearchBar ? "active" : ""}`}>
                <input type="text" placeholder="Search on the site" name="" id="" />
                <button onClick={toggleSearchBar} className="searchIconClose"><i className="fa-regular fa-xmark"></i></button>
                <button className="searchIconSearch"><i className="fa-regular fa-magnifying-glass"></i></button>
            </div>
        </header>
    )
}



export default NavBar