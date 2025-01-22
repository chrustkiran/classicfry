import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
const page = () => {
  return (
    <FoodKingLayout>
      <PageBanner pageName={"testimonial"} />
      {/*<< Testimonial Section Start >>*/}
      <section className="testimonial-section-4 fix section-bg section-padding">
        <div className="container">
          <div className="row g-4">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="testimonial-card-items">
                <div
                  className="testimonial-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/client/08.jpg")' }}
                />
                <div className="testimonial-content">
                  <p>
                    Bring to the table win-win strategies to ensure proactive
                    domination. At the end of the day going forward normal that
                    has evolved from operational X is on the
                  </p>
                  <h4>Janes Cooper</h4>
                  <span>Developer</span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="testimonial-card-items">
                <div
                  className="testimonial-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/client/09.jpg")' }}
                />
                <div className="testimonial-content">
                  <p>
                    Bring to the table win-win strategies to ensure proactive
                    domination. At the end of the day going forward normal that
                    has evolved from operational X is on the
                  </p>
                  <h4>Frank H. Houston</h4>
                  <span>Food Blogger</span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="testimonial-card-items">
                <div
                  className="testimonial-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/client/10.jpg")' }}
                />
                <div className="testimonial-content">
                  <p>
                    Bring to the table win-win strategies to ensure proactive
                    domination. At the end of the day going forward normal that
                    has evolved from operational X is on the
                  </p>
                  <h4>William M. Spencer</h4>
                  <span>Designer</span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="testimonial-card-items">
                <div
                  className="testimonial-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/client/11.jpg")' }}
                />
                <div className="testimonial-content">
                  <p>
                    Bring to the table win-win strategies to ensure proactive
                    domination. At the end of the day going forward normal that
                    has evolved from operational X is on the
                  </p>
                  <h4>Kenneth Mix </h4>
                  <span>Food Lover</span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="testimonial-card-items">
                <div
                  className="testimonial-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/client/12.jpg")' }}
                />
                <div className="testimonial-content">
                  <p>
                    Bring to the table win-win strategies to ensure proactive
                    domination. At the end of the day going forward normal that
                    has evolved from operational X is on the
                  </p>
                  <h4>Shikon Boy</h4>
                  <span>Frontend</span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="testimonial-card-items">
                <div
                  className="testimonial-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/client/13.jpg")' }}
                />
                <div className="testimonial-content">
                  <p>
                    Bring to the table win-win strategies to ensure proactive
                    domination. At the end of the day going forward normal that
                    has evolved from operational X is on the
                  </p>
                  <h4>Nowrin Ahmed</h4>
                  <span>WordPress Lover</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Cta Banner Section Start */}
      <Cta />
    </FoodKingLayout>
  );
};
export default page;
