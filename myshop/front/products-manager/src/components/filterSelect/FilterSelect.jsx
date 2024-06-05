import React from "react";
import styles from "./FilterSelect.module.css";

const FilterSelect = ({ onChange }) => {
  return (
    <select className={styles.filter} onChange={onChange}>
      <option value="">All</option>
      <option value="10">10€ or less</option>
      <option value="15">15€ or less</option>
      <option value="20">20€ or less</option>
      <option value="rpg">RPG</option>
      <option value="action">Action</option>
      <option value="adventure">Adventure</option>
      <option value="puzzle">Puzzle</option>
      <option value="strategy">Strategy</option>
      <option value="sports">Sports</option>
    </select>
  );
};

export default FilterSelect;
