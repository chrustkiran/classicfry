const host_test = "https://2bbuprb2vf.execute-api.eu-west-2.amazonaws.com/dev";
const host_local = "http://localhost:8080";
const host = host_local;
const env = {
  API_URL: `${host}/api/v1/`,
  stripeAPIKey:
    "pk_live_51QmCweRuSIuECqCmYczAmbXXwXtjc0zY3qHLD6HkvcLOwn3273OSOrmk1gUgwkiaZwDTd9AhDsxgV857Qk82XZ6x00Jz1TwHto",
  API_URL_STRIPE: `${host}/api/v1`,
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
  VALID_SUBURBS: Object.freeze([
    { name: "Kingston upon Thames", postalCode: "KT1" },
    { name: "Norbiton", postalCode: "KT1" },
    { name: "Hampton Wick", postalCode: "KT1" },
    { name: "Kingston upon Thames", postalCode: "KT2" },
    { name: "Coombe", postalCode: "KT2" },
    { name: "New Malden", postalCode: "KT3" },
    { name: "Old Malden", postalCode: "KT3" },
    { name: "Worcester Park", postalCode: "KT4" },
    { name: "Stoneleigh", postalCode: "KT4" },
    { name: "Surbiton", postalCode: "KT5" },
    { name: "Berrylands", postalCode: "KT5" },
    { name: "Tolworth", postalCode: "KT6" },
    { name: "Long Ditton", postalCode: "KT6" },
    { name: "Thames Ditton", postalCode: "KT7" },
    { name: "East Molesey", postalCode: "KT8" },
    { name: "West Molesey", postalCode: "KT8" },
    { name: "Chessington", postalCode: "KT9" },
    { name: "Hook", postalCode: "KT9" },
    { name: "Esher", postalCode: "KT10" },
    { name: "Claygate", postalCode: "KT10" },
    { name: "Cobham", postalCode: "KT11" },
    { name: "Oxshott", postalCode: "KT11" },
    { name: "Walton-on-Thames", postalCode: "KT12" },
    { name: "Hersham", postalCode: "KT12" },
    { name: "Weybridge", postalCode: "KT13" },
    { name: "Byfleet", postalCode: "KT14" },
    { name: "West Byfleet", postalCode: "KT14" },
    { name: "Addlestone", postalCode: "KT15" },
    { name: "Chertsey", postalCode: "KT16" },
    { name: "Epsom", postalCode: "KT17" },
    { name: "Ewell", postalCode: "KT17" },
    { name: "Tattenham Corner", postalCode: "KT18" },
    { name: "Leatherhead", postalCode: "KT22" },
    { name: "Great Bookham", postalCode: "KT23" },
    { name: "Little Bookham", postalCode: "KT23" },
    { name: "Effingham", postalCode: "KT24" },
  ]),
  DELIVERY_METHOD: Object.freeze({
    DELIVERY: "delivery",
    PICKUP: "pickup"
  })
};

export default env;
