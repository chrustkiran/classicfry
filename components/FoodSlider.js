"use client";

import { sliderProps } from "@/utility/sliderProps";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryCard from "./CategoryCard";
import { useAppContext } from "@/context/AppContext";

const FoodSlider = () => {
  const { categories, fetchCategories } = useAppContext();
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <section className="food-category-section fix section-padding section-bg">
      <div className="tomato-shape">
        <img src="assets/img/shape/tomato-shape.png" alt="shape-img" />
      </div>
      <div className="burger-shape-2">
        <img src="assets/img/shape/burger-shape-2.png" alt="shape-img" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-9">
            <div className="section-title">
              <span className="wow fadeInUp">crispy, every bite taste</span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Available Categories
              </h2>
            </div>
          </div>
          <div
            className="col-md-5 ps-0 col-3 text-end wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="array-button">
              <button className="array-prev">
                <i className="far fa-long-arrow-left" />
              </button>
              <button className="array-next">
                <i className="far fa-long-arrow-right" />
              </button>
            </div>
          </div>
        </div>
        <Swiper
          {...sliderProps.foodCatagorySlider}
          className="swiper food-catagory-slider"
        >
          <div className="swiper-wrapper">
            {categories.map((category, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <CategoryCard key={index} category={category} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};
export default FoodSlider;
