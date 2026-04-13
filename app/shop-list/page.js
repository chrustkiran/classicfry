"use client";

import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import ProductSidebar from "@/components/ProductSidebar";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useSearchParams } from "next/navigation";
import useItem from "@/hooks/useItem";
import useDeal from "@/hooks/useDeal";
import DeliveryTimeDisplayModal from "@/components/popup/DeliveryTimeDisplayModal";
import { useAppContext } from "@/context/AppContext";
import SelectStoreDropDown from "@/components/SelectStoreDropDown";
import env from "@/env";

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
                        <span className="badge bg-danger rounded-pill">
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

  const { store } = useAppContext();
  const [storeLoad, setStoreLoaded] = useState(false);
  const [isShowStoreSelect, setShowStoreSelect] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


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
    setStoreLoaded(true);
    if ("" === store || !store) {
      setShowStoreSelect(true);
    } else {
      setShowStoreSelect(false);
      fetchItems(store);
      fetchDeals(store);
    }
  }, [store]);

  useEffect(() => {
    if (deals.length > 0) {
      const reducedDeals =
        deals
          //.filter((deal) => deal.isAvailable)
          .reduce((obj, deal) => {
            if (!obj[deal.dealType]) {
              obj[deal.dealType] = [];
            }
            obj[deal.dealType].push(deal);
            return obj;
          }, {});
      setConsDeals(sortObjectByKey(reducedDeals));

    }
  }, [deals]);

  useEffect(() => {
    setDeliveryTimeModalDisplay(true);
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      const reducedItems =
        items
          //.filter((item) => item.isAvailable)
          .reduce((obj, item) => {
            if (!obj[item.category]) {
              obj[item.category] = [];
            }
            obj[item.category].push(item);
            return obj;
          }, {});
      setConsItems(sortObjectByKey(reducedItems));

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

  const sortItemsByCategoryOrder = (cat1, cat2) => {
    const getKey = (category) => category?.trim().toUpperCase().replaceAll(' ', '_');
    const category1Order = env.CATERGORY_ORDER[getKey(cat1)] ?? 0;
    const category2Order = env.CATERGORY_ORDER[getKey(cat2)] ?? 0;
    return category2Order - category1Order;
  }

  const sortObjectByKey = (items) => {
    return Object.keys(items).sort(sortItemsByCategoryOrder).reduce((obj, key) => {
      obj[key] = items[key];
      return obj;
    }, {});
  };

  if (!storeLoad) {
    return (
      <FoodKingLayout>
        <PageBanner pageName={"Our Menu"} />
        <div className="d-flex justify-content-center align-items-center p-32">
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </FoodKingLayout>
    )
  }

  if (storeLoad && isShowStoreSelect) {
    return (
      <FoodKingLayout>
        <PageBanner pageName={"Our Menu"} />

        <div className="p-32">
          <div className="d-flex flex-column justify-content-center align-items-center alert alert-warning" role="alert">
            <p className="d-flex justify-content-center align-items-center p-4">
              Please select store to view items.
            </p>
            <div className="mb-4">
              <SelectStoreDropDown style={{ position: "relative", alignItems: "center", gap: "8px" }} isShowText={false} iconColor="#000" />
            </div>
          </div>
        </div>
      </FoodKingLayout>
    );
  }

  return (
    <FoodKingLayout>
      <PageBanner pageName={"Our Menu"} />
      {isDeliveryTimeModalDisplay && <DeliveryTimeDisplayModal show={isDeliveryTimeModalDisplay} handleClose={() => setDeliveryTimeModalDisplay(false)} />}
      <section className="food-category-section fix section-padding section-bg">
        <div className="container">
          <div>
            {/* <div className="d-flex justify-content-center">
            Please select store to view items.
          </div> */}
            <SelectStoreDropDown style={{ position: "absolute", alignItems: "center", gap: "8px", marginTop: isMobile ? "0px" : "50px" }} iconColor="#000" />
          </div>
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

                        return (
                          <div key={category}>
                            <h3>{category.replaceAll("_", " ")}</h3>
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
                            <h3 className={env.HIGHLIGHT_DEAL_CATEGORY.includes(category) ? "highlighted-category" : ""}>
                              {category.replaceAll("_", " ")}
                            </h3>
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
