import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Product.css';
import Breadcrumb from '../components/Breadcrumb';

const Product = () => {
  return (
    <div>
      <Header />
      <Breadcrumb page="Product" />
      <main>
        
        <div className="product-page">
            <div className="product-images">
                <img src="/1.png" alt="Main Product" className="main-image" />
                <div className="thumbnail-images">
                    <img src="/2.png" alt="Thumbnail 1" />
                    <img src="/3.png" alt="Thumbnail 2" />
                    <img src="/4.png" alt="Thumbnail 3"/>
                    <img src="/5.png" alt="Thumbnail 4" />
                </div>
            </div>
            <div className="product-details">
                <h1>Havic HV G-92 Gamepad</h1>
                <div className="rating">★★★★☆ <span>(150 Reviews)</span></div>
                <div className="price">$192.00</div>
                <div className="description">
                    PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble-free install & mess-free removal. Pressure sensitive.
                </div>
                <div className="options">
                    <div className="color-options">
                        <label htmlFor="color">Colours:</label>
                        <select id="color" name="color">
                            <option value="blue">Blue</option>
                            <option value="red">Red</option>
                        </select>
                    </div>
                    <div className="size-options">
                        <label htmlFor="size">Size:</label>
                        <select id="size" name="size">
                            <option value="xs">XS</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                        </select>
                    </div>
                </div>
                <div className="quantity">
                    <label for="quantity">Quantity:</label>
                    <button type="button" className="quantity-button" id="minus-button">-</button>
                    <input type="number" id="quantity" name="quantity" value="1" min="1" />
                    <button type="button" className="quantity-button" id="plus-button">+</button>
                </div>
                <button className="buy-now">Buy Now</button>
                <div className="delivery">
                    <p>Free Delivery <span>Enter your postal code for Delivery Availability</span></p>
                    <p>Return Delivery <span>Free 30 Days Delivery Return. Details</span></p>
                </div>
            </div>
        </div>
        <section className="related-items">
            <h2>Related Items</h2>
            <div className="related-item">
                <img src="/1.png" alt="Related Item 1" />
                <p>HAVIT HV-G92 Gamepad</p>
                <div className="rating">★★★★☆ <span>(88 Reviews)</span></div>
                <div className="price">$120</div>
            </div>
            <div className="related-item">
                <img src="/1.png" alt="Related Item 2"/>
                <p>AK-900 Wired Keyboard</p>
                <div className="rating">★★★☆☆ <span>(75 Reviews)</span></div>
                <div className="price">$96</div>
            </div>
            <div className="related-item">
                <img src="/1.png" alt="Related Item 3"/>
                <p>IPS LCD Gaming Monitor</p>
                <div className="rating">★★★★★ <span>(99 Reviews)</span></div>
                <div className="price">$370</div>
            </div>
            <div className="related-item">
                <img src="/1.png" alt="Related Item 4"/>
                <p>RGB Liquid CPU Cooler</p>
                <div className="rating">★★★★☆ <span>(50 Reviews)</span></div>
                <div className="price">$150</div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Product;
