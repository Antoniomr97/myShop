import React, { useState } from "react";
import styles from "./UploadProductDetails.module.css";
import { updateProduct } from "../../api/productFetch";

export default function UploadProductDetails(props) {
  const { id, product, handleProductUpdate, handleUploadClick } = props;

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [score, setScore] = useState(0);
  const [visible, setVisible] = useState(true);

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
    setScore(parseInt(e.target.value));
  };

  const uploadProduct = async () => {
    console.log("Uploading product with ID:", id);
    try {
      if (typeof score !== "undefined" && score !== "") {
        const response = await updateProduct(id, {
          image,
          name,
          category,
          price,
          score,
        });
        console.log("Product updated:", response);
        handleProductUpdate(response.data);
        setVisible(false);
        handleUploadClick();
      } else {
        console.log("Score is undefined or empty. Skipping update.");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div
      className={styles.edit_container}
      style={{ display: visible ? "block" : "none" }}
    >
      <h3>Updating Product Details</h3>
      <input
        className={styles.updateInput}
        type="text"
        onChange={handlerOnChangeImage}
        placeholder="New URL Image"
      />
      <input
        className={styles.updateInput}
        type="text"
        onChange={handlerOnChangeName}
        placeholder="New Name"
      />
      <input
        className={styles.updateInput}
        type="text"
        onChange={handlerOnChangeCategory}
        placeholder="New Gender"
      />
      <input
        className={styles.updateInput}
        type="number"
        onChange={handlerOnChangePrice}
        placeholder="New Price"
      />
      <input
        className={styles.updateInput}
        type="number"
        onChange={handlerOnChangeScore}
        placeholder="New Score"
      />
      <div>
        <button className={styles.uploadButton} onClick={uploadProduct}>
          Upload
        </button>
      </div>
    </div>
  );
}
