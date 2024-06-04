import React from "react";
import styles from "./ChangePassword.module.css";

export default function ChangePassword() {
  const containerStyle = {
    height: "75vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={containerStyle}>
      <div className={styles.loginContainer}>
        <p className={styles.header}>Password</p>
        <input
          className={styles.inputField}
          type="password"
          placeholder="Password"
        />

        <input
          className={styles.inputField}
          type="password"
          placeholder="New password"
        />
        <br />
        <br />
        <button className={styles.button}>Change</button>
      </div>
    </div>
  );
}
