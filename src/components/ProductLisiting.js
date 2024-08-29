import React from 'react';
import './styles.css'; // Import the external CSS file

const products = [
  {
    id: 1,
    category: 'Succulents',
    name: 'Succulent 1',
    price: 10,
    image: 'plant1.jpg',
  },
  {
    id: 2,
    category: 'Succulents',
    name: 'Succulent 2',
    price: 12,
    image: 'plant2.jpg',
  },
  {
    id: 3,
    category: 'Ferns',
    name: 'Fern 1',
    price: 15,
    image: 'plant3.jpg',
  },
  {
    id: 4,
    category: 'Ferns',
    name: 'Fern 2',
    price: 18,
    image: 'plant4.jpg',
  },
  {
    id: 5,
    category: 'Flowering Plants',
    name: 'Flowering Plant 1',
    price: 20,
    image: 'plant5.jpg',
  },
  {
    id: 6,
    category: 'Flowering Plants',
    name: 'Flowering Plant 2',
    price: 25,
    image: 'plant6.jpg',
  },
];

const ProductListing = () => {
  const handleAddToCart = (product) => {
    // Implement cart logic here
    alert(`Added ${product.name} to cart`);
  };

  const groupedProducts = products.reduce((acc, product) => {
    (acc[product.category] = acc[product.category] || []).push(product);
    return acc;
  }, {});

  return (
    <div>
      <header>
        <h1>Plant Paradise</h1>
        <nav>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="products.html">Products</a></li>
            <li><a href="cart.html">Cart</a></li>
          </ul>
        </nav>
        <a href="cart.html" className="cart-icon" aria-label="View cart">
          Total Plant(s) <span id="cart-count">0</span>
        </a>
      </header>
      <section className="products">
        <h2>Our Houseplants</h2>
        {Object.keys(groupedProducts).map((category) => (
          <div className="category" key={category}>
            <h3>{category}</h3>
            {groupedProducts[category].map((product) => (
              <div className="product" key={product.id}>
                <img
                  src={products.image}
                  alt={product.name}
                  className="loading"
                  onLoad={(e) => e.currentTarget.classList.add('loaded')}
                />
                <h4>{product.name}</h4>
                <p>${product.price}</p>
                <button
                  className="btn-add-to-cart"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductListing;
