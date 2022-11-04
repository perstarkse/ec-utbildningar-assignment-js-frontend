import React from 'react'
import ProductCard from './components/ProductCard'
import ThemeButton from './components/ThemeButton'

const BigRight = ({ products }) => {
    return (
        <section className="bigright container">
            <div className="product-grid">
                {
                    products.map(product => <ProductCard item={product} key={product.articleNumber} />)
                }
            </div>
            <div className="one-right">
                <div className="title">
                    <h1>2 FOR USD $49</h1>
                </div>
                <ThemeButton input={"FLASH SALE"} modclassName="btn-theme-dark" />
            </div>
        </section>
    )
}

export default BigRight