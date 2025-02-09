"use client";

import Cta from "@/components/Cta";
import NiceSelect from "@/components/NiceSelect";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  CheckoutProvider,
  Elements,
  PaymentElement,
  PaymentRequestButtonElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState, useEffect, useRef } from "react";
import env from "@/env";
import { useAppContext } from "@/context/AppContext";
import { useRouter } from "next/navigation";
import { PostOrderRequest } from "@/context/OrderDTO";
import OrderService from "@/api/order";
import PaymentService from "@/api/payment";

const USER_ID = env.USER_ID;
const STRIPE_ERR_MSG =
  "We're really sorry, there is a problem in creating an online payment for you...";

const ParentPayment = ({
  amount,
  userId,
  handlePaymentIntent,
  handleSetStripeErr,
  cart,
  clearItems
}) => {
  const stripePromise = loadStripe(env.stripeAPIKey);

  const [clientSecret, setClientSecret] = useState(null);
  const [orderId, setOrderId] = useState(undefined);

  const appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: "#00000",
      colorBackground: "#ffffff",
      colorText: "#30313d",
      colorDanger: "#7d091e",
    },
  };

  const loader = "auto";

  const sendOrderAsOnlinePayment = async (userId, cart, amount) => {
    const postOrderReq = new PostOrderRequest(
      userId,
      cart,
      env.PAYMENT_TYPE.ONLINE,
      amount
    );
    await OrderService.createOrder(postOrderReq)
      .then((order) => {
        if (!order?.orderId) {
          handleSetStripeErr(STRIPE_ERR_MSG);
        } else {
          setOrderId(order.orderId);
          //since this is an online payment, this should have stripeDetails.
          setClientSecret(order.stripeDetails?.clientSecret);
          handlePaymentIntent(order.stripeDetails?.paymentIntentId);
        }
      })
      .catch((_) => {
        handleSetStripeErr(STRIPE_ERR_MSG);
      });

    setTimeout(() => {
      handleSetStripeErr(undefined);
    }, 8000);
  };

  useEffect(() => {
    if (clientSecret === null) {
      sendOrderAsOnlinePayment(userId, cart, amount);
    }
  }, []);

  return (
    <div>
      {clientSecret && (
        <Elements
          stripe={stripePromise}
          options={{ clientSecret, appearance, loader }}
        >
          <PaymentForm
            clientSecret={clientSecret}
            amount={amount}
            handleSetStripeErr={handleSetStripeErr}
            orderId={orderId}
            clearItems = {clearItems}
          />
        </Elements>
      )}
      {!clientSecret && <p className="mb-0">Please wait...</p>}
    </div>
  );
};

const PaymentForm = ({ amount, handleSetStripeErr, orderId, clearItems }) => {
  const stripe = useStripe();
  const elements = useElements();
  const router  = useRouter();

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {},
      redirect: "if_required",
    });

    if (result.error) {
      handleSetStripeErr(
        "Hmm.. Something went wrong! Please check your card details..."
      );
      //TODO :: what if payment fails ?
      setTimeout(() => {
        handleSetStripeErr(undefined);
      }, 8000);
    } else {
      PaymentService.confirmPayment({
        paymentIntentId: result?.paymentIntent.id,
        orderID: orderId,
      })
        .then((confRes) => {
          if (!confRes?.orderId) {
            handleSetStripeErr(
              `Oops.. we are really sorry, You have completed your payment successfully... but there was an error from ourside, please inform about this at our store, Your Order ID is ${orderId.substring(
                0,
                6
              )}`
            );
          } else {
            clearItems();
            router.push(`/orders?success=true&orderId=${confRes.orderId}`);
          }
        })
        .catch((err) => {
          handleSetStripeErr(
            `Oops.. we are really sorry, You have completed your payment successfully... but there was an error from ourside, please inform about this at our store, Your Order ID is ${orderId.substring(
              0,
              6
            )}`
          );
        });

      if (confRes?.order)
        alert("Payment successful! Your order is being processed.");
    }
  };

  return (
    <div className="p-4">
      {(!isLoading && stripe && elements) ? <form onSubmit={handleSubmit}>
        <PaymentElement
          options={{
            layout: "accordion",
          }}
        ></PaymentElement>
        <button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          className="mt-3"
          style={{
            background: "#ffb936",
            fontFamily: "Arial, sans-serif",
            color: "#ffffff",
            borderRadius: "4px",
            border: 0,
            padding: "12px 16px",
            fontSize: "16px",
            fontWeight: 600,
            cursor: "PointerEvent",
            display: "block",
            transition: "all 0.2s ease",
            boxShadow: "0px 4px 5.5px 0px rgba(0, 0, 0, 0.07)",
            width: "100%",
          }}
        >
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              `Pay £${amount} now`
            )}
          </span>
        </button>
      </form> :  <div className="spinner" id="spinner"></div>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Payment successful!</p>}
    </div>
  );
};

const page = () => {
  const { getTotalPrice, cart, clearItems, getUser } = useAppContext();
  const router = useRouter();

  const [amount, setAmount] = useState(0);

  const user = getUser();

  const [selectedCash, setSelectedCash] = useState("counter");

  const [showError, setShowError] = useState(false);

  const [stripeError, setStripeError] = useState(undefined);

  const [paymentIntentId, setPaymentIntentId] = useState(undefined);

  useEffect(() => {
    if (!user?.userId) {
      console.warn("There is no userId");
      router.back();
    }
  }, []);

  const handlePaymentIntent = (paymentIntentId) => {
    setPaymentIntentId(paymentIntentId);
  };

  const handleSetStripeErr = (stripeErr) => {
    setStripeError(stripeErr);
  };

  useEffect(() => {
    setAmount(getTotalPrice().toFixed(2));
  }, [getTotalPrice]);

  const sendOrderAsCounterPayment = async (
    userId,
    cart,
    totalAmount,
    paymentIntentId,
    clearItems
  ) => {
    const postOrderReq = new PostOrderRequest(
      userId,
      cart,
      env.PAYMENT_TYPE.COUNTER,
      totalAmount,
      paymentIntentId
    );
    await OrderService.createOrder(postOrderReq)
      .then((order) => {
        if (!order?.oderId) {
          setShowError(true);
        } else {
          clearItems()
          router.push(`/orders?success=true&orderId=${order.orderId}`);
        }
      })
      .catch((_) => {
        setShowError(true);
      });

    setTimeout(() => {
      setShowError(false);
    }, 8000);
  };

  return (
    <FoodKingLayout>
      <PageBanner pageName={"CHECKOUT"} />
      {user?.userId && (
        <section className="checkout-section fix section-padding border-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ul className="list-group px-4">
                  {showError && (
                    <p className="p-4 error-dial">
                      There is something wrong with the Order, Please try again.
                    </p>
                  )}
                  {stripeError && (
                    <p className="p-4 error-dial">{stripeError}</p>
                  )}
                  {/* Pay at Counter Option */}
                  <li className="list-group-item">
                    <div className="custom-control cash-radio custom-radio d-flex gap-3">
                      <input
                        type="radio"
                        id="cashRadioCounter"
                        name="cashRadio"
                        className="custom-control-input"
                        checked={selectedCash === "counter"}
                        onChange={() => setSelectedCash("counter")}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="cashRadioCounter"
                      >
                        <i className="fas fa-chalkboard-teacher"></i>
                        &nbsp;&nbsp; I want to pay at the counter
                      </label>
                    </div>
                    {selectedCash === "counter" && (
                      <div className="mt-3 p-3 border rounded bg-light">
                        <p className="mb-0">
                          You have selected to pay at the counter. Please make
                          sure to pay <strong>£{amount}</strong> by using card
                          or cash.
                        </p>
                      </div>
                    )}
                  </li>

                  {/* Pay Online Option */}
                  <li className="list-group-item">
                    <div className="custom-control cash-radio custom-radio d-flex gap-3">
                      <input
                        type="radio"
                        id="cashRadioOnline"
                        name="cashRadio"
                        className="custom-control-input"
                        checked={selectedCash === "online"}
                        onChange={() => setSelectedCash("online")}
                      />

                      <label
                        className="form-check-label"
                        htmlFor="cashRadioOnline"
                      >
                        <i className="fas fa-computer-classic"></i>&nbsp;&nbsp;
                        I can pay online
                      </label>
                    </div>

                    {/* Expandable Div when "Pay Online" is selected */}
                    {selectedCash === "online" && (
                      <div className="mt-3 p-3 border rounded bg-light">
                        <ParentPayment
                          amount={amount}
                          userId={user?.userId}
                          handlePaymentIntent={handlePaymentIntent}
                          handleSetStripeErr={handleSetStripeErr}
                          cart={cart}
                          clearItems = {clearItems}
                        ></ParentPayment>
                      </div>
                    )}
                  </li>

                  {selectedCash === "counter" && (
                    <button
                      onClick={() =>
                        sendOrderAsCounterPayment(
                          user?.userId,
                          cart,
                          amount,
                          paymentIntentId,
                          clearItems
                        )
                      }
                      id="submit"
                      className="mt-3 btn btn-warning text-white fw-bold w-100"
                      style={{
                        borderRadius: "4px",
                        padding: "12px 16px",
                        fontSize: "16px",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        boxShadow: "0px 4px 5.5px 0px rgba(0, 0, 0, 0.07)",
                      }}
                    >
                      <span id="button-text">Confirm your order</span>
                    </button>
                  )}
                </ul>

                {/* <form action="#" method="post">
                <div className="row g-4">
                  <div className="col-md-5 col-lg-4 col-xl-3">
                    <div className="checkout-radio">
                      <p className="primary-text">Select any one</p>
                      <div className="checkout-radio-wrapper">
                        <div className="checkout-radio-single">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="cCard"
                            name="pay-method"
                            defaultValue="Credit/Debit Cards"
                          />
                          <label htmlFor="cCard">Credit/Debit Cards</label>
                        </div>
                        <div className="checkout-radio-single">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="paypal"
                            name="pay-method"
                            defaultValue="PayPal"
                          />
                          <label htmlFor="paypal">PayPal</label>
                        </div>
                        <div className="checkout-radio-single">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="payoneer"
                            name="pay-method"
                            defaultValue="Payoneer"
                          />
                          <label htmlFor="payoneer">Payoneer</label>
                        </div>
                        <div className="checkout-radio-single">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="visa"
                            name="pay-method"
                            defaultValue="Visa"
                          />
                          <label htmlFor="visa">Visa</label>
                        </div>
                        <div className="checkout-radio-single">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="mastercard"
                            name="pay-method"
                            defaultValue="Mastercard"
                          />
                          <label htmlFor="mastercard">Mastercard</label>
                        </div>
                        <div className="checkout-radio-single">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="fastPay"
                            name="pay-method"
                            defaultValue="Fastpay"
                          />
                          <label htmlFor="fastPay">Fastpay</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 col-lg-8 col-xl-9">
                    <div className="checkout-single-wrapper">
                      <div className="checkout-single boxshado-single">
                        <h4>Billing address</h4>
                        <div className="checkout-single-form">
                          <div className="row g-4">
                            <div className="col-lg-6">
                              <div className="input-single">
                                <input
                                  type="text"
                                  name="user-first-name"
                                  id="userFirstName"
                                  required
                                  placeholder="First Name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="input-single">
                                <input
                                  type="text"
                                  name="user-last-name"
                                  id="userLastName"
                                  required
                                  placeholder="Last Name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="input-single">
                                <input
                                  type="email"
                                  name="user-check-email"
                                  id="userCheckEmail"
                                  required
                                  placeholder="Your Email"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="input-single">
                                <NiceSelect
                                  option={[
                                    { id: 1, name: "USA", value: "usa" },
                                    { id: 2, name: "AUS", value: "aus" },
                                    { id: 3, name: "UK", value: "uk" },
                                    { id: 4, name: "NED", value: "ned" },
                                  ]}
                                  className="country-select"
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="input-single">
                                <textarea
                                  name="user-address"
                                  id="userAddress"
                                  placeholder="Address"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="checkout-single checkout-single-bg">
                        <h4>Payment Methods</h4>
                        <div className="checkout-single-form">
                          <p className="payment" />
                          <div className="row g-3">
                            <div className="col-lg-12">
                              <div className="input-single">
                                <label htmlFor="userCardNumber">
                                  Card number
                                </label>
                                <input
                                  type="number"
                                  name="user-card-number"
                                  id="userCardNumber"
                                  placeholder="0000 0000 0000 0000"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="input-single">
                                <label htmlFor="userCardDate">
                                  Expiry date
                                </label>
                                <input
                                  type="text"
                                  id="userCardDate"
                                  placeholder="DD/MM/YY"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="input-single">
                                <label htmlFor="userCvc">Cvc / Cvv</label>
                                <input
                                  type="text"
                                  maxLength={3}
                                  name="user-card-cvc"
                                  id="userCvc"
                                  required
                                  placeholder="3 Digits"
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="input-single">
                                <label htmlFor="userCardName">
                                  Name on card
                                </label>
                                <input
                                  type="text"
                                  name="user-card-name"
                                  id="userCardName"
                                  placeholder="Name"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="input-single input-check payment-save">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="save-for-next"
                            id="saveForNext"
                          />
                          <label htmlFor="saveForNext">
                            Save for my next payment
                          </label>
                        </div>
                        <div className="mt-4">
                          <Link
                            href="/checkout"
                            className="theme-btn border-radius-none"
                          >
                            Payment Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form> */}
              </div>
            </div>
          </div>
        </section>
      )}
      {!user?.userId && <p>Loading...</p>}
      <Cta />
    </FoodKingLayout>
  );
};
export default page;
