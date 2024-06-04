import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <h1 className={styles.title}>myShop</h1>
        <div>
          <Link href="/" legacyBehavior>
            <a className={`${styles.link} ${styles.home}`}>Home</a>
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
        <Link href="/login" legacyBehavior>
          <a className={styles.loginButton}>Login</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
