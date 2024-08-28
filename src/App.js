import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import ProductListingPage from './components/ProductListingPage';
import ShoppingCartPage from './components/ShoppingCartPage';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prevCart => {
      const updatedCart = [...prevCart];
      const existingItemIndex = updatedCart.findIndex(cartItem => cartItem.id === item.id);

      if (existingItemIndex !== -1) {
        updatedCart[existingItemIndex].quantity += 1;
      } else {
        updatedCart.push({ ...item, quantity: 1 });
      }

      return updatedCart;
    });
  };

  const updateCartItemQuantity = (id, quantity) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  return (
    <Router>
      <Header cart={cart} />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/products">
          <ProductListingPage addToCart={addToCart} />
        </Route>
        <Route path="/cart">
          <ShoppingCartPage
            cart={cart}
            updateCartItemQuantity={updateCartItemQuantity}
            removeFromCart={removeFromCart}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
