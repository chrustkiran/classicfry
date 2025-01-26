"use client"
import { createContext, useState, useContext } from "react";
import axios from "axios";
import env from "../env";

const AppContext = createContext();

const base_url = env.API_URL

export const AppProvider = ({ children }) => {
  const [queryParams, setQueryParams] = useState(null);

  // const getQueryParams = () => {
  //   const queryParams_ = queryParams;
  //   setQueryParams(null);
  //   return queryParams_;
  // }

  const [items, setItem] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchItems = () => {
      axios.get(base_url+'items').then(res => {
          setItem(res.data);
      });
  }

  const fetchCategories = () => {
      axios.get(base_url + 'categories').then(res => {
          setCategories(res.data);
      })
  }


  const contextValue = {
    setQueryParams,
    queryParams,
    items, fetchItems, categories, fetchCategories
  }
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
