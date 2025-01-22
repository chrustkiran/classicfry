"use client";
import Link from "next/link";
import { Fragment, useState } from "react";

const Header = ({ header }) => {
  switch (header) {
    case 1:
      return <Header1 />;
    case 2:
      return <Header2 />;

    default:
      return <Header1 />;
  }
};
export default Header;

const Menus = () => {
  return (
    <ul>
      <li className="has-dropdown active">
        <Link href="/">
          Home Page
          <i className="fas fa-angle-down" />
        </Link>
        <ul className="submenu has-homemenu">
          <li className="border-none">
            <div className="row g-4">
              <div className="col-lg-4 homemenu">
                <div className="homemenu-thumb">
                  <img src="assets/img/header/home-1.jpg" alt="img" />
                  <div className="demo-button">
                    <Link href="/" className="theme-btn">
                      View Demo
                    </Link>
                  </div>
                </div>
                <div className="homemenu-content text-center">
                  <h4 className="homemenu-title">
                    <Link href="/">Home 01</Link>
                  </h4>
                </div>
              </div>
              <div className="col-lg-4  homemenu">
                <div className="homemenu-thumb mb-15">
                  <img src="assets/img/header/home-2.jpg" alt="img" />
                  <div className="demo-button">
                    <Link href="index-2" className="theme-btn">
                      View Demo
                    </Link>
                  </div>
                </div>
                <div className="homemenu-content text-center">
                  <h4 className="homemenu-title">
                    <Link href="index-2">Home 02</Link>
                  </h4>
                </div>
              </div>
              <div className="col-lg-4 homemenu">
                <div className="homemenu-thumb mb-15">
                  <img src="assets/img/header/home-3.jpg" alt="img" />
                  <div className="demo-button">
                    <Link href="index-3" className="theme-btn">
                      View Demo
                    </Link>
                  </div>
                </div>
                <div className="homemenu-content text-center">
                  <h4 className="homemenu-title">
                    <Link href="index-3">Home 03</Link>
                  </h4>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </li>
      <li className="has-dropdown">
        <Link href="shop">
          Menu
          <i className="fas fa-angle-down" />
        </Link>
        <ul className="submenu">
          <li>
            <Link href="shop">Shop Grid</Link>
          </li>
          <li>
            <Link href="shop-list">Shop List</Link>
          </li>
          <li>
            <Link href="shop-left-sidebar">Shop Left SideBar</Link>
          </li>
          <li>
            <Link href="shop-right-sidebar">Shop Right SideBar</Link>
          </li>
          <li>
            <Link href="shop-single">Shop Single</Link>
          </li>
          <li>
            <Link href="shop-cart">Shop Cart</Link>
          </li>
          <li>
            <Link href="checkout">checkout</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="news">
          Login
        </Link>
      </li>
      {/* <li className="has-dropdown">
        <Link href="news">
          Pages
          <i className="fas fa-angle-down" />
        </Link>
        <ul className="submenu">
          <li>
            <Link href="about">About Us</Link>
          </li>
          <li className="has-dropdown">
            <Link href="team">
              Chef Page
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu">
              <li>
                <Link href="team">Chef</Link>
              </li>
              <li>
                <Link href="team-details">Chef Details</Link>
              </li>
            </ul>
          </li>
          <li className="has-dropdown">
            <Link href="food-menu">
              Food Menu
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu">
              <li>
                <Link href="food-menu">Food Menu 01</Link>
              </li>
              <li>
                <Link href="food-menu-2">Food Menu 02</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="gallery">Gallery</Link>
          </li>
          <li>
            <Link href="testimonial">testimonial</Link>
          </li>
          <li>
            <Link href="reservation">Reservation</Link>
          </li>
          <li>
            <Link href="faq">Faq's</Link>
          </li>
          <li>
            <Link href="404">404 Page</Link>
          </li>
        </ul>
      </li> */}
      {/* <li>
        <Link href="contact">Contact</Link>
      </li> */}
    </ul>
  );
};

const Header1 = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <header className="section-bg">
        {/* <div className="header-top">
          <div className="container">
            <div className="header-top-wrapper">
              <ul>
                <li>
                  <span>100%</span> Secure delivery without contacting the
                  courier
                </li>
                <li>
                  <i className="fas fa-truck" />
                  Track Your Order
                </li>
              </ul>
              <div className="top-right">
                <div className="search-wrp">
                  <button>
                    <i className="far fa-search" />
                  </button>
                  <input placeholder="Search" aria-label="Search" />
                </div>
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
        </div> */}
        <div id="header-sticky" className="header-1">
          <div className="container">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="logo">
                  <Link href="/" className="header-logo">
                    {/* <img src="assets/img/logo/logo.svg" alt="logo-img" /> */}
                    <h3>ClassicFry</h3>
                  </Link>
                </div>
                <div className="header-left">
                  <div className="mean__menu-wrapper d-none d-lg-block">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        <Menus />
                      </nav>
                      {/* for wp */}
                    </div>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <div className="menu-cart">
                    <div className="cart-box">
                      <ul>
                        <li>
                          <img src="assets/img/shop-food/s2.png" alt="image" />
                          <div className="cart-product">
                            <a href="#0">grilled chiken</a>
                            <span>168$</span>
                          </div>
                        </li>
                      </ul>
                      <ul>
                        <li className="border-none">
                          <img src="assets/img/shop-food/s3.png" alt="image" />
                          <div className="cart-product">
                            <a href="#0">grilled chiken</a>
                            <span>168$</span>
                          </div>
                        </li>
                      </ul>
                      <div className="shopping-items d-flex align-items-center justify-content-between">
                        <span>Shopping : $20.00</span>
                        <span>Total : $168.00</span>
                      </div>
                      <div className="cart-button d-flex justify-content-between mb-4">
                        <Link href="shop-cart" className="theme-btn">
                          View Cart
                        </Link>
                        <Link href="checkout" className="theme-btn bg-red-2">
                          Checkout
                        </Link>
                      </div>
                    </div>
                    <Link href="shop-cart" className="cart-icon">
                      <i className="far fa-shopping-basket" />
                    </Link>
                  </div>
                  <div className="header-button">
                    <Link href="contact" className="theme-btn bg-red-2">
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

const Header2 = () => {
  return (
    <Fragment>
      <header>
        <div id="header-sticky" className="header-2">
          <div className="container-fluid">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="header-left">
                  <div className="logo">
                    <Link href="/" className="header-logo">
                      <img src="assets/img/logo/logo-3.svg" alt="logo-img" />
                    </Link>
                  </div>
                  <div className="logo-2">
                    <Link href="/" className="header-logo">
                      <img src="assets/img/logo/logo.svg" alt="logo-img" />
                    </Link>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <div className="mean__menu-wrapper d-none d-lg-block">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        <Menus />
                      </nav>
                      {/* for wp */}
                    </div>
                  </div>
                  <a href="#0" className="search-trigger search-icon">
                    <i className="fal fa-search" />
                  </a>
                  <div className="menu-cart">
                    <div className="cart-box">
                      <ul>
                        <li>
                          <img src="assets/img/shop-food/s2.png" alt="image" />
                          <div className="cart-product">
                            <a href="#0">grilled chiken</a>
                            <span>168$</span>
                          </div>
                        </li>
                      </ul>
                      <ul>
                        <li className="border-none">
                          <img src="assets/img/shop-food/s3.png" alt="image" />
                          <div className="cart-product">
                            <a href="#0">grilled chiken</a>
                            <span>168$</span>
                          </div>
                        </li>
                      </ul>
                      <div className="shopping-items d-flex align-items-center justify-content-between">
                        <span>Shopping : $20.00</span>
                        <span>Total : $168.00</span>
                      </div>
                      <div className="cart-button d-flex justify-content-between mb-4">
                        <Link href="shop-cart" className="theme-btn">
                          View Cart
                        </Link>
                        <Link href="checkout" className="theme-btn bg-red-2">
                          Checkout
                        </Link>
                      </div>
                    </div>
                    <Link href="shop-cart" className="cart-icon">
                      <i className="far fa-shopping-cart" />
                    </Link>
                  </div>
                  <div className="header-button">
                    <a
                      hLinkef="shop-single"
                      className="theme-btn bg-transparent"
                    >
                      <span className="button-content-wrapper d-flex align-items-center">
                        <span className="button-icon">
                          <i className="flaticon-delivery" />
                        </span>
                        <span className="button-text">order now</span>
                      </span>
                    </a>
                  </div>
                  <div className="header__hamburger d-xl-block my-auto">
                    <div className="sidebar__toggle">
                      <img
                        src="assets/img/logo/bar.svg"
                        alt="bar-icon"
                        className="bar-1"
                      />
                      <img
                        src="assets/img/logo/bar-2.svg"
                        alt="bar-icon"
                        className="bar-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar />
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
                    <img src="assets/img/logo/logo.svg" alt="logo-img" />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button onClick={() => setToggle(false)}>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <p className="text d-none d-lg-block">
                This involves interactions between a business and its customers.
                It's about meeting customers' needs and resolving their
                problems. Effective customer service is crucial.
              </p>
              <div className="offcanvas-gallery-area d-none d-lg-block">
                <div className="offcanvas-gallery-items">
                  <a
                    href="assets/img/header/01.jpg"
                    className="offcanvas-image img-popup"
                  >
                    <img src="assets/img/header/01.jpg" alt="gallery-img" />
                  </a>
                  <a
                    href="assets/img/header/02.jpg"
                    className="offcanvas-image img-popup"
                  >
                    <img src="assets/img/header/02.jpg" alt="gallery-img" />
                  </a>
                  <a
                    href="assets/img/header/03.jpg"
                    className="offcanvas-image img-popup"
                  >
                    <img src="assets/img/header/03.jpg" alt="gallery-img" />
                  </a>
                </div>
                <div className="offcanvas-gallery-items">
                  <a
                    href="assets/img/header/04.jpg"
                    className="offcanvas-image img-popup"
                  >
                    <img src="assets/img/header/04.jpg" alt="gallery-img" />
                  </a>
                  <a
                    href="assets/img/header/05.jpg"
                    className="offcanvas-image img-popup"
                  >
                    <img src="assets/img/header/05.jpg" alt="gallery-img" />
                  </a>
                  <a
                    href="assets/img/header/06.jpg"
                    className="offcanvas-image img-popup"
                  >
                    <img src="assets/img/header/06.jpg" alt="gallery-img" />
                  </a>
                </div>
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
                        Main Street, Melbourne, Australia
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+013-003-003-9993">
                        <span className="mailto:info@enofik.com">
                          info@foodking.com
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
                  <Link href="shop-single" className="theme-btn">
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
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
      setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };
  return (
    <div className="mobile-menu fix mb-3 mean-container d-block d-lg-none">
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
              <Link href="/">
                Home Page
                <i className="fas fa-angle-down" />
              </Link>
              <ul className="submenu has-homemenu" style={activeLi("home")}>
                <li className="border-none">
                  <div className="row g-4">
                    <div className="col-lg-4 homemenu">
                      <div className="homemenu-thumb">
                        <img src="assets/img/header/home-1.jpg" alt="img" />
                        <div className="demo-button">
                          <Link href="/" className="theme-btn">
                            View Demo
                          </Link>
                        </div>
                      </div>
                      <div className="homemenu-content text-center">
                        <h4 className="homemenu-title">
                          <Link href="/">Home 01</Link>
                        </h4>
                      </div>
                    </div>
                    <div className="col-lg-4  homemenu">
                      <div className="homemenu-thumb mb-15">
                        <img src="assets/img/header/home-2.jpg" alt="img" />
                        <div className="demo-button">
                          <Link href="/index-2" className="theme-btn">
                            View Demo
                          </Link>
                        </div>
                      </div>
                      <div className="homemenu-content text-center">
                        <h4 className="homemenu-title">
                          <Link href="/index-2">Home 02</Link>
                        </h4>
                      </div>
                    </div>
                    <div className="col-lg-4 homemenu">
                      <div className="homemenu-thumb mb-15">
                        <img src="assets/img/header/home-3.jpg" alt="img" />
                        <div className="demo-button">
                          <Link href="/index-3" className="theme-btn">
                            View Demo
                          </Link>
                        </div>
                      </div>
                      <div className="homemenu-content text-center">
                        <h4 className="homemenu-title">
                          <Link href="/index-3">Home 03</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <a
                className="mean-expand"
                href="#"
                onClick={() => activeMenuSet("home")}
              >
                <i className="far fa-plus" />
              </a>
            </li>
            <li className="has-dropdown">
              <Link href="/shop">
                Shop
                <i className="fas fa-angle-down" />
              </Link>
              <ul className="submenu" style={activeLi("shop")}>
                <li>
                  <Link href="/shop">Shop Grid</Link>
                </li>
                <li>
                  <Link href="/shop-list">Shop List</Link>
                </li>
                <li>
                  <Link href="/shop-left-sidebar">Shop Left SideBar</Link>
                </li>
                <li>
                  <Link href="/shop-right-sidebar">Shop Right SideBar</Link>
                </li>
                <li>
                  <Link href="/shop-single">Shop Single</Link>
                </li>
                <li>
                  <Link href="/shop-cart">Shop Cart</Link>
                </li>
                <li>
                  <Link href="/checkout">checkout</Link>
                </li>
              </ul>
              <a
                className="mean-expand"
                href="#"
                onClick={() => activeMenuSet("shop")}
              >
                <i className="far fa-plus" />
              </a>
            </li>
            <li>
              <Link href="/news">
                Blog
                <i className="fas fa-angle-down" />
              </Link>
              <ul className="submenu" style={activeLi("news")}>
                <li>
                  <Link href="/news">Blog</Link>
                </li>
                <li>
                  <Link href="/news-details">Blog Details</Link>
                </li>
              </ul>
              <a
                className="mean-expand"
                href="#"
                onClick={() => activeMenuSet("news")}
              >
                <i className="far fa-plus" />
              </a>
            </li>
            <li className="has-dropdown">
              <Link href="/news">
                Pages
                <i className="fas fa-angle-down" />
              </Link>
              <ul className="submenu" style={activeLi("pages")}>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li className="has-dropdown">
                  <Link href="/team">
                    Chef Page
                    <i className="fas fa-angle-down" />
                  </Link>
                  <ul className="submenu" style={multiMenuActiveLi("team")}>
                    <li>
                      <Link href="/team">Chef</Link>
                    </li>
                    <li>
                      <Link href="/team-details">Chef Details</Link>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    onClick={() => multiMenuSet("team")}
                  >
                    <i className="far fa-plus" />
                  </a>
                </li>
                <li className="has-dropdown">
                  <Link href="/food-menu">
                    Food Menu
                    <i className="fas fa-angle-down" />
                  </Link>
                  <ul
                    className="submenu"
                    style={multiMenuActiveLi("food-menu")}
                  >
                    <li>
                      <Link href="/food-menu">Food Menu 01</Link>
                    </li>
                    <li>
                      <Link href="/food-menu-2">Food Menu 02</Link>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    onClick={() => multiMenuSet("food-menu")}
                  >
                    <i className="far fa-plus" />
                  </a>
                </li>
                <li>
                  <Link href="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link href="/testimonial">testimonial</Link>
                </li>
                <li>
                  <Link href="/reservation">Reservation</Link>
                </li>
                <li>
                  <Link href="/faq">Faq's</Link>
                </li>
                <li>
                  <Link href="/404">404 Page</Link>
                </li>
              </ul>
              <a
                className="mean-expand"
                href="#"
                onClick={() => activeMenuSet("pages")}
              >
                <i className="far fa-plus" />
              </a>
            </li>
            <li className="mean-last">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
