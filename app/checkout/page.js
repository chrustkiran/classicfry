"use client";

import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
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

const STRIPE_ERR_MSG =
  "We're really sorry, there is a problem in creating an online payment for you...";

const ParentPayment = ({
  amount,
  userId,
  handlePaymentIntent,
  handleSetStripeErr,
  cart,
  clearItems,
  checkoutDetails,
  store,
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
      amount,
      checkoutDetails,
      store,
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
            clearItems={clearItems}
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
  const router = useRouter();

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

      // if (confRes?.order)
      //   alert("Payment successful! Your order is being processed.");
    }
  };

  return (
    <div className="p-4">
      {!isLoading && stripe && elements ? (
        <form onSubmit={handleSubmit}>
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
        </form>
      ) : (
        <div className="spinner" id="spinner"></div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Payment successful!</p>}
    </div>
  );
};

const page = () => {
  const {
    getFinalTotal,
    cart,
    clearItems,
    getUser,
    getCheckoutValuesFromSession,
    store,
  } = useAppContext();
  const router = useRouter();

  const [amount, setAmount] = useState(0);

  const user = getUser();

  const [selectedCash, setSelectedCash] = useState(undefined);

  const [showError, setShowError] = useState(false);

  const [stripeError, setStripeError] = useState(undefined);

  const [paymentIntentId, setPaymentIntentId] = useState(undefined);

  const [isConfirmedPress, setConfirmedPress] = useState(false);

  useEffect(() => {
    if (!user?.userId) {
      console.warn("There is no userId");
      router.back();
    }
  }, []);

  const checkoutDetails = getCheckoutValuesFromSession();
  const deliveryMethod = checkoutDetails.deliveryMethod;
  useEffect(() => {
    deliveryMethod === env.DELIVERY_METHOD.DELIVERY
      ? setSelectedCash("online")
      : setSelectedCash("counter");
  }, []);

  const handlePaymentIntent = (paymentIntentId) => {
    setPaymentIntentId(paymentIntentId);
  };

  const handleSetStripeErr = (stripeErr) => {
    setStripeError(stripeErr);
  };

  useEffect(() => {
    setAmount(getFinalTotal().toFixed(2));
  }, [getFinalTotal]);

  const sendOrderAsCounterPayment = async (
    userId,
    cart,
    totalAmount,
    paymentIntentId,
    clearItems,
    checkoutDetails
  ) => {
    setConfirmedPress(true);
    const postOrderReq = new PostOrderRequest(
      userId,
      cart,
      env.PAYMENT_TYPE.COUNTER,
      totalAmount,
      checkoutDetails,
      store,
      paymentIntentId
    );
    await OrderService.createOrder(postOrderReq)
      .then((order) => {
        if (!order?.orderId) {
          setShowError(true);
        } else {
          clearItems();
          router.push(`/orders?success=true&orderId=${order.orderId}`);
        }
      })
      .catch((_) => {
        setConfirmedPress(false);
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

                  {deliveryMethod === env.DELIVERY_METHOD.PICKUP && (
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
                  )}

                  {/* Pay Online Option */}
                  {deliveryMethod === env.DELIVERY_METHOD.PICKUP && (
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
                          <i className="fas fa-computer-classic"></i>
                          &nbsp;&nbsp; I can pay online
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
                            clearItems={clearItems}
                            checkoutDetails={checkoutDetails}
                            store={store}
                          ></ParentPayment>
                        </div>
                      )}
                    </li>
                  )}

                  {selectedCash === "counter" && (
                    <button
                      onClick={() =>
                        sendOrderAsCounterPayment(
                          user?.userId,
                          cart,
                          amount,
                          paymentIntentId,
                          clearItems,
                          checkoutDetails
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
                      <span id="button-text">
                        {isConfirmedPress ? (
                          <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                          </div>
                        ) : (
                          "Confirm your order"
                        )}
                      </span>
                    </button>
                  )}

                  {deliveryMethod === env.DELIVERY_METHOD.DELIVERY &&
                    amount > 0 && (
                      <div className="mt-3 p-3 border rounded bg-light">
                        <ParentPayment
                          amount={amount}
                          userId={user?.userId}
                          handlePaymentIntent={handlePaymentIntent}
                          handleSetStripeErr={handleSetStripeErr}
                          cart={cart}
                          clearItems={clearItems}
                          checkoutDetails={checkoutDetails}
                          store={store}
                        ></ParentPayment>
                      </div>
                    )}
                </ul>
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
