import React from "react";
import styles from "./Products.module.css";
import Link from "next/link";
import { useProduct } from "../../context/ProductContext";
import { useRouter } from "next/router";
import { CreateCartProductFetch } from "../../api/cartFetch";

const Products = ({ filters, products }) => {
  const { userId, setSelectedProductId, setRefreshCart } = useProduct(); // Obtén userId, setSelectedProductId y setRefreshCart del contexto
  const router = useRouter();

  const handleAddToCart = async (product) => {
    try {
      // Prepara los datos del producto para agregar al carrito
      const data = {
        userId: userId,
        id: product._id,
        image: product.image,
        price: product.price,
      };

      // Llama a la función que realiza la solicitud POST al backend
      const response = await CreateCartProductFetch(data);
      console.log("Product added to cart:", response);

      // Actualiza el estado refreshCart en el contexto para forzar la actualización del carrito
      setRefreshCart((prevRefresh) => !prevRefresh);

      // Aquí podrías mostrar un mensaje de éxito o actualizar el estado del carrito en el contexto si es necesario
    } catch (error) {
      console.error("Error adding product to cart:", error);
      // Manejo de errores: muestra un mensaje al usuario o maneja el error de otra manera
    }
  };

  const handleClick = (id) => {
    setSelectedProductId(id); // Establecer el ID del producto seleccionado en el contexto
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
