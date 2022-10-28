import React from 'react'
import ProductCard from './components/ProductCard'

const FeaturedProduct = ({ products }) => {
    return (
        <section className="featured-product container">
            <div className="title">
                <h2>Featured Product</h2>
            </div>
            <div className="product-grid">
                {
                    products.map(product => <ProductCard item={product} key={product.id} />)
                }
            </div>
        </section>
    )
}

export default FeaturedProduct