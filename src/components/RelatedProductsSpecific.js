import React from 'react'
import ProductCard from './components/ProductCard'

const RelatedProducts = ({ products }) => {
    return (
        <section className="related-products container">
            <div className="title">
                <h1>Related Products</h1>
            </div>
            <div className="navigation"><a className="circle" href=""><i className="fa-solid fa-chevron-left"></i></a>
                <a className="circle" href=""><i className="fa-solid fa-chevron-right"></i></a>
            </div>
            <div className="horizontal-card-view">
                {
                    products.map(product => <ProductCard item={product} key={product.id} />)
                }
            </div>
        </section>
    )
}

export default RelatedProducts