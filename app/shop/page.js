import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import ProductTopBar from "@/components/ProductTopBar";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";

const page = () => {
  return (
    <FoodKingLayout>
      <PageBanner pageName={"Shop Page"} />
      <section className="food-category-section fix section-padding">
        <div className="container">
          <ProductTopBar />
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="catagory-product-card-2 shadow-style text-center">
                <div className="icon">
                  <Link href="/shop-cart">
                    <i className="far fa-heart" />
                  </Link>
                </div>
                <div className="catagory-product-image">
                  <img src="assets/img/food/beef-ruti.png" alt="product-img" />
                </div>
                <div className="catagory-product-content">
                  <div className="catagory-button">
                    <Link href="/shop-cart" className="theme-btn-2">
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
                    <Link href="/shop-single">ruti with beef slice</Link>
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
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="catagory-product-card-2 active shadow-style text-center">
                <div className="icon">
                  <Link href="/shop-cart">
                    <i className="far fa-heart" />
                  </Link>
                </div>
                <div className="catagory-product-image">
                  <img src="assets/img/food/burger-2.png" alt="product-img" />
                </div>
                <div className="catagory-product-content">
                  <div className="catagory-button">
                    <Link href="/shop-cart" className="theme-btn-2">
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
                    <Link href="/shop-single">Whopper Burger King</Link>
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
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="catagory-product-card-2 shadow-style text-center">
                <div className="icon">
                  <Link href="/shop-cart">
                    <i className="far fa-heart" />
                  </Link>
                </div>
                <div className="catagory-product-image">
                  <img src="assets/img/food/pasta-2.png" alt="product-img" />
                </div>
                <div className="catagory-product-content">
                  <div className="catagory-button">
                    <Link href="/shop-cart" className="theme-btn-2">
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
                    <Link href="/shop-single">Chiness pasta</Link>
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
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".9s"
            >
              <div className="catagory-product-card-2 shadow-style text-center">
                <div className="icon">
                  <Link href="/shop-cart">
                    <i className="far fa-heart" />
                  </Link>
                </div>
                <div className="catagory-product-image">
                  <img src="assets/img/food/pizza-3.png" alt="product-img" />
                </div>
                <div className="catagory-product-content">
                  <div className="catagory-button">
                    <Link href="/shop-cart" className="theme-btn-2">
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
                    <Link href="/shop-single">delicious burger</Link>
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
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="catagory-product-card-2 shadow-style text-center">
                <div className="icon">
                  <Link href="/shop-cart">
                    <i className="far fa-heart" />
                  </Link>
                </div>
                <div className="catagory-product-image">
                  <img
                    src="assets/img/food/main-food-2.png"
                    alt="product-img"
                  />
                </div>
                <div className="catagory-product-content">
                  <div className="catagory-button">
                    <Link href="/shop-cart" className="theme-btn-2">
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
                    <Link href="/shop-single">fast food combo</Link>
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
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="catagory-product-card-2 shadow-style text-center">
                <div className="icon">
                  <Link href="/shop-cart">
                    <i className="far fa-heart" />
                  </Link>
                </div>
                <div className="catagory-product-image">
                  <img src="assets/img/food/ruti.png" alt="product-img" />
                </div>
                <div className="catagory-product-content">
                  <div className="catagory-button">
                    <Link href="/shop-cart" className="theme-btn-2">
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
                    <Link href="/shop-single">ruti with chiken</Link>
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
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="catagory-product-card-2 shadow-style text-center">
                <div className="icon">
                  <Link href="/shop-cart">
                    <i className="far fa-heart" />
                  </Link>
                </div>
                <div className="catagory-product-image">
                  <img src="assets/img/food/grilled-2.png" alt="product-img" />
                </div>
                <div className="catagory-product-content">
                  <div className="catagory-button">
                    <Link href="/shop-cart" className="theme-btn-2">
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
                    <Link href="/shop-single">grilled chiken</Link>
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
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".9s"
            >
              <div className="catagory-product-card-2 shadow-style text-center">
                <div className="icon">
                  <Link href="/shop-cart">
                    <i className="far fa-heart" />
                  </Link>
                </div>
                <div className="catagory-product-image">
                  <img
                    src="assets/img/food/delicious-burger.png"
                    alt="product-img"
                  />
                </div>
                <div className="catagory-product-content">
                  <div className="catagory-button">
                    <Link href="/shop-cart" className="theme-btn-2">
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
                    <Link href="/shop-single">delicious burger</Link>
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
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="catagory-product-card-2 shadow-style text-center">
                <div className="icon">
                  <Link href="/shop-cart">
                    <i className="far fa-heart" />
                  </Link>
                </div>
                <div className="catagory-product-image">
                  <img src="assets/img/food/pasta-3.png" alt="product-img" />
                </div>
                <div className="catagory-product-content">
                  <div className="catagory-button">
                    <Link href="/shop-cart" className="theme-btn-2">
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
                    <Link href="/shop-single">ruti with beef slice</Link>
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
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="catagory-product-card-2 shadow-style text-center">
                <div className="icon">
                  <Link href="/shop-cart">
                    <i className="far fa-heart" />
                  </Link>
                </div>
                <div className="catagory-product-image">
                  <img
                    src="assets/img/food/french-fry-3.png"
                    alt="product-img"
                  />
                </div>
                <div className="catagory-product-content">
                  <div className="catagory-button">
                    <Link href="/shop-cart" className="theme-btn-2">
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
                    <Link href="/shop-single">Whopper Burger King</Link>
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
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="catagory-product-card-2 shadow-style text-center">
                <div className="icon">
                  <Link href="/shop-cart">
                    <i className="far fa-heart" />
                  </Link>
                </div>
                <div className="catagory-product-image">
                  <img
                    src="assets/img/food/fried-chicken-2.png"
                    alt="product-img"
                  />
                </div>
                <div className="catagory-product-content">
                  <div className="catagory-button">
                    <Link href="/shop-cart" className="theme-btn-2">
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
                    <Link href="/shop-single">Chiness pasta</Link>
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
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".9s"
            >
              <div className="catagory-product-card-2 shadow-style text-center">
                <div className="icon">
                  <Link href="/shop-cart">
                    <i className="far fa-heart" />
                  </Link>
                </div>
                <div className="catagory-product-image">
                  <img
                    src="assets/img/food/french-fry-4.png"
                    alt="product-img"
                  />
                </div>
                <div className="catagory-product-content">
                  <div className="catagory-button">
                    <Link href="/shop-cart" className="theme-btn-2">
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
                    <Link href="/shop-single">delicious burger</Link>
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
          <div
            className="page-nav-wrap mt-5 text-center wow fadeInUp"
            data-wow-delay=".4s"
          >
            <ul>
              <li>
                <Link className="page-numbers" href="#">
                  <i className="fal fa-long-arrow-left" />
                </Link>
              </li>
              <li>
                <Link className="page-numbers" href="#">
                  1
                </Link>
              </li>
              <li>
                <Link className="page-numbers" href="#">
                  2
                </Link>
              </li>
              <li>
                <Link className="page-numbers" href="#">
                  3
                </Link>
              </li>
              <li>
                <Link className="page-numbers" href="#">
                  4
                </Link>
              </li>
              <li>
                <Link className="page-numbers" href="#">
                  <i className="fal fa-long-arrow-right" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Cta />
    </FoodKingLayout>
  );
};
export default page;
