import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
const page = () => {
  const contactInfo = [
    {
      icon: "location.svg",
      title: "address line",
      content: "Bowery St, New York, 37 USA\nNY 10013,USA",
      delay: ".3s",
    },
    {
      icon: "phone.svg",
      title: "Phone Number",
      content: "+1255 - 568 - 6523 4374-221\n+1255 - 568 - 6523",
      delay: ".5s",
      active: true,
    },
    {
      icon: "email.svg",
      title: "Mail Adress",
      content: "email@example.com\ninfo@yourdomain.com",
      delay: ".7s",
    },
  ];

  return (
    <FoodKingLayout>
      <PageBanner pageName={"Contact us"} />
      {/*<< Contact Info Section Start >>*/}
      <section className="contact-info-section fix section-padding section-bg">
        <div className="container">
          <div className="row g-4">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className={`col-lg-4 col-md-6 wow fadeInUp`}
                data-wow-delay={item.delay}
              >
                <div
                  className={`contact-info-items ${
                    item.active ? "active" : ""
                  } text-center`}
                >
                  <div className="icon">
                    <img src={`assets/img/icon/${item.icon}`} alt="icon-img" />
                  </div>
                  <div className="content">
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*<< Contact Section Start >>*/}
      <section className="contact-section section-padding pt-0 section-bg">
        <div className="container">
          <div className="contact-area">
            <div className="row justify-content-between">
              <div className="col-xl-6 col-lg-6">
                <div className="map-content-area">
                  <h3 className="wow fadeInUp" data-wow-delay=".3s">
                    {" "}
                    Get in touch
                  </h3>
                  <p className="wow fadeInUp" data-wow-delay=".5s">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    mattis <br />
                    faucibus odio feugiat arc dolor.
                  </p>
                  <div className="google-map wow fadeInUp" data-wow-delay=".7s">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 mt-5 mt-lg-0">
                <div className="contact-form-items">
                  <div className="contact-title">
                    <h3 className="wow fadeInUp" data-wow-delay=".3s">
                      Fill Up The Form
                    </h3>
                    <p className="wow fadeInUp" data-wow-delay=".5s">
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                  </div>
                  <form id="contact-form" method="POST">
                    <div className="row g-4">
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name*"
                          />
                          <div className="icon">
                            <i className="fal fa-user" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email Address*"
                          />
                          <div className="icon">
                            <i className="fal fa-envelope" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".7s"
                      >
                        <div className="form-clt-big form-clt">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Enter Your Messege here"
                            defaultValue={""}
                          />
                          <div className="icon">
                            <i className="fal fa-edit" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".8s"
                      >
                        <button type="submit" className="theme-btn">
                          <span className="button-content-wrapper d-flex align-items-center">
                            <span className="button-icon">
                              <i className="fal fa-paper-plane" />
                            </span>
                            <span className="button-text">Get In Touch</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
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
