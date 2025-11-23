import AboutFoodItems from "@/components/unwanted/AboutFoodItems";
import InstagramBannerSlider from "@/components/unwanted/InstagramBannerSlider";
import Marque from "@/components/Marque";
import { NextSaleBanner2 } from "@/components/unwanted/NextSaleBanner";
import PageBanner from "@/components/PageBanner";
import TestimonialSlider from "@/components/unwanted/TestimonialSlider";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";

const page = () => {
  return (
    <FoodKingLayout>
      <PageBanner pageName={"About us"} />
      {/* About Section Start */}
      <section className="about-section fix section-padding section-bg">
        <div className="container">
          <div className="about-wrapper">
            <div className="row align-items-center">
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="about-image">
                  <img src="assets/img/about/burger.png" alt="about-img" />
                  <div className="burger-text">
                    <img
                      src="assets/img/about/burger-text.png"
                      alt="shape-img"
                    />
                  </div>
                  <div className="price">
                    <h2>
                      $<span className="count">4,99</span>
                    </h2>
                  </div>
                  <div
                    className="since-text bg-cover"
                    style={{
                      backgroundImage: 'url("assets/img/shape/food-shape.png")',
                    }}
                  >
                    <h3>since /1985</h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 mt-5 mt-lg-0">
                <div className="about-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">about our food</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Where Quality Meet Excellent <span>Service.</span>
                    </h2>
                  </div>
                  <p className="wow fadeInUp" data-wow-delay=".5s">
                    It's the perfect dining experience where every dish is
                    crafted with fresh, high-quality Experience quick and
                    efficient service that ensures your food is servead fresh
                    It's the dining experience where every dish is crafted with
                    fresh, high-quality ingredients
                  </p>
                  <div className="icon-area">
                    <div
                      className="icon-items d-flex wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <div className="icon">
                        <i className="flaticon-quality" />
                      </div>
                      <div className="content">
                        <h4>super quality food</h4>
                        <p>
                          A team of dreamers and doers build unique interactive
                          music and art
                        </p>
                      </div>
                    </div>
                    <div
                      className="icon-items d-flex wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <div className="icon">
                        <i className="flaticon-reputation" />
                      </div>
                      <div className="content">
                        <h4>well reputation</h4>
                        <p>
                          A team of dreamers and doers build unique interactive
                          music and art
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="info-area d-flex align-items-center">
                    <Link
                      href="/about"
                      className="theme-btn style-line-height wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      more about us
                    </Link>
                    <div
                      className="info-content wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <span>BRENDON GARREY</span>
                      <h6>Customer's experience is our highest priority.</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Cta Banner Section Start */}
      <section
        className="main-cta-banner-2 section-padding bg-cover"
        style={{
          backgroundImage: 'url("assets/img/banner/main-cta-bg-2.jpg")',
        }}
      >
        <div className="tomato-shape-left float-bob-y">
          <img src="assets/img/tomato.png" alt="shape-img" />
        </div>
        <div className="chili-shape-right float-bob-y">
          <img src="assets/img/chilli.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="main-cta-banner-wrapper-2 d-flex align-items-center justify-content-between">
            <div className="section-title mb-0">
              <span className="theme-color-3 wow fadeInUp">
                crispy, every bite taste
              </span>
              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                30 minutes fast <br />
                <span className="theme-color-3">delivery</span> challage
              </h2>
            </div>
            <Link
              href="/shop-single"
              className="theme-btn bg-white wow fadeInUp"
              data-wow-delay=".5s"
            >
              <span className="button-content-wrapper d-flex align-items-center">
                <span className="button-icon">
                  <i className="flaticon-delivery" />
                </span>
                <span className="button-text">order now</span>
              </span>
            </Link>
            <div className="delivery-man">
              <img src="assets/img/delivery-man-2.png" alt="img" />
            </div>
          </div>
        </div>
      </section>
      {/* About Food Section Start */}
      <AboutFoodItems />
      {/* Food Banner Section Start */}
      <section className="food-banner-section fix section-padding section-bg pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div
                className="burger-banner-items bg-cover"
                style={{
                  backgroundImage: "url(assets/img/banner/burger-bg.png)",
                }}
              >
                <div className="burger-content text-center">
                  <h3>today</h3>
                  <h2>special</h2>
                  <h4>
                    <Link href="/shop" className="text-white">
                      beef <span>burger</span>
                    </Link>
                  </h4>
                </div>
                <div className="burger-image">
                  <img src="assets/img/food/big-burger.png" alt="food-img" />
                </div>
                <div className="text-shape">
                  <img
                    src="assets/img/shape/pizza-text-2.png"
                    alt="shape-img"
                  />
                </div>
                <div className="burger-text">
                  <img src="assets/img/shape/burger-text.png" alt="shape-img" />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-9 mt-5 mt-xl-0">
              <div
                className="single-offer-items style-2 bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/banner/pepsi-bg.png")',
                }}
              >
                <div className="offer-content">
                  <h5>crispy, every bite taste</h5>
                  <h3>
                    FASH FOOD <br />
                    MEAL
                  </h3>
                  <p>
                    The mouth-watering aroma of <br />
                    sizzling burgers
                  </p>
                  <Link href="/shop-single" className="theme-btn mt-4">
                    order now
                  </Link>
                </div>
                <div className="offer-img">
                  <img
                    src="assets/img/offer/50percent-off-3.png"
                    alt="shape-img"
                  />
                </div>
                <div className="roller-box">
                  <img src="assets/img/food/roller-box.png" alt="food-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Marque Section Start */}
      <Marque />
      {/* Today Nest Sale Banner Start */}
      <section className="today-best-sale fix">
        <div className="today-best-sale-wrapper">
          <div className="row g-0">
            <div className="col-xl-8 col-lg-7">
              <NextSaleBanner2 />
            </div>
            <div className="col-xl-4 col-lg-5">
              <div
                className="best-sale-content style-2 bg-cover"
                style={{ backgroundImage: 'url("assets/img/shape.png")' }}
              >
                <div className="burger-shape">
                  <img src="assets/img/shape/fry-shape-4.png" alt="shape-img" />
                </div>
                <div className="fry-shape">
                  <img
                    src="assets/img/shape/burger-shape-4.png"
                    alt="shape-img"
                  />
                </div>
                <h4 className="wow fadeInUp">Deal Of The Day</h4>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  TODAY'S the hamburger' DAY
                </h2>
                <h3 className="wow fadeInUp" data-wow-delay=".5s">
                  <span>special price</span> $55
                </h3>
                <p className="wow fadeInUp" data-wow-delay=".7s">
                  Savor the perfect symphony of flavors It's the perfect dining
                  experience where Experience quick and efficient with our
                  signature hamburger, a culinary
                </p>
                <div className="button-area wow fadeInUp" data-wow-delay=".9s">
                  <Link
                    href="/shop-single"
                    className="theme-btn bg-transparent"
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
          </div>
        </div>
      </section>
      {/* Team Section Start */}
      <section className="team-section section-padding section-bg fix">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">about our food</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              MEET OUR EXPERT CHEFS
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-team-items">
                <div className="team-image">
                  <img src="assets/img/team/01.jpg" alt="team-img" />
                  <div className="social-link">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
                <div className="team-content">
                  <p>head chef</p>
                  <h3>
                    <Link href="/team-details">Leslie Alexander</Link>
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-team-items active">
                <div className="team-image">
                  <img src="assets/img/team/02.jpg" alt="team-img" />
                  <div className="social-link">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
                <div className="team-content">
                  <p>sr table manager</p>
                  <h3>
                    <Link href="/team-details">Henry Lucas</Link>
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-team-items">
                <div className="team-image">
                  <img src="assets/img/team/03.jpg" alt="team-img" />
                  <div className="social-link">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
                <div className="team-content">
                  <p>senoir cooker</p>
                  <h3>
                    <Link href="/team-details">Mateo Levi</Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div
            className="team-button text-center mt-5 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <Link href="/team" className="theme-btn">
              meet our team
            </Link>
          </div>
        </div>
      </section>
      {/* Food Processing Section Start */}
      <section
        className="food-processing-section section-padding fix bg-cover"
        style={{
          backgroundImage: 'url("assets/img/shape/about-food-bg.png")',
        }}
      >
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">food processing</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              how we serve you?
            </h2>
          </div>
          <div className="food-processing-wrapper">
            <div className="row">
              <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="food-processing-items style-2 center">
                  <div className="food-processing-image">
                    <img src="assets/img/choose/01.png" alt="img" />
                    <div className="number">
                      <span>01</span>
                    </div>
                  </div>
                  <div className="food-processing-content">
                    <h3>cooking with care</h3>
                    <p>
                      It's the perfect dining experience where Experience quick
                      and efficient
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="food-processing-items style-2 center active">
                  <div className="food-processing-image">
                    <img src="assets/img/choose/02.png" alt="img" />
                    <div className="number">
                      <span>02</span>
                    </div>
                  </div>
                  <div className="food-processing-content">
                    <h3>quickly delivery</h3>
                    <p>
                      It's the perfect dining experience where Experience quick
                      and efficient
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="food-processing-items style-2 center">
                  <div className="food-processing-image">
                    <img src="assets/img/choose/03.png" alt="img" />
                    <div className="number">
                      <span>03</span>
                    </div>
                  </div>
                  <div className="food-processing-content">
                    <h3>choose food</h3>
                    <p>
                      It's the perfect dining experience where Experience quick
                      and efficient
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section Start */}
      <TestimonialSlider />
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
                <div
                  className="booking-contact bg-cover"
                  style={{
                    backgroundImage:
                      'url("assets/img/shape/booking-shape.png")',
                  }}
                >
                  <h4 className="text-center text-white">
                    create an reservation
                  </h4>
                  <div className="booking-items">
                    <div className="form-clt">
                      <div className="nice-select" tabIndex={0}>
                        <span className="current">no of person</span>
                        <ul className="list">
                          <li data-value={1} className="option selected">
                            no of person
                          </li>
                          <li data-value={1} className="option">
                            no of person
                          </li>
                          <li data-value={1} className="option">
                            no of person
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="form-clt">
                      <input
                        type="text"
                        name="number"
                        id="number"
                        placeholder="phone number"
                      />
                      <div className="icon">
                        <i className="fas fa-phone" />
                      </div>
                    </div>
                    <div className="form-clt">
                      <input type="date" id="calendar" name="calendar" />
                    </div>
                    <div className="form-clt">
                      <Link href="/reservation" className="theme-btn bg-yellow">
                        booking now
                      </Link>
                    </div>
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
