export const getAllProducts = async () => {
  const response = await fetch("http://localhost:9000/products");
  const products = await response.json();
  return products;
};
