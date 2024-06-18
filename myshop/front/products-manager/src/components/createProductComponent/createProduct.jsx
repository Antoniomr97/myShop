import React, { useState } from "react";
import styles from "./createProduct.module.css";
import { CreateProductFetch } from "../../api/productFetch";

export default function CreateProduct() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

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
    // Validar que todos los campos estén llenos
    if (!image || !name || !category || !price || !score) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      await CreateProductFetch({
        image,
        name,
        category,
        price,
        score,
      });
      setMessage("Product Created");
      setError(""); // Limpiar el mensaje de error si la creación fue exitosa
    } catch (error) {
      console.error("Error creating product:", error);
      setError("Failed to create product.");
    }
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
        {error && <p className={styles.error}>{error}</p>}
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}
