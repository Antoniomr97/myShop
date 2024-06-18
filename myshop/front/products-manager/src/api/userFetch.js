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

export const LoginFetch = async (data) => {
  const response = await fetch("http://localhost:9000/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  const userLogged = await response.json();
  return userLogged;
};

export const ChangePasswordFetch = async (id, data) => {
  try {
    console.log("Updating user with ID:", id);
    console.log("Data being sent:", data);

    const response = await fetch(`http://localhost:9000/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to update password");
    }

    const userUpdated = await response.json();
    console.log("User updated response:", userUpdated);
    return userUpdated;
  } catch (error) {
    console.error("Error updating password:", error);
    throw error;
  }
};
