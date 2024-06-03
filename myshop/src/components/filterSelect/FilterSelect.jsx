import React from "react";
import styles from "./FilterSelect.module.css";

const FilterSelect = ({ onChange }) => {
  return (
    <select className={styles.filter} onChange={onChange}>
      <option value="">Todos</option>
      <option value="10">$10 o menos</option>
      <option value="20">$20 o menos</option>
    </select>
  );
};

export default FilterSelect;
