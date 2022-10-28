import React from 'react'
import ProductCard from './components/ProductCard'
import ThemeButton from './components/ThemeButton'

const BigLeft = ({ products }) => {
    return (
        <section className="bigleft container">
            <div className="one-left">
                <div className="title">
                    <h1>2 FOR USD $29</h1>
                </div>
                <ThemeButton input={"FLASH SALE"} modclassName="btn-theme-dark" />
            </div>
            <div className="product-grid" >
                {
                    products.map(product => <ProductCard item={product} key={product.id} />)
                }
            </div>
        </section>
    )
}

export default BigLeft