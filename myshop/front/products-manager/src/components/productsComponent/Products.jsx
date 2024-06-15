import React from "react";
import styles from "./Products.module.css";
import Link from "next/link";
import { useProduct } from "../../context/ProductContext";
import { useRouter } from "next/router";

const Products = ({ filters, products }) => {
  const { setSelectedProductId } = useProduct();
  const router = useRouter();

  const handleClick = (id) => {
    setSelectedProductId(id);
    router.push(
      {
        pathname: "/productDetails",
        query: { id },
      },
      `/productDetails/${id}`
    );
  };

  return (
    <div className={styles.productsWrapper}>
      <div className={styles.productsContainer}>
        {products.map((product) => (
          <div className={styles.card} key={product._id}>
            <img
              className={styles.productImage}
              src={product.image}
              alt={product.name}
            />
            <div className={styles.content}>
              <h4>
                <Link href={"/productDetails"} legacyBehavior>
                  <a
                    className={styles.linkDetails}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(product._id);
                    }}
                  >
                    {product.name}
                  </a>
                </Link>
              </h4>
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
