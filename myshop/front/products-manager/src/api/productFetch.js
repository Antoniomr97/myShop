export const getAllProducts = async () => {
  const response = await fetch("http://localhost:9000/products");
  const products = await response.json();
  return products;
};

export const getProduct = async (id) => {
  const response = await fetch(`http://localhost:9000/products/${id}`);
  const product = await response.json();
  console.log("API Response:", product);
  return product;
};

export const deleteProduct = async (id) => {
  const response = await fetch(`http://localhost:9000/products/${id}`, {
    method: "DELETE",
  });
  const productDelete = await response.json();
  if (productDelete.error) console.log(productDelete.error);
  console.log("Product Deleted");
  return;
};

export const updateProduct = async (id, data) => {
  try {
    console.log("Updating product with ID:", id); // Registro del ID
    console.log("Data being sent:", data); // Registro de los datos

    const response = await fetch(`http://localhost:9000/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const productUpdated = await response.json();
    console.log("Product updated response:", productUpdated);
    return productUpdated;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

export const CreateProductFetch = async (data) => {
  const response = await fetch("http://localhost:9000/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const productCreated = await response.json();
  if (productCreated.error) console.log(error);
  console.log(productCreated);
  return;
};
