import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingCartPage = ({ cart, updateCartItemQuantity, removeFromCart }) => {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart-page">
      <h1>Shopping Cart</h1>
      <div>
        <p>Total Items: {totalItems}</p>
        <p>Total Cost: ${totalCost.toFixed(2)}</p>
        <button>Checkout - Coming Soon</button>
        <Link to="/products">
          <button>Continue Shopping</button>
        </Link>
      </div>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={`plant${item.id}.jpg`} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <div>
              <button onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}>+</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateCartItemQuantity(item.id, Math.max(0, item.quantity - 1))}>-</button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCartPage;
