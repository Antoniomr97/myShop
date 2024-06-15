import React, { useState } from "react";
import styles from "./FilterSelect.module.css";

const FilterSelect = ({ onFilterChange }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isDropdownVisible2, setIsDropdownVisible2] = useState(false);
  const [isDropdownVisible3, setIsDropdownVisible3] = useState(false);
  const [filters, setFilters] = useState({
    price: null,
    categories: [],
    score: null,
  });

  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);
  const toggleDropdown2 = () => setIsDropdownVisible2(!isDropdownVisible2);
  const toggleDropdown3 = () => setIsDropdownVisible3(!isDropdownVisible3);

  const handleSingleSelectChange = (field, value) => {
    const newFilters = {
      ...filters,
      [field]: filters[field] === value ? null : value,
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    const newCategories = filters.categories.includes(value)
      ? filters.categories.filter((category) => category !== value)
      : [...filters.categories, value];
    const newFilters = { ...filters, categories: newCategories };
    setFilters(newFilters);
    onFilterChange(newFilters);
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
              <input
                type="checkbox"
                checked={filters.price === "10"}
                onChange={() => handleSingleSelectChange("price", "10")}
              />{" "}
              10€ or less
            </label>
            <br />
            <label className={styles.dropdownItem}>
              <input
                type="checkbox"
                checked={filters.price === "15"}
                onChange={() => handleSingleSelectChange("price", "15")}
              />{" "}
              15€ or less
            </label>
            <br />
            <label className={styles.dropdownItem}>
              <input
                type="checkbox"
                checked={filters.price === "20"}
                onChange={() => handleSingleSelectChange("price", "20")}
              />{" "}
              20€ or less
            </label>
          </div>
        )}
      </div>
      <br />
      <div>
        <h3 onClick={toggleDropdown2} className={styles.price}>
          Category
        </h3>
        {isDropdownVisible2 && (
          <div className={styles.dropdownMenu}>
            <label>
              <input
                className={styles.dropdownItem}
                type="checkbox"
                value="RPG"
                checked={filters.categories.includes("RPG")}
                onChange={handleCategoryChange}
              />{" "}
              RPG
            </label>
            <br />
            <label>
              <input
                className={styles.dropdownItem}
                type="checkbox"
                value="Action"
                checked={filters.categories.includes("Action")}
                onChange={handleCategoryChange}
              />{" "}
              Action
            </label>
            <br />
            <label className={styles.dropdownItem}>
              <input
                type="checkbox"
                value="Adventure"
                checked={filters.categories.includes("Adventure")}
                onChange={handleCategoryChange}
              />{" "}
              Adventure
            </label>
            <br />
            <label className={styles.dropdownItem}>
              <input
                type="checkbox"
                value="Puzzle"
                checked={filters.categories.includes("Puzzle")}
                onChange={handleCategoryChange}
              />{" "}
              Puzzle
            </label>
            <br />
            <label className={styles.dropdownItem}>
              <input
                type="checkbox"
                value="Strategy"
                checked={filters.categories.includes("Strategy")}
                onChange={handleCategoryChange}
              />{" "}
              Strategy
            </label>
            <br />
            <label className={styles.dropdownItem}>
              <input
                type="checkbox"
                value="Sports"
                checked={filters.categories.includes("Sports")}
                onChange={handleCategoryChange}
              />{" "}
              Sports
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
              <input
                type="checkbox"
                checked={filters.score === "best"}
                onChange={() => handleSingleSelectChange("score", "best")}
              />{" "}
              Best to Worst
            </label>
            <br />
            <label className={styles.dropdownItem}>
              <input
                type="checkbox"
                checked={filters.score === "worst"}
                onChange={() => handleSingleSelectChange("score", "worst")}
              />{" "}
              Worst to Best
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSelect;
