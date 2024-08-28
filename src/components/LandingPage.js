import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <img src="background.jpg" alt="Background" className="background-image" />
      <div className="content">
        <h1>Our Company</h1>
        <p>We offer a variety of houseplants to brighten up your home.</p>
        <Link to="/products">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
