import env from "@/env";

const PaymentService = {
  confirmPayment: (confirmPaymentReq) => {
    return new Promise((resolve, reject) => {
      fetch(`${env.API_URL_STRIPE}/payment/confirm-payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(confirmPaymentReq),
      })
        .then((response) => resolve(response.json()))
        .catch((error) => {
          console.error("Error fetching confirm payment:", error);
          reject(error);
        });
    });
  },
};

export default PaymentService;
