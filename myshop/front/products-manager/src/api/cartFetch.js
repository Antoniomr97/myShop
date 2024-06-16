export const getCartProductsFetch = async () => {
  try {
    const response = await fetch("http://localhost:9000/cart");
    if (!response.ok) {
      throw new Error("Failed to fetch cart products");
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching cart products:", error);
    throw error;
  }
};

export const deleteCartProductFetch = async (id) => {
  try {
    const response = await fetch(`http://localhost:9000/cart/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    if (response.ok) {
      console.log("Product Deleted Successfully");
    } else {
      throw new Error(data.error);
    }
    return data;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};

export const CreateCartProductFetch = async (data) => {
  try {
    const response = await fetch("http://localhost:9000/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const productCreated = await response.json();
    if (productCreated.error) {
      throw new Error(productCreated.error);
    }
    return productCreated;
  } catch (error) {
    console.error("Error creating cart product:", error);
    throw error;
  }
};
