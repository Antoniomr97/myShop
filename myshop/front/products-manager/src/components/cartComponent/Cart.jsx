import React from "react";
import styles from "./Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  return (
    <div className={styles.cart}>
      <FontAwesomeIcon icon={faShoppingCart} />
    </div>
  );
}
