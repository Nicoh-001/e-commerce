import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import ProductList from './ProductList';
import About from './About';
import Footer from './Footer';
import Cart from './Cart';
import products from './products'; // Import the product data

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePay = () => {
    // Implement the payment logic here (e.g., display a confirmation message, reset the cart, etc.)
    console.log("Payment processed. Thank you!");
    setCartItems([]);
  };

  return (
    <div className="App">
      <Navbar cartItemsCount={cartItems.length} />
      <div className="pt-5">
        <Home />
      </div>
      <div>
        <ProductList products={products} onAddToCart={handleAddToCart} />
        <Cart
          cartItems={cartItems}
          onRemoveFromCart={removeFromCart}
          onIncreaseQuantity={increaseQuantity}
          onDecreaseQuantity={decreaseQuantity}
          total={calculateTotal()}
          onPay={handlePay}
        />
      </div>
      <About />
      <Footer />
    </div>
  );
};

export default App;
