import env from "@/env";

const PaymentService = {
  confirmPayment: async (confirmPaymentReq) => {
    console.log("Confirming payment with request:", confirmPaymentReq);
    return fetch(`${env.API_URL}payment/confirm-payment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(confirmPaymentReq),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error fetching confirm payment:", error);
        throw error;
      });
  },

  pollPaymentStatus: async (confirmPaymentReq, attempts = 0) => {
    const maxAttempts = 5;
    const delay = 1500; // 1.5 seconds
    const currentAttempt = attempts + 1;

    console.log("Polling attempt:", currentAttempt, "confirmPaymentReq:", confirmPaymentReq);

    if (currentAttempt > maxAttempts) {
      throw new Error("Max attempts reached");
    }

    try {
      const response = await PaymentService.confirmPayment(confirmPaymentReq);
      console.log("Polling attempt:", currentAttempt, "Response:", response);

      if (response.orderStatus !== "PLACED_WITH_PAYMENT") {
        console.log("Payment still pending, retrying...");
        await new Promise(resolve => setTimeout(resolve, delay));
        return await PaymentService.pollPaymentStatus(confirmPaymentReq, currentAttempt);
      } else {
        console.log("Payment status resolved:", response);
        return response; // Final result
      }
    } catch (error) {
      if (error.message === "Max attempts reached") {
        throw error;
      }
      console.error("Error during payment status polling:", error);
      await new Promise(resolve => setTimeout(resolve, delay));
      return await PaymentService.pollPaymentStatus(confirmPaymentReq, currentAttempt);
    }
  }

};

export default PaymentService;
