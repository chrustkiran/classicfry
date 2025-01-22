import { AboutFoodItems2 } from "@/components/AboutFoodItems";
import GallerySlider from "@/components/GallerySlider";
import { HomeSlider2 } from "@/components/HomeSlider";
import InstagramBannerSlider from "@/components/InstagramBannerSlider";
import { TestimonialSlider2 } from "@/components/TestimonialSlider";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";

const page = () => {
  return (
    <FoodKingLayout>
      {/* Hero Section Start */}
      <HomeSlider2 />
      {/* Food Banner Section Start */}
      <section className="food-banner-section section-padding fix">
        <div className="burger-shape-2">
          <img src="assets/img/shape/burger-shape-2.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="row g-4">
            <div
              className="col-xl-4 col-lg-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div
                className="single-offer-items bg-cover style-3"
                style={{
                  backgroundImage: 'url("assets/img/banner/offer-bg-2.png")',
                }}
              >
                <div className="offer-content">
                  <h5>crispy, every bite taste</h5>
                  <h3>
                    Delicious &amp; <br />
                    hot pizza
                  </h3>
                  <Link href="/shop-single" className="link-btn">
                    order now <i className="fas fa-arrow-right" />
                  </Link>
                </div>
                <div className="offer-image-2">
                  <img
                    src="assets/img/offer/50percent-off-2.png"
                    alt="offer-img"
                  />
                </div>
                <div className="small-pizza">
                  <img src="assets/img/food/small-pizza.png" alt="pizza-img" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div
                className="single-offer-items bg-cover style-3"
                style={{
                  backgroundImage: 'url("assets/img/banner/french-fry-bg.png")',
                }}
              >
                <div className="french-content">
                  <h4>
                    <span>Todays</span>Delicious
                  </h4>
                  <h3>french fry</h3>
                  <h5>This Weekend only</h5>
                  <Link href="/shop-single" className="theme-btn bg-yellow">
                    <span className="button-content-wrapper d-flex align-items-center">
                      <span className="button-icon">
                        <i className="flaticon-delivery" />
                      </span>
                      <span className="button-text">order now</span>
                    </span>
                  </Link>
                </div>
                <div className="french-image">
                  <img src="assets/img/food/french-fry.png" alt="food-img" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div
                className="single-offer-items bg-cover style-3"
                style={{
                  backgroundImage: 'url("assets/img/banner/chiken-bg.png")',
                }}
              >
                <div className="offer-content">
                  <h5>crispy, every bite taste</h5>
                  <h3>
                    chiken &amp; <br />
                    french fry
                  </h3>
                  <Link href="/shop-single" className="link-btn">
                    order now <i className="fas fa-arrow-right" />
                  </Link>
                </div>
                <div className="offer-shape-3">
                  <img
                    src="assets/img/offer/50percent-off-4.png"
                    alt="shape-img"
                  />
                </div>
                <div className="main-food-3">
                  <img src="assets/img/food/main-food-3.png" alt="pizza-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section Start */}
      <section className="about-section section-padding pt-0">
        <div className="leaves-shape">
          <img src="assets/img/shape/leaves.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="about-wrapper-2">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-5">
                <div className="pizza-image">
                  <img src="assets/img/about/pizza.jpg" alt="pizza-img" />
                  <div className="quate-content">
                    <h3>
                      we cook <span>hot</span> <br />
                      sandwiches for you
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 mt-5 mt-lg-0">
                <div className="about-content">
                  {/* ... (content remains the same) ... */}
                  <div className="about-info">
                    <div
                      className="profile d-flex align-items-center wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <div
                        className="profile-img bg-cover"
                        style={{
                          backgroundImage:
                            'url("assets/img/about/profile.jpg")',
                        }}
                      />
                      <img src="assets/img/about/signatre.jpg" alt="img" />
                    </div>
                    <Link
                      href="/about"
                      className="theme-btn-2 wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      Foundation, since <span>21st</span> Oct , 2019
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Food Section Start */}
      <AboutFoodItems2 />
      {/* Video Banner Section Start */}
      <div
        className="video-section section-padding bg-cover"
        style={{ backgroundImage: 'url("assets/img/banner/video-bg.jpg")' }}
      >
        <div className="container">
          <div className="video-icon center">
            <a
              href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
              className="video-popup"
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
      </div>
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
      {/* Food Banner Section Start */}
      <section className="food-banner-section">
        {/* ... (content remains the same) ... */}
      </section>
      {/* Food Menu Section Start */}
      <section className="fooder-menu-section fix section-padding pb-0">
        {/* ... (content remains the same) ... */}
      </section>
      {/* Gallery Section Start */}
      <GallerySlider />
      {/* About Section Start */}
      <section className="about-section fix section-padding pt-0">
        {/* ... (content remains the same) ... */}
      </section>
      {/* Food Banner Section Start */}
      <section className="food-banner-section-2 section-padding pt-0 fix">
        {/* ... (content remains the same) ... */}
      </section>
      {/* Food Processing Section Start */}
      <section className="food-processing-section section-padding pt-0 fix section-bg">
        {/* ... (content remains the same) ... */}
      </section>
      {/* Testimonial Section Start */}
      <TestimonialSlider2 />
      {/* News Section Start */}
      <section className="news-section fix section-padding">
        <div className="burger-shape">
          <img src="assets/img/shape/burger-shape-3.png" alt="burger-shape" />
        </div>
        <div className="fry-shape">
          <img src="assets/img/shape/fry-shape-2.png" alt="burger-shape" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">news &amp; blog</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              update news &amp; blog
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-news-items">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/01.jpg")' }}
                >
                  <div className="post-cat">
                    <Link href="/news-details" className="cat-name">
                      Food &amp; Resturent
                    </Link>
                  </div>
                </div>
                <div className="news-content">
                  <ul className="post-date d-flex align-items-center">
                    <li>25 September 2023</li>
                    <li>comments (5)</li>
                  </ul>
                  <h3>
                    <Link href="/news-details">
                      how to build and grow your business and marketing strategy
                    </Link>
                  </h3>
                  <p>
                    These agencies specialize leveraging various digital
                    channels, such as social media advertising
                  </p>
                  <Link
                    href="/news-details"
                    className="theme-btn style-box-shadow mt-4"
                  >
                    read more
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-news-items">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/02.jpg")' }}
                >
                  <div className="post-cat">
                    <Link href="/news-details" className="cat-name">
                      Food &amp; Resturent
                    </Link>
                  </div>
                </div>
                <div className="news-content">
                  <ul className="post-date d-flex align-items-center">
                    <li>25 September 2023</li>
                    <li>comments (5)</li>
                  </ul>
                  <h3>
                    <Link href="/news-details">
                      Sneaking in Nutrition Without Sacrificing Fast Food Flavor
                    </Link>
                  </h3>
                  <p>
                    These agencies specialize leveraging various digital
                    channels, such as social media advertising
                  </p>
                  <Link
                    href="/news-details"
                    className="theme-btn style-box-shadow mt-4"
                  >
                    read more
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-news-items">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/03.jpg")' }}
                >
                  <div className="post-cat">
                    <Link href="/news-details" className="cat-name">
                      Food &amp; Resturent
                    </Link>
                  </div>
                </div>
                <div className="news-content">
                  <ul className="post-date d-flex align-items-center">
                    <li>25 September 2023</li>
                    <li>comments (5)</li>
                  </ul>
                  <h3>
                    <Link href="/news-details">
                      Creative Hacks to Elevate Your Fast Food Experience 2024
                    </Link>
                  </h3>
                  <p>
                    These agencies specialize leveraging various digital
                    channels, such as social media advertising
                  </p>
                  <Link
                    href="/news-details"
                    className="theme-btn style-box-shadow mt-4"
                  >
                    read more
                  </Link>
                </div>
              </div>
            </div>
            {/* ... (repeat for other news items) ... */}
          </div>
        </div>
      </section>
      {/* Instagram Banner Section Start */}
      <InstagramBannerSlider />
    </FoodKingLayout>
  );
};

export default page;
