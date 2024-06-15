export const CreateUserFetch = async (data) => {
  const response = await fetch("http://localhost:9000/users/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  const userCreated = await response.json();
  return userCreated;
};
