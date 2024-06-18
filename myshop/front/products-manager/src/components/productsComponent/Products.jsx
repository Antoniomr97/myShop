import React from "react";
import styles from "./Products.module.css";
import Link from "next/link";
import { useProduct } from "../../context/ProductContext";
import { useRouter } from "next/router";
import { CreateCartProductFetch } from "../../api/cartFetch";

const Products = ({ filters, products }) => {
  const { userId, setSelectedProductId, setRefreshCart } = useProduct(); // OBTEIN USERID SETSELECTEDPRODUCTID AND SETREFRESHCART FROM CONTEXT
  const router = useRouter();

  const handleAddToCart = async (product) => {
    try {
      // PREPARE DATA FOR CART
      const data = {
        userId: userId,
        id: product._id,
        image: product.image,
        price: product.price,
      };

      // FETCH TO BACK FOR ADD THE PRODUCT
      const response = await CreateCartProductFetch(data);
      console.log("Product added to cart:", response);

      // REFRESH THE CART
      setRefreshCart((prevRefresh) => !prevRefresh);
    } catch (error) {
      console.error("Error adding product to cart:", error);
      //FOR SEE THE ERROR IN CONSOLE
    }
  };

  const handleClick = (id) => {
    setSelectedProductId(id); // SEND USER ID FOR CONTEXT
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
                <button
                  className={styles.buttonToCart}
                  onClick={() => handleAddToCart(product)}
                >
                  To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
