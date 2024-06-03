import styles from "../styles/Home.module.css";
import FilterSelect from "../components/filterSelect/FilterSelect";
import Header from "../components/headerComponent/Header";
import Products from "../components/productsComponent/Products";
import Cart from "../components/cartComponent/Cart";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <FilterSelect />
        <Products />
        <Cart />
      </main>
    </>
  );
}
