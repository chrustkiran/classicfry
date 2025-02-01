"use client";

import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import ProductSidebar from "@/components/ProductSidebar";
import ProductTopBar from "@/components/ProductTopBar";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useSearchParams } from "next/navigation";
import useItem from "@/hooks/useItem";
import useDeal from "@/hooks/useDeal";

const Item = ({ item, key }) => {
  return (
    <div key={key} className="col-xl-12 col-lg-12">
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
            <Link
              href={{
                pathname: "/shop-single",
                query: { item: item.itemId },
              }}
              className="theme-btn"
            >
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

const ShopPage = () => {
  const { items, fetchItems } = useItem();
  const {deals, fetchDeals} = useDeal();

  const [consItems, setConsItems] = useState({});
  const [consDeals, setConsDeals] = useState({});
  const [priceFilter, setPriceFilter] = useState([0, 500]);
  const [selectedCategory, selectCategory] = useState(undefined);

  const [activeTab, setActiveTab] = useState("active");
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("category")) {
      selectCategory(searchParams.get("category"));
      setActiveTab("items");
    } else if (searchParams.get("dealType")) {
      selectCategory(searchParams.get("dealType"));
      setActiveTab("deals");
    }
  }, [searchParams]);

  useEffect(() => {
    fetchItems();
    fetchDeals();
  }, []);

  useEffect(() => {
    if (deals.length > 0) {
      setConsDeals(
        deals
          .filter((deal) => deal.isAvailable)
          .reduce((obj, deal) => {
            if (!obj[deal.dealType]) {
              obj[deal.dealType] = [];
            }
            obj[deal.dealType].push(deal);
            return obj;
          }, {})
      );
    }
  }, [deals]);

  useEffect(() => {
    if (items.length > 0) {
      setConsItems(
        items
          .filter((item) => item.isAvailable)
          .reduce((obj, item) => {
            if (!obj[item.category]) {
              obj[item.category] = [];
            }
            obj[item.category].push(item);
            return obj;
          }, {})
      );
    }
  }, [items]);

  const addFilter = (priceFilter, category) => {
    setPriceFilter(priceFilter);
    selectCategory(category);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    selectCategory(undefined);
  };

  return (
    <FoodKingLayout>
      <PageBanner pageName={"Our Menu"} />
      <section className="food-category-section fix section-padding section-bg">
        <div className="container">
          <div className="mb-5">
            <ul className="nav nav-tabs d-flex  order-tab gap-3">
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "items" ? "active" : ""
                  }`}
                  onClick={() => handleTabChange("items")}
                >
                  <h3>Items</h3>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "deals" ? "active" : ""
                  }`}
                  onClick={() => handleTabChange("deals")}
                >
                   <h3>Deals</h3>
                </button>
              </li>
            </ul>
          </div>
          {activeTab == "items" && <div className="row g-5">
            <ProductSidebar
              activeTab={activeTab}
              item={consItems}
              filter={addFilter}
              selectedCategoryProp={selectedCategory}
              priceValue={priceFilter}
            />
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
                            <h4 className="mt-3 fw-normal">No Items</h4>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>}

          {activeTab == "deals" && <div className="row g-5">
            <ProductSidebar
              activeTab={activeTab}
              item={consDeals}
              filter={addFilter}
              selectedCategoryProp={selectedCategory}
              priceValue={priceFilter}
            />
            <div className="col-xl-9 col-lg-8 order-1 order-md-2">
              {/* <ProductTopBar mb0={true} /> */}
              <div className="row gap-3">
                {Object.keys(consDeals)
                  .filter((category) =>
                    selectedCategory ? selectedCategory === category : true
                  )
                  .map((category, index) => {
                    const filteredItems = consDeals[category].filter(
                      (item) =>
                        item.basePrice > priceFilter[0] &&
                        item.basePrice < priceFilter[1]
                    );

                    return (
                      <div key={index}>
                        <h3>{category}</h3>
                        <div className="row d-flex">
                          {filteredItems.length > 0 ? (
                            filteredItems.map((item, index) => (
                              <Item key={index} item={item} />
                            ))
                          ) : (
                            <h4 className="mt-3 fw-normal">No Items</h4>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>}
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
      </section>
      <Cta />
    </FoodKingLayout>
  );
};
export default ShopPage;
