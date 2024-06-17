import React, { createContext, useState, useContext } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectedProductId, setSelectedProductId] = useState("");
  const [userId, setUserId] = useState("");
  const [refreshCart, setRefreshCart] = useState(false);

  return (
    <ProductContext.Provider
      value={{
        selectedProductId,
        setSelectedProductId,
        userId,
        setUserId,
        refreshCart,
        setRefreshCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
