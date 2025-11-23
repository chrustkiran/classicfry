const env = {
  API_URL: `${process.env.HOST_URI}/api/v1/`,
  stripeAPIKey: "pk_live_51QmCweRuSIuECqCmYczAmbXXwXtjc0zY3qHLD6HkvcLOwn3273OSOrmk1gUgwkiaZwDTd9AhDsxgV857Qk82XZ6x00Jz1TwHto",
  // stripeAPIKey:
  //   "pk_live_51QmCweRuSIuECqCmYczAmbXXwXtjc0zY3qHLD6HkvcLOwn3273OSOrmk1gUgwkiaZwDTd9AhDsxgV857Qk82XZ6x00Jz1TwHto",
  API_URL_STRIPE: `${process.env.HOST_URI}/api/v1`,
  DEFAULT: "REGULAR",
  USER: "classic-fry-user",
  ITEM_TYPE: Object.freeze({
    ITEM: "ITEM",
    DEAL: "DEAL",
  }),
  PAYMENT_TYPE: Object.freeze({
    COUNTER: "COUNTER",
    ONLINE: "ONLINE",
  }),
  DELIVERY_METHOD: Object.freeze({
    DELIVERY: "delivery",
    PICKUP: "pickup"
  }),
  STORE: Object.freeze({
    EPSOM: "EPSOM",
    ROMFORD: "ROMFORD"
  }),
  TAX_RATE: 0.1,
  DELIVERY_FEE: 1.99,
  OFFER_MINIMUM: 25,
  DELIVERY_MINIMUM: 20,
  OFFER_PERCENTAGE: 0.2,
};

export default env;
