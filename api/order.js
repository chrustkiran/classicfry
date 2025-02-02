import env from "@/env";

const OrderService = {
  createOrder: (createOrderReq) => {
    return new Promise((resolve, reject) => {
      fetch(`${env.API_URL_STRIPE}/api/v1/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(createOrderReq),
      })
        .then((response) => resolve(response.json()))
        .catch((error) => {
          console.error("Error fetching create order:", error);
          reject(error);
        });
    });
  },
};

export default OrderService;
