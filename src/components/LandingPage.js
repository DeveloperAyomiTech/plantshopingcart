import React from 'react';
import './styles.css'; // Import the external CSS file

const LandingPage = () => {
  return (
    <div>
      <header>
        <h1>Plant Paradise</h1>
        <a href="cart.html" className="cart-icon">
          <span id="cart-count">0</span>
        </a>
      </header>
      <section className="landing">
        <div className="content">
          <h2>Welcome to Plant Paradise</h2>
          <p>
            At Plant Paradise, we are passionate about helping you create a vibrant and inviting space with our wide selection of houseplants. Whether you're a seasoned plant enthusiast or just starting out, our curated collection features plants that are perfect for every home. Discover unique and beautiful plants that will bring life to any room and enjoy our expert advice on how to care for them.
          </p>
          <a href="products.html" className="btn-get-started">Get Started</a>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
