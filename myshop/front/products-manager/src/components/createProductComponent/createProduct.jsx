import React from "react";
import styles from "./createProduct.module.css";

export default function createProduct() {
  const containerStyle = {
    height: "75vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={containerStyle}>
      <div className={styles.loginContainer}>
        <p className={styles.header}>Create Product</p>
        <input
          className={styles.inputField}
          type="text"
          placeholder="Image URL"
        />

        <input className={styles.inputField} type="text" placeholder="Name" />

        <input className={styles.inputField} type="text" placeholder="Gender" />

        <input
          className={styles.inputField}
          type="number"
          placeholder="Price"
        />
        <input
          className={styles.inputField}
          type="number"
          placeholder="Score"
        />
        <br />
        <br />
        <button className={styles.button}>Create</button>
      </div>
    </div>
  );
}
