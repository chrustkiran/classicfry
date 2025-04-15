import axios from "axios";
import env from "../env";

const { useState } = require("react");

const dealTypeMapper = (dealType) => {
  const Dealtype = {
    CHICKEN_DEAL: "Chicken",
    BURGER_DEAL: "Burger",
    MIXED_DEAL: "Mixed",
    WRAP_DEAL: "Wrap",
    RIPS_DEAL: "Rips",
    PERI_PERI_DEAL: "Peri Peri",
    FAMILY_DEAL: "Family",
    KIDS_DEAL: "Kids",
  };
  if (dealType in Dealtype) {
    return Dealtype[dealType];
  }
  return dealType;
};

const base_url = env.API_URL;
const useDeal = () => {
  const [deals, setDeals] = useState([]);
  const [dealCategories, setDealCategories] = useState([]);
  const [deal, setDeal] = useState(undefined);
  const [dealLoading, setDealLoading] = useState(false);


  const fetchDeals = () => {
    setDealLoading(true);
    axios.get(base_url + "deals").then((res) => {
      setDeals(res.data.filter(it => (!("isAvailable" in it) || it.isAvailable === true)).map(deal => ({...deal, basePrice: deal.price, dealType: dealTypeMapper(deal.dealType)})));
      setDealLoading(false);
    }).catch(_ => setDealLoading(false));
  };

  const fetchCategories = () => {
    axios.get(base_url + "deals").then((res) => {
      if (res.data && res.data.length > 0) {
        const category = res.data.filter(it => (!("isAvailable" in it) || it.isAvailable === true)).reduce((obj, item) => {
          if (!obj[dealTypeMapper(item.dealType)]) {
            obj[dealTypeMapper(item.dealType)] = {item, basePrice: deal.price, dealType: dealTypeMapper(deal.dealType)};
          }
          return obj;
        }, {});
        setDealCategories(Object.values(category));
      }
    });
  };

  const fetchDeal = (dealId) => {
    axios.get(base_url + `deals/${dealId}`).then((res) => {
      res.data = [res.data]
      setDeal(res.data.map(deal => ({...deal, basePrice: deal.price, dealType: dealTypeMapper(deal.dealType)})));
    }).catch(_ => {setDeal("errored")});
  };

  return {
    deals,
    fetchDeals,
    dealCategories,
    fetchCategories,
    fetchDeal,
    deal,
    dealLoading
  };
};

export default useDeal;
