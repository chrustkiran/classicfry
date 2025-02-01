"use client";
import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";

import { useEffect, useState } from "react";
import { Nav, Tab, Tabs } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import useItem from "@/hooks/useItem";
import { useAppContext } from "@/context/AppContext";
import env from "@/env";


const Ingredient = ({ingredient}) => {
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

const page = () => {
  const [quantity, setQuantity] = useState(0);
  const [itemPrice, setItemPrice] = useState(0);
  const [portionSize, setPortionSize] = useState(undefined);
  const [addToCartHover, setHover] = useState(false);

  const { item, fetchItem } = useItem();
  const [fetchedItem, setFetchedItem] = useState({});
  const router = useRouter();
  const searchParams = useSearchParams();

  const { addItemToCart } = useAppContext();

  useEffect(() => {
    const itemId = searchParams.get("item");
    if (itemId) {
      fetchItem(itemId);
    } else {
      router.back(); // Go back if the item ID is not provided in the URL
    }
  }, []);

  useEffect(() => {
    if (item) {
      if (item?.length != 1 || !item[0].itemId) {
        console.warn("Item does not have an itemId. Navigating back.");
        router.back();
      } else {
        setFetchedItem(item[0]);
        handlePrice(item[0]);
      }
    }
  }, [item]);

  const addToCart = () => {
    addItemToCart(
      fetchedItem.itemId,
      fetchedItem.name,
      itemPrice,
      fetchedItem.image,
      portionSize ? portionSize : env.DEFAULT,
      quantity
    );
  };

  const handlePrice = (fetchedItem) => {
    if (!fetchedItem.portionPrices) {
      //TODO :: check what it is.
      setItemPrice(item.basePrice);
    } else {
      const portionPrices = fetchedItem.portionPrices.sort(
        (a, b) => a.price - b.price
      );
      setItemPrice(portionPrices[0].price);
      setPortionSize(portionPrices[0].portionSize);
      setFetchedItem({ ...fetchedItem, portionPrices: portionPrices });
    }
  };

  const selectSize = (size) => {
    setPortionSize(size.portionSize);
    setItemPrice(size.price);
  };

  return (
    <FoodKingLayout>
      <PageBanner pageName={fetchedItem.name} />
      <section className="product-details-section section-padding">
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
                          <img src={fetchedItem.image} alt="img" />
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
              <div className="col-lg-7 mt-5 mt-lg-0">
                <div className="product-details-content">
                  <div className="star pb-3">
                    <span>{fetchedItem.tag}</span>
                    {/* <a href="#">
                      {" "}
                      <i className="fas fa-star" />
                    </a>
                    <a href="#">
                      <i className="fas fa-star" />
                    </a>
                    <a href="#">
                      {" "}
                      <i className="fas fa-star" />
                    </a>
                    <a href="#">
                      <i className="fas fa-star" />
                    </a>
                    <a href="#" className="color-bg">
                      {" "}
                      <i className="fas fa-star" />
                    </a>
                    <a href="#" className="text-color">
                      ( 2 Reviews )
                    </a> */}
                  </div>
                  <h3 className="pb-3">{fetchedItem.name}</h3>
                  <p className="mb-4">{fetchedItem.description}</p>
                  <div className="price-list d-flex align-items-center">
                    <span>£{itemPrice}</span>
                    {/* <del>$4,600.00</del> */}
                  </div>
                  <div className="d-flex mt-4">
                    {fetchedItem.portionPrices &&
                      // fetchedItem.portionPrices.length > 0 &&
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
                          {size.portionSize.substring(0, 1)}
                        </button>
                      ))}
                  </div>
                  <div className="price-list d-flex align-items-center"></div>
                  <div className="cart-wrp">
                    <div className="cart-quantity">
                      <h5>QUANTITY:</h5>
                      <div className="quantity align-items-center d-flex">
                        <button
                          onClick={() => setQuantity(Math.max(0, quantity - 1))}
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
                    <div className="shop-button d-flex align-items-center">
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
                  {/* <h6 className="shop-text">
                    GROUND DELIVERY SURCHARGE: <span>$180.00</span>
                  </h6> */}
                  {/* <h6 className="details-info">
                    <Link href={"#"}>SKU:</Link> <a href="shop-single">N/A</a>
                  </h6> */}
                  <h6 className="details-info">
                    <span>Category:</span>{" "}
                    <Link
                      className="badge rounded-pill category-batch text-white"
                      href={{
                        pathname: "/shop-list",
                        query: { category: fetchedItem.category },
                      }}
                    >
                      {fetchedItem.category}
                    </Link>
                  </h6>
                  {/* <h6 className="details-info">
                    <span>Tags:</span> <Link href="#">{fetchItem.tag}</Link>
                  </h6> */}
                </div>
              </div>
            </div>
            <div className="single-tab">
              <Tabs
                defaultActiveKey="Ingredients"
                id="product-tabs"
                className="mb-4"
              >
                <Tab eventKey="Ingredients" title="Ingredients">
                  <div className="description-items">
                    <div className="row">
                      <div className="list-group">
                        {fetchedItem?.ingredientsList?.length > 0 && fetchedItem.ingredientsList.map((ingredient, index) => (
                          <Ingredient key={index} ingredient={ingredient}></Ingredient>
                        ))}
                      </div>
                    </div>
                  </div>
                </Tab>
                {/* <Tab eventKey="additional" title="Additional Information">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <td>Weight</td>
                          <td>240 Ton</td>
                        </tr>
                        <tr>
                          <td>Dimensions</td>
                          <td>20 × 30 × 40 cm</td>
                        </tr>
                        <tr>
                          <td>Colors</td>
                          <td>Black, Blue, Green</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Tab>
                <Tab eventKey="review" title="Reviews (4)">
                  <div className="review-items">
                    <div className="admin-items d-flex flex-wrap flex-md-nowrap align-items-center pb-4">
                      <div className="admin-img pb-4 pb-md-0 me-4">
                        <img
                          src="assets/img/shop-food/review/01.jpg"
                          alt="image"
                        />
                      </div>
                      <div className="content p-4">
                        <div className="head-content pb-1 d-flex flex-wrap justify-content-between">
                          <h5>
                            miklos salsa<span>27June 2024 at 5.44pm</span>
                          </h5>
                          <div className="star">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipiscing
                          elit. Curabitur vulputate vestibulum Phasellus rhoncus
                          dolor eget viverra pretium.Curabitur vulputate
                          vestibulum Phasellus rhoncus dolor eget viverra
                          pretium.
                        </p>
                      </div>
                    </div>              
                    <div className="review-title mt-5 py-15 mb-30">
                      <h4>add a review</h4>
                      <div className="rate-now d-flex align-items-center">
                        <p>Rate this product? *</p>
                        <div className="star">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                      </div>
                    </div>
                    <div className="review-form">
                      <form action="#" id="contact-form" method="POST">
                        <div className="row g-4">
                          <div className="col-lg-6">
                            <div className="form-clt">
                              <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-clt">
                              <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="email addres"
                              />
                            </div>
                          </div>
                          <div
                            className="col-lg-12 wow fadeInUp"
                            data-wow-delay=".8"
                          >
                            <div className="form-clt-big form-clt">
                              <textarea
                                name="message"
                                id="message"
                                placeholder="message"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div
                            className="col-lg-6 wow fadeInUp"
                            data-wow-delay=".9"
                          >
                            <button type="submit" className="theme-btn">
                              post Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </Tab> */}
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="food-category-section fix section-padding section-bg">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">crispy, every bite taste</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              RELATED PRODUCTS
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="catagory-product-card-2 text-center">
                <div className="icon">
                  <Link href="shop-cart">
                    <i className="far fa-heart" />
                  </Link>
                </div>
                <div className="catagory-product-image">
                  <img src="assets/img/food/beef-ruti.png" alt="product-img" />
                </div>
                <div className="catagory-product-content">
                  <div className="catagory-button">
                    <Link href="shop-cart" className="theme-btn-2">
                      <i className="far fa-shopping-basket" />
                      Add To Cart
                    </Link>
                  </div>
                  <div className="info-price d-flex align-items-center justify-content-center">
                    <p>-5%</p>
                    <h6>$30.52</h6>
                    <span>$28.52</span>
                  </div>
                  <h4>
                    <Link href="shop-single">ruti with beef slice</Link>
                  </h4>
                  <div className="star">
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="catagory-product-card-2 active text-center">
                <div className="icon">
                  <a href="shop-cart">
                    <i className="far fa-heart" />
                  </a>
                </div>
                <div className="catagory-product-image">
                  <img src="assets/img/food/burger-2.png" alt="product-img" />
                </div>
                <div className="catagory-product-content">
                  <div className="catagory-button">
                    <a href="shop-cart" className="theme-btn-2">
                      <i className="far fa-shopping-basket" />
                      Add To Cart
                    </a>
                  </div>
                  <div className="info-price d-flex align-items-center justify-content-center">
                    <p>-5%</p>
                    <h6>$30.52</h6>
                    <span>$28.52</span>
                  </div>
                  <h4>
                    <Link href="shop-single">Whopper Burger King</Link>
                  </h4>
                  <div className="star">
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="catagory-product-card-2 text-center">
                <div className="icon">
                  <a href="shop-cart">
                    <i className="far fa-heart" />
                  </a>
                </div>
                <div className="catagory-product-image">
                  <img src="assets/img/food/pasta-2.png" alt="product-img" />
                </div>
                <div className="catagory-product-content">
                  <div className="catagory-button">
                    <a href="shop-cart" className="theme-btn-2">
                      <i className="far fa-shopping-basket" />
                      Add To Cart
                    </a>
                  </div>
                  <div className="info-price d-flex align-items-center justify-content-center">
                    <p>-5%</p>
                    <h6>$30.52</h6>
                    <span>$28.52</span>
                  </div>
                  <h4>
                    <Link href="shop-single">Chiness pasta</Link>
                  </h4>
                  <div className="star">
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".9s"
            >
              <div className="catagory-product-card-2 text-center">
                <div className="icon">
                  <a href="shop-cart">
                    <i className="far fa-heart" />
                  </a>
                </div>
                <div className="catagory-product-image">
                  <img src="assets/img/food/pizza-3.png" alt="product-img" />
                </div>
                <div className="catagory-product-content">
                  <div className="catagory-button">
                    <a href="shop-cart" className="theme-btn-2">
                      <i className="far fa-shopping-basket" />
                      Add To Cart
                    </a>
                  </div>
                  <div className="info-price d-flex align-items-center justify-content-center">
                    <p>-5%</p>
                    <h6>$30.52</h6>
                    <span>$28.52</span>
                  </div>
                  <h4>
                    <Link href="shop-single">delicious burger</Link>
                  </h4>
                  <div className="star">
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Cta />
    </FoodKingLayout>
  );
};
export default page;
