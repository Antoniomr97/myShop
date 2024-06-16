import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  getCartProductsFetch,
  createCartProductFetch,
  deleteCartProductFetch,
} from "../../api/cartFetch";
import { useProduct } from "../../context/ProductContext";

export default function Cart() {
  const { userId } = useProduct(); // Obtén userId del contexto
  const [cartVisible, setCartVisible] = useState(false); // Estado para controlar la visibilidad del carrito
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      fetchCartProducts();
    }
  }, [userId]);

  const fetchCartProducts = async () => {
    try {
      const products = await getCartProductsFetch(userId); // Pasa userId al fetch
      setCartProducts(products.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching cart products:", error);
      setLoading(false);
    }
  };

  const handleAddToCart = async (product) => {
    try {
      const data = {
        id: product._id,
        image: product.image,
        price: product.price,
      };
      const addedProduct = await createCartProductFetch(data); // Llama al fetch para añadir producto al carrito
      console.log("Product added to cart:", addedProduct);
      fetchCartProducts(); // Actualiza la lista de productos del carrito después de añadir
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      await deleteCartProductFetch(productId); // Llama al fetch para eliminar el producto del carrito
      console.log("Product removed from cart:", productId);
      fetchCartProducts(); // Actualiza la lista de productos del carrito después de eliminar
    } catch (error) {
      console.error("Error removing product from cart:", error);
    }
  };

  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible); // Cambia el estado para mostrar u ocultar el carrito
  };

  return (
    <div className={styles.cart}>
      <FontAwesomeIcon
        icon={faShoppingCart}
        className={styles.cartIcon}
        onClick={toggleCartVisibility}
      />
      {cartVisible && ( // Renderiza el contenido del carrito si cartVisible es true
        <div className={styles.cartItems}>
          {loading ? (
            <p>Loading cart...</p>
          ) : (
            <div className={styles.productsList}>
              {cartProducts.map((product) => (
                <div key={product._id} className={styles.productItem}>
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
            </div>
          )}
        </div>
      )}
    </div>
  );
}
