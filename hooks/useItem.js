import axios from "axios";
import env from "../env";

const { useState } = require("react");

const base_url = env.API_URL;
const useItem = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [item, setItem] = useState(undefined);

  const fetchItems = () => {
    axios.get(base_url + "items").then((res) => {
      setItems(
        res.data.map((item) => {
          const basePrice = item.portionPrices
            .map((price) => price.price)
            .toSorted((a,b) => a-b)[0];
          return { ...item, basePrice: basePrice };
        })
      );
    });
  };

  const fetchCategories = () => {
    axios.get(base_url + "categories").then((res) => {
      setCategories(res.data);
    });
  };

  const fetchItem = (itemId) => {
    axios.get(base_url + `items?itemId=${itemId}`).then((res) => {
      setItem(res.data);
    });
  };

  return { items, fetchItems, categories, fetchCategories, fetchItem, item };
};

export default useItem;
