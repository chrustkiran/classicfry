"use client";
import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";
import { useState } from "react";
const page = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Deluxe Burger",
      price: 12.99,
      quantity: 2,
      image: "assets/img/shop-food/s1.png",
    },
    {
      id: 2,
      name: "Margherita Pizza",
      price: 14.99,
      quantity: 1,
      image: "assets/img/shop-food/s2.png",
    },
    {
      id: 3,
      name: "Caesar Salad",
      price: 8.99,
      quantity: 1,
      image: "assets/img/shop-food/s3.png",
    },
  ]);

  const calculateCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const incrementQuantity = (index) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity += 1;
    setCartItems(newCartItems);
  };

  const decrementQuantity = (index) => {
    const newCartItems = [...cartItems];
    if (newCartItems[index].quantity > 1) {
      newCartItems[index].quantity -= 1;
      setCartItems(newCartItems);
    }
  };

  const removeItem = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };
  return (
    <FoodKingLayout>
      <PageBanner pageName={"shop Cart"} />
      <section className="cart-section section-padding fix">
        <div className="container">
          <div className="main-cart-wrapper">
            <div className="row">
              <div className="col-12">
                <div className="cart-wrapper">
                  <div className="cart-items-wrapper">
                    <table>
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Subtotal</th>
                          <th>Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item, index) => (
                          <tr key={index} className="cart-item">
                            <td className="cart-item-info">
                              <img src={item.image} alt={item.name} />
                              <span>{item.name}</span>
                            </td>
                            <td className="cart-item-price">
                              ${" "}
                              <span className="base-price">
                                {item.price.toFixed(2)}
                              </span>
                            </td>
                            <td>
                              <div className="cart-item-quantity">
                                <span className="cart-item-quantity-amount">
                                  {item.quantity}
                                </span>
                                <div className="cart-item-quantity-controller">
                                  <Link
                                    href="#"
                                    className="cart-increment"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      incrementQuantity(index);
                                    }}
                                  >
                                    <i className="far fa-caret-up" />
                                  </Link>
                                  <Link
                                    href="#"
                                    className="cart-decrement"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      decrementQuantity(index);
                                    }}
                                  >
                                    <i className="far fa-caret-down" />
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td className="cart-item-price">
                              ${" "}
                              <span className="total-price">
                                {(item.price * item.quantity).toFixed(2)}
                              </span>
                            </td>
                            <td className="cart-item-remove">
                              <Link
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  removeItem(index);
                                }}
                              >
                                <i className="fas fa-times" />
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="cart-wrapper-footer">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <input
                        type="text"
                        name="promo-code"
                        id="promoCode"
                        placeholder="Promo code"
                      />
                      <Link
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          // Add your promo code logic here
                        }}
                        className="theme-btn border-radius-none"
                      >
                        Apply Code
                      </Link>
                    </form>
                    <Link
                      href="/shop-cart"
                      className="theme-btn border-radius-none"
                    >
                      Update Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6" />
              <div className="col-xl-6">
                <div className="cart-pragh-box">
                  <div className="cart-graph">
                    <h4>Cart Total</h4>
                    <ul>
                      <li>
                        <span>Subtotal</span>
                        <span>${calculateCartTotal().toFixed(2)}</span>
                      </li>
                      <li>
                        <span>Shipping</span>
                        <span>
                          ${cartItems.length > 0 ? "$10.00" : "$0.00"}
                        </span>
                      </li>
                      <li>
                        <span>Total</span>
                        <span>
                          $
                          {(
                            calculateCartTotal() +
                            (cartItems.length > 0 ? 10 : 0)
                          ).toFixed(2)}
                        </span>
                      </li>
                    </ul>
                    <div className="chck">
                      <Link
                        href="/checkout"
                        className="theme-btn border-radius-none"
                      >
                        Checkout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </FoodKingLayout>
  );
};
export default page;
