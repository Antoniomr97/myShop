import styles from "../styles/Home.module.css";
import Header from "../components/headerComponent/Header";
import ChangePassword from "../components/changePasswordComponent/ChangePassword";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <ChangePassword />
      </main>
    </>
  );
}
