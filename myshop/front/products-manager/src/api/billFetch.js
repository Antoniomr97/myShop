export const CreateBillFetch = async (data) => {
  try {
    const response = await fetch("http://localhost:9000/bill", {
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
