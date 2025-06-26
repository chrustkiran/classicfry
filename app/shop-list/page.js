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
import DeliveryTimeDisplayModal from "@/components/popup/DeliveryTimeDisplayModal";

const Item = ({ item, key }) => {
  return (
    <div key={key} className="col-xl-12 col-lg-12">
      <div className="shop-list-items">
        <div className="shop-image">
          <img src={item.image} alt="shop-img" />
        </div>
        <div className="shop-content">
          {/* <div className="star pb-4">
            <span>{item.tag.replace("_", " ")}</span>
          </div> */}
          <h3>
            <Link
              href={{
                pathname: "/shop-single",
                query: { item: item.itemId },
              }}
            >
              {item.name}
            </Link>
          </h3>
          <p>{item.description}</p>
          <h5>£{item.basePrice.toFixed(2)}</h5>
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

const Deal = ({ deal, key }) => {
  return (
    <div key={key} className="col-xl-12 col-lg-12">
      <div className="shop-list-items">
        <div className="shop-image">
          <img src={deal.image} alt="shop-img" />
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex">
            <div className="shop-content col-6">
              {/* <div className="star pb-4">
              <span>{deal.tag.replace("_", " ")}</span>
            </div> */}
              <h3>
                <Link
                  href={{
                    pathname: "/shop-single",
                    query: { deal: deal.dealId },
                  }}
                >
                  {deal.name}
                </Link>
              </h3>
              <p>{deal.description}</p>
              <h5>£{deal.basePrice.toFixed(2)}</h5>
            </div>
            <div className="col-6">
              <div className="card shadow-sm">
                <div className="card-header bg-warning text-white">
                  <h5 className="mb-0">Deal Items</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    {deal?.dealItemViews?.map((dealItem, index) => (
                      <li
                        key={index}
                        className="list-group-item d-flex justify-content-between align-items-center"
                      >
                        {dealItem.name}
                        <span class="badge bg-danger rounded-pill">
                          {dealItem.quantity}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="shop-list-btn mt-2">
              <Link
                href={{
                  pathname: "/shop-single",
                  query: { deal: deal.dealId },
                }}
                className="theme-btn"
              >
                <span className="button-content-wrapper d-flex align-items-center">
                  <span className="button-icon">
                    <i className="flaticon-chicken" />
                  </span>
                  <span className="button-text">Choose Deal</span>
                </span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const ShopPage = () => {
  const { items, fetchItems, itemLoading } = useItem();
  const { deals, fetchDeals, dealLoading } = useDeal();

  const [consItems, setConsItems] = useState({});
  const [consDeals, setConsDeals] = useState({});
  const [priceFilter, setPriceFilter] = useState([0, 500]);
  const [selectedCategory, selectCategory] = useState(undefined);

  const [activeTab, setActiveTab] = useState("items");
  const searchParams = useSearchParams();
  const [isDeliveryTimeModalDisplay, setDeliveryTimeModalDisplay] = useState(false);

  useEffect(() => {
    if (searchParams.get("category")) {
      selectCategory(searchParams.get("category"));
      setActiveTab("items");
    } else if (searchParams.get("dealType")) {
      selectCategory(searchParams.get("dealType"));
      setActiveTab("deals");
    } else {
      setActiveTab("items");
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
          //.filter((deal) => deal.isAvailable)
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
    setDeliveryTimeModalDisplay(true);
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      setConsItems(
        items
          //.filter((item) => item.isAvailable)
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
      {isDeliveryTimeModalDisplay && <DeliveryTimeDisplayModal show={isDeliveryTimeModalDisplay} handleClose={() => setDeliveryTimeModalDisplay(false)} />}
      <section className="food-category-section fix section-padding section-bg">
        <div className="container">
          <div className="mb-5">
            <ul className="nav nav-tabs d-flex  order-tab gap-3">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "items" ? "active" : ""
                    }`}
                  onClick={() => handleTabChange("items")}
                >
                  <h3>Items</h3>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "deals" ? "active" : ""
                    }`}
                  onClick={() => handleTabChange("deals")}
                >
                  <h3>Deals</h3>
                </button>
              </li>
            </ul>
          </div>
          {activeTab == "items" &&
            (Object.keys(consItems).length > 0 ? (
              <div className="row g-5">
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

                        const sortedFilteredItems = filteredItems.sort(
                          (i1, i2) => {
                            if (
                              i1.category?.toLowerCase() === "pizza" &&
                              i2.category?.toLowerCase() === "pizza"
                            ) {
                              if (i1.pizzaConfig?.isCustomPizza) return -1;
                              if (i2.pizzaConfig?.isCustomPizza) return 1;
                              return 0;
                            }
                            return 0;
                          }
                        );

                        return (
                          <div key={category}>
                            <h3>{category.replaceAll("_", " ")}</h3>
                            <div className="row d-flex">
                              {sortedFilteredItems.length > 0 ? (
                                sortedFilteredItems.map((item) => (
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
              </div>
            ) : (
              <p className="d-flex justify-content-center align-items-center">
                {itemLoading ? (
                  <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "No Items"
                )}
              </p>
            ))}

          {activeTab == "deals" &&
            (Object.keys(consDeals).length > 0 ? (
              <div className="row g-5">
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
                            <h3>{category.replaceAll("_", " ")}</h3>
                            <div className="row d-flex">
                              {filteredItems.length > 0 ? (
                                filteredItems.map((item, index) => (
                                  <Deal key={index} deal={item} />
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
              </div>
            ) : (
              <p className="d-flex justify-content-center align-items-center">
                {dealLoading ? (
                  <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "No Deals"
                )}
              </p>
            ))}
        </div>
      </section>
      <Cta />
    </FoodKingLayout>
  );
};
export default ShopPage;
