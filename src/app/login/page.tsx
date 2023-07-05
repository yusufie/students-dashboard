"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from './page.module.css'

import useAuthStore from "@/store/authStore";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthStore();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const email = (e.target as HTMLFormElement).email.value;
    const password = (e.target as HTMLFormElement).password.value;
    login(email, password);

    router.push("/");
  };

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

          <button type="submit" className="loginButton">
            SIGN IN
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
