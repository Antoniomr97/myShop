import React from "react";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/productFetch";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProductsAux = async () => {
      const productsAux = await getAllProducts();
      console.log(productsAux);
      setProducts(productsAux.products);
    };
    getAllProductsAux();
  }, []);

  return (
    <div className="productsContainer">
      <h1>Products</h1>
      {products.map((product) => {
        return (
          <div className="CardContainer" key={product.id}>
            <span>{product.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
