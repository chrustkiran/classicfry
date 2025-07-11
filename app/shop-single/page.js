"use client";
import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";
import { Nav, Tab, Tabs } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import useItem from "@/hooks/useItem";
import { useAppContext } from "@/context/AppContext";
import env from "@/env";
import Toast from "react-bootstrap/Toast";
import useDeal from "@/hooks/useDeal";

const Ingredient = ({ ingredient }) => {
  return (
    <a
      href="#"
      className="list-group-item list-group-item-action"
      aria-current="true"
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{ingredient.name}</h5>
      </div>
      {ingredient.calories && <small>{ingredient.calories} KJ</small>}
      {ingredient.notes && <p className="mb-1">{ingredient.notes}</p>}
    </a>
  );
};

const DealItem = ({ dealItem }) => {
  return (
    <div
      key={dealItem.id}
      className="col-12 d-flex align-items-center p-3 border rounded"
    >
      <div className="d-flex align-items-center" style={{ flex: 1 }}>
        <img
          src={dealItem.image}
          alt={dealItem.name}
          className="img-fluid"
          style={{ width: "120px", height: "100px", marginRight: "20px" }}
        />
        <div>
          <h4>{dealItem.name}</h4>
          <p>{dealItem.description}</p>
        </div>
      </div>
      <div className="ml-auto mr-4 col-3">
        <span>Quantity: {dealItem.quantity}</span>
      </div>
    </div>
  );
};

const page = () => {
  const [quantity, setQuantity] = useState(0);
  const [itemPrice, setItemPrice] = useState(0);
  const [portionSize, setPortionSize] = useState(undefined);

  const [selectedPizzaCrust, setPizzaCrust] = useState(undefined);
  const [selectedPizzaToppings, setPizzaToppings] = useState([]);

  const [itemType, setItemType] = useState(undefined);
  const { item, fetchItem } = useItem();
  const { deal, fetchDeal } = useDeal();
  const [fetchedItem, setFetchedItem] = useState({});
  const [fetchedDeal, setFetchedDeal] = useState({});
  const router = useRouter();
  const searchParams = useSearchParams();
  const [addTab, setAddTab] = useState("Ingredients");
  const [showScrollUp, setShowCrollup] = useState(false);
  const [showCartToast, setShowCartToast] = useState(false);

  const { addItemToCart, getTotalCartItem, getPortionSize } = useAppContext();

  const dealItemRef = useRef();

  const scrollToTarget = () => {
    if (dealItemRef.current) {
      dealItemRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        window.scrollBy(0, -100);
        setShowCrollup(true);
      }, 800);

      setTimeout(() => {
        setShowCrollup(false);
      }, 5000);
    }
  };

  useEffect(() => {
    const itemId = searchParams.get("item");
    const dealId = searchParams.get("deal");
    if (itemId) {
      fetchItem(itemId);
    } else if (dealId) {
      fetchDeal(dealId);
    } else {
      console.warn("no deal or item id");
      router.back(); // Go back if the item ID is not provided in the URL
    }
  }, []);

  const validateItem = (item, setItem, itemType) => {
    if (item?.length == 1 && (item[0].itemId || item[0].dealId)) {
      setItem(item[0]);
      handlePrice(item[0]);
      setItemType(itemType);
      if (itemType === "deal") {
        setAddTab("DealItems");
      }
    } else {
      console.warn("Item does not have an itemId. Navigating back.");
      router.back();
    }
  };

  useEffect(() => {
    if (item) {
      validateItem(item, setFetchedItem, "item");
    } else if (deal) {
      validateItem(deal, setFetchedDeal, "deal");
    }
  }, [item, deal]);

  const addToCart = () => {
    if (itemType === "item") {
      addItemToCart(
        fetchedItem.itemId,
        fetchedItem.name,
        itemPrice,
        fetchedItem.image,
        portionSize ? portionSize : env.DEFAULT,
        quantity,
        env.ITEM_TYPE.ITEM,
        fetchedItem.category?.toLowerCase(),
        {
          ...(fetchedItem.category?.toLowerCase() === "pizza" && {
            pizza: {
              crusts: [selectedPizzaCrust],
              toppings: [...selectedPizzaToppings],
            },
          }),
        }
      );
    } else {
      addItemToCart(
        fetchedDeal.dealId,
        fetchedDeal.name,
        itemPrice,
        fetchedDeal.image,
        portionSize ? portionSize : env.DEFAULT,
        quantity,
        env.ITEM_TYPE.DEAL,
        fetchedItem.dealType?.toLowerCase(),
        {}
      );
    }
    setShowCartToast(true);
  };

  const handlePrice = (fetchedItem) => {
    if (!fetchedItem.portionPrices) {
      //TODO :: check what it is.
      setItemPrice(fetchedItem.basePrice);
    } else {
      const portionPrices = fetchedItem.portionPrices.sort(
        (a, b) => a.price - b.price
      );
      setItemPrice(portionPrices[0].price);
      setPortionSize(portionPrices[0].portionSize);
      if (fetchedItem.category?.toLowerCase() === 'pizza') {
        setPizzaCrust(fetchedItem.pizzaConfig?.crusts[0])
      }
      setFetchedItem({ ...fetchedItem, portionPrices: portionPrices });
    }
  };

  const selectSize = (size) => {
    setQuantity(0);
    setPortionSize(size.portionSize);
    setItemPrice(size.price);
  };

  return (
    <FoodKingLayout>
      <PageBanner pageName={fetchedItem.name || fetchedDeal.name} />
      {!(fetchedItem.name || fetchedDeal.name) ? (
        <div className="d-flex justify-content-center align-items-center p-5 m-5">
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <section className="product-details-section section-padding responsive-cnt">
          <div className="container">
            <div className="product-details-wrapper">
              <div className="row">
                <div className="col-lg-5">
                  <div className="product-image-items">
                    <Tab.Container defaultActiveKey={"nav-home"}>
                      <Tab.Content
                        className="tab-content"
                        eventKey="nav-tab-Content"
                      >
                        <Tab.Pane className="tab-pane fade" eventKey="nav-home">
                          <div className="product-image">
                            <img
                              src={fetchedItem.image || fetchedDeal.image}
                              alt="img"
                            />
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                </div>
                <div className="col-lg-7 mt-5 mt-lg-0">
                  <div className="product-details-content">
                    {/* <div className="star pb-3">
                      {(fetchedItem.tag || fetchedDeal.tag) && (
                        <span>
                          {(fetchedItem.tag || fetchedDeal.tag).replace(
                            "_",
                            " "
                          )}
                        </span>
                      )}
                    </div> */}
                    <h3 className="pb-3 responsive-cnt">
                      {fetchedItem.name || fetchedDeal.name}
                    </h3>
                    {itemType === "deal" && (
                      <button
                        style={{ borderWidth: "2px", borderRadius: "5px" }}
                        className="border border-warning shadow-sm p-2 px-4"
                        onClick={scrollToTarget}
                      >
                        <i className="fas flaticon-chicken" /> &nbsp; Check
                        what's included in this Deal
                      </button>
                    )}
                    <p className="mb-4 responsive-cnt">
                      {fetchedItem.description || fetchedDeal.description}
                    </p>
                    <div className="price-list d-flex align-items-center responsive-cnt">
                      <span>£{itemPrice.toFixed(2)}</span>
                    </div>
                    <div className="d-flex mt-4 flex-column size-btn-container gap-4">
                      <div>
                        {fetchedItem.portionPrices &&
                          fetchedItem.portionPrices.map((size) => (
                            <button
                              onClick={() => selectSize(size)}
                              key={size.portionPriceId}
                              className={`btn btn-sm rounded-circle me-2 ${
                                portionSize === size.portionSize
                                  ? "size-btn-selected"
                                  : "size-btn"
                              }`}
                              style={{ width: "40px", height: "40px" }}
                            >
                              {getPortionSize(size.portionSize)}
                            </button>
                          ))}
                      </div>
                      {fetchedItem.pizzaConfig?.crusts?.length > 0 && (
                        <div>
                          <strong className="mb-2">
                            What crust would you like to have?
                          </strong>
                          <br></br>
                          {fetchedItem.pizzaConfig.crusts.map((crust) => (
                            <button
                              onClick={() => setPizzaCrust(crust)}
                              key={crust}
                              className={`btn btn-sm m-2 ${
                                selectedPizzaCrust === crust
                                  ? "size-btn-selected"
                                  : "size-btn"
                              }`}
                              style={{ height: "40px", borderRadius: "50px" }}
                            >
                              {crust.replaceAll("_", " ")}
                            </button>
                          ))}
                        </div>
                      )}
                      {fetchedItem.pizzaConfig?.isCustomPizza &&
                        fetchedItem.pizzaConfig?.toppings?.length > 0 && (
                          <div>
                            <strong className="mb-2">
                              What toppings would you like to add?
                            </strong>
                            <br></br>
                            {fetchedItem.pizzaConfig.toppings.map((topping) => (
                              <button
                                onClick={() =>
                                  setPizzaToppings((exTopp) =>
                                    exTopp.includes(topping)
                                      ? exTopp.filter((t) => t !== topping) 
                                      : [...exTopp, topping] 
                                  )
                                }
                                key={topping}
                                className={`btn btn-sm m-2 ${
                                  selectedPizzaToppings.includes(topping)
                                    ? "size-btn-selected"
                                    : "size-btn"
                                }`}
                                style={{ height: "40px", borderRadius: "50px" }}
                              >
                                {topping.replaceAll("_", " ")}
                              </button>
                            ))}
                          </div>
                        )}
                    </div>
                    <div className="cart-wrp responsive-cnt">
                      <div className="cart-quantity responsive-cnt responsive-qty">
                        <h5>QUANTITY:</h5>
                        <div className="quantity align-items-center d-flex">
                          <button
                            onClick={() =>
                              setQuantity(Math.max(0, quantity - 1))
                            }
                            className="qtyminus minus"
                          >
                            -
                          </button>
                          <input
                            type="text"
                            value={quantity}
                            onChange={(e) => {
                              const value = parseInt(e.target.value);
                              if (!isNaN(value) && value >= 0) {
                                setQuantity(value);
                              }
                            }}
                            className="qty"
                          />
                          <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="qtyplus plus"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="mb-3  d-flex align-items-center w-100">
                        <Toast
                          show={showCartToast}
                          delay={3000}
                          className="w-100 cart-toast"
                          onClose={() => setShowCartToast(false)}
                        >
                          <Toast.Header>
                            <img
                              src="holder.js/20x20?text=%20"
                              className="rounded me-2"
                              alt=""
                            />
                            <strong className="me-auto">
                              Successfully added to the cart &nbsp;
                              <Link href="/shop-cart">
                                <i className="far fa-lg fa-drumstick p-2"></i>
                                <span className="text-dark translate-middle badge rounded-pill bg-warning">
                                  {getTotalCartItem()}
                                </span>
                              </Link>
                            </strong>
                          </Toast.Header>
                        </Toast>
                      </div>
                      <div className="shop-button d-flex align-items-center responsive-cnt">
                        <button
                          disabled={quantity == 0}
                          onClick={addToCart}
                          className={`theme-btn ${
                            quantity == 0 ? "disabled" : ""
                          }`}
                        >
                          <span className="button-content-wrapper d-flex align-items-center justify-content-center">
                            <span className="button-icon">
                              <i className="flaticon-shopping-cart" />
                            </span>
                            <span className="button-text">Add To Cart</span>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="responsive-cnt d-flex gap-5">
                      <div className="">
                        <Link
                          className="badge rounded-pill category-batch text-white"
                          href="/shop-list"
                        >
                          <span>
                            <i class="fa fa-chevron-left"></i> Jump back to Menu
                          </span>
                        </Link>
                      </div>
                      <div className="">
                        <span>Category:</span>{" "}
                        <Link
                          className="badge rounded-pill category-batch text-white"
                          href={{
                            pathname: "/shop-list",
                            query:
                              itemType === "deal"
                                ? { dealType: fetchedDeal.dealType }
                                : { category: fetchedItem.category },
                          }}
                        >
                          {fetchedItem.category || fetchedDeal.dealType}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-tab" ref={dealItemRef}>
                {showScrollUp && (
                  <p className="border p-3 mt-4 mb-2">
                    <i className="fas fa-mouse" /> &nbsp; Scroll Up to Order
                    this Deal
                  </p>
                )}
                <Tabs
                  activeKey={addTab}
                  id="product-tabs"
                  className="mb-2 responsive-cnt"
                >
                  {itemType === "deal" && (
                    <Tab eventKey="DealItems" title="What's included?">
                      <div className="description-items">
                        <div className="row">
                          <div className="list-group">
                            {fetchedDeal?.dealItemViews?.length > 0 &&
                              fetchedDeal.dealItemViews.map(
                                (dealItem, index) => (
                                  <DealItem
                                    key={index}
                                    dealItem={dealItem}
                                  ></DealItem>
                                )
                              )}
                          </div>
                        </div>
                      </div>
                    </Tab>
                  )}

                  {/* {itemType === "item" && (
                    <Tab eventKey="Ingredients" title="Ingredients">
                      <div className="description-items">
                        <div className="row">
                          <div className="list-group">
                            {fetchedItem?.ingredientsList?.length > 0 &&
                              fetchedItem.ingredientsList.map(
                                (ingredient, index) => (
                                  <Ingredient
                                    key={index}
                                    ingredient={ingredient}
                                  ></Ingredient>
                                )
                              )}
                          </div>
                        </div>
                      </div>
                    </Tab>
                  )} */}
                </Tabs>
              </div>
            </div>
          </div>
        </section>
      )}

      <Cta />
    </FoodKingLayout>
  );
};
export default page;
