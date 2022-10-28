import React from 'react'
import { NavLink } from 'react-router-dom'

const TopNav = ({ subPage }) => {
    return (
        <section className="top-nav container">
            <div className="holder">
                <i className="fa-solid fa-home"></i>
                <NavLink to="/" className="base-page" end>Home</NavLink>
                <i className="fa-regular fa-angle-right"></i>
                <NavLink className="sub-page">{subPage}</NavLink>
            </div>
        </section >
    )
}

export default TopNav