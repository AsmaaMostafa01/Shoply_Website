import React from 'react';
import '../../css/Cart.css';

const CartSummary = ({ total }) => {
  return (
    <div className="cart-summary">
      <h3>Total: ${total}</h3>
      <button>Checkout</button>
    </div>
  );
}

export default CartSummary;
