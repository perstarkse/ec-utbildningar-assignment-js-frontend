import React from 'react';
import ProductCard from './components/ProductCard'

const ProductOverviewGrid = ({ latestProducts, bestSellingProducts, topReactedProducts }) => {
    return (
        <section className="product-overview-grid container">
            <div className="latest-products">
                <div className="title">Latest Product</div>
                <div className="product-grid">
                    {
                        latestProducts.map(product => <ProductCard item={product} key={product.id} />)
                    }
                </div>
            </div>
            <div className="best-selling-products">
                <div className="title">Best Selling Product</div>
                <div className="product-grid">
                    {
                        bestSellingProducts.map(product => <ProductCard item={product} key={product.id} />)
                    }
                </div>
            </div>
            <div className="top-reacted-product">
                <div className="title">Top Reacted Product</div>
                <div className="product-grid">
                    {
                        topReactedProducts.map(product => <ProductCard item={product} key={product.id} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default ProductOverviewGrid