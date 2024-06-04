import styles from "../styles/Home.module.css";
import Header from "../components/headerComponent/Header";
import Login from "../components/loginComponent/Login";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Login />
      </main>
    </>
  );
}
