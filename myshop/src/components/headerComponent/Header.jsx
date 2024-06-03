import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <h1 className={styles.title}>myShop</h1>
        <div>
          <Link href="/">
            <p className={`${styles.link} ${styles.home}`}>Home</p>
          </Link>
        </div>
        <p className={styles.profile}>Profile</p>
      </div>
      <div className={styles.rightSection}>
        <input
          type="text"
          placeholder="Search"
          className={styles.searchInput}
        />
        <button className={styles.loginButton}>Login</button>
      </div>
    </header>
  );
};

export default Header;
