import React, { useContext, useState } from "react";
import styles from "./ChangePassword.module.css";
import { ChangePasswordFetch } from "../../api/userFetch";
import { useProduct } from "../../context/ProductContext";

export default function ChangePassword() {
  const { userId } = useProduct(); // Obtén el userId del contexto

  // Aquí agregamos un console.log para mostrar userId cada vez que se carga el componente
  console.log("User ID from context:", userId);

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChangePassword = async () => {
    try {
      if (!userId) {
        console.error("User ID not found");
        return;
      }

      // Verifica que las dos contraseñas coincidan
      if (newPassword !== repeatNewPassword) {
        setMessage("Passwords do not match");
        return;
      }

      const data = { password: newPassword };

      const updatedUser = await ChangePasswordFetch(userId, data);
      console.log("User updated:", updatedUser);
      setMessage("Password changed successfully");
      setPassword("");
      setNewPassword("");
      setRepeatNewPassword("");
    } catch (error) {
      console.error("Error changing password:", error);
      setMessage("Failed to change password");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <p className={styles.header}>Change Password</p>
        <input
          className={styles.inputField}
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          className={styles.inputField}
          type="password"
          placeholder="Repeat New Password"
          value={repeatNewPassword}
          onChange={(e) => setRepeatNewPassword(e.target.value)}
        />
        <br />
        {message && <p className={styles.message}>{message}</p>}
        <br />
        <button className={styles.button} onClick={handleChangePassword}>
          Change Password
        </button>
      </div>
    </div>
  );
}
