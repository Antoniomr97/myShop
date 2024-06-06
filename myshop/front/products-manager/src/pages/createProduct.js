import styles from "../styles/Home.module.css";
import Header from "../components/headerComponent/Header";
import CreateProduct from "../components/createProductComponent/createProduct";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <CreateProduct />
      </main>
    </>
  );
}
