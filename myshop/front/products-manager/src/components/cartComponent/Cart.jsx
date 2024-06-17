import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  getCartProductsFetch,
  deleteCartProductFetch,
} from "../../api/cartFetch";
import { CreateBillFetch } from "../../api/billFetch";
import { useProduct } from "../../context/ProductContext";

export default function Cart() {
  const { userId, refreshCart, setRefreshCart } = useProduct();
  const [cartVisible, setCartVisible] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showPaymentMessage, setShowPaymentMessage] = useState(false);

  useEffect(() => {
    if (userId && cartVisible) {
      fetchCartProducts();
    }
  }, [userId, cartVisible, refreshCart]);

  useEffect(() => {
    calculateTotalPrice();
  }, [cartProducts]);

  const fetchCartProducts = async () => {
    try {
      const products = await getCartProductsFetch(userId);
      setCartProducts(products.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching cart products:", error);
      setLoading(false);
    }
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      await deleteCartProductFetch(productId);
      console.log("Product removed from cart:", productId);
      setRefreshCart((prevRefresh) => !prevRefresh);
    } catch (error) {
      console.error("Error removing product from cart:", error);
    }
  };

  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
    if (!cartVisible) {
      setRefreshCart((prevRefresh) => !prevRefresh);
    }
  };

  const calculateTotalPrice = () => {
    const total = cartProducts
      .reduce((acc, product) => acc + product.productPrice, 0)
      .toFixed(2);
    setTotalPrice(total);
  };

  const handlePay = async () => {
    try {
      const billData = {
        userId: userId,
        totalPrice: parseFloat(totalPrice),
      };
      const newBill = await CreateBillFetch(billData);
      console.log("Bill created:", newBill);
      setShowPaymentMessage(true);
      setTimeout(() => {
        setShowPaymentMessage(false); // Oculta el mensaje después de 3 segundos
      }, 3000); // 3000 milisegundos = 3 segundos
    } catch (error) {
      console.error("Error creating bill:", error);
    }
  };

  return (
    <div className={styles.cart}>
      <FontAwesomeIcon
        icon={faShoppingCart}
        className={styles.cartIcon}
        onClick={toggleCartVisibility}
      />
      {cartVisible && (
        <div className={styles.cartItems}>
          {loading ? (
            <p>Please Login</p>
          ) : (
            <div className={styles.productsList}>
              {cartProducts.map((product) => (
                <div key={product.productId} className={styles.productItem}>
                  <img
                    src={product.productImage}
                    alt={product.productName}
                    className={styles.productImage}
                  />
                  <div className={styles.productInfo}>
                    <p className={styles.productName}>{product.productName}</p>
                    <p className={styles.productPrice}>
                      {product.productPrice}€
                    </p>
                    <button
                      className={styles.buttonRemove}
                      onClick={() => handleRemoveFromCart(product._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className={styles.totalContainer}>
                {showPaymentMessage && (
                  <p className={styles.paymentMessage}>Payment Successful!</p>
                )}
                <p className={styles.totalPrice}>Total Price: {totalPrice}€</p>
                <button className={styles.payButton} onClick={handlePay}>
                  Pay
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
