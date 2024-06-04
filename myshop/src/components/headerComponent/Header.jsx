import React, { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <h1 className={styles.title}>myShop</h1>
        <div>
          <Link href="/" legacyBehavior>
            <a className={`${styles.link} ${styles.home}`}>Home</a>
          </Link>
        </div>
        <div className={styles.profileContainer} onClick={toggleDropdown}>
          <p className={styles.profile}>Profile</p>
          {isDropdownVisible && (
            <div className={styles.dropdownMenu}>
              <Link href="/changePassword" legacyBehavior>
                <a className={styles.dropdownItem}>Cambiar contraseña</a>
              </Link>
            </div>
          )}
        </div>
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
