import React from 'react';
import '../css/Cart.css';

const Cart = () => {
  return (
    <div className="cart-page">
      <div className="breadcrumb">
        <a href="#">Home</a> / <span>Cart</span>
      </div>
      
      <div className="cart-content">
        <div className="cart-items">
          <div className="cart-header">
            <div className="header-product">Product</div>
            <div className="header-price">Price</div>
            <div className="header-quantity">Quantity</div>
            <div className="header-subtotal">Subtotal</div>
          </div>
          <div className="cart-item">
            <div className="product-info">
              <img src="../1.png" alt="LCD Monitor" />
              <span>LCD Monitor</span>
            </div>
            <div className="product-price">$650</div>
            <div className="product-quantity">
              <select>
                <option value="1">01</option>
                <option value="2">02</option>
              </select>
            </div>
            <div className="product-subtotal">$650</div>
          </div>
          <div className="cart-item">
            <div className="product-info">
              <img src="../2.png" alt="Gamepad" />
              <span>HI Gamepad</span>
            </div>
            <div className="product-price">$550</div>
            <div className="product-quantity">
              <select>
                <option value="1">01</option>
                <option value="2">02</option>
              </select>
            </div>
            <div className="product-subtotal">$1100</div>
          </div>
          <div className="cart-actions">
            <button>Return To Shop</button>
            <button>Update Cart</button>
          </div>
          <div className="coupon">
            <input type="text" placeholder="Coupon Code" />
            <button>Apply Coupon</button>
          </div>
        </div>
        <div className="cart-summary">
          <div className="cart-total">
            <h3>Cart Total</h3>
            <p>Subtotal: <span>$1750</span></p>
            <hr />
            <p>Shipping: <span>Free</span></p>
            <hr />
            <p>Total: <span>$1750</span></p>
            <button>Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
