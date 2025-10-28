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

  const {
    addItemToCart,
    getTotalCartItem,
    getPortionSize,
    addMultipleItemsToCart,
  } = useAppContext();

  const dealItemRef = useRef();

  const [drinkOptions, setDrinkOptions] = useState([]); 
  const [selectedDrinks, setSelectedDrinks] = useState([]);

  // helper to count drinks required per deal unit
  const getDrinksPerDeal = (dealObj) => {
    if (!dealObj?.dealItemViews) return 0;
    return dealObj.dealItemViews.reduce((acc, it) => {
      const name = (it.dealItemType || "").toString().toLowerCase();
      return acc + (name == "drink" ? Number(it.quantity || 0) : 0);
    }, 0);
  };

  // extract drink options from dealItemViews when drink item has 'options' field
  const extractDrinkOptionsFromDeal = (dealObj) => {
    if (!dealObj || !Array.isArray(dealObj.dealItemViews)) return [];
    const opts = [];
    dealObj.dealItemViews.forEach((it) => {
      const name = (it.dealItemType || "").toLowerCase();
      if (name == "drink" && Array.isArray(it.dealItemOptions)) {
        it.dealItemOptions.forEach((o, idx) => {
          // normalize option into object { id, name, image?, price? }
          if (typeof o === "string") {
            opts.push({
              id: `${it.dealItemId || it.dealItemId || "d"}-${idx}`,
              name: o,
            });
          } else if (o && typeof o === "object") {
            const id = o.id || o.itemId || `${it.dealItemId || "d"}-${idx}`;
            opts.push({
              id,
              name: o.name || o.label || String(o.id || idx),
              image: o.image,
              price: o.price,
            });
          }
        });
      }
    });
    // remove duplicates (by id or name)
    const map = new Map();
    opts.forEach((o) => {
      const key = o.id ?? o.name;
      if (!map.has(key)) map.set(key, o);
    });
    return Array.from(map.values());
  };

  // compute drinksPerDeal & required slots
  const drinksPerDeal = getDrinksPerDeal(fetchedDeal);
  const requiredDrinks = drinksPerDeal * quantity;

  // sync drinkOptions from fetchedDeal
  useEffect(() => {
    const opts = extractDrinkOptionsFromDeal(fetchedDeal);
    setDrinkOptions(opts);
  }, [fetchedDeal]);

  // keep selectedDrinks array sized to requiredDrinks
  useEffect(() => {
    setSelectedDrinks((prev = []) => {
      const next = [...prev];
      if (next.length > requiredDrinks) {
        return next.slice(0, requiredDrinks);
      }
      while (next.length < requiredDrinks) next.push(null);
      return next;
    });
  }, [requiredDrinks]);

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

  // helper to select a drink option for a slot index
  const selectDrinkOption = (slotIndex, option) => {
    setSelectedDrinks((prev = []) => {
      const next = [...prev];
      next[slotIndex] = option;
      return next;
    });
  };

    const addToCart = () => {
    if (itemType === "item") {
      // Existing item logic remains same
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
      // NEW BATCH LOGIC: Handle deals with multiple quantities and drinks
      if (drinksPerDeal > 0) {
        const itemsToAdd = [];

        // Prepare all items to add
        for (let i = 0; i < quantity; i++) {
          console.log(selectedDrinks)
          const drinkIndex = i * drinksPerDeal;
          const drinksForThisUnit = selectedDrinks.slice(
            drinkIndex,
            drinkIndex + drinksPerDeal
          );
          
          const drinksMeta = drinksForThisUnit.map((d) => {
            if (!d) {
              console.warn("Empty drink selection at index:", drinkIndex);
              return null;
            }
            return {
              id: d.id || d.itemId || d.name,
              name: d.name || d.label,
            };
          });

          console.log(`Preparing item ${i + 1} with drinks:`, drinksMeta);

          itemsToAdd.push({
            itemId: fetchedDeal.dealId,
            name: fetchedDeal.name,
            price: itemPrice, // individual price per unit
            image: fetchedDeal.image,
            size: portionSize ? portionSize : env.DEFAULT,
            quantity: 1, // Each unit has quantity 1
            type: env.ITEM_TYPE.DEAL,
            category: fetchedDeal.dealType?.toLowerCase(),
            drinkOptions: drinksMeta,
          });
        }

        console.log("Batch adding items:", itemsToAdd);

        // Add all items in single batch operation
        addMultipleItemsToCart(itemsToAdd);
      } else {
        // For deals without drinks, use existing logic
        addItemToCart(
          fetchedDeal.dealId,
          fetchedDeal.name,
          itemPrice,
          fetchedDeal.image,
          portionSize ? portionSize : env.DEFAULT,
          quantity,
          env.ITEM_TYPE.DEAL,
          fetchedDeal.dealType?.toLowerCase(),
          {}
        );
      }
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
      if (fetchedItem.category?.toLowerCase() === "pizza") {
        setPizzaCrust(fetchedItem.pizzaConfig?.crusts[0]);
      }
      setFetchedItem({ ...fetchedItem, portionPrices: portionPrices });
    }
  };

  const selectSize = (size) => {
    setQuantity(0);
    setPortionSize(size.portionSize);
    setItemPrice(size.price);
  };

  const isDisabledAddToCart =
    quantity <= 0 ||
    (itemType === "deal" &&
      requiredDrinks > 0 &&
      selectedDrinks.some((s) => !s));

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
                      <div>
                        {itemType === "deal" &&
                          quantity > 0 &&
                          drinksPerDeal > 0 && (
                            <div className="drink-selection-section mt-4">
                              <div className="border-bottom pb-2 mb-3">
                                <h5 className="mb-0">
                                  <i className="fas fa-wine-bottle me-2"></i>
                                  Select Your Drinks
                                </h5>
                                <small className="text-muted">
                                  Choose drinks for each deal unit (
                                  {drinksPerDeal} drink
                                  {drinksPerDeal > 1 ? "s" : ""} per deal)
                                </small>
                              </div>

                              {/* Group by deal units */}
                              <div className="row">
                                {[...Array(quantity)].map((_, dealIndex) => (
                                  <div
                                    key={dealIndex}
                                    className="col-lg-6 mb-4"
                                  >
                                    <div className="card h-100 border-warning">
                                      <div className="card-header bg-warning bg-opacity-10 py-2">
                                        <h6 className="mb-0 text-dark">
                                          <i className="fas fa-tag me-2"></i>
                                          Deal Unit {dealIndex + 1}
                                        </h6>
                                      </div>
                                      <div className="card-body">
                                        {/* Show drink slots for this specific deal unit */}
                                        {[...Array(drinksPerDeal)].map(
                                          (_, drinkIndexInDeal) => {
                                            const globalDrinkIndex =
                                              dealIndex * drinksPerDeal +
                                              drinkIndexInDeal;

                                            return (
                                              <div
                                                key={globalDrinkIndex}
                                                className="mb-3"
                                              >
                                                <label
                                                  htmlFor={`drink-select-${globalDrinkIndex}`}
                                                  className="form-label small fw-semibold text-muted mb-1"
                                                >
                                                  <i className="fas fa-glass-whiskey me-1"></i>
                                                  Drink {drinkIndexInDeal + 1}
                                                </label>
                                                <select
                                                  id={`drink-select-${globalDrinkIndex}`}
                                                  className={`form-select ${
                                                    selectedDrinks[
                                                      globalDrinkIndex
                                                    ]
                                                      ? "border-success"
                                                      : "border-warning"
                                                  }`}
                                                  value={
                                                    selectedDrinks[
                                                      globalDrinkIndex
                                                    ]?.id || ""
                                                  }
                                                  onChange={(e) => {
                                                    const chosen =
                                                      drinkOptions.find(
                                                        (d) =>
                                                          String(d.id) ===
                                                          String(e.target.value)
                                                      ) || null;
                                                    selectDrinkOption(
                                                      globalDrinkIndex,
                                                      chosen
                                                    );
                                                  }}
                                                >
                                                  <option
                                                    value=""
                                                    className="text-muted"
                                                  >
                                                    -- Choose a drink --
                                                  </option>
                                                  {drinkOptions.map((opt) => (
                                                    <option
                                                      key={opt.id}
                                                      value={opt.id}
                                                    >
                                                      {opt.name}{" "}
                                                      {opt.price
                                                        ? `- £${opt.price.toFixed(
                                                            2
                                                          )}`
                                                        : ""}
                                                    </option>
                                                  ))}
                                                </select>

                                                {/* Show selected drink preview */}
                                                {selectedDrinks[
                                                  globalDrinkIndex
                                                ] && (
                                                  <div className="mt-1 d-flex align-items-center">
                                                    <small className="text-success">
                                                      <i className="fas fa-check-circle me-1"></i>
                                                      Selected:{" "}
                                                      {
                                                        selectedDrinks[
                                                          globalDrinkIndex
                                                        ].name
                                                      }
                                                    </small>
                                                  </div>
                                                )}
                                              </div>
                                            );
                                          }
                                        )}
                                      </div>
                                      <div className="card-footer bg-transparent py-2">
                                        <small className="text-muted">
                                          {drinksPerDeal} drink
                                          {drinksPerDeal > 1 ? "s" : ""}{" "}
                                          required
                                        </small>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>

                              {/* Progress indicator */}
                              <div className="mt-3 p-3 bg-light rounded">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                  <span className="small fw-semibold">
                                    Selection Progress:
                                  </span>
                                  <span className="small">
                                    {selectedDrinks.filter(Boolean).length} of{" "}
                                    {requiredDrinks} selected
                                  </span>
                                </div>
                                <div
                                  className="progress"
                                  style={{ height: "8px" }}
                                >
                                  <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    style={{
                                      width: `${
                                        (selectedDrinks.filter(Boolean).length /
                                          requiredDrinks) *
                                        100
                                      }%`,
                                    }}
                                    aria-valuenow={
                                      selectedDrinks.filter(Boolean).length
                                    }
                                    aria-valuemin="0"
                                    aria-valuemax={requiredDrinks}
                                  ></div>
                                </div>
                              </div>

                              {/* Validation message */}
                              {selectedDrinks.some((s) => !s) && (
                                <div
                                  className="alert alert-warning mt-3 d-flex align-items-center"
                                  role="alert"
                                >
                                  <i className="fas fa-exclamation-triangle me-2"></i>
                                  <div>
                                    <strong>Almost there!</strong> Please select
                                    all drinks to enable "Add To Cart".
                                  </div>
                                </div>
                              )}

                              {/* Success message when all selected */}
                              {!selectedDrinks.some((s) => !s) &&
                                requiredDrinks > 0 && (
                                  <div
                                    className="alert alert-success mt-3 d-flex align-items-center"
                                    role="alert"
                                  >
                                    <i className="fas fa-check-circle me-2"></i>
                                    <div>
                                      <strong>Perfect!</strong> All drinks
                                      selected and ready to add to cart.
                                    </div>
                                  </div>
                                )}
                            </div>
                          )}
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
                          disabled={isDisabledAddToCart}
                          onClick={addToCart}
                          className={`theme-btn ${
                            isDisabledAddToCart ? "disabled" : ""
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
                          {/* </div>
                      </div>
                    </Tab>
                  )} */}
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
