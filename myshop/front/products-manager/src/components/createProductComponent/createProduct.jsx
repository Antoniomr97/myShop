import React, { useState } from "react";
import styles from "./createProduct.module.css";
import { CreateProductFetch } from "../../api/productFetch";

export default function createProduct() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");

  const handlerOnChangeImage = (e) => {
    setImage(e.target.value);
  };

  const handlerOnChangeName = (e) => {
    setName(e.target.value);
  };

  const handlerOnChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handlerOnChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const handlerOnChangeScore = (e) => {
    setScore(e.target.value);
  };

  const createNewProduct = async () => {
    await CreateProductFetch({
      image,
      name,
      category,
      price,
      score,
    });
    setMessage("Product Created");
  };

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
          onChange={handlerOnChangeImage}
          placeholder="Image URL"
        />
        <input
          className={styles.inputField}
          type="text"
          onChange={handlerOnChangeName}
          placeholder="Name"
        />
        <input
          className={styles.inputField}
          type="text"
          onChange={handlerOnChangeCategory}
          placeholder="Gender"
        />
        <input
          className={styles.inputField}
          type="number"
          onChange={handlerOnChangePrice}
          placeholder="Price"
        />
        <input
          className={styles.inputField}
          type="number"
          onChange={handlerOnChangeScore}
          placeholder="Score"
        />
        <br />
        <br />
        <button className={styles.button} onClick={createNewProduct}>
          Create
        </button>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}
