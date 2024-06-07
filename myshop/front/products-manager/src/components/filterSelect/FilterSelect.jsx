import React, { useState } from "react";
import styles from "./FilterSelect.module.css";

const FilterSelect = ({ onChange }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isDropdownVisible2, setIsDropdownVisible2] = useState(false);
  const [isDropdownVisible3, setIsDropdownVisible3] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const toggleDropdown2 = () => {
    setIsDropdownVisible2(!isDropdownVisible2);
  };

  const toggleDropdown3 = () => {
    setIsDropdownVisible3(!isDropdownVisible3);
  };
  return (
    <div className={styles.filter}>
      <h2 className={styles.filterHeader}>Filter: </h2>
      <div>
        <h3 className={styles.price} onClick={toggleDropdown}>
          Price
        </h3>
        {isDropdownVisible && (
          <div className={styles.dropdownMenu}>
            <label className={styles.dropdownItem}>
              <input type="radio" name="precio" value="10" /> 10€ or less
            </label>
            <br />
            <label className={styles.dropdownItem}>
              <input type="radio" name="precio" value="15" /> 15€ or less
            </label>
            <br />
            <label className={styles.dropdownItem}>
              <input type="radio" name="precio" value="20" /> 20€ or less
            </label>
          </div>
        )}
      </div>
      <br />
      <div>
        <h3 onClick={toggleDropdown2} className={styles.price}>
          Gender
        </h3>
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
      <br />
      <div>
        <h3 className={styles.price} onClick={toggleDropdown3}>
          Score
        </h3>
        {isDropdownVisible3 && (
          <div className={styles.dropdownMenu}>
            <label className={styles.dropdownItem}>
              <input type="radio" name="precio" value="10" /> Best to Worst
            </label>
            <br />
            <label className={styles.dropdownItem}>
              <input type="radio" name="precio" value="15" /> Worst to Best
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSelect;
