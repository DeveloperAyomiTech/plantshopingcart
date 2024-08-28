import React from 'react';

function ShoppingCartPage({ cart, removeFromCart, updateQuantity }) {
  const totalItems = cart.reduce((acc, plant) => acc + (plant.quantity || 1), 0);
  const totalPrice = cart.reduce((acc, plant) => acc + (plant.price * (plant.quantity || 1)), 0);

  return (
    <div className="shopping-cart-page">
      <h1>Shopping Cart</h1>
      <p>Total Items: {totalItems}</p>
      <p>Total Cost: ${totalPrice.toFixed(2)}</p>
      <button>Checkout (Coming Soon)</button>
      <button onClick={() => window.location.href = '/products'}>Continue Shopping</button>
      {cart.map(plant => (
        <div key={plant.id} className="cart-item">
          <img src={`/plants/${plant.id}.jpg`} alt={plant.name} className="cart-thumbnail" />
          <h2>{plant.name}</h2>
          <p>${plant.price}</p>
          <button onClick={() => updateQuantity(plant, 1)}>Increase</button>
          <button onClick={() => updateQuantity(plant, -1)}>Decrease</button>
          <button onClick={() => removeFromCart(plant)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCartPage;
