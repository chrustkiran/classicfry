"use client";

import { useEffect } from "react";

const { default: useItem } = require("@/hooks/useItem");
const { default: Link } = require("next/link");

const FoodItemContainer = () => {
  const { items, fetchItems } = useItem();

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="row">
      {items.slice(0, 9).map((item, index) => (
        <FoodItem key={index} fooditem={item}></FoodItem>
      ))}
    </div>
  );
};

const FoodItem = ({ fooditem }) => {
  return (
    <div
      className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
      data-wow-delay=".3s"
    >
      <div className="catagory-product-card-2 text-center">
        <div className="catagory-product-image">
          <img
            style={{
              width: "220px", // Set a fixed width
              height: "200px", // Set a fixed height
              objectFit: "cover", // Ensures the image covers the area without distortion
              borderRadius: "4px", // Optional: Add rounded corners
            }}
            src={fooditem.image}
            alt="product-img"
          />
        </div>
        <div className="catagory-product-content">
          <div className="info-price d-flex align-items-center justify-content-center">
            <h6>£{fooditem.basePrice}</h6>
          </div>
          <h4>
            <Link href="/shop-single">{fooditem.name}</Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default FoodItemContainer;
