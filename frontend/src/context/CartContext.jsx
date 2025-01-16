import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = ({ id, quantity }) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + quantity,
    }));
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const { [id]: _, ...rest } = prev;
      return rest;
    });
  };

  const clearCart = () => {
    setCartItems({});
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};