import React from 'react';
 // Adjust the import path as needed
import LandingPage from './components/LandingPage';
import ProductListing from './components/ProductLisiting';
import ShoppingCart from './components/cart';

const App = () => {
  return (
    <div>
      <LandingPage />
      <ProductListing />
      <ShoppingCart />
    </div>
  );
};

export default App;