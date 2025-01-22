import { HomeSlider3 } from "@/components/HomeSlider";
import InstagramBannerSlider from "@/components/InstagramBannerSlider";
import NextSaleBanner from "@/components/NextSaleBanner";
import { TestimonialSlider3 } from "@/components/TestimonialSlider";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";
const page = () => {
  return (
    <FoodKingLayout header={2} footer={2}>
      {/* Hero Section Start */}
      <HomeSlider3 />
      {/* Testimonial Section Start */}
      <section className="testimonial-section-3 section-padding fix">
        <div className="container">
          <div className="testimonial-wrapper-3">
            <div className="row align-items-center">
              <div
                className="col-xl-5 col-lg-5 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div
                  className="testimonial-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/client/04.jpg")' }}
                >
                  <div className="shape-image">
                    <img
                      src="assets/img/client/shape-img.png"
                      alt="shape-img"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 mt-5 mt-lg-0">
                <div className="testimonial-content">
                  <h4 className="wow fadeInUp" data-wow-delay=".3s">
                    Learn Something Foodking
                  </h4>
                  <h3 className="wow fadeInUp" data-wow-delay=".5s">
                    Welcome to our culinary haven, where each dish is a symphony
                    of flavors meticulously crafted tantalize your taste buds.
                    Nestled in the heart of [City], our restaurant is an
                    inviting space that combines.
                  </h3>
                  <div
                    className="client-info d-flex align-items-center wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <div
                      className="client-image bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/client/05.jpg")',
                      }}
                    />
                    <div className="title">
                      <h4>
                        Michael V. Christensen / <span>CEO &amp; Founder</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Marque Section Start */}
      <div className="marque-section fix section-padding pt-0">
        <div className="marquee-wrapper mt-0 text-slider">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                <span className="text-slider text-color">populer</span>
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">dishes</span>
                <span className="text-slider">
                  <img src="assets/img/star.svg" alt="icon-img" />
                </span>{" "}
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">delicious</span>
                <span className="text-slider text-color">food</span>{" "}
                <img src="assets/img/star.svg" alt="icon-img" />{" "}
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">populer</span>
                <span className="text-slider text-color">dishes</span>{" "}
                <span className="text-slider" />
                <span className="text-slider">
                  <img src="assets/img/star.svg" alt="icon-img" />
                </span>{" "}
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">delicious</span>
                <span className="text-slider text-color">populer</span>
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">dishes</span>
                <span className="text-slider">
                  <img src="assets/img/star.svg" alt="icon-img" />
                </span>{" "}
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">delicious</span>
                <span className="text-slider text-color">food</span>{" "}
                <img src="assets/img/star.svg" alt="icon-img" />{" "}
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">populer</span>
                <span className="text-slider text-color">dishes</span>{" "}
                <span className="text-slider" />
                <span className="text-slider">
                  <img src="assets/img/star.svg" alt="icon-img" />
                </span>{" "}
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">delicious</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Food Banner Section Start */}
      <section className="food-banner fix">
        <div className="row g-3">
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div
              className="food-banner-items-2 bg-cover"
              style={{ backgroundImage: "url(assets/img/banner/food-bg.jpg)" }}
            >
              <div
                className="price bg-cover"
                style={{ backgroundImage: 'url("assets/img/vector.png")' }}
              >
                <span>$38</span>
              </div>
              <div className="food-content">
                <h4>start price $25</h4>
                <h2 className="text-white">
                  delicious <br />
                  hamburger <br />
                  fries
                </h2>
                <Link href="/shop-single" className="theme-btn bg-red mt-4">
                  <span className="button-content-wrapper d-flex align-items-center">
                    <span className="button-icon">
                      <i className="flaticon-delivery" />
                    </span>
                    <span className="button-text">order now</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div
              className="food-banner-items-2 bg-cover"
              style={{
                backgroundImage: "url(assets/img/banner/food-bg-2.jpg)",
              }}
            >
              <div
                className="price style-2 bg-cover"
                style={{ backgroundImage: 'url("assets/img/vector-2.png")' }}
              >
                <span>$43</span>
              </div>
              <div className="food-content">
                <h4>start price $25</h4>
                <h2 className="text-white">
                  super <br />
                  chicken <br />
                  fry
                </h2>
                <Link
                  href="/shop-single"
                  className="theme-btn bg-yellow border-radius-none mt-4"
                >
                  <span className="button-content-wrapper d-flex align-items-center">
                    <span className="button-icon">
                      <i className="flaticon-delivery" />
                    </span>
                    <span className="button-text">order now</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div
              className="food-banner-items-2 bg-cover"
              style={{
                backgroundImage: "url(assets/img/banner/food-bg-3.jpg)",
              }}
            >
              <div
                className="price bg-cover"
                style={{ backgroundImage: 'url("assets/img/vector.png")' }}
              >
                <span>$38</span>
              </div>
              <div className="food-content">
                <h4>start price $25</h4>
                <h2 className="text-white">
                  delicious <br />
                  hamburger <br />
                  fries
                </h2>
                <Link href="shop-single" className="theme-btn bg-red mt-4">
                  <span className="button-content-wrapper d-flex align-items-center">
                    <span className="button-icon">
                      <i className="flaticon-delivery" />
                    </span>
                    <span className="button-text">order now</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Food Catagory Section Start */}
      <section className="food-category-section fix section-padding pb-0 section-bg">
        <div className="pizza-shape">
          <img src="assets/img/shape/pizza-shape.png" alt="shape-img" />
        </div>
        <div className="frame-shape">
          <img src="assets/img/shape/frame-2.png" alt="shape-img" />
        </div>
        <div className="frame-shape-2">
          <img src="assets/img/shape/frame-3.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Best Selling Dishes</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Explore Our Products
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-product-items-2 text-center">
                <div className="product-content">
                  <h4>
                    <Link href="shop-single">single fresh burger</Link>
                  </h4>
                  <div className="star">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span>(5k)</span>
                  </div>
                  <h5>price $25.59</h5>
                </div>
                <div className="product-image">
                  <img src="assets/img/food/burger-3.png" alt="food-img" />
                  <ul className="product-icon d-flex justify-content-center align-items-center">
                    <li>
                      <Link href="/shop-cart">
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop-cart" className="theme-btn cart-btn">
                        <i className="far fa-shopping-cart" />
                        Add to Cart
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-single">
                        <i className="far fa-expand" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-product-items-2 text-center">
                <div className="product-content">
                  <h4>
                    <Link href="shop-single">pizza with mushrooms</Link>
                  </h4>
                  <div className="star">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span>(4k)</span>
                  </div>
                  <h5>price $20.15</h5>
                </div>
                <div className="product-image">
                  <img src="assets/img/food/pizza-4.png" alt="food-img" />
                  <ul className="product-icon d-flex justify-content-center align-items-center">
                    <li>
                      <Link href="/shop-cart">
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop-cart" className="theme-btn cart-btn">
                        <i className="far fa-shopping-cart" />
                        Add to Cart
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-single">
                        <i className="far fa-expand" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-product-items-2 text-center">
                <div className="product-content">
                  <h4>
                    <Link href="shop-single">double burger &amp; fries</Link>
                  </h4>
                  <div className="star">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span>(5k)</span>
                  </div>
                  <h5>price $38.00</h5>
                </div>
                <div className="product-image">
                  <img src="assets/img/food/main-food-4.png" alt="food-img" />
                  <ul className="product-icon d-flex justify-content-center align-items-center">
                    <li>
                      <Link href="/shop-cart">
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop-cart" className="theme-btn cart-btn">
                        <i className="far fa-shopping-cart" />
                        Add to Cart
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-single">
                        <i className="far fa-expand" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".9s"
            >
              <div className="single-product-items-2 text-center">
                <div className="product-content">
                  <h4>
                    <Link href="shop-single">fried chicken french</Link>
                  </h4>
                  <div className="star">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span>(5k)</span>
                  </div>
                  <h5>price $23.85</h5>
                </div>
                <div className="product-image">
                  <img src="assets/img/food/fried-chicken.png" alt="food-img" />
                  <ul className="product-icon d-flex justify-content-center align-items-center">
                    <li>
                      <Link href="/shop-cart">
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-cart" className="theme-btn cart-btn">
                        <i className="far fa-shopping-cart" />
                        Add to Cart
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-single">
                        <i className="far fa-expand" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-product-items-2 text-center">
                <div className="product-content">
                  <h4>
                    <a href="#">Seafood dish &amp; crabs</a>
                  </h4>
                  <div className="star">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span>(5k)</span>
                  </div>
                  <h5>price $13.00</h5>
                </div>
                <div className="product-image">
                  <img src="assets/img/food/seafood-dish.png" alt="food-img" />
                  <ul className="product-icon d-flex justify-content-center align-items-center">
                    <li>
                      <Link href="/shop-cart">
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-cart" className="theme-btn cart-btn">
                        <i className="far fa-shopping-cart" />
                        Add to Cart
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-single">
                        <i className="far fa-expand" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-product-items-2 text-center">
                <div className="product-content">
                  <h4>
                    <Link href="shop-single">single fresh burger</Link>
                  </h4>
                  <div className="star">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span>(4k)</span>
                  </div>
                  <h5>price $28.50</h5>
                </div>
                <div className="product-image">
                  <img src="assets/img/food/fresh-burger.png" alt="food-img" />
                  <ul className="product-icon d-flex justify-content-center align-items-center">
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-cart" className="theme-btn cart-btn">
                        <i className="far fa-shopping-cart" />
                        Add to Cart
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-single">
                        <i className="far fa-expand" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-product-items-2 text-center">
                <div className="product-content">
                  <h4>
                    <a href="#">dum chicken-biryani</a>
                  </h4>
                  <div className="star">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span>(5k)</span>
                  </div>
                  <h5>price $30.00</h5>
                </div>
                <div className="product-image">
                  <img
                    src="assets/img/food/chicken-biryani.png"
                    alt="food-img"
                  />
                  <ul className="product-icon d-flex justify-content-center align-items-center">
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-cart" className="theme-btn cart-btn">
                        <i className="far fa-shopping-cart" />
                        Add to Cart
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-single">
                        <i className="far fa-expand" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".9s"
            >
              <div className="single-product-items-2 text-center">
                <div className="product-content">
                  <h4>
                    <Link href="shop-single">pizza with creamy sauce</Link>
                  </h4>
                  <div className="star">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span>(5k)</span>
                  </div>
                  <h5>price $33.98</h5>
                </div>
                <div className="product-image">
                  <img src="assets/img/food/pizza-creamy.png" alt="food-img" />
                  <ul className="product-icon d-flex justify-content-center align-items-center">
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-cart" className="theme-btn cart-btn">
                        <i className="far fa-shopping-cart" />
                        Add to Cart
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-single">
                        <i className="far fa-expand" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Marque Section Start */}
      <div className="marque-section fix section-padding section-bg pt-0">
        <div className="marquee-wrapper text-slider">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                <span className="text-slider text-color">POPULAR</span>
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">DISHES</span>
                <span className="text-slider">
                  <img src="assets/img/star.svg" alt="icon-img" />
                </span>{" "}
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">delicious</span>
                <span className="text-slider text-color">foods</span>{" "}
                <img src="assets/img/star.svg" alt="icon-img" />{" "}
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">burger</span>
                <span className="text-slider text-color">king</span>{" "}
                <img src="assets/img/star.svg" alt="icon-img" />{" "}
                <span className="text-slider text-color">POPULAR</span>
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">DISHES</span>
                <span className="text-slider">
                  <img src="assets/img/star.svg" alt="icon-img" />
                </span>{" "}
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">delicious</span>
                <span className="text-slider text-color">foods</span>{" "}
                <img src="assets/img/star.svg" alt="icon-img" />{" "}
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">burger</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Today Nest Sale Banner Start */}
      <NextSaleBanner />
      {/* Food Catagory Section Start */}
      <section className="food-category-section fix">
        <div className="food-catagory-wrapper">
          <div
            className="catagory-product-card-3 center wow fadeInUp"
            data-wow-delay=".2s"
          >
            <div className="food-image">
              <img
                src="assets/img/shop-food/delicious-pizza.png"
                alt="food-img"
              />
              <div
                className="box-text bg-cover"
                style={{ backgroundImage: "url(assets/img/shop-food/box.png)" }}
              >
                <span>Hot</span>
              </div>
              <h2 className="food-title">Italian pizza</h2>
            </div>
            <div className="food-content">
              <h3>
                <Link href="shop-single">delicious classic Italian pizza</Link>
              </h3>
              <Link href="shop-single" className="link-btn color-red">
                order now <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div
            className="catagory-product-card-3 center wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="food-image">
              <img
                src="assets/img/shop-food/vagetable-burger.png"
                alt="food-img"
              />
              <div
                className="box-text bg-cover"
                style={{ backgroundImage: "url(assets/img/shop-food/box.png)" }}
              >
                <span>new</span>
              </div>
              <h2 className="food-title">hamburger</h2>
            </div>
            <div className="food-content">
              <h3>
                <Link href="shop-single">tasty vegetable hamburger</Link>
              </h3>
              <Link href="shop-single" className="link-btn color-red">
                order now <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div
            className="catagory-product-card-3 center wow fadeInUp"
            data-wow-delay=".6s"
          >
            <div className="food-image">
              <img
                src="assets/img/shop-food/roasted-chicken.png"
                alt="food-img"
              />
              <div
                className="box-text bg-cover"
                style={{ backgroundImage: "url(assets/img/shop-food/box.png)" }}
              >
                <span>-13%</span>
              </div>
              <h2 className="food-title">drumsticks</h2>
            </div>
            <div className="food-content">
              <h3>
                <Link href="shop-single">roasted chicken drumsticks</Link>
              </h3>
              <Link href="shop-single" className="link-btn color-red">
                order now <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div
            className="catagory-product-card-3 center wow fadeInUp"
            data-wow-delay=".8s"
          >
            <div className="food-image">
              <img src="assets/img/shop-food/roll-samosa.png" alt="food-img" />
              <div
                className="box-text bg-cover"
                style={{ backgroundImage: "url(assets/img/shop-food/box.png)" }}
              >
                <span>Hot</span>
              </div>
              <h2 className="food-title">cigar samosa</h2>
            </div>
            <div className="food-content">
              <h3>
                <Link href="shop-single">roll shaped cigar samosa</Link>
              </h3>
              <Link href="shop-single" className="link-btn color-red">
                order now <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div
            className="catagory-product-card-3 center wow fadeInUp"
            data-wow-delay=".9s"
          >
            <div className="food-image">
              <img src="assets/img/shop-food/rumberos.png" alt="food-img" />
              <div
                className="box-text bg-cover"
                style={{ backgroundImage: "url(assets/img/shop-food/box.png)" }}
              >
                <span>new</span>
              </div>
              <h2 className="food-title">Yamee hotdog</h2>
            </div>
            <div className="food-content">
              <h3>
                <Link href="shop-single">rumberos hotdog sandwich</Link>
              </h3>
              <Link href="shop-single" className="link-btn color-red">
                order now <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Marque Section Start */}
      <div className="marque-section fix">
        <div className="marquee-wrapper style-3 text-slider">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                <span className="text-slider text-color">Clients</span>
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">testimonials</span>
                <span className="text-slider">
                  <img src="assets/img/star.svg" alt="icon-img" />
                </span>{" "}
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">food</span>
                <span className="text-slider text-color">reviews</span>{" "}
                <img src="assets/img/star.svg" alt="icon-img" />{" "}
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">our</span>
                <span className="text-slider text-color">feedback</span>{" "}
                <span className="text-slider" />
                <span className="text-slider">
                  <img src="assets/img/star.svg" alt="icon-img" />
                </span>{" "}
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">Clients</span>
                <span className="text-slider text-color">testimonials</span>
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">food</span>
                <span className="text-slider">
                  <img src="assets/img/star.svg" alt="icon-img" />
                </span>{" "}
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">reviews</span>
                <span className="text-slider text-color">our</span>{" "}
                <img src="assets/img/star.svg" alt="icon-img" />{" "}
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">feedback</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Testimonial Section Start */}
      <TestimonialSlider3 />
      {/* Video Section Start */}
      <div
        className="video-section-2 fix bg-cover"
        style={{ backgroundImage: 'url("assets/img/bg-image/bg-shape.png")' }}
      >
        <div className="container">
          <div
            className="video-wrapper bg-cover"
            style={{
              backgroundImage: 'url("assets/img/banner/video-bg-2.jpg")',
            }}
          >
            <div className="video-btn video-pulse center">
              <a
                className="video-popup"
                href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
              >
                <i className="fas fa-play" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Choose Us Section Start */}
      <section
        className="choose-us-2 fix section-padding bg-cover"
        style={{ backgroundImage: 'url("assets/img/bg-image/bg-shape.png")' }}
      >
        <div className="container">
          <div className="food-icon-wrapper-2">
            <div className="row g-5">
              <div
                className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="single-food-icon">
                  <div className="icon">
                    <img src="assets/img/icon/01.svg" alt="icon-img" />
                  </div>
                  <div className="content">
                    <h3>Best Quality Food</h3>
                    <p>
                      Sed ut perspiciatis unde omnis este natus sit voluptatem
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="single-food-icon">
                  <div className="icon">
                    <img src="assets/img/icon/02.svg" alt="icon-img" />
                  </div>
                  <div className="content">
                    <h3>fast food delivery</h3>
                    <p>
                      Sed ut perspiciatis unde omnis este natus sit voluptatem
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="single-food-icon">
                  <div className="icon">
                    <img src="assets/img/icon/03.svg" alt="icon-img" />
                  </div>
                  <div className="content">
                    <h3>money back guarantee</h3>
                    <p>
                      Sed ut perspiciatis unde omnis este natus sit voluptatem
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".9s"
              >
                <div className="single-food-icon">
                  <div className="icon">
                    <img src="assets/img/icon/04.svg" alt="icon-img" />
                  </div>
                  <div className="content">
                    <h3>100% natural food</h3>
                    <p>
                      Sed ut perspiciatis unde omnis este natus sit voluptatem
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* News Section Start */}
      <section className="news-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">news &amp; blog</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Explore news &amp; blog
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-news-items style-2">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/04.jpg")' }}
                />
                <div className="news-content">
                  <ul className="post-date d-flex align-items-center justify-content-between">
                    <li>Fast Food</li>
                    <li>
                      <span>15 December 2024</span>
                    </li>
                  </ul>
                  <h3>
                    <Link href="news-details">
                      Culinary Chronicles Exploring Gastronomic Wonders at
                      foodking Restaurant
                    </Link>
                  </h3>
                  <Link href="news-details" className="link-btn style-2">
                    read more <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-news-items style-2">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/05.jpg")' }}
                />
                <div className="news-content">
                  <ul className="post-date d-flex align-items-center justify-content-between">
                    <li>Health Care</li>
                    <li>
                      <span>15 December 2024</span>
                    </li>
                  </ul>
                  <h3>
                    <Link href="news-details">
                      Taste Sensations: Navigating the Epicurean Landscape of
                      Restaurant Name
                    </Link>
                  </h3>
                  <Link href="news-details" className="link-btn style-2">
                    read more <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-news-items style-2">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/06.jpg")' }}
                />
                <div className="news-content">
                  <ul className="post-date d-flex align-items-center justify-content-between">
                    <li>Restaurants</li>
                    <li>
                      <span>15 December 2024</span>
                    </li>
                  </ul>
                  <h3>
                    <Link href="news-details">
                      Epicurean Insights Blogging Odyss through Restaurant Name
                      Culinary Universe
                    </Link>
                  </h3>
                  <Link href="news-details" className="link-btn style-2">
                    read more <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Cta Banner Section Start */}
      <section className="main-cta-banner-3 fix section-padding pt-0">
        <div className="container">
          <div
            className="main-cta-banner-wrapper-3 bg-cover"
            style={{
              backgroundImage: 'url("assets/img/banner/main-cta-bg-3.jpg")',
            }}
          >
            <div className="fry-shape">
              <img src="assets/img/shape/fry-shape-3.png" alt="shape-img" />
            </div>
            <div className="frame-shape">
              <img src="assets/img/shape/frame-4.png" alt="shape-img" />
            </div>
            <div className="frame-shape-2">
              <img src="assets/img/shape/frame-5.png" alt="shape-img" />
            </div>
            <div className="row justify-content-between">
              <div className="col-xl-6 col-lg-6">
                <div className="cta-content">
                  <h3 className="wow fadeInUp" data-wow-delay=".3s">
                    subscribe our newsletter <br />
                    to get more offers
                  </h3>
                  <p className="wow fadeInUp" data-wow-delay=".5s">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    quie blanditiis praesentium voluptatum deleniti atque
                  </p>
                </div>
              </div>
              <div
                className="col-xl-5 col-lg-5 mt-4 mt-lg-0 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="newsletter-items">
                  <form action="#">
                    <input type="email" placeholder="Enter email address" />
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <button className="theme-btn bg-red mt-3" type="submit">
                      <span>subscribe now</span>
                    </button>
                  </form>
                  <div className="input-save d-flex align-items-center">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="save-for-next"
                      id="saveForNext"
                    />
                    <label htmlFor="saveForNext">
                      I Agree to the <a href="#">Privacy Policy.</a>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Instagram Banner Section Start */}
      <InstagramBannerSlider />
    </FoodKingLayout>
  );
};
export default page;
