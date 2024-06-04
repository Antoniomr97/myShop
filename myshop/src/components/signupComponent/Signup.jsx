import React from "react";
import styles from "./Signup.module.css";
import Link from "next/link";

export default function Signup() {
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
        <p className={styles.header}>User</p>
        <input className={styles.inputField} type="text" placeholder="Email" />
        <p className={styles.header}>Password</p>
        <input
          className={styles.inputField}
          type="password"
          placeholder="Password"
        />

        <input
          className={styles.inputField}
          type="password"
          placeholder="Repeat password"
        />
        <br />
        <br />
        <button className={styles.button}>Sign Up</button>
      </div>
    </div>
  );
}
