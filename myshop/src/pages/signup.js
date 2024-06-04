import styles from "../styles/Home.module.css";
import Header from "../components/headerComponent/Header";
import Signup from "../components/signupComponent/Signup";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Signup />
      </main>
    </>
  );
}
