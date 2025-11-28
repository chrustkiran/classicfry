import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import env from "@/env";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import { MdOutlinePhoneInTalk, MdOutlineMailOutline, MdOutlinePinDrop } from "react-icons/md";

const page = () => {

  const contactInfo = env.CONTACT_INFO;
  return (
    <FoodKingLayout>
      <PageBanner pageName={"Contact us"} />

      <section className="contact-info-section fix section-padding section-bg">
        <div className="container">
          <div className="contact-area">
            <div className="row">
              <div className="flex justify-center">
                <div className="map-content-area">
                  <h3 className="wow fadeInUp" data-wow-delay=".3s">
                    {" "}
                    Where to Find Us
                  </h3>
                  {/*<p className="wow fadeInUp" data-wow-delay=".5s">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    mattis <br />
                    faucibus odio feugiat arc dolor.
                  </p> */}


                  {contactInfo.map((location) => {

                    return (
                      <div
                        key={location.id}
                        id={location.id}
                        className="google-map wow fadeInUp"
                        style={{ scrollMarginTop: "80px" }}
                        data-wow-delay=".7s"
                      >
                        <strong className="wow fadeInUp" data-wow-delay=".5s">
                          {location.name}
                        </strong>

                        <p>
                          <span><MdOutlinePinDrop /> {location.address}</span>
                          <br />
                          <span><MdOutlinePhoneInTalk /> {location.phone}</span>
                          <br />
                          <span><MdOutlineMailOutline /> {location.email}</span>
                        </p>

                        <iframe
                          src={location.mapSrc}
                          width="600"
                          height="450"
                          style={{ border: 0 }}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                        <br />
                      </div>
                    );
                  })}

                </div>
              </div>
              {/* <div className="col-xl-5 col-lg-5 mt-5 mt-lg-0">
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
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </FoodKingLayout>
  );
};
export default page;
