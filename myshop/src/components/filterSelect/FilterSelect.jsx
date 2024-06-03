import React from "react";
import styles from "./FilterSelect.module.css";

const FilterSelect = ({ onChange }) => {
  return (
    <select className={styles.filter} onChange={onChange}>
      <option value="">All</option>
      <option value="10">10€ or less</option>
      <option value="20">20€ or less</option>
    </select>
  );
};

export default FilterSelect;
