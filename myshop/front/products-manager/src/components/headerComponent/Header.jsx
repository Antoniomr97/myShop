import React, { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = ({ onSearch }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
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
                <a className={styles.dropdownItem}>Change password</a>
              </Link>
              <Link href="/createProduct" legacyBehavior>
                <a className={styles.dropdownItem}>Create product</a>
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
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Link href="/login" legacyBehavior>
          <a className={styles.loginButton}>Login</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
