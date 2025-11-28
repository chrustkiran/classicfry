import axios from "axios";
import env from "../env";

const { useState } = require("react");

const OrderStatus = {
  PLACED_WITH_PAYMENT: "Placed",
  PLACED_WITHOUT_PAYMENT: "Placed",
  IN_PROGRESS: "In Progess",
  READY_FOR_PICKUP: "Completed",
  COMPLETED: "Completed",
};

const OrderStatusMapper = (status) => {
  if (status in OrderStatus) {
    return OrderStatus[status];
  }
  return status;
};

const base_url = env.API_URL;
const useOrder = () => {
  const [orders, setOrders] = useState({'active': [], 'completed': []});

  const fetchOrders = (userId) => {
    axios.get(base_url + `orders?userId=${userId}`).then((res) => {
      const orders = res.data.filter(
        (order) => order.orderStatus in OrderStatus
      );

      // Categorize orders into active and completed
      const categorizedOrders = orders.reduce(
        (acc, order) => {
          if (order.orderStatus === Object.keys(OrderStatus)[3] || order.orderStatus === Object.keys(OrderStatus)[4]) {
            acc.completed.push({
              ...order,
              orderStatus: OrderStatusMapper(order.orderStatus),
            });
          } else {
            acc.active.push({
              ...order,
              orderStatus: OrderStatusMapper(order.orderStatus),
            });
          }
          return acc;
        },
        { active: [], completed: [] }
      );

      setOrders(categorizedOrders);
    });
  };

  return { orders, fetchOrders };
};

export default useOrder;
