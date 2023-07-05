"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from './page.module.css'

import useAuthStore from "@/store/authStore";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false); // loading indicator
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true); // Enable loading state

    const email = (e.target as HTMLFormElement).email.value;
    const password = (e.target as HTMLFormElement).password.value;

    try {

      login(email, password);
      router.push("/");
    } catch (error) {
      console.log(error);
      setIsLoading(false); // Disable loading state
    }

  };

  useEffect(() => {
    setIsLoading(false); // Disable loading state when component mounts
  }, []);

  return (
    <section className= {styles.loginPage}>
      <div className={styles.loginContainer}>
        <div className={styles.loginTitles}>
          <div className={styles.loginHeader}>
            <h1>MANAGE COURSES</h1>
          </div>
          <h2>SIGN IN</h2>
          <p>Enter your credentials to access your account</p>
        </div>

        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password" className="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className={`${styles.loginButton} ${isLoading ? styles.loading : ""}`}
            disabled={isLoading} // Disable button when component is loading
          >
            <span>
            {isLoading ? "Signing in..." : "SIGN IN"}
            </span>
          </button>
        </form>

        <span className={styles.resetPassword}>
          Forgot your password? &nbsp; <Link href="/reset">Reset Password</Link>
        </span>
      </div>
    </section>
  );
}

export default Login;
