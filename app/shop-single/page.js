"use client";
import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";
import { useState } from "react";
import { Nav, Tab, Tabs } from "react-bootstrap";
const page = () => {
  const [quantity, setQuantity] = useState(0);
  return (
    <FoodKingLayout>
      <PageBanner pageName={"product single"} />
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
                          <img
                            src="assets/img/shop-food/details-1.png"
                            alt="img"
                          />
                          <a
                            href="assets/img/shop-food/details-1.png"
                            className="icon img-popup"
                          >
                            <i className="far fa-search" />
                          </a>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane
                        className="tab-pane fade"
                        eventKey="nav-profile"
                      >
                        <div className="product-image">
                          <img
                            src="assets/img/shop-food/details-1.png"
                            alt="img"
                          />
                          <a
                            href="assets/img/shop-food/details-1.png"
                            className="icon img-popup"
                          >
                            <i className="far fa-search" />
                          </a>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane
                        className="tab-pane fade"
                        eventKey="nav-contact"
                      >
                        <div className="product-image">
                          <img
                            src="assets/img/shop-food/details-1.png"
                            alt="img"
                          />
                          <a
                            href="assets/img/shop-food/details-1.png"
                            className="icon img-popup"
                          >
                            <i className="far fa-search" />
                          </a>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane
                        className="tab-pane fade"
                        eventKey="nav-contact2"
                      >
                        <div className="product-image">
                          <img
                            src="assets/img/shop-food/details-1.png"
                            alt="img"
                          />
                          <a
                            href="assets/img/shop-food/details-1.png"
                            className="icon img-popup"
                          >
                            <i className="far fa-search" />
                          </a>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                    <Nav
                      as={"ul"}
                      className="nav nav-tabs wow"
                      id="nav-tab"
                      role="tablist"
                    >
                      <Nav.Link
                        as={"button"}
                        className="nav-link"
                        id="nav-home-tab"
                        eventKey="nav-home"
                      >
                        <img
                          src="assets/img/shop-food/s1.png"
                          alt="img"
                          className="image-tab"
                        />
                      </Nav.Link>
                      <Nav.Link
                        as={"button"}
                        className="nav-link"
                        id="nav-home-tab"
                        eventKey="nav-profile"
                      >
                        <img
                          src="assets/img/shop-food/s2.png"
                          alt="img"
                          className="image-tab"
                        />
                      </Nav.Link>
                      <Nav.Link
                        as={"button"}
                        className="nav-link"
                        id="nav-home-tab"
                        eventKey="nav-contact"
                      >
                        <img
                          src="assets/img/shop-food/s3.png"
                          alt="img"
                          className="image-tab"
                        />
                      </Nav.Link>
                      <Nav.Link
                        as={"button"}
                        className="nav-link"
                        id="nav-home-tab"
                        eventKey="nav-contact2"
                      >
                        <img
                          src="assets/img/shop-food/s4.png"
                          alt="img"
                          className="image-tab"
                        />
                      </Nav.Link>
                    </Nav>
                  </Tab.Container>
                </div>
              </div>
              <div className="col-lg-7 mt-5 mt-lg-0">
                <div className="product-details-content">
                  <div className="star pb-3">
                    <span>-5%</span>
                    <a href="#">
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
                    </a>
                  </div>
                  <h3 className="pb-3">Whopper Burger King</h3>
                  <p className="mb-4">
                    There are many variations of passages of Lorem Ipsum
                    available, but majority have suffered teration in some form,
                    by injected humour, or randomised
                  </p>
                  <div className="price-list d-flex align-items-center">
                    <span>$4,600.00</span>
                    <del>$4,600.00</del>
                  </div>
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
                      <Link href="shop-single" className="theme-btn">
                        <span className="button-content-wrapper d-flex align-items-center justify-content-center">
                          <span className="button-icon">
                            <i className="flaticon-shopping-cart" />
                          </span>
                          <span className="button-text">Add To Cart</span>
                        </span>
                      </Link>
                      <Link href="shop-single" className="star-icon">
                        <i className="fal fa-star" />
                      </Link>
                    </div>
                  </div>
                  <h6 className="shop-text">
                    GROUND DELIVERY SURCHARGE: <span>$180.00</span>
                  </h6>
                  <h6 className="details-info">
                    <Link href={"#"}>SKU:</Link> <a href="shop-single">N/A</a>
                  </h6>
                  <h6 className="details-info">
                    <span>Categories:</span>{" "}
                    <Link href="shop-single">Pizza</Link>
                  </h6>
                  <h6 className="details-info">
                    <span>Tags:</span>{" "}
                    <Link href="shop-single">Burgers, Tacos</Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="single-tab">
              <Tabs
                defaultActiveKey="description"
                id="product-tabs"
                className="mb-4"
              >
                <Tab eventKey="description" title="Description">
                  <div className="description-items">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="description-content">
                          <h3>Experience is over the world visit</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur vulputate vestibulum Phasellus
                            rhoncus, dolor eget viverra pretium, dolor Numquam
                            odit accusantium odit aut commodi et. Nostrum est
                            atque ut dolorum. Et sequi aut atque doloribus qui.
                            Iure amet in voluptate reiciendis. Perspiciatis
                            consequatur aperiam repellendus velit quia est
                            minima. tellus aliquet nunc vitae ultricies erat
                            elit eu lacus. Vestibulum non justo consectetur,
                            cursus ante, tincidunt sapien. Nulla quis diam sit
                            amet turpis interdum accumsan quis necenim. Vivamus
                            faucibus ex sed nibh egestas elementum. Mauris et
                            bibendum dui. Aenean consequat pulvinar luctus
                          </p>
                          <h3 className="mb-0 mt-5">More Details</h3>
                          <div className="description-list-items d-flex">
                            <ul className="description-list">
                              <li>
                                <i className="fal fa-check" />
                                <span>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry
                                </span>
                              </li>
                              <li>
                                <i className="fal fa-check" />
                                <span>
                                  Lorem Ipsum has been the 's standard dummy
                                  text. Lorem Ipsumum is simply dummy text.
                                </span>
                              </li>
                              <li>
                                <i className="fal fa-check" />
                                <span>
                                  type here your detail one by one li more add
                                </span>
                              </li>
                              <li>
                                <i className="fal fa-check" />
                                <span>
                                  has been the industry's standard dummy text
                                  ever since. Lorem Ips
                                </span>
                              </li>
                            </ul>
                            <ul className="description-list">
                              <li>
                                <i className="fal fa-check" />
                                <span>
                                  Lorem Ipsum generators on the tend to repeat.
                                </span>
                              </li>
                              <li>
                                <i className="fal fa-check" />
                                <span> If you are going to use a passage.</span>
                              </li>
                              <li>
                                <i className="fal fa-check" />
                                <span>
                                  {" "}
                                  Lorem Ipsum generators on the tend to repeat.
                                </span>
                              </li>
                              <li>
                                <i className="fal fa-check" />
                                <span>
                                  {" "}
                                  Lorem Ipsum generators on the tend to repeat.
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="additional" title="Additional Information">
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
                    {/* More review items... */}
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
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      <section className="food-category-section fix section-padding section-bg">
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
      </section>
      <Cta />
    </FoodKingLayout>
  );
};
export default page;
