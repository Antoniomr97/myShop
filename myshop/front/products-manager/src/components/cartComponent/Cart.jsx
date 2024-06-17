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
  const [refreshCart, setRefreshCart] = useState(false); // Estado para forzar la actualización del carrito
  const [totalPrice, setTotalPrice] = useState(0); // Estado para almacenar el precio total del carrito

  useEffect(() => {
    if (userId && cartVisible) {
      fetchCartProducts();
    }
  }, [userId, cartVisible, refreshCart]); // Agregar refreshCart a las dependencias

  useEffect(() => {
    // Calcular el precio total cada vez que cambian los productos del carrito
    calculateTotalPrice();
  }, [cartProducts]);

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

  const handleRemoveFromCart = async (productId) => {
    try {
      await deleteCartProductFetch(productId); // Llama al fetch para eliminar el producto del carrito
      console.log("Product removed from cart:", productId);
      setRefreshCart(!refreshCart); // Activa el refreshCart para forzar la actualización del carrito
    } catch (error) {
      console.error("Error removing product from cart:", error);
    }
  };

  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible); // Cambia el estado para mostrar u ocultar el carrito
    if (!cartVisible) {
      setRefreshCart(!refreshCart); // Activa el refreshCart cuando se muestra el carrito
    }
  };

  const calculateTotalPrice = () => {
    const total = cartProducts.reduce(
      (acc, product) => acc + product.productPrice,
      0
    );
    setTotalPrice(total);
  };

  const handlePay = () => {
    // Lógica para procesar el pago (a implementar)
    console.log("Paying...");
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
                      onClick={() => handleRemoveFromCart(product.productId)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className={styles.totalContainer}>
                <p>Total Price: {totalPrice}€</p>
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
