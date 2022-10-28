import React from 'react'
import ProductCard from '../components/ProductCard'

const ProductGrid = ({ title, products, img, imgAlt }) => {

    return (
        <section className='product-grid'>
            <div className='container'>
                <h1 className='d-flex justify-content-center'>{title}</h1>
                <div className='product-holder'>
                    <img src={img} alt={imgAlt} />
                    <div className='grid-holder row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4'>
                        {
                            products.map(product => <ProductCard item={product} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductGrid