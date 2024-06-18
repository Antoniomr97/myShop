import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useProduct } from "../../context/ProductContext";
import styles from "./UploadProductDetails.module.css";
import { updateProduct, getProductById } from "../../api/productFetch";

export default function UploadProductDetails() {
  const { selectedProductId, setSelectedProductId } = useProduct();
  const router = useRouter();
  const { id: queryId } = router.query;
  const id = selectedProductId || queryId;

  const [product, setProduct] = useState({
    image: "",
    name: "",
    category: "",
    price: 0,
    score: 0,
  });

  useEffect(() => {
    if (queryId) {
      setSelectedProductId(queryId); // UPLOAD PRODUCT ID
    }
  }, [queryId, setSelectedProductId]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(id);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handlerOnChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === "score" || name === "price" ? parseFloat(value) : value,
    }));
  };

  const uploadProduct = async () => {
    console.log("Uploading product with ID:", id);
    try {
      const response = await updateProduct(id, product);
      console.log("Product updated:", response);
      setProduct(response.data); // UPLOAD NEW DATA
      router.push("/"); // BACK TO HOME
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className={styles.edit_container}>
      <h3>Updating Product Details</h3>
      <input
        className={styles.updateInput}
        type="text"
        name="image"
        value={product.image}
        onChange={handlerOnChange}
        placeholder="New URL Image"
      />
      <input
        className={styles.updateInput}
        type="text"
        name="name"
        value={product.name}
        onChange={handlerOnChange}
        placeholder="New Name"
      />
      <input
        className={styles.updateInput}
        type="text"
        name="category"
        value={product.category}
        onChange={handlerOnChange}
        placeholder="New Gender"
      />
      <input
        className={styles.updateInput}
        type="number"
        name="price"
        value={product.price}
        onChange={handlerOnChange}
        placeholder="New Price"
      />
      <input
        className={styles.updateInput}
        type="number"
        name="score"
        value={product.score}
        onChange={handlerOnChange}
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
