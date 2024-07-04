import React from 'react';
import '../../css/Cart.css';

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={item.imgSrc} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
    </div>
  );
}

export default CartItem;
