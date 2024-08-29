import React, { useState } from 'react';
import './styles.css'; // Assuming you have styles in this file

const ShoppingCart = () => {
  // State management for cart
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  // Handle checkout button click
  const handleCheckout = () => {
    alert('Checkout feature is coming soon!');
  };

  return (
    <div>
      <header>
        <h1>Plant Paradise</h1>
        <nav>
          <a href="products.html" className="nav-link">Continue Shopping</a>
          <a href="cart.html" className="cart-icon">
            <span id="cart-count">{totalItems}</span>
          </a>
        </nav>
      </header>
      <section className="cart">
        <h2>Your Cart</h2>
        <div id="cart-items">
          {/* Render cart items here */}
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>${item.price}</p>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="cart-summary">
          <p>Total items: <span id="total-items">{totalItems}</span></p>
          <p>Total cost: $<span id="total-cost">{totalCost}</span></p>
          <button className="btn-checkout" onClick={handleCheckout}>
            Checkout (Coming Soon)
          </button>
        </div>
      </section>
    </div>
  );
};

export default ShoppingCart;
