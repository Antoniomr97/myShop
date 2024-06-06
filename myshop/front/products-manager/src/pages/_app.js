import styles from "../styles/global.css";
import { ProductProvider } from "../context/ProductContext";

export default function App({ Component, pageProps }) {
  return (
    <ProductProvider>
      <Component {...pageProps} />
    </ProductProvider>
  );
}
