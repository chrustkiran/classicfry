"use client";

import { foodkingUtility } from "@/utility";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const HomeSlider = () => {
  const swiperRef = useRef(null);
  const handleAnimations = () => {
    if (swiperRef.current) {
      const slides = swiperRef.current.querySelectorAll(
        ".hero-slider .swiper-slide"
      );
      foodkingUtility.sliderAnimation(slides);
    }
  };

  useEffect(() => {
    handleAnimations();
    const swiperInstance = swiperRef.current.swiper;
    const onSlideChange = () => {
      handleAnimations();
    };
    swiperInstance.on("slideChange", onSlideChange);
    return () => {
      swiperInstance.off("slideChange", onSlideChange);
    };
  }, []);
  const duration = "1";
  return (
    <section className="hero-section">
      <Swiper
        ref={swiperRef}
        {...sliderProps.hero}
        className="swiper hero-slider"
      >
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div
              className="hero-1 bg-cover"
              style={{
                backgroundImage: 'url("/assets/img/hero/hero-bg.webp")',
                transition: 'background-image 0.3s ease-in-out'
              }}
            >
           
              <div
                className="chilii-shape-3"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="3s"
              >
                {/* <img width="100"  src="/assets/img/hero/chilli-shape-3.png" alt="shape-img" /> */}
              </div>
             
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-xl-5 col-lg-7">
                    <div className="hero-content">
                      <p data-animation="fadeInUp">Crispy, Perfection in Every Bite</p>
                      <h1
                        data-animation="fadeInUp"
                        data-duration={duration}
                        data-delay="0.5s"
                      >
                        Ever tasted 
                        <span> Real </span>
                        Crispy ?
                      </h1>
                      <div className="hero-button">
                        <Link
                          href="/shop-list"
                          className="theme-btn"
                          data-animation="fadeInUp"
                          data-duration={duration}
                          data-delay="0.9s"
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
                  <div className="col-xl-6 col-lg-5 mt-5 mt-lg-0">
                    <div
                      className="chiken-image"
                      data-animation="fadeInUp"
                      data-duration={duration}
                      data-delay="1.4s"
                    >
                      {/* <img src="/assets/img/hero/chiken.png" alt="chiken-img" /> */}
                    </div>
                    <div
                      className="main-top-img"
                      data-animation="fadeInUp"
                      data-duration={duration}
                      data-delay="2.7s"
                    >
                      {/* <img width="500" src="/assets/img/hero/chilli.png" alt="shape-img" /> */}
                      <img src="/assets/img/hero/offer2.png" alt="offer-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
      <div className="swiper-dot text-center pt-5">
        <div className="dot" />
      </div>
    </section>
  );
};
export default HomeSlider;