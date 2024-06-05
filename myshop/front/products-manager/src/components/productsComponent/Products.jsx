import React from "react";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/productFetch";
import styles from "./Products.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProductsAux = async () => {
      const productsAux = await getAllProducts();
      console.log(productsAux);
      setProducts(productsAux.data);
    };
    getAllProductsAux();
  }, []);

  return (
    <div className={styles.productsWrapper}>
      <div className={styles.productsContainer}>
        {products.map((product) => (
          <div className={styles.card} key={product.id}>
            <img
              className={styles.productImage}
              src={product.image}
              alt={product.name}
            />
            <div className={styles.content}>
              <h4>{product.name}</h4>
              <div className={styles.cardContent}>
                <span>Gender: {product.category}</span>
                <br />
                <span>Score: {product.score}</span>
              </div>
              <div className={styles.priceContainer}>
                <span>Price: {product.price}€</span>
                <br />
                <button className={styles.buttonToCart}>To Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
