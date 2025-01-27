"use client"
import { createContext, useState, useContext } from "react";
import { CartItem } from "./CartItemDTO";

const AppContext = createContext();

const cartName = 'classic-fry-cart';

export const AppProvider = ({ children }) => {

  const getCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem(cartName);
    return savedCart ? JSON.parse(savedCart) : [];
  };

  const [cart, setCart] = useState(getCartFromLocalStorage);

  const findIndexByItem = (itemId, size) => {
    return cart.findIndex(
      (item) => item.itemId === itemId && item.size === size
    );
  }

  // Method to add a new item to the cart
  const addItemToCart = (itemId, name, price, image, size, quantity) => {
    // Check if the item already exists in the cart
    const existingItemIndex = findIndexByItem(itemId, size);

    if (existingItemIndex !== -1) {
      // If the item exists, increase its quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].increaseQuantity();
      setCart(updatedCart);
      localStorage.setItem(cartName, JSON.stringify(updatedCart));
    } else {
      // If the item does not exist, add it to the cart
      const newItem = new CartItem(itemId, name, price, image, size, quantity);
      const updatedCart = [...cart, newItem];
      setCart(updatedCart);
      localStorage.setItem(cartName, JSON.stringify(updatedCart));
    }
  };

  // Method to remove an item from the cart
  const removeItemFromCart = (itemId, size) => {
    const index = findIndexByItem(item, size);
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem(cartName, JSON.stringify(updatedCart));
  };

  // Method to decrease the quantity of an item
  const decreaseQuantity = (itemId, size) => {
    const index = findIndexByItem(itemId, size);
    const updatedCart = [...cart];
    updatedCart[index].decreaseQuantity();
    setCart(updatedCart);
    localStorage.setItem(cartName, JSON.stringify(updatedCart));
  };

  // Method to calculate the total price of all items in the cart
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.calculateTotalPrice(), 0);
  };

  const getTotalCartItem = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  }

  const contextValue = {
    cart, addItemToCart, removeItemFromCart, decreaseQuantity, getTotalPrice, getTotalCartItem
  }
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
