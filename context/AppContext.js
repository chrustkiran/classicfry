"use client"
import { createContext, useState, useContext } from "react";

const AppContext = createContext();

const cartName = 'classic-fry-cart';

export const AppProvider = ({ children }) => {

  const getCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem(cartName);
    return savedCart ? JSON.parse(savedCart) : [];
  };

  const [cart, setCart] = useState(getCartFromLocalStorage);

 
  const addItemToCart = (name, size, price) => {
    const newItem = new CartItem(name, size, price);
    const updatedCart = [...cart, newItem];
    setCart(updatedCart);
    localStorage.setItem(cartName, JSON.stringify(updatedCart));
  };


  const removeItemFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem(cartName, JSON.stringify(updatedCart));
  };

 
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.calculateTotalPrice(), 0);
  };


  const contextValue = {
    addItemToCart,
    removeItemFromCart,
    getTotalPrice
  }
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
