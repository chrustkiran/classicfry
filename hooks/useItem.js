import axios from "axios";
import env from "../env";

const { useState } = require("react");

const categoryMapper = (category) => {
  const Category = {
    BURGER: 'Burger',
    DIPS_AND_SIDE: 'Dips and Side',
    PERI_PERI: 'Peri Peri',
    WRAPS: 'Wraps',
    DRINKS: 'Drinks'
  };
  if (category in Category) {
    return Category[category];
  }
  return category;
};


const base_url = env.API_URL;
const useItem = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [item, setItem] = useState(undefined);
  const [itemLoading, setItemLoading] = useState(false);

  const fetchItems = () => {
    setItemLoading(true);
    axios.get(base_url + "items").then((res) => {
      setItems(
        res.data.map((item) => {
          const basePrice = item.portionPrices
            .map((price) => price.price)
            .toSorted((a,b) => a-b)[0];
          return { ...item, basePrice: basePrice, category: categoryMapper(item.category) };
        })
      );
      setItemLoading(false);
    }).catch(_ => setItemLoading(false));
  };

  const fetchCategories = () => {
    axios.get(base_url + "items").then((res) => {
      if (res.data && res.data.length > 0) {
        const category = res.data.reduce((obj, item) => {
            const cat = categoryMapper(item.category);
            if (!obj[cat]) {
              obj[cat] = {...item, total: 1, category: categoryMapper(item.category)};
            } else {
              obj[cat] = {...obj[cat], total: (1 + obj[cat].total)};
            }
            return obj;
          }, {});
        setCategories(Object.values(category));
      }
    });
  };

  const fetchItem = (itemId) => {
    axios.get(base_url + `items/${itemId}`).then((res) => {
      res.data = [res.data]
      setItem(res.data.map(item => ({...item, category: categoryMapper(item.category)})));
    }).catch(_ => {setItem("errored")});
  };

  return { items, fetchItems, categories, fetchCategories, fetchItem, item, itemLoading };
};

export default useItem;
