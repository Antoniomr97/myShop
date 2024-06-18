import React, { useState } from "react";
import styles from "./Login.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { LoginFetch } from "../../api/userFetch";
import { useProduct } from "../../context/ProductContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUserId } = useProduct(); // OBTEIN USERID FROM CONTEXT
  const router = useRouter(); // FOR USE USEROUTER

  const handleLogin = async () => {
    try {
      const data = { email, password };
      const response = await LoginFetch(data);
      setUserId(response.data.userId); // SEND USERID TO CONTEXT
      console.log("Login Successful:", response);
      setError(""); // CLEAR ERRORS
      router.push("/"); // BACK HOME
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.containerStyle}>
      <div className={styles.loginContainer}>
        <p className={styles.header}>User</p>
        <input
          className={styles.inputField}
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className={styles.header}>Password</p>
        <input
          className={styles.inputField}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className={styles.error}>{error}</p>}
        <br />
        <br />
        <button className={styles.button} onClick={handleLogin}>
          Login
        </button>
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
