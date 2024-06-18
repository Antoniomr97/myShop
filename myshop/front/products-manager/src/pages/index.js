import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import FilterSelect from "../components/filterSelect/FilterSelect";
import Header from "../components/headerComponent/Header";
import Products from "../components/productsComponent/Products";
import Cart from "../components/cartComponent/Cart";
import { getAllProducts } from "../api/productFetch";

const Home = () => {
  const [filters, setFilters] = useState({
    price: null,
    categories: [],
    score: null,
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (filters.price) {
      filtered = filtered.filter((product) => product.price <= filters.price);
    }

    if (filters.categories.length > 0) {
      filtered = filtered.filter((product) =>
        filters.categories.includes(product.category)
      );
    }

    if (filters.score) {
      filtered.sort((a, b) =>
        filters.score === "best" ? b.score - a.score : a.score - b.score
      );
    }

    // SEARCH PRODUCT BY NAME
    if (searchTerm.trim() !== "") {
      const searchTermLowerCase = searchTerm.toLowerCase();
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTermLowerCase)
      );
    }

    setFilteredProducts(filtered);
  }, [filters, products, searchTerm]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Header onSearch={handleSearchChange} />
      <main className={styles.main}>
        <div className={styles.sidebar}>
          <FilterSelect onFilterChange={handleFilterChange} />
        </div>
        <div className={styles.content}>
          <Products filters={filters} products={filteredProducts} />
        </div>
        <div className={styles.sidebar}>
          <Cart />
        </div>
      </main>
    </>
  );
};

export default Home;
