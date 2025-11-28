"use client";
import env from "@/env";
import Link from "next/link";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { MdOutlinePinDrop, MdOutlinePhoneInTalk } from "react-icons/md";


const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;
    case 2:
      return <Footer2 />;

    default:
      return <Footer1 />;
  }
};
const Footer1 = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <footer className="footer-section fix section-bg">
      <div className="burger-shape">
        <img src="/assets/img/shape/burger-shape-3.png" alt="burger-shape" />
      </div>
      <div className="fry-shape">
        <img src="/assets/img/shape/fry-shape-2.png" alt="burger-shape" />
      </div>
      <div className="container ">
        <div className="footer-widgets-wrapper ">
          <div className="flex-row d-flex justify-content-evenly gap-3">
            <div className="wow fadeInUp" data-wow-delay=".2s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link href="/">
                    <img
                      width={"150px"}
                      src="/assets/img/logo/logo.png"
                      alt="logo-img"
                    />
                    {/* <h3>classicfry</h3> */}
                  </Link>
                </div>
                <div className="footer-content">
                  <p>Savor the crunch—our crispy chicken is made to delight!</p>
                  <p className="mt-2">
                    Contact Us <br />
                    <a href="mailto:contact@classicfry.co.uk" className="link">
                      contact@classicfry.co.uk
                    </a>
                  </p>
                  <div className="social-icon d-flex align-items-center">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-vimeo-v" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="wow fadeInUp" data-wow-delay=".8s">
              <div className="single-footer-widget ">
                <div className="">
                  <h4>Contact Us:</h4>
                </div>
                <div className="footer-address-text mt-2">
                  {env.CONTACT_INFO.map((location) => (
                    <div key={location.id}>
                      <h5>{location.name}</h5>
                      <h6 style={{fontSize: 16}}><MdOutlinePhoneInTalk/> {location.phone}</h6>
                      <h6 style={{fontSize: 16}}><MdOutlinePinDrop  />{location.address}</h6>
                      <br></br>
                    </div>

                  ))}



                </div>

                <div className="mt-5 privacy-terms">
                  <a
                    id="privacy-terms"
                    href="#privacy-terms"
                    onClick={handleShow}
                  >
                    Privacy Policy & Terms and Conditions
                  </a>
                </div>
              </div>
            </div>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <h5 style={{ fontSize: "12px" }}>
                  Privacy Policy & Terms and Conditions
                </h5>
              </Modal.Header>
              <Modal.Body>
                <p style={{ fontSize: "12px" }} className="text-dark">
                  <h5 className="mb-2">Privacy Policy</h5>
                  <p>
                    <strong>Effective Date:</strong> 15.03.2025
                  </p>
                  <p>
                    At Classic Fry, we are committed to protecting your privacy.
                    This Privacy Policy outlines how we collect, use, and
                    safeguard your personal information when you visit our
                    website (
                    <a href="https://classicfry.co.uk">classicfry.co.uk</a>) or
                    use our services.
                  </p>

                  <strong>1. Information We Collect</strong>
                  <ul>
                    <li>Name, email address, and phone number</li>
                    <li>Billing and delivery address</li>
                    <li>
                      Payment details (processed securely through third-party
                      providers)
                    </li>
                    <li>Order history and preferences</li>
                    <li>IP address and browser details</li>
                    <li>Any other information you provide voluntarily</li>
                  </ul>

                  <strong>2. How We Use Your Information</strong>
                  <ul>
                    <li>Process and fulfill your orders</li>
                    <li>Improve our website and services</li>
                    <li>Provide customer support</li>
                    <li>Send promotional offers (if consent is given)</li>
                    <li>Comply with legal obligations</li>
                  </ul>

                  <strong>3. Data Protection & Security</strong>
                  <p>
                    We implement strict security measures to protect your data
                    from unauthorized access, alteration, or disclosure. Payment
                    details are encrypted and processed through secure
                    third-party gateways.
                  </p>

                  <strong>4. Sharing Your Information</strong>
                  <p>
                    We do not sell or rent your data. However, we may share it
                    with:
                  </p>
                  <ul>
                    <li>Payment processors for transaction security</li>
                    <li>Delivery services to fulfill orders</li>
                    <li>Legal authorities if required by law</li>
                  </ul>

                  <strong>5. Your Rights</strong>
                  <ul>
                    <li>Access, update, or delete your personal data</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Request data portability</li>
                  </ul>
                  <p>
                    For requests, please contact us at{" "}
                    <a href="mailto:contact@classicfry.co.uk">
                      contact@classicfry.co.uk
                    </a>
                    .
                  </p>

                  <strong>6. Cookies</strong>
                  <p>
                    We use cookies to enhance user experience. You can manage
                    cookie settings in your browser.
                  </p>

                  <strong>7. Changes to This Policy</strong>
                  <p>
                    We may update this policy from time to time. The latest
                    version will always be available on our website.
                  </p>

                  <h5 className="mt-4 mb-2">Terms and Conditions</h5>
                  <p>
                    <strong>Effective Date:</strong> 15.03.2025
                  </p>
                  <p>
                    Welcome to Classic Fry! By using our website (
                    <a href="https://classicfry.co.uk">classicfry.co.uk</a>) and
                    services, you agree to the following terms and conditions:
                  </p>

                  <strong>1. General Use</strong>
                  <ul>
                    <li>
                      By placing an order, you confirm that you are at least 18
                      years old or have parental consent.
                    </li>
                    <li>
                      We reserve the right to refuse service at our discretion.
                    </li>
                  </ul>

                  <strong>2. Orders & Payments</strong>
                  <ul>
                    <li>
                      All prices listed are in GBP and include applicable taxes.
                    </li>
                    <li>Orders are confirmed only upon successful payment.</li>
                    <li>
                      Payment is processed securely via third-party providers.
                    </li>
                  </ul>

                  <strong>3. Delivery & Collection</strong>
                  <ul>
                    <li>
                      Estimated delivery times are provided but not guaranteed.
                    </li>
                    <li>Customers must provide accurate address details.</li>
                    <li>
                      If you are not available at the time of delivery,
                      re-delivery charges may apply.
                    </li>
                  </ul>

                  <strong>4. Refunds & Cancellations</strong>
                  <ul>
                    <li>
                      Orders can be canceled within 10 minutes of placing them.
                    </li>
                    <li>
                      Refunds are issued only in cases of incorrect or
                      unsatisfactory orders.
                    </li>
                    <li>
                      Any issues must be reported within 24 hours of order
                      receipt.
                    </li>
                  </ul>

                  <strong>5. User Conduct</strong>
                  <ul>
                    <li>Customers must not misuse our website.</li>
                    <li>
                      Reviews and comments should be respectful and
                      non-offensive.
                    </li>
                  </ul>

                  <strong>6. Liability & Disclaimer</strong>
                  <ul>
                    <li>
                      Classic Fry is not liable for delays due to unforeseen
                      circumstances.
                    </li>
                    <li>
                      We are not responsible for any allergic reactions;
                      customers must review ingredients before ordering.
                    </li>
                  </ul>

                  <strong>7. Changes to Terms</strong>
                  <p>
                    We reserve the right to update these terms. Continued use of
                    our website constitutes acceptance of any changes.
                  </p>

                  <p>
                    For any queries, please contact us at{" "}
                    <a href="mailto:contact@classicfry.co.uk">
                      contact@classicfry.co.uk
                    </a>
                    .
                  </p>

                  <p>
                    <strong>Thank you for choosing Classic Fry!</strong>
                  </p>
                </p>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-wrapper d-flex align-items-center justify-content-between">
            <p className="wow fadeInLeft" data-wow-delay=".3s">
              © Copyright <span className="theme-color-3">2025</span>{" "}
              <Link href="/">ClassicFry </Link>. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer2 = () => {
  return (
    <footer className="footer-section section-bg-3 fix">
      <div className="footer-shape">
        <img src="/assets/img/shape/footer-shape.png" alt="shape-img" />
      </div>
      <div className="footer-shape-2">
        <img src="/assets/img/shape/footer-shape-2.png" alt="shape-img" />
      </div>
      <div className="container">
        <div className="footer-widgets-wrapper style-2">
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 col-md-6 pe-md-2 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-footer-widget pe-md-5 border-right">
                <div className="widget-head">
                  <Link href="/">
                    <img src="/assets/img/logo/logo-2.svg" alt="logo-img" />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    Temporibus autem quibusdam officiis debitis aut rerum
                    necessitatibus saepe eveniet voluta repudiandae molestiae
                    recusandae Itaquear rerum hic tenetur sapiente delectus
                  </p>
                  <div className="social-icon d-flex align-items-center">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-vimeo-v" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-5 col-lg-4 col-md-6 ps-xl-5 pe-md-5 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-footer-widget border-right">
                <div className="widget-head">
                  <h4>popular food</h4>
                </div>
                <div className="list-area d-flex align-items-center">
                  <ul>
                    <li>
                      <Link href="/shop-single">Hamburger</Link>
                    </li>
                    <li>
                      <Link href="/shop-single">Chicken pizza</Link>
                    </li>
                    <li>
                      <Link href="/shop-single">Vegetable roll</Link>
                    </li>
                    <li>
                      <Link href="/shop-single">Sea fish</Link>
                    </li>
                    <li>
                      <Link href="/shop-single">Fried chicken</Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link href="/shop-single">French fries</Link>
                    </li>
                    <li>
                      <Link href="/shop-single">Onion rings</Link>
                    </li>
                    <li>
                      <Link href="/shop-single">Chicken nuggets</Link>
                    </li>
                    <li>
                      <Link href="/shop-single">Tacos Pizza</Link>
                    </li>
                    <li>
                      <Link href="/shop-single">Hot Dogs</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <div className="widget-head">
                    <h4>contact us</h4>
                  </div>
                </div>
                <div className="footer-content">
                  <p>
                    1403 Washington Ave, New Orlea <br />
                    ns, LA 70130, United States
                  </p>
                  <a href="mailto:info@example.com" className="link">
                    info@example.com
                  </a>
                  <a href="tel:+1718-904-4450" className="number">
                    +1718-904-4450
                  </a>
                  <ul className="info-date">
                    <li>
                      Monday – Friday: <span>8am – 4pm</span>
                    </li>
                    <li>
                      Saturday: <span>8am – 12am</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom style-2">
        <div
          id="scrollUp"
          className="scroll-icon bg-cover"
          style={{ backgroundImage: 'url("/assets/img/shop-food/box.png")' }}
        >
          <i className="fas fa-arrow-alt-up" />
        </div>
        <div className="container">
          <div className="footer-bottom-wrapper d-flex align-items-center justify-content-between">
            <p className="wow fadeInLeft" data-wow-delay=".3s">
              © Copyright <span className="theme-color-3">2024</span>{" "}
              <Link href="/">Foodking </Link>. All Rights Reserved.
            </p>
            <ul className="wow fadeInRight" data-wow-delay=".5s">
              <li>
                <Link href="/contact">
                  <span className="text-effect">
                    <span className="effect-1">Privacy Policy</span>
                    <span className="effect-1">Privacy Policy</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-effect">
                    <span className="effect-1">Terms &amp; Condition</span>
                    <span className="effect-1">Terms &amp; Condition</span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
