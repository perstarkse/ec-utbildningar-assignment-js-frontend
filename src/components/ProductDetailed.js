import React from 'react'
import ThemeButton from './components/ThemeButton'

const ProductDetailed = (item) => {

    return (
        <section className="product-detailed container">
            <div className="top-part">
                <div className="card">
                    <div className="product-images">
                        <div className="big-image">
                            <img src={item.bigImg} alt={item.name} />
                        </div>
                        <div className="small-images">
                            <div className="image-1">
                                <img src={item.smallImg} alt={item.name} />
                            </div>
                            <div className="image-2">
                                <img src={item.smallImg} alt={item.name} />
                            </div>
                            <div className="image-3">
                                <img src={item.smallImg} alt={item.name} />
                            </div>
                        </div>
                    </div>
                    <div className="text-holder">
                        <h5 className="title">Modern Black Blouse</h5>
                        <div className="sku-brand-holder">
                            <div className="sku">SKU: 12345670</div>
                            <div className="brand">BRAND: The Northland</div>
                        </div>
                        <div className="rating">
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <div className="price">$35.00</div>
                        <div className="description-text">Discovered had get considered projection who favourable. Necessary up
                            knowledge it tolerably. Unwilling departure
                            education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity
                            instantly. (read more)</div>
                        <form action="" className="product-detail-form">
                            <div className="row-descriptor">
                                <div className="descriptor">Size:</div>
                                <div className="size-inputs">
                                    <div className="square-radio">
                                        <label for="small">S</label>
                                        <input name="user-size" type="radio" id="small" value="s" />
                                    </div>
                                    <div className="square-radio">
                                        <label for="medium">M</label>
                                        <input name="user-size" type="radio" id="medium" value="m" />
                                    </div>
                                    <div className="square-radio">
                                        <label for="large">L</label>
                                        <input name="user-size" type="radio" id="large" value="l" />
                                    </div>
                                    <div className="square-radio">
                                        <label for="xl">X</label>
                                        <input name="user-size" type="radio" id="xl" value="x" />
                                    </div>
                                </div>
                            </div>
                            <div className="row-descriptor">
                                <div className="descriptor">Color:</div>
                                <select name="color" id="product-color" className="color-input">
                                    <option value="" disabled selected>Choose an Option</option>
                                    <option value="black">Black</option>
                                    <option value="cyan">Cyan</option>
                                </select>
                            </div>
                            <div className="row-descriptor">
                                <div id="last-div" className="descriptor">Qty:</div>
                                <div className="qty">
                                    <div className="amount-button">
                                        <div className="less"><i className="fa-solid fa-minus"></i></div>
                                        <div className="number">5</div>
                                        <div className="more"><i className="fa-solid fa-plus"></i></div>
                                    </div>
                                    <ThemeButton input="ADD TO CART" modclassName="btn-no-styles" />
                                </div>
                            </div>
                            <div className="row-descriptor">
                                <div className="descriptor">Share:</div>
                                <div className="share-links">
                                    <a href="" className="circle"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="" className="circle"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="" className="circle"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="" className="circle"><i className="fa-brands fa-google"></i></a>
                                    <a href="" className="circle"><i className="fa-brands fa-linkedin"></i></a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
            <div className="bottom-part">
                <div className="nav-links">
                    <a href="">Description</a>
                    <a href="">Additional</a>
                    <a href="">Shopping & Returns</a>
                    <a href="">Reviews</a>
                </div>
                <div className="text-holder">
                    <div className="top">Way extensive and dejection get delivered deficient sincerity gentleman age. Too end
                        instrument possession contrasted
                        motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy
                        northward sportsmen
                        education. Discovery incommode earnestly no he commanded if. Put still any about manor heard.</div>
                    <div className="bullet-points">* Village did removed enjoyed explain nor ham saw calling talking. <br></br>
                        * Securing as informed declared or margaret. <br></br>
                        * Joy horrible moreover man feelings own shy.
                    </div>
                    <div className="bottom">
                        On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why
                        sir
                        end believe
                        uncivil respect. Always get adieus nature day course for common. My little garret repair to desire
                        he
                        esteem.
                    </div>
                </div>
            </div>
        </section >
    )
}

export default ProductDetailed