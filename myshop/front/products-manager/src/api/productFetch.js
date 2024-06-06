export const getAllProducts = async () => {
  const response = await fetch("http://localhost:9000/products");
  const products = await response.json();
  return products;
};

export const getProduct = async (id) => {
  const response = await fetch(`http://localhost:9000/products/${id}`);
  const product = await response.json();
  console.log("API Response:", product); // Añadido para ver la respuesta completa de la API
  return product;
};
