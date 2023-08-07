import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import ProductList from './ProductList';
import About from './About';
import productsData from './products'; // Assuming you have a 'products.js' file
import Footer from './Footer';
import Cart from './Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => prevCartItems.filter(item => item.id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCartItems((prevCartItems) => prevCartItems.map(item => 
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (productId) => {
    setCartItems((prevCartItems) => prevCartItems.map(item => 
      item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="App">
      <Navbar cartItemsCount={cartItems.length} />
      <div className="pt-5">
        <Home />
      </div>
      <ProductList products={productsData} onAddToCart={addToCart} />
      <About />
      <Footer />
      <Cart
        cartItems={cartItems} // Pass cartItems here
        onRemoveFromCart={removeFromCart}
        onIncreaseQuantity={increaseQuantity}
        onDecreaseQuantity={decreaseQuantity}
        total={calculateTotal()}
      />
    </div>
  );
};

export default App;
