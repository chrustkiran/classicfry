
import FoodItemContainer from "@/components/FoodItemContainer";
import FoodSlider from "@/components/FoodSlider";
import HomeSlider from "@/components/HomeSlider";
import Marque from "@/components/Marque";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";



const page = () => {
  return (
    <FoodKingLayout>
      <HomeSlider />
      <FoodSlider />
      <section className="food-banner-section section-padding fix section-bg pt-0">
        <div className="chili-shape">
          <img src="/assets/img/shape/chili-shape.png" alt="shape-img" />
        </div>
        <div className="fry-shape">
          <img src="/assets/img/shape/fry-shape.png" alt="shape-img" />
        </div>
      </section>
      <section
        className="grilled-banner fix section-padding bg-cover"
        style={{ backgroundImage: 'url("/assets/img/banner/main-bg.jpg")' }}
      >
        <div className="patato-shape">
          <img src="/assets/img/shape/patato-shape.png" alt="shape-img" />
        </div>
        <div className="tomato-shape">
          <img src="/assets/img/shape/tomato-shape-2.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="grilled-wrapper">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="grilled-content">
                  <h4 className="wow fadeInUp">Where</h4>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    <span>Crispy</span> Meet Perfection.
                  </h2>
                  <div
                    className="grilled-button wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <Link href="/shop-list?category=Burger" className="theme-btn">
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
              <div
                className="col-xl-6 col-lg-6 mt-5 mt-lg-0 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="grilled-image">
                  <img src="/assets/img/food/grilled.png" alt="grilled-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Food Catagory Section Start */}
      <section className="food-category-section fix section-padding section-bg">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">crispy, every bite taste</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Popular Food Items
            </h2>
          </div>
          <FoodItemContainer></FoodItemContainer>
          <div
            className="catagory-button text-center pt-4 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <Link href="/shop-list" className="theme-btn">
              <span className="button-content-wrapper d-flex align-items-center">
                <span className="button-icon">
                  <i className="flaticon-delivery" />
                </span>
                <span className="button-text">view more</span>
              </span>
            </Link>
          </div>
        </div>
      </section>
      {/* Food Comboo Section Start */}
      <section
        className="food-comboo-section fix bg-cover section-padding"
        style={{ backgroundImage: 'url("/assets/img/bg-image/bg.jpg")' }}
      >
        <div className="drinks-shape">
          <img src="/assets/img/shape/drinks.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="comboo-wrapper">
            <div className="row align-items-center">
              <div className="col-xl-6">
                <div className="food-comboo-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">
                      Fries That Make You Fly!
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      <span>Golden</span> Crunch, Perfectly Delicious Always!
                    </h2>
                  </div>

                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                   
                    <button
                      className="nav-link active wow fadeInUp"
                      data-wow-delay=".5s"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      <span className="food-comboo-list">
                        <span className="comboo-title">
                        <span className="button-icon">
                          <i className="flaticon-delivery" />
                        </span> &nbsp;
                          <Link href={'/shop-list?category=Peri+Peri'}>Order Now</Link>
                        </span>
                      </span>
                    </button>
                    
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="tab-content" id="nav-tab-Content">
                  <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div
                      className="comboo-image bg-cover"
                      style={{
                        backgroundImage:
                          'url("/assets/img/food/chicken-fly.jpeg")',
                      }}
                    >
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <div
                      className="comboo-image bg-cover"
                      style={{
                        backgroundImage:
                          'url("/assets/img/banner/comboo-bg.jpg")',
                      }}
                    >
                      <div className="pizza-text">
                        <img
                          src="/assets/img/shape/combo-pizza-text.png"
                          alt="shape-img"
                        />
                      </div>
                      <div className="pizza-image">
                        <img
                          src="/assets/img/food/big-pizza.png"
                          alt="food-img"
                        />
                      </div>
                      <div className="offer-shape">
                        <img
                          src="/assets/img/offer/50percent-off-2.png"
                          alt="shape-img"
                        />
                      </div>
                      <div className="vegetable-shape">
                        <img
                          src="/assets/img/shape/vegetable.png"
                          alt="shape-img"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-contact"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                  >
                    <div
                      className="comboo-image bg-cover"
                      style={{
                        backgroundImage:
                          'url("/assets/img/banner/comboo-bg.jpg")',
                      }}
                    >
                      <div className="pizza-text">
                        <img
                          src="/assets/img/shape/combo-pizza-text.png"
                          alt="shape-img"
                        />
                      </div>
                      <div className="pizza-image">
                        <img
                          src="/assets/img/food/big-pizza.png"
                          alt="food-img"
                        />
                      </div>
                      <div className="offer-shape">
                        <img
                          src="/assets/img/offer/50percent-off-2.png"
                          alt="shape-img"
                        />
                      </div>
                      <div className="vegetable-shape">
                        <img
                          src="/assets/img/shape/vegetable.png"
                          alt="shape-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Marque Section Start */}
      <Marque />
      {/* Choose Us Section Start */}
      <section className="choose-us fix section-padding pt-0 section-bg">
        <div className="container">
          <div
            className="food-icon-wrapper bg-cover"
            style={{
              backgroundImage: 'url("/assets/img/shape/food-shape-2.png")',
            }}
          >
            <div className="row g-4">
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="single-food-icon">
                  <div className="icon">
                    <i className="flaticon-quality" />
                  </div>
                  <div className="content">
                    <h4>super quality food</h4>
                    {/* <p>
                      A team of dreamers and doers building unique interactive
                      music and art
                    </p> */}
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="single-food-icon">
                  <div className="icon">
                    <i className="flaticon-cooking" />
                  </div>
                  <div className="content">
                    <h4>original recipes</h4>
                    {/* <p>
                      A team of dreamers and doers building unique interactive
                      music and art
                    </p> */}
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="single-food-icon">
                  <div className="icon">
                  <i className="fal fa-drumstick-bite"></i>
                  </div>
                  <div className="content">
                    <h4>Unmatched Taste</h4>
                    {/* <p>
                      A team of dreamers and doers building unique interactive
                      music and art
                    </p> */}
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay=".9s"
              >
                <div className="single-food-icon">
                  <div className="icon">
                    <i className="flaticon-quality" />
                  </div>
                  <div className="content">
                    <h4>100% fresh foods</h4>
                    {/* <p>
                      A team of dreamers and doers building unique interactive
                      music and art
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="kfc-banner fix bg-cover section-padding"
        style={{ backgroundImage: 'url("/assets/img/bg-image/bg.jpg")' }}
      >
        <div className="kfc-wrapper">
          <div className="container-fluid">
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div
                  className="kfc-image-items bg-cover"
                  style={{
                    backgroundImage: 'url("/assets/img/banner/kfc-bg.png")',
                  }}
                >
                  <div className="kfc-image">
                    <img src="/assets/img/food/wrap.png" alt="food-img" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="kfc-content text-center">
                  <div className="section-title">
                    <span className="wow fadeInUp">
                    Crunch in Every Bite
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Crispy Chicken Wrapped <br />
                      to Perfection!
                    </h2>
                  </div>
                  <p className="mt-3 mt-lg-0 wow fadeInUp" data-wow-delay=".5s">
                  Emphasizes the crispiness and the delicious wrap format.
                  </p>
                 
                  <Link
                    href="/shop-list?category=Wraps"
                    className="theme-btn mt-5 wow fadeInUp"
                    data-wow-delay=".8s"
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
    </FoodKingLayout>
  );
};
export default page;
