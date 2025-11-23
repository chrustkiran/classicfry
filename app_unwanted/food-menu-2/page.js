import InstagramBannerSlider from "@/components/unwanted/InstagramBannerSlider";
import PageBanner from "@/components/PageBanner";
import ReservationForm from "@/components/unwanted/ReservationForm";
import TestimonialSlider from "@/components/unwanted/TestimonialSlider";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";
const page = () => {
  return (
    <FoodKingLayout>
      <PageBanner pageName={"food menu 2"} />
      {/* Food Catagory Section Start */}
      <section className="food-category-section fix section-padding section-bg">
        <div className="container">
          <div className="section-title text-center">
            <span>crispy, every bite taste</span>
            <h2>Popular Food Items</h2>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="catagory-product-card-2 text-center">
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
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="catagory-product-card-2 text-center active">
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
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="catagory-product-card-2 text-center">
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
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".9s"
            >
              <div className="catagory-product-card-2 text-center">
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
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="catagory-product-card-2 text-center">
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
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="catagory-product-card-2 text-center">
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
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="catagory-product-card-2 text-center">
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
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".9s"
            >
              <div className="catagory-product-card-2 text-center">
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
          </div>
        </div>
      </section>
      {/* Booking Section Start */}
      <section
        className="booking-section mt-0 fix section-padding bg-cover"
        style={{ backgroundImage: 'url("assets/img/banner/main-bg.jpg")' }}
      >
        <div className="container">
          <div className="booking-wrapper">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6">
                <div className="booking-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">
                      crispy, every bite taste
                    </span>
                    <h2
                      className="text-white wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      need booking? <br />
                      reserve your table?
                    </h2>
                  </div>
                  <div
                    className="icon-items d-flex align-items-center wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="icon">
                      <i className="flaticon-phone-call-2" />
                    </div>
                    <div className="content">
                      <h5>24/7 Support center</h5>
                      <h3>
                        <a href="tel:+1718-904-4450">+1718-904-4450</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-5 mt-5 mt-lg-0 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <ReservationForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section Start */}
      <TestimonialSlider />
      {/* Instagram Banner Section Start */}
      <InstagramBannerSlider />
    </FoodKingLayout>
  );
};
export default page;
