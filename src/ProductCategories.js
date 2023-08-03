

import React from 'react';

const ProductCard = ({ product, description, buttonText }) => {
  return (
    <div className="product-card">
      <h3>{product}</h3>
      <p>{description}</p>
      <button>{buttonText}</button>
    </div>
  );
};

const Class1 = () => {
  return (
    <div className="class-container">
      <h2>Class 1 Header</h2>
      <div className="class-row">
        <ProductCard
          product="Product 1"
          description="Description of Product 1"
          buttonText="Shop Now"
        />
        <ProductCard
          product="Product 2"
          description="Description of Product 2"
          buttonText="Shop Now"
        />
        {/* Add more ProductCards as needed */}
      </div>
    </div>
  );
};


export { ProductCard, Class1 };
