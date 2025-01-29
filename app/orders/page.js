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

const OrderPage = () => {
  const { items, fetchItems } = useItem();

  const [consItems, setConsItems] = useState({});
  const [priceFilter, setPriceFilter] = useState([0, 500]);
  const [selectedCategory, selectCategory] = useState(undefined);

  const searchParams = useSearchParams();

  useEffect(() => {
    selectCategory(searchParams.get("category"));
  }, [searchParams]);

  useEffect(() => {
    fetchItems();
  }, []);

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

  const [activeTab, setActiveTab] = useState("active");
  const [expandedOrder, setExpandedOrder] = useState(null);

  const toggleOrder = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  const orders = {
    active: [
      {
        id: 1,
        date: "2025-01-30",
        time: "10:30 AM",
        totalPayment: "$50.00",
        status: "Processing",
        items: [
          {
            name: "Chicken Burger",
            quantity: 2,
            unitPrice: "$10.00",
            image: "https://via.placeholder.com/50",
          },
          {
            name: "Fries",
            quantity: 1,
            unitPrice: "$5.00",
            image: "https://via.placeholder.com/50",
          },
        ],
      },
    ],
    completed: [
      {
        id: 2,
        date: "2025-01-29",
        time: "9:15 AM",
        totalPayment: "$25.00",
        status: "Delivered",
        items: [
          {
            name: "Coke",
            quantity: 1,
            unitPrice: "$3.00",
            image: "https://via.placeholder.com/50",
          },
          {
            name: "Pizza",
            quantity: 1,
            unitPrice: "$20.00",
            image: "https://via.placeholder.com/50",
          },
        ],
      },
    ],
  };

  return (
    <FoodKingLayout>
      <PageBanner pageName={"Our Menu"} />
      <section className="food-category-section fix section-padding section-bg">
        <div className="container">
          <div className="row g-5">
           
              {/* <ProductTopBar mb0={true} /> */}
              <div className="row gap-3"></div>

              <div className="container">
                {/* Tabs */}
                <ul className="nav nav-tabs d-flex flex-wrap">
                  <li className="nav-item">
                    <button
                      className={`nav-link ${
                        activeTab === "active" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("active")}
                    >
                      Active Orders
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${
                        activeTab === "completed" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("completed")}
                    >
                      Completed Orders
                    </button>
                  </li>
                </ul>

                {/* Order List */}
                <div className="mt-3">
                  {orders[activeTab].length === 0 ? (
                    <p className="text-muted text-center">
                      No orders available.
                    </p>
                  ) : (
                    orders[activeTab].map((order) => (
                      <div key={order.id} className="card mb-2">
                        <div className="card-header d-flex justify-content-between align-items-center">
                          <div>
                            <strong>Date:</strong> {order.date} |{" "}
                            <strong>Time:</strong> {order.time} |{" "}
                            <strong>Total:</strong> {order.totalPayment}
                          </div>
                          <button
                            className="btn btn-primary btn-sm"
                            onClick={() => toggleOrder(order.id)}
                          >
                            {expandedOrder === order.id
                              ? "Hide Details"
                              : "View Details"}
                          </button>
                        </div>

                        {/* Expandable Order Details */}
                        <div
                          className={`collapse ${
                            expandedOrder === order.id ? "show" : ""
                          }`}
                        >
                          <div className="card-body">
                            <h6>Order Items</h6>
                            <ul className="list-group">
                              {order.items.map((item, index) => (
                                <li
                                  key={index}
                                  className="list-group-item d-flex align-items-center"
                                >
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    className="me-3"
                                    width="50"
                                    height="50"
                                  />
                                  <div>
                                    <strong>{item.name}</strong> (
                                    {item.quantity} x {item.unitPrice})
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
          </div>
        </div>
      </section>
      <Cta />
    </FoodKingLayout>
  );
};
export default OrderPage;
