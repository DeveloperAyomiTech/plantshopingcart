import React from 'react';
import { Link } from 'react-router-dom';

function Header({ cart }) {
  const itemCount = cart.reduce((acc, plant) => acc + (plant.quantity || 1), 0);

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({itemCount})</Link>
      </nav>
    </header>
  );
}

export default Header;
