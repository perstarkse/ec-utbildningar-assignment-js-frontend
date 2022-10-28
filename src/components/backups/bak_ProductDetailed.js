import React from 'react'

const ProductDetailed = () => {
    return (
        <section class="product-detailed container">
            <div class="top-part">
                <div class="card">
                    <div class="product-images">
                        <div class="big-image"></div>
                        <div class="small-images">
                            <div class="image-1"></div>
                            <div class="image-2"></div>
                            <div class="image-3"></div>
                        </div>
                    </div>
                    <div class="text-holder">
                        <a href="#" class="title">Modern Black Blouse</a>
                        <div class="sku-brand-holder">
                            <div class="sku">SKU: 12345670</div>
                            <div class="brand">BRAND: The Northland</div>
                        </div>
                        <div class="rating">
                            <i class="fa-sharp fa-solid fa-star"></i>
                            <i class="fa-sharp fa-solid fa-star"></i>
                            <i class="fa-sharp fa-solid fa-star"></i>
                            <i class="fa-sharp fa-solid fa-star"></i>
                            <i class="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <div class="price">$35.00</div>
                        <div class="description-text">Discovered had get considered projection who favourable. Necessary up
                            knowledge it tolerably. Unwilling departure
                            education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity
                            instantly. (read more)</div>
                        <form action="" class="product-detail-form">
                            <div class="row-descriptor">
                                <div class="descriptor">Size:</div>
                                <div class="size-inputs">
                                    <div class="square-radio">
                                        <label for="small">S</label>
                                        <input name="user-size" type="radio" id="small" value="s" />
                                    </div>
                                    <div class="square-radio">
                                        <label for="medium">M</label>
                                        <input name="user-size" type="radio" id="medium" value="m" />
                                    </div>
                                    <div class="square-radio">
                                        <label for="large">L</label>
                                        <input name="user-size" type="radio" id="large" value="l" />
                                    </div>
                                    <div class="square-radio">
                                        <label for="xl">X</label>
                                        <input name="user-size" type="radio" id="xl" value="x" />
                                    </div>
                                </div>
                            </div>
                            <div class="row-descriptor">
                                <div class="descriptor">Color:</div>
                                <select name="color" id="product-color" class="color-input">
                                    <option value="" disabled selected>Choose an Option</option>
                                    <option value="black">Black</option>
                                    <option value="cyan">Cyan</option>
                                </select>
                            </div>
                            <div class="row-descriptor">
                                <div id="last-div" class="descriptor">Qty:</div>
                                <div class="qty">
                                    <div class="amount-button">
                                        <div class="less"><i class="fa-solid fa-minus"></i></div>
                                        <div class="number">5</div>
                                        <div class="more"><i class="fa-solid fa-plus"></i></div>
                                    </div>
                                    <button class="btn-themed">ADD TO CART</button>
                                </div>
                            </div>
                            <div class="row-descriptor">
                                <div class="descriptor">Share:</div>
                                <div class="share-links">
                                    <a href="" class="circle"><i class="fa-brands fa-facebook-f"></i></a>
                                    <a href="" class="circle"><i class="fa-brands fa-instagram"></i></a>
                                    <a href="" class="circle"><i class="fa-brands fa-twitter"></i></a>
                                    <a href="" class="circle"><i class="fa-brands fa-google"></i></a>
                                    <a href="" class="circle"><i class="fa-brands fa-linkedin"></i></a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
            <div class="bottom-part">
                <div class="nav-links">
                    <a href="">Description</a>
                    <a href="">Additional</a>
                    <a href="">Shopping & Returns</a>
                    <a href="">Reviews</a>
                </div>
                <div class="text-holder">
                    <div class="top">Way extensive and dejection get delivered deficient sincerity gentleman age. Too end
                        instrument possession contrasted
                        motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy
                        northward sportsmen
                        education. Discovery incommode earnestly no he commanded if. Put still any about manor heard.</div>
                    <div class="bullet-points">* Village did removed enjoyed explain nor ham saw calling talking. <br></br>
                        * Securing as informed declared or margaret. <br></br>
                        * Joy horrible moreover man feelings own shy.
                    </div>
                    <div class="bottom">
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