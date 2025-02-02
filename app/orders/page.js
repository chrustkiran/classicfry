"use client";

import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import { useEffect, useState } from "react";

import { useSearchParams } from "next/navigation";
import useOrder from "@/hooks/useOrder";
import env from "@/env";

// const orders = {
//   active: [
//     {
//       id: "A1231",
//       date: "2025-01-30",
//       time: "10:30 AM",
//       totalPayment: "50.00",
//       status: "Processing",
//       items: [
//         {
//           name: "Chicken Burger",
//           quantity: 2,
//           unitPrice: "$10.00",
//           image: "https://via.placeholder.com/50",
//         },
//         {
//           name: "Fries",
//           quantity: 1,
//           unitPrice: "$5.00",
//           image: "https://via.placeholder.com/50",
//         },
//       ],
//     },
//     {
//       id: "A1232",
//       date: "2025-01-30",
//       time: "10:30 AM",
//       totalPayment: "50.00",
//       status: "Processing",
//       items: [
//         {
//           name: "Chicken Burger",
//           quantity: 2,
//           unitPrice: "$10.00",
//           image: "https://via.placeholder.com/50",
//         },
//         {
//           name: "Fries",
//           quantity: 1,
//           unitPrice: "$5.00",
//           image: "https://via.placeholder.com/50",
//         },
//       ],
//     },
//     {
//       id: "A1233",
//       date: "2025-01-30",
//       time: "10:30 AM",
//       totalPayment: "50.00",
//       status: "Processing",
//       items: [
//         {
//           name: "Chicken Burger",
//           quantity: 2,
//           unitPrice: "$10.00",
//           image: "https://via.placeholder.com/50",
//         },
//         {
//           name: "Fries",
//           quantity: 1,
//           unitPrice: "$5.00",
//           image: "https://via.placeholder.com/50",
//         },
//       ],
//     },
//     {
//       id: "A1234",
//       date: "2025-01-30",
//       time: "10:30 AM",
//       totalPayment: "50.00",
//       status: "Processing",
//       items: [
//         {
//           name: "Chicken Burger",
//           quantity: 2,
//           unitPrice: "$10.00",
//           image: "https://via.placeholder.com/50",
//         },
//         {
//           name: "Fries",
//           quantity: 1,
//           unitPrice: "$5.00",
//           image: "https://via.placeholder.com/50",
//         },
//       ],
//     },
//   ],
//   completed: [
//     {
//       id: "E2342",
//       date: "2025-01-29",
//       time: "9:15 AM",
//       totalPayment: "25.00",
//       status: "Delivered",
//       items: [
//         {
//           name: "Coke",
//           quantity: 1,
//           unitPrice: "$3.00",
//           image: "https://via.placeholder.com/50",
//         },
//         {
//           name: "Pizza",
//           quantity: 1,
//           unitPrice: "$20.00",
//           image: "https://via.placeholder.com/50",
//         },
//       ],
//     },
//   ],
// };

const OrderPage = () => {
  const searchParams = useSearchParams();
  const { orders, fetchOrders } = useOrder();
  const [activeTab, setActiveTab] = useState("active");
  const [expandedOrder, setExpandedOrder] = useState(null);

  const checkOrderExist = (orderId) => {
    return orders.active.some((order) => order.orderId === orderId);
  };
  const [showSuccessOrder, setShowSuccessOrder] = useState(false);

  useEffect(() => {
    if (
      searchParams.get("success") == true &&
      checkOrderExist(searchParams.get("orderId"))
    ) {
      setShowSuccessOrder(true);
    }
  }, [orders]);

  const toggleOrder = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setExpandedOrder(null); // Reset expanded orders when switching tabs
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <FoodKingLayout>
      <PageBanner pageName={"Our Menu"} />
      <section className="food-category-section fix section-padding section-bg">
        <div className="container px-3 px-md-5 px-lg-5 px-xl-5">
          <div className="row g-5 pr-5 pl-5 order-section px-3 px-md-5 px-lg-5 px-xl-5">
            {showSuccessOrder && (
              <p
                style={{ border: "2px solid green" }}
                className="shadow-sm p-4 order-confirm"
              >
                Your order is <strong>confirmed!</strong> Get ready for a{" "}
                <strong>crunch-tastic</strong> meal! 🍗😋
              </p>
            )}
            {/* Tabs */}

            <ul className="nav nav-tabs d-flex  order-tab">
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "active" ? "active" : ""
                  }`}
                  onClick={() => handleTabChange("active")}
                >
                  Active Orders
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "completed" ? "active" : ""
                  }`}
                  onClick={() => handleTabChange("completed")}
                >
                  Completed Orders
                </button>
              </li>
              <li>
                <div onClick={fetchOrders} className="btn mr-0">
                  <i className="fas fa-redo"></i>
                </div>
              </li>
            </ul>

            {/* Order List */}
            <div className="row row-cols-1 mt-3 g-1">
              {orders[activeTab].length === 0 ? (
                <p className="text-muted text-center">No orders available.</p>
              ) : (
                orders[activeTab].map((order) => (
                  <div key={order.id} className="card">
                    <div className="card-body col">
                      <div className="d-flex column justify-content-between">
                        <div>
                          {" "}
                          <small>ORDER ID</small>{" "}
                          <h3 className="card-title">
                            {order.orderId.substring(0, 6)}
                          </h3>
                        </div>
                        <div>
                          <span className="badge bg-success">
                            {order.orderStatus}
                          </span>
                        </div>
                      </div>
                      <div className="d-flex column justify-content-between mt-3">
                        <div>
                          <strong>Total:</strong> £{order.payment?.amount}
                        </div>
                        <br></br>

                        <div>
                          <strong>
                            <i className="fas flaticon-calendar"> </i>
                          </strong>{" "}
                          {new Date(order.createdTime).toLocaleDateString()}{" "}
                          <br></br>
                          <strong>
                            <i className="fas fa-clock"></i>{" "}
                          </strong>{" "}
                          {new Date(order.createdTime).toLocaleTimeString()}
                        </div>
                      </div>
                      <div>
                        <span
                          style={{ border: "1px solid black", color: "black" }}
                          className="badge bg-light"
                        >
                          {order.payment.type} payment
                        </span>
                      </div>

                      <button
                        className="btn btn-warning btn-sm mt-4 w-100"
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
                          {order.orderItems.map((orderItem, index) => {
                            const item = orderItem.item
                              ? orderItem.item
                              : orderItem.deal;
                            return (
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
                                  {orderItem.quantity}){" "}
                                  <span className="badge bg-warning">
                                    {orderItem.portionSize !== env.DEFAULT &&
                                      orderItem.portionSize}
                                  </span>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </FoodKingLayout>
  );
};
export default OrderPage;
