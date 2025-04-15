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
import { OverlayTrigger, Toast, Tooltip } from "react-bootstrap";
const page = () => {
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
    additionalInstructions,
    setAdditionalInstructions,
    address,
    setAddress,
    selectedSuburb,
    setSelectedSuburb,
    storeCheckoutValuesInSession,
  } = useAppContext();

  const calculateCartTotal = () => {
    return getTotalPrice();
  };

  const incrementQuantity = (item) => {
    increaseQuantity(item.itemId, item.category, item.size, item.itemConfig);
  };

  const decrementQuantity = (item) => {
    decreaseQuantity(item.itemId, item.category, item.size, item.itemConfig);
  };

  const removeItem = (item) => {
    removeItemFromCart(item.itemId, item.category, item.size, item.itemConfig);
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

  const validSuburbs = env.VALID_SUBURBS;

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    suburb: "",
    address: "",
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
    // Filter suburbs based on name or postal code
    const matches = validSuburbs.filter(
      (s) =>
        input &&
        (s.name.toLowerCase().includes(input.toLowerCase()) ||
          s.postalCode.toLowerCase().includes(input.toLowerCase()))
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

    if (!deliveryMethod) {
      isValid = false;
    }

    if (deliveryMethod === env.DELIVERY_METHOD.DELIVERY && !address) {
      newErrors.address = "* Address is required";
      isValid = false;
    }
    if (deliveryMethod === env.DELIVERY_METHOD.DELIVERY && !selectedSuburb) {
      newErrors.suburb = "* You must select a Town";
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
    const isTempDisabled = false;
    if (isTempDisabled) {
      alert('Sorry, currently unavailable');
      return;
    }

    if (validateForm()) {
      storeCheckoutValuesInSession();
      setCheckoutWait(true);
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
                              <div className="d-flex flex-column">
                                <span>{item.name}</span>
                                <div className="d-flex flex-row">
                                  <div className="me-2">
                                    {item.size !== env.DEFAULT && (
                                      <span className="badge size-badge badge-warning px-0">
                                        {getPortionSize(item.size)}
                                      </span>
                                    )}
                                  </div>

                                  <div className="me-2">
                                    {"pizza" in item.itemConfig && (
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>
                                            {item.itemConfig.pizza.crusts[0].replaceAll(
                                              "_",
                                              " "
                                            )}
                                          </Tooltip>
                                        }
                                      >
                                        <span className="badge bg-warning text-dark badge-warning">
                                          Crust
                                        </span>
                                      </OverlayTrigger>
                                    )}
                                  </div>
                                  <div>
                                    {"pizza" in item.itemConfig &&
                                      item.itemConfig.pizza?.toppings?.length >
                                        0 && (
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>
                                              {item.itemConfig.pizza.toppings
                                                .map((t) =>
                                                  t.replaceAll("_", " ")
                                                )
                                                .join(", ")}
                                            </Tooltip>
                                          }
                                        >
                                          <span className="badge bg-warning text-dark badge-warning">
                                            Toppings
                                          </span>
                                        </OverlayTrigger>
                                      )}
                                  </div>
                                </div>
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
                  <form className="cart-graph shadow-sm delivery-detail">
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
                              checked={
                                deliveryMethod === env.DELIVERY_METHOD.DELIVERY
                              }
                              onChange={() =>
                                setDeliveryMethod(env.DELIVERY_METHOD.DELIVERY)
                              }
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
                              checked={
                                deliveryMethod === env.DELIVERY_METHOD.PICKUP
                              }
                              onChange={() =>
                                setDeliveryMethod(env.DELIVERY_METHOD.PICKUP)
                              }
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
                    {deliveryMethod === env.DELIVERY_METHOD.DELIVERY && (
                      <div className="mt-1 position-relative">
                        <label>Town</label>
                        <input
                          type="text"
                          className="form-control"
                          value={suburb}
                          onChange={handleSuburbChange}
                          placeholder="Enter a town name or postal code"
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
                        {errors.suburb && (
                          <small className="text-danger">{errors.suburb}</small>
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
                            Town not on the list? That means we can’t reach you!
                            🚛 <br></br> Sadly, we can’t deliver, but pickup is
                            always an option! 😉
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Address Input (Only if Suburb is Valid) */}
                    {deliveryMethod === env.DELIVERY_METHOD.DELIVERY &&
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
                          {errors.address && (
                            <small className="text-danger">
                              {errors.address}
                            </small>
                          )}
                        </div>
                      )}

                    {(deliveryMethod === env.DELIVERY_METHOD.PICKUP ||
                      (deliveryMethod === env.DELIVERY_METHOD.DELIVERY &&
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
                          placeholder="Enter any special delivery instructions or requests (This is an optional field)"
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
                          <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                          </div>
                        ) : (
                          "Checkout"
                        )}
                        <span>£{calculateCartTotal().toFixed(2)}</span>
                      </button>
                      {/* this is just to make the heights the smae */}
                      <br></br>
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
