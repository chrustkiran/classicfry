import axios from "axios";
import env from "../env";
import { fail } from "assert";

const { useState } = require("react");

const OrderStatus = {
  PLACED_WITH_PAYMENT: "Placed",
  PLACED_WITHOUT_PAYMENT: "Placed",
  IN_PROGRESS: "In Progess",
  READY_FOR_PICKUP: "Completed",
  COMPLETED: "Completed",
  PENDING_FOR_PAYMENT: "Pending",
  CANCELLED: "Cancelled",
  PAYMENT_FAILED: "Payment Failed",
};

const orderStatusCategories = {
  active: ["PLACED_WITH_PAYMENT", "PLACED_WITHOUT_PAYMENT", "IN_PROGRESS"],
  completed: ["READY_FOR_PICKUP", "COMPLETED"],
  failed: ["PAYMENT_FAILED"],
  pending: ["PENDING_FOR_PAYMENT"],
};

const OrderStatusMapper = (status) => {
  if (status in OrderStatus) {
    return OrderStatus[status];
  }
  return status;
};

const base_url = env.API_URL;
const useOrder = () => {
  const [orders, setOrders] = useState({ 'active': [], 'completed': [], 'pending': [], 'failed': [] });

  const fetchOrders = (userId) => {
    axios.get(base_url + `orders/userId/${userId}`).then((res) => {
      const orders = res.data.filter(
        (order) => order.orderStatus in OrderStatus
      );

      // Categorize orders into active and completed
      const categorizedOrders = orders.reduce(
        (acc, order) => {
          console.log("Processing order:", order.orderId, "with status:", order.orderStatus);
          console.log("Current categorized orders:", orderStatusCategories.pending.includes(order.orderStatus));
          if (orderStatusCategories.completed.includes(order.orderStatus)) {
            acc.completed.push({
              ...order,
              orderStatus: OrderStatusMapper(order.orderStatus),
            });
          } else if (orderStatusCategories.pending.includes(order.orderStatus)) {
            acc.pending.push({
              ...order,
              orderStatus: OrderStatusMapper(order.orderStatus),
            });
          } else if (orderStatusCategories.active.includes(order.orderStatus)) {
            acc.active.push({
              ...order,
              orderStatus: OrderStatusMapper(order.orderStatus),
            });
          } else if (orderStatusCategories.failed.includes(order.orderStatus)) {
            acc.failed.push({
              ...order,
              orderStatus: OrderStatusMapper(order.orderStatus),
            });
          }
          return acc;
        },
        { active: [], completed: [], pending: [], failed: [] }
      );

      setOrders(categorizedOrders);
    });
  };

  return { orders, fetchOrders };
};

export default useOrder;
