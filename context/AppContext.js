"use client"
import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [queryParams, setQueryParams] = useState(null);

  const getQueryParams = () => {
    const queryParams_ = queryParams;
    setQueryParams(null);
    return queryParams_;
  }

  const contextValue = {
    setQueryParams,
    getQueryParams
  }
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
