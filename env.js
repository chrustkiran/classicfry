const env = {
  API_URL: `${process.env.HOST_URI}/api/v1/`,
  //API_URL: `${process.env.HOST_URI}/`,
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
  OFFER_PERCENTAGE: 0.1,
  MULTI_OBJ_CONF: {
    'DRINK': {
      addToCartKey: "drinkOptions",
    },
    'CHIPS': {
      addToCartKey: "chipsOptions",
    }
  },
  CONTACT_INFO: [
    {
      id: "epsom-location",
      name: "Epsom Branch",
      contactKey: "epsom",
      address: "100 Chessington Road  West Ewell , KT19 9UR",
      phone: "01372 650894",
      email: "contact@classicfry.co.uk",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2491.8853228032785!2d-0.2634778230425654!3d51.35001932218793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487609e104b44b03%3A0x5222269f170e871f!2s100%20Chessington%20Rd%2C%20Ewell%2C%20Epsom%20KT19%209UR%2C%20UK!5e0!3m2!1sen!2sau!4v1738853912059!5m2!1sen!2sau",
    },
    {
      id: "romford-location",
      name: "Romford Branch",
      contactKey: "romford",
      address: "106 Victoria Road, Romford, RM1 1DE",
      phone: "01708 368185",
      email: "contact@classicfry.co.uk",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.6174765277883!2d0.1856769129539093!3d51.57524567171139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a4cad5fe82eb%3A0xdf4fd92be59a5594!2s106%20Victoria%20Rd%2C%20Romford%2C%20UK!5e0!3m2!1sen!2sau!4v1763176122000!5m2!1sen!2sau",
    },
  ]
};

export default env;
