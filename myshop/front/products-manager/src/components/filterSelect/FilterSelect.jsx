import React, { useState } from "react";
import styles from "./FilterSelect.module.css";

const FilterSelect = ({ onChange }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isDropdownVisible2, setIsDropdownVisible2] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const toggleDropdown2 = () => {
    setIsDropdownVisible2(!isDropdownVisible2);
  };
  return (
    <div className={styles.filter}>
      <h2>Filter By: </h2>
      <div>
        <h3 className={styles.price} onClick={toggleDropdown}>
          By Price
        </h3>
        {isDropdownVisible && (
          <div className={styles.dropdownMenu}>
            <label className={styles.dropdownItem}>
              <input type="checkbox" value="10" /> 10€ or less
            </label>
            <br />
            <label className={styles.dropdownItem}>
              <input type="checkbox" value="15" /> 15€ or less
            </label>
            <br />
            <label className={styles.dropdownItem}>
              <input type="checkbox" value="20" /> 20€ or less
            </label>
          </div>
        )}
      </div>
      <br />
      <div onClick={toggleDropdown2}>
        <h3 className={styles.price}>By Gender</h3>
        {isDropdownVisible2 && (
          <div className={styles.dropdownMenu}>
            <label>
              <input
                className={styles.dropdownItem}
                type="checkbox"
                value="rpg"
              />{" "}
              RPG
            </label>
            <br />
            <label>
              <input
                className={styles.dropdownItem}
                type="checkbox"
                value="action"
              />{" "}
              Action
            </label>
            <br />
            <label className={styles.dropdownItem}>
              <input type="checkbox" value="adventure" /> Adventure
            </label>
            <br />
            <label className={styles.dropdownItem}>
              <input type="checkbox" value="puzzle" /> Puzzle
            </label>
            <br />
            <label className={styles.dropdownItem}>
              <input type="checkbox" value="puzzle" /> Puzzle
            </label>
            <br />
            <label className={styles.dropdownItem}>
              <input type="checkbox" value="strategy" /> Strategy
            </label>
            <br />
            <label className={styles.dropdownItem}>
              <input type="checkbox" value="sports" /> Sports
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSelect;
