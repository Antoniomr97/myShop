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
        <div className={styles.sidebar}>
          <FilterSelect />
        </div>
        <div className={styles.content}>
          <Products />
        </div>
        <div className={styles.sidebar}>
          <Cart />
        </div>
      </main>
    </>
  );
}
