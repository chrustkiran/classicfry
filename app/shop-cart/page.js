"use client";
import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import { useAppContext } from "@/context/AppContext";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";
import { useState } from "react";
const page = () => {
  // const [cart, setcart] = useState([
  //   {
  //     id: 1,
  //     name: "Deluxe Burger",
  //     price: 12.99,
  //     quantity: 2,
  //     image: "assets/img/shop-food/s1.png",
  //   },
  //   {
  //     id: 2,
  //     name: "Margherita Pizza",
  //     price: 14.99,
  //     quantity: 1,
  //     image: "assets/img/shop-food/s2.png",
  //   },
  //   {
  //     id: 3,
  //     name: "Caesar Salad",
  //     price: 8.99,
  //     quantity: 1,
  //     image: "assets/img/shop-food/s3.png",
  //   },
  // ]);

  const {
    cart,
    decreaseQuantity,
    removeItemFromCart,
    getTotalPrice,
    increaseQuantity,
  } = useAppContext();

  const calculateCartTotal = () => {
    return getTotalPrice();
  };

  const incrementQuantity = (item) => {
    increaseQuantity(item.itemId, item.size);
  };

  const decrementQuantity = (item) => {
    decreaseQuantity(item.itemId, item.size);
  };

  const removeItem = (item) => {
    removeItemFromCart(item.itemId, item.size);
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
                  <div className="cart-items-wrapper shadow-sm p-4">
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
                        {cart.map((item, index) => (
                          <tr key={index} className="cart-item">
                            <td className="cart-item-info">
                              <img
                                src={item.image}
                                alt={item.name}
                                style={{
                                  width: "120px", // Set a fixed width
                                  height: "100px", // Set a fixed height
                                  objectFit: "cover", // Ensures the image covers the area without distortion
                                  borderRadius: "4px", // Optional: Add rounded corners
                                }}
                              />
                              <span>{item.name}</span>
                            </td>
                            <td className="cart-item-price">
                            £{" "}
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
                                      incrementQuantity(item);
                                    }}
                                  >
                                    <i className="far fa-caret-up" />
                                  </Link>
                                  <Link
                                    href="#"
                                    className="cart-decrement"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      decrementQuantity(item);
                                    }}
                                  >
                                    <i className="far fa-caret-down" />
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td className="cart-item-price">
                            £{" "}
                              <span className="total-price">
                                {(item.price * item.quantity).toFixed(2)}
                              </span>
                            </td>
                            <td className="cart-item-remove">
                              <Link
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  removeItem(item);
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
                        className="theme-btn"
                      >
                        Apply Code
                      </Link>
                    </form>
                    <Link href="/shop-list" className="theme-btn">
                      Add more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <div className="col-lg-4" />
              <div className="col-xl-4">
                <div className="cart-pragh-box">
                  <div className="cart-graph shadow-sm">
                    <h4>Cart Total</h4>
                    <ul>
                      <li className="d-flex justify-content-between">
                        <span>Subtotal</span>
                        <span>${calculateCartTotal().toFixed(2)}</span>
                      </li>
                      <li className="justify-content-between">
                        <span>Total</span>
                        <span>
                        £
                          {(
                            calculateCartTotal() + (cart.length > 0 ? 10 : 0)
                          ).toFixed(2)}
                        </span>
                      </li>
                    </ul>
                    <div className="chck">
                      <Link
                        href="/checkout"
                        className="theme-btn d-flex justify-content-between align-items-center w-100"
                      >
                        Checkout
                        <span>
                        £
                          {(
                            calculateCartTotal() + (cart.length > 0 ? 10 : 0)
                          ).toFixed(2)}
                        </span>
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
