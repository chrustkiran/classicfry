"use client";
import { useAppContext } from "@/context/AppContext";
import env from "@/env";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

const Header = ({ header }) => {
  switch (header) {
    case 1:
      return <Header1 />;
    default:
      return <Header1 />;
  }
};
export default Header;

const Menus = () => {
  return (
    <ul>
      <li className="has-dropdown">
        <Link href="/shop-list">Menu</Link>
      </li>
      <li className="has-dropdown active">
        <Link href="/orders">Orders</Link>
      </li>
    </ul>
  );
};

const Header1 = () => {
  const [toggle, setToggle] = useState(false);
  const { cart, getTotalCartItem, getTotalPrice } = useAppContext();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Fragment>
      <header className="section-bg">
        <div id="header-sticky" className="header-1">
          <div className="container">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="logo">
                  <Link href="/" className="header-logo">
                    <img style={{width: '150px'}} src="/assets/img/logo/logo.png" alt="logo-img" />
                    {/* <h3>ClassicFry</h3> */}
                  </Link>
                </div>
                <div className="heder-left">
                  <div className="mean__menu-wrapper d-none d-lg-block">
                    <div className="main-menu"></div>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <div className="main-menu mean__menu-wrapper d-none d-lg-block">
                    <nav id="mobile-menu">
                      <Menus />
                    </nav>
                    {/* for wp */}
                  </div>
                  <div className="menu-cart">
                    <div className="cart-box">
                      <ul>
                        {cart.map((item, index) => (
                          <li key={index}>
                            <img src={item.image} alt="image" />
                            <div className="cart-product">
                              <div>
                                {item.size !== env.DEFAULT && (
                                  <span
                                    style={{
                                      fontSize: "10px",
                                      width: "20px",
                                    }}
                                    className="badge bg-warning"
                                  >
                                    {item.size.substring(0, 1)}
                                  </span>
                                )}
                                {item.name}
                              </div>
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                  <span>
                                    {item.quantity}{" "}
                                    <small className="fw-light fs-6">x</small>{" "}
                                    &nbsp;£{item.price}
                                  </span>
                                </div>
                                <span className="fw-bold">
                                  £{(item.quantity * item.price).toFixed(2)}
                                </span>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <div className="shopping-items d-flex align-items-center justify-content-between">
                        <span>Total : £{getTotalPrice().toFixed(2)}</span>
                      </div>
                      <div className="cart-button d-flex flex-row-reverse mb-4">
                        <Link
                          style={{
                            fontSize: '12px',
                            lineHeight: '1',
                            padding: '10px 28px',
                            textAlign: 'center',
                            borderRadius: '6px',
                            letterSpacing: '0.5px'
                          }}
                          href="/shop-cart"
                          className="theme-btn"
                        >
                          View Cart
                        </Link>
                      </div>
                    </div>
                    <div className="cart-icon">
                      <Link href={"/shop-cart"}>
                        <i className="far fa-lg fa-drumstick"></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                          {getTotalCartItem()}
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="header-button">
                    <Link href="/contact" className="theme-btn bg-red-2">
                      contact us
                    </Link>
                  </div>
                  <div className="header__hamburger d-xl-block my-auto">
                    <div className="sidebar__toggle">
                      <div
                        className="header-bar"
                        onClick={() => setToggle(true)}
                      >
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="search-wrap">
        <div className="search-inner">
          <i className="fas fa-times search-close" id="search-close" />
          <div className="search-cell">
            <form method="get">
              <div className="search-field-holder">
                <input
                  type="search"
                  className="main-search-input"
                  placeholder="Search..."
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Sidebar toggle={toggle} setToggle={setToggle} />
    </Fragment>
  );
};

const Sidebar = ({ toggle, setToggle }) => {
  return (
    <Fragment>
      <div className="fix-area">
        <div className={`offcanvas__info ${toggle ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    {/* <img src="assets/img/logo/logo.svg" alt="logo-img" /> */}
                    <h3>Classic Fry</h3>
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button onClick={() => setToggle(false)}>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>

              <div className="offcanvas-image img-popup">
                <img
                  width={"100%"}
                  src="/assets/img/header/fry.png"
                  alt="gallery-img"
                />
              </div>

              <MobileMenu />
              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        100 Chessington Road West Ewell , KT19 9UR
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:07477427927">
                        <span className="mailto:contact@classicfry.co.uk">
                          contact@classicfry.co.uk
                        </span>
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        Mod-friday, 09am -05pm
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+11002345909">+11002345909</a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <Link href="/shop-single" className="theme-btn">
                    <span className="button-content-wrapper d-flex align-items-center justify-content-center">
                      <span className="button-icon">
                        <i className="flaticon-delivery" />
                      </span>
                      <span className="button-text">order now</span>
                    </span>
                  </Link>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`offcanvas__overlay ${toggle ? "overlay-open" : ""}`}
        onClick={() => setToggle(false)}
      />
    </Fragment>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");

  return (
    <div className="mobile-menu fix mb-3 mean-container d-block d-lg-none mb-5">
      <div className="mean-bar">
        <a href="#nav" className="meanmenu-reveal">
          <span>
            <span>
              <span />
            </span>
          </span>
        </a>
        <nav className="mean-nav">
          <ul>
            <li className="has-dropdown active">
              <Link href="/shop-list">Menu</Link>
            </li>
            <li className="mean-last">
              <Link href="/orders">Orders</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
