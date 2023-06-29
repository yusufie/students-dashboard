"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // to track login status
  const router = useRouter();

  useEffect(() => {
    // If the user is already logged in, redirect them to the home page
    if (isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn, router]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate authentication logic
    // Assuming the credentials are valid, set isLoggedIn to true
    setIsLoggedIn(true);
  };

  return (
    <section className="loginPage">
      <div className="loginContainer">
        <div className="loginTitles">
          <div className="loginHeader">
            <h1>MANAGE COURSES</h1>
          </div>
          <h2>SIGN IN</h2>
          <p>Enter your credentials to access your account</p>
        </div>

        <form className="loginForm" onSubmit={handleSubmit}>
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

        <span className="resetPassword">
          Forgot your password? &nbsp; <Link href="/reset">Reset Password</Link>
        </span>
      </div>
    </section>
  );
}

export default Login;
