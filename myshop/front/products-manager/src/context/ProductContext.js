import React, { createContext, useState, useContext } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectedProductId, setSelectedProductId] = useState("");

  return (
    <ProductContext.Provider
      value={{ selectedProductId, setSelectedProductId }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
