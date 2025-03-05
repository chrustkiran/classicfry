"use client";
import UserService from "@/api/user";
import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import { useAppContext } from "@/context/AppContext";
import env from "@/env";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Toast } from "react-bootstrap";
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
    setUser,
    getUser,
    isValidUser,
    getPortionSize,
    deliveryMethod,
    setDeliveryMethod,
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

  const [formData, setFormData] = useState({
    firstName: isValidUser() ? getUser().firstName : "",
    lastName: isValidUser() ? getUser().lastName : "",
    phoneNumber: isValidUser() ? getUser().phoneNumber : "",
  });

  const [showCheckError, setShowCheckError] = useState(false);
  const [checkoutWait, setCheckoutWait] = useState(false);

  const [suburb, setSuburb] = useState("");
  const [filteredSuburbs, setFilteredSuburbs] = useState([]);
  const [additionalInstructions, setAdditionalInstructions] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(false);

  const validSuburbs = [
    { name: "Sydney", postalCode: "2000" },
    { name: "Melbourne", postalCode: "3000" },
    { name: "Brisbane", postalCode: "4000" },
    { name: "Perth", postalCode: "6000" },
  ];

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleAdditionalInstructionsChange = (e) => {
    setAdditionalInstructions(e.target.value);
  };

  const handleSuburbChange = (e) => {
    const input = e.target.value;
    setSuburb(input);
    suburbPostalCodes = validSuburbs.map(v => `${v.name} (${v.postalCode})`)

    // Filter suburbs based on name or postal code
    const matches = validSuburbs.filter(
      (s) =>
        input && !suburbPostalCodes.includes(input) && 
        (s.name.toLowerCase().includes(input.toLowerCase()) ||
          s.postalCode.includes(input))
    );

    setFilteredSuburbs(matches);
  };

  const handleSuburbSelect = (suburb) => {
    setSuburb(`${suburb.name} (${suburb.postalCode})`);
    setSelectedSuburb(suburb);
    setFilteredSuburbs([]); // Hide suggestions
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = { firstName: "", lastName: "", phoneNumber: "" };

    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Mobile number is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const route = useRouter();

  const dummyAddress = {
    number: "456",
    streetAddress: "Collins Street",
    streetAddress2: "Suite 12A",
    town: "Melbourne",
    county: "Victoria",
    postCode: "3000",
    country: "Australia",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCheckoutWait(true);
    if (validateForm()) {
      await UserService.createUser({
        ...formData,
        isGuestUser: true,
        address: dummyAddress,
      })
        .then((user) => {
          setUser(user);
          setCheckoutWait(false);
          route.push("/checkout");
        })
        .catch((err) => {
          setCheckoutWait(false);
          setShowCheckError(true);
        });
    } else {
      console.log(
        "Form submission failed. Please fill in all required fields."
      );
    }
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
                                  width: "120px",
                                  height: "100px",
                                  objectFit: "cover",
                                  borderRadius: "4px",
                                }}
                              />
                              <div className="d-flex row">
                                <span>{item.name}</span>
                                {item.size !== env.DEFAULT && (
                                  <span className="badge size-badge badge-warning px-0">
                                    {getPortionSize(item.size)}
                                  </span>
                                )}
                              </div>
                            </td>

                            <td className="cart-item-price1">
                              £{" "}
                              <span className="base-price">
                                {item.price.toFixed(2)}
                              </span>
                            </td>
                            <td>
                              <div className="cart-item-quantity">
                                <div className="cart-item-quantity-box">
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
                              </div>
                            </td>
                            <td className="cart-item-price2">
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
                                <i className="fas fa-trash"></i>
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
            <div className="d-flex flex-column flex-md-row justify-content-end gap-2">
              <div className="col-md-6 col-sm-12">
                <div className="cart-pragh-box">
                  <form className="cart-graph shadow-sm">
                    <h4>Delivery Details</h4>
                    <div
                      className={` p-2 custom-control ${
                        !deliveryMethod ? "border border-danger" : ""
                      }`}
                    >
                      <div>
                        {!deliveryMethod ? (
                          <span className="text-danger">
                            * Please choose a delivery method
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                      <label className="mt-2">Delivery Method</label>
                      <ul className="list-group">
                        {/* Delivery Option */}
                        <li className="list-group-item">
                          <div className="custom-control custom-radio d-flex gap-3">
                            <input
                              type="radio"
                              id="deliveryOption"
                              name="deliveryMethod"
                              className="custom-control-input"
                              checked={deliveryMethod === "delivery"}
                              onChange={() => setDeliveryMethod("delivery")}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="deliveryOption"
                            >
                              <i className="fas fa-truck"></i> &nbsp;&nbsp;
                              Delivery
                            </label>
                          </div>
                        </li>

                        {/* Pickup Option */}
                        <li className="list-group-item">
                          <div className="custom-control custom-radio d-flex gap-3">
                            <input
                              type="radio"
                              id="pickupOption"
                              name="deliveryMethod"
                              className="custom-control-input"
                              checked={deliveryMethod === "pickup"}
                              onChange={() => setDeliveryMethod("pickup")}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="pickupOption"
                            >
                              <i className="fas fa-store"></i> &nbsp;&nbsp;
                              Pickup
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Suburb Input (Only for Delivery) */}
                    {deliveryMethod === "delivery" && (
                      <div className="mt-1 position-relative">
                        <label>Suburb</label>
                        <input
                          type="text"
                          className="form-control"
                          value={suburb}
                          onChange={handleSuburbChange}
                          placeholder="Enter suburb name or postal code"
                        />
                        {/* Autocomplete Suggestions */}
                        {filteredSuburbs.length > 0 && (
                          <ul className="list-group position-absolute w-100 bg-white shadow">
                            {filteredSuburbs.map((s, index) => (
                              <li
                                key={index}
                                className="list-group-item list-group-item-action"
                                onClick={() => handleSuburbSelect(s)}
                                style={{ cursor: "pointer" }}
                              >
                                {s.name} ({s.postalCode})
                              </li>
                            ))}
                          </ul>
                        )}
                        <div
                          className="alert alert-warning d-flex align-items-center mt-1"
                          style={{ zIndex: "-1000" }}
                          role="alert"
                        >
                          <span
                            className="fst-italic"
                            style={{ fontSize: "16px" }}
                          >
                            Suburb not on the list? That means we can’t reach
                            you! 🚛 <br></br> Sadly, we can’t deliver, but
                            pickup is always an option! 😉
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Address Input (Only if Suburb is Valid) */}
                    {deliveryMethod === "delivery" &&
                      validSuburbs
                        .map((v) => `${v.name} (${v.postalCode})`)
                        .includes(suburb) && (
                        <div className="mt-1">
                          <label>Address</label>
                          <input
                            type="text"
                            className="form-control"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Enter address"
                          />
                        </div>
                      )}

                    {(deliveryMethod === "pickup" ||
                      (deliveryMethod === "delivery" &&
                        validSuburbs
                          .map((v) => `${v.name} (${v.postalCode})`)
                          .includes(suburb))) && (
                      <div className="mt-1">
                        <label>Additional Instructions</label>
                        <textarea
                          className="form-control"
                          rows="3"
                          value={additionalInstructions}
                          onChange={handleAdditionalInstructionsChange}
                          placeholder="Enter any special delivery instructions or requests"
                        ></textarea>
                      </div>
                    )}
                  </form>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="cart-pragh-box">
                  <form
                    className="cart-graph shadow-sm"
                    onSubmit={handleSubmit}
                  >
                    <h4>Cart Total</h4>
                    <ul>
                      <li className="d-flex justify-content-between">
                        <span>Subtotal</span>
                        <span>${calculateCartTotal().toFixed(2)}</span>
                      </li>
                      <li className="justify-content-between">
                        <span>Total</span>
                        <span>£{calculateCartTotal().toFixed(2)}</span>
                      </li>

                      <p className="border shadow-sm p-4">
                        <h5>Required details</h5>
                        <li className="justify-content-between mt-2">
                          <span>
                            <label htmlFor="firstName">First name</label>
                          </span>
                          <span className="col-7">
                            <input
                              type="text"
                              className="form-control"
                              id="firstName"
                              placeholder="First name"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                            />
                            {errors.firstName && (
                              <small className="text-danger">
                                {errors.firstName}
                              </small>
                            )}
                          </span>
                        </li>
                        <li className="justify-content-between">
                          <span>
                            <label htmlFor="lastName">Last name</label>
                          </span>
                          <span className="col-7">
                            <input
                              type="text"
                              className="form-control"
                              id="lastName"
                              placeholder="Last name"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                            />
                            {errors.lastName && (
                              <small className="text-danger">
                                {errors.lastName}
                              </small>
                            )}
                          </span>
                        </li>
                        <li className="justify-content-between">
                          <span>
                            <label htmlFor="phoneNumber">Mobile Number</label>
                          </span>
                          <span className="col-7">
                            <input
                              type="text"
                              className="form-control"
                              id="phoneNumber"
                              placeholder="Enter your mobile number"
                              value={formData.phoneNumber}
                              onChange={handleInputChange}
                              required
                            />
                            {errors.phoneNumber && (
                              <small className="text-danger">
                                {errors.phoneNumber}
                              </small>
                            )}
                          </span>
                        </li>
                      </p>
                    </ul>
                    <div className="chck">
                      <Toast
                        autohide
                        show={showCheckError}
                        delay={5000}
                        className="w-100 checkout-toast my-2"
                        onClose={() => setShowCheckError(false)}
                      >
                        <Toast.Header>
                          Something went wrong... &nbsp;
                        </Toast.Header>
                      </Toast>
                      <button
                        type="submit"
                        className="theme-btn d-flex justify-content-between align-items-center w-100"
                      >
                        {checkoutWait ? (
                          <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                          </div>
                        ) : (
                          "Checkout"
                        )}
                        <span>£{calculateCartTotal().toFixed(2)}</span>
                      </button>
                    </div>
                  </form>
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
