"use client";

import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import ProductSidebar from "@/components/ProductSidebar";
import ProductTopBar from "@/components/ProductTopBar";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import useItem from "@/hooks/useItem";
import Link from "next/link";
import { useEffect, useState } from "react";

const Item = ({ item }) => {
  return (
    <div className="col-xl-12 col-lg-12">
      <div className="shop-list-items">
        <div className="shop-image">
          <img src={item.image} alt="shop-img" />
        </div>
        <div className="shop-content">
          <div className="star pb-4">
            <span>{item.tag}</span>
            {/*<Link href="#">
              {" "}
              <i className="fas fa-star" />
            </Link>
            <Link href="#">
              <i className="fas fa-star" />
            </Link>
            <Link href="#">
              {" "}
              <i className="fas fa-star" />
            </Link>
            <Link href="#">
              <i className="fas fa-star" />
            </Link>
            <Link href="#" className="color-bg">
              {" "}
              <i className="fas fa-star" />
            </Link>*/}
          </div>
          <h3>
            <Link href="shop-single">{item.name}</Link>
          </h3>
          <p>{item.description}</p>
          <h5>£{item.basePrice}</h5>
          <div className="shop-list-btn">
            <Link href="shop-single" className="theme-btn">
              <span className="button-content-wrapper d-flex align-items-center">
                <span className="button-icon">
                  <i className="flaticon-chicken" />
                </span>
                <span className="button-text">Choose Item</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
const page = () => {
  const { items, fetchItems } = useItem();

  const [consItems, setConsItems] = useState({});
  const [priceFilter, setPriceFilter] = useState([0, 100000]);
  const [selectedCategory, selectCategory] = useState(undefined);

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      setConsItems(
        items
          .filter((item) => item.isAvailable)
          .reduce((obj, item) => {
            const basePrice = item.portionPrices
              .map((price) => price.price)
              .toSorted()[0];
            if (!obj[item.category]) {
              obj[item.category] = [];
            }
            obj[item.category].push({ ...item, basePrice: basePrice });
            return obj;
          }, {})
      );
    }
  }, [items]);

  const addFilter = (priceFilter, category) => {
    setPriceFilter(priceFilter);
    selectCategory(category);
  };

  return (
    <FoodKingLayout>
      <PageBanner pageName={"Our Menu"} />
      <section className="food-category-section fix section-padding section-bg">
        <div className="container">
          <div className="row g-5">
            <ProductSidebar item={consItems} filter={addFilter} />
            <div className="col-xl-9 col-lg-8 order-1 order-md-2">
              {/* <ProductTopBar mb0={true} /> */}
              <div className="row gap-3">
                {Object.keys(consItems)
                  .filter((category) =>
                    selectedCategory ? selectedCategory === category : true
                  )
                  .map((category) => {
                    const filteredItems = consItems[category].filter(
                      (item) =>
                        item.basePrice > priceFilter[0] &&
                        item.basePrice < priceFilter[1]
                    );

                    return (
                      <div key={category}>
                        <h3>{category}</h3>
                        <div className="row d-flex">
                          {filteredItems.length > 0 ? (
                            filteredItems.map((item) => (
                              <Item key={item.id} item={item} />
                            ))
                          ) : (
                            <h4 className="mt-3">No Items</h4>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
              {/* <div className="page-nav-wrap mt-5 text-center">
                <ul>
                  <li>
                    <a className="page-numbers" href="#">
                      <i className="fal fa-long-arrow-left" />
                    </a>
                  </li>
                  <li>
                    <a className="page-numbers" href="#">
                      1
                    </a>
                  </li>
                  <li>
                    <a className="page-numbers" href="#">
                      2
                    </a>
                  </li>
                  <li>
                    <a className="page-numbers" href="#">
                      3
                    </a>
                  </li>
                  <li>
                    <a className="page-numbers" href="#">
                      4
                    </a>
                  </li>
                  <li>
                    <a className="page-numbers" href="#">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </li>
                </ul>
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
