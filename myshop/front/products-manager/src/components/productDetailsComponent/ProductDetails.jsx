import React, { useEffect, useState } from "react";
import { getProduct, deleteProduct } from "../../api/productFetch";
import { useProduct } from "../../context/ProductContext";
import styles from "./ProductDetails.module.css";
import UploadProductDetails from "../uploadProductDetails/UploadProductDetails";

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [uploadVisible, setUploadVisible] = useState(false);

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

  const handleUploadClick = () => {
    setUploadVisible(!uploadVisible);
    setIsEditing(!isEditing);
  };

  const showDeleteConfirmation = () => {
    setShowConfirmation(true);
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
  };

  const confirmDelete = async () => {
    setShowConfirmation(false);
    await deleteProduct(product._id);
    window.location.href = "/";
  };

  const handleProductUpdate = (updatedProduct) => {
    setProduct(updatedProduct);
  };

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
              <button className={styles.button} onClick={handleUploadClick}>
                {isEditing ? "Cancel" : "Upload Product"}
              </button>
              <button
                className={styles.button}
                onClick={showDeleteConfirmation}
              >
                Delete Product
              </button>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}

      {isEditing && (
        <UploadProductDetails
          id={product._id}
          product={product}
          handleProductUpdate={handleProductUpdate}
          handleUploadClick={handleUploadClick}
        />
      )}

      {showConfirmation && (
        <div className={styles.confirmation_modal}>
          <p>Are you sure you want to remove this product?</p>
          <button className={styles.electionButtonYes} onClick={confirmDelete}>
            Yes
          </button>
          <button className={styles.electionButtonNo} onClick={cancelDelete}>
            No
          </button>
        </div>
      )}
    </div>
  );
}
