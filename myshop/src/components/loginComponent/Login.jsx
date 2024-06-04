import React from "react";
import styles from "./Login.module.css";
import Link from "next/link";

export default function Login() {
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
        <br />
        <br />
        <button className={styles.button}>Login</button>
        <div className={styles.signupContainer}>
          <p>You do not have an account?</p>
          <Link href="/signup" legacyBehavior>
            <a className={styles.signupButton}>Sign Up</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
