"use client";
import { createContext, useState, useContext } from "react";
import { CartItem } from "./CartItemDTO";
import env from "@/env";

const AppContext = createContext();

const cartName = "classic-fry-cart";

export const AppProvider = ({ children }) => {
  const getCartFromLocalStorage = () => {
    const savedCart = global?.window?.localStorage.getItem(cartName);
    return savedCart
      ? JSON.parse(savedCart).map(
          (item) =>
            new CartItem(
              item.itemId,
              item.name,
              item.price,
              item.image,
              item.category,
              item.size,
              item.quantity,
              item.type,
              item.itemConfig
            )
        )
      : [];
  };

  const [cart, setCart] = useState(getCartFromLocalStorage);

  //These fields are for passing infor to checkout page from shopcart
  const [deliveryMethod, setDeliveryMethod] = useState(undefined);
  const [selectedSuburb, setSelectedSuburb] = useState(null);
  const [address, setAddress] = useState("");
  const [additionalInstructions, setAdditionalInstructions] = useState("");

  const findIndexByItem = (itemId, category, size, itemConfig) => {
    return cart.findIndex((item) => {
      return item.checkIsSame(itemId, category, size, itemConfig);

      // if (category in itemConfig) {
      //   if (category === "pizza") {
      //     // Ensure itemId and size match
      //     const isSameItem = item.itemId === itemId && item.size === size;

      //     // Ensure crust matches
      //     const isSameCrust = item.config.crust === itemConfig.pizza.crust;

      //     // Ensure all toppings in itemConfig are present in item.config.toppings
      //     const hasSameToppings =
      //       itemConfig.pizza.toppings.every((topping) =>
      //         item.config.toppings.includes(topping)
      //       ) &&
      //       item.config.toppings.length === itemConfig.pizza.toppings.length; // Ensure no extra toppings

      //     return isSameItem && isSameCrust && hasSameToppings;
      //   }
      // }

      // // Default check for non-pizza items
      // return item.itemId === itemId && item.size === size;
    });
  };

  const addItemToCart = (
    itemId,
    name,
    price,
    image,
    size,
    quantity,
    type,
    category,
    itemConfig = {}
  ) => {
    // Check if the item already exists in the cart
    const existingItemIndex = findIndexByItem(
      itemId,
      category,
      size,
      itemConfig
    );

    if (existingItemIndex !== -1) {
      // If the item exists, increase its quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].increaseQuantity(quantity);
      setCart(updatedCart);
      global?.window?.localStorage.setItem(
        cartName,
        JSON.stringify(updatedCart)
      );
    } else {
      // If the item does not exist, add it to the cart
      const newItem = new CartItem(
        itemId,
        name,
        price,
        image,
        category,
        size,
        quantity,
        type,
        itemConfig
      );
      const updatedCart = [...cart, newItem];
      setCart(updatedCart);
      global?.window?.localStorage.setItem(
        cartName,
        JSON.stringify(updatedCart)
      );
    }
  };

  // Method to remove an item from the cart
  const removeItemFromCart = (itemId, category, size, itemConfig) => {
    const index = findIndexByItem(itemId, category, size, itemConfig);
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    global?.window?.localStorage.setItem(cartName, JSON.stringify(updatedCart));
  };

  // Method to decrease the quantity of an item
  const decreaseQuantity = (itemId, category, size, itemConfig) => {
    const index = findIndexByItem(itemId, category, size, itemConfig);
    const updatedCart = [...cart];
    updatedCart[index].decreaseQuantity();
    setCart(updatedCart);
    global?.window?.localStorage.setItem(cartName, JSON.stringify(updatedCart));
  };

  const increaseQuantity = (itemId, category, size, itemConfig) => {
    const index = findIndexByItem(itemId, category, size, itemConfig);
    const updatedCart = [...cart];
    updatedCart[index].increaseQuantity();
    setCart(updatedCart);
    global?.window?.localStorage.setItem(cartName, JSON.stringify(updatedCart));
  };

  // Method to calculate the total price of all items in the cart
  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      return total + item.calculateTotalPrice();
    }, 0);
  };

  const getTotalCartItem = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const clearItems = () => {
    global?.window?.localStorage.removeItem(cartName);
    setCart([]);
  };

  const setUser = (user) => {
    global?.window?.localStorage.setItem(
      env.USER,
      JSON.stringify({
        userId: user.userId,
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.contact?.phoneNumber,
      })
    );
  };

  const getUser = () => {
    return global?.window?.localStorage.getItem(env.USER)
      ? JSON.parse(global?.window?.localStorage.getItem(env.USER))
      : undefined;
  };

  const isValidUser = () => {
    const user = getUser();
    return user?.userId;
  };

  const getPortionSize = (portionSize) => {
    const numbers = [
      "ONE",
      "TWO",
      "THREE",
      "FOUR",
      "FIVE",
      "SIX",
      "SEVEN",
      "EIGHT",
      "NINE",
      "TEN",
      "ELEVEN",
      "TWELVE",
    ];

    const pizza_sizes = {
      SEVEN_INCH: '7"',
      NINE_INCH: '9"',
      THIRTEEN_INCH: '13"',
      FIFTEEN_INCH: '15"',
    };
    if (numbers.includes(portionSize)) {
      return numbers.indexOf(portionSize) + 1;
    } else if (portionSize in pizza_sizes) {
      return pizza_sizes[portionSize];
    }
    return portionSize.substring(0, 1);
  };

  const classicFryCheckoutFormData = "classicFryCheckoutFormData";
  const storeCheckoutValuesInSession = () => {
    const data = {
      selectedSuburb,
      address,
      additionalInstructions,
      deliveryMethod,
    };
    global?.window?.sessionStorage.setItem(
      classicFryCheckoutFormData,
      JSON.stringify(data)
    );
  };

  // Retrieve the object directly from sessionStorage
  const getCheckoutValuesFromSession = () => {
    const item = global?.window?.sessionStorage.getItem(
      classicFryCheckoutFormData
    );
    if (item) return JSON.parse(item);
    return {};
  };

  // Clear the stored object from sessionStorage
  const clearCheckoutValuesFromSession = () => {
    global?.window?.sessionStorage.removeItem(classicFryCheckoutFormData);
    setDeliveryMethod(undefined);
    setSelectedSuburb(null);
    setAddress("");
    setAdditionalInstructions("");
  };

  // 20% off for orders over £25
  const getOffer = () => {
    const cartTotal = getTotalPrice();
    if (cartTotal >= env.OFFER_MINIMUM) {
      return cartTotal * env.OFFER_PERCENTAGE; 
    }
    return 0;
  }

  const getFinalTotal = () => {
    let tot = 0;
    const cartTotal = getTotalPrice();
    tot += cartTotal;
    if (deliveryMethod === env.DELIVERY_METHOD.DELIVERY && cartTotal <= env.DELIVERY_MINIMUM) {
      tot += env.DELIVERY_FEE;
    }
    return tot - getOffer();
  }
  
  const contextValue = {
    cart,
    addItemToCart,
    removeItemFromCart,
    decreaseQuantity,
    getTotalPrice,
    getTotalCartItem,
    increaseQuantity,
    clearItems,
    setUser,
    getUser,
    isValidUser,
    getPortionSize,
    deliveryMethod,
    setDeliveryMethod,
    selectedSuburb,
    setSelectedSuburb,
    address,
    setAddress,
    additionalInstructions,
    setAdditionalInstructions,
    storeCheckoutValuesInSession,
    getCheckoutValuesFromSession,
    clearCheckoutValuesFromSession,
    getFinalTotal,
    getOffer
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
