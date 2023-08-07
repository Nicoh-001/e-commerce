import React from 'react';

const Cart = ({ cartItems, onRemoveFromCart, onIncreaseQuantity, onDecreaseQuantity, total }) => {
  return (
    <div className="cart">
      <div className="cart-box">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.name} - ${item.price.toFixed(2)} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                  <button onClick={() => onIncreaseQuantity(item.id)}>+</button>
                  <button onClick={() => onDecreaseQuantity(item.id)}>-</button>
                  <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
            <p>Total: ${total}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
