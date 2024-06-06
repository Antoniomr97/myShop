import React, { useEffect, useState } from "react";
import { getProduct } from "../../api/productFetch";
import { useProduct } from "../../context/ProductContext";
import styles from "./ProductDetails.module.css";

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const { selectedProductId } = useProduct();

  useEffect(() => {
    const fetchProduct = async () => {
      if (selectedProductId) {
        const productAux = await getProduct(selectedProductId);
        console.log("Fetched Product:", productAux);
        setProduct(productAux.data);
      }
    };
    fetchProduct();
  }, [selectedProductId]);

  if (!selectedProductId) {
    return <p>No product selected.</p>;
  }

  return (
    <div className={styles.product_details_container}>
      {product && product.name ? (
        <>
          <img src={product.image} alt={product.name} />
          <div className={styles.product_details}>
            <span className={styles.key}>Name: </span>
            <span className={styles.value}>{product.name}</span>
            <br />
            <span className={styles.key}>Gender: </span>
            <span className={styles.value}>{product.category}</span>
            <br />
            <span className={styles.key}>Price: </span>
            <span className={styles.value}>{product.price}€</span>
            <br />
            <span className={styles.key}>Score: </span>
            <span className={styles.value}>{product.score}</span>
            <br />
            <div className={styles.buttons}>
              <button className={styles.button}>Upload Product</button>
              <button className={styles.button}>Delete Product</button>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
