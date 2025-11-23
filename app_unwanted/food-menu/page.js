import InstagramBannerSlider from "@/components/unwanted/InstagramBannerSlider";
import PageBanner from "@/components/PageBanner";
import ReservationForm from "@/components/unwanted/ReservationForm";
import TestimonialSlider from "@/components/unwanted/TestimonialSlider";
import FoodKingLayout from "@/layouts/FoodKingLayout";
const page = () => {
  return (
    <FoodKingLayout>
      <PageBanner pageName={"food menu 1"} />

      {/* Food Menu Section Start */}
      <section className="fooder-menu-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">about our food</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              trending food menu
            </h2>
          </div>
          <div className="fooder-menu-wrapper">
            <div className="row">
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="food-menu-items d-flex align-items-center justify-content-between">
                  <div className="food-menu-content">
                    <h4>Chicago Deep Pizza.</h4>
                    <p>
                      It's the perfect dining experience where Experience quick
                      and efficient
                    </p>
                  </div>
                  <h4 className="price">$5.00</h4>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="food-menu-items d-flex align-items-center justify-content-between">
                  <div className="food-menu-content">
                    <h4>Chicago Deep Pizza.</h4>
                    <p>
                      It's the perfect dining experience where Experience quick
                      and efficient
                    </p>
                  </div>
                  <h4 className="price">$5.00</h4>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="food-menu-items active d-flex align-items-center justify-content-between">
                  <div className="food-menu-content">
                    <h4>Chicago Deep Pizza.</h4>
                    <p>
                      It's the perfect dining experience where Experience quick
                      and efficient
                    </p>
                  </div>
                  <h4 className="price">$5.00</h4>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="food-menu-items d-flex align-items-center justify-content-between">
                  <div className="food-menu-content">
                    <h4>Chicago Deep Pizza.</h4>
                    <p>
                      It's the perfect dining experience where Experience quick
                      and efficient
                    </p>
                  </div>
                  <h4 className="price">$5.00</h4>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="food-menu-items d-flex align-items-center justify-content-between">
                  <div className="food-menu-content">
                    <h4>Chicago Deep Pizza.</h4>
                    <p>
                      It's the perfect dining experience where Experience quick
                      and efficient
                    </p>
                  </div>
                  <h4 className="price">$5.00</h4>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="food-menu-items d-flex align-items-center justify-content-between">
                  <div className="food-menu-content">
                    <h4>Chicago Deep Pizza.</h4>
                    <p>
                      It's the perfect dining experience where Experience quick
                      and efficient
                    </p>
                  </div>
                  <h4 className="price">$5.00</h4>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="food-menu-items d-flex align-items-center justify-content-between">
                  <div className="food-menu-content">
                    <h4>Chicago Deep Pizza.</h4>
                    <p>
                      It's the perfect dining experience where Experience quick
                      and efficient
                    </p>
                  </div>
                  <h4 className="price">$5.00</h4>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="food-menu-items d-flex align-items-center justify-content-between">
                  <div className="food-menu-content">
                    <h4>Chicago Deep Pizza.</h4>
                    <p>
                      It's the perfect dining experience where Experience quick
                      and efficient
                    </p>
                  </div>
                  <h4 className="price">$5.00</h4>
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
