"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/authStore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from './page.module.css'
import Navbar from "@/components/Navbar/Navbar"
import Header from "@/components/Header/Header";
import homeData from "@/data/homeData";


export default function Home() {
  const { isLoggedIn, user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      // route to login page if not logged in
      router.push('/login');
    } else {
      // show welcome message if logged in
      toast(`Welcome ${user?.email}!`);
    }
  }, [isLoggedIn, router, user]);

  if (!isLoggedIn) {
    // You can return a loading indicator or a message here if needed
    return null;
  }

 return (

    <main className={styles.homePage}>
      
        <Navbar />

      <div className={styles.homeOverview}>

        <Header />

        <div className={styles.homeBoxes}>
        <ToastContainer />

        {homeData.map((box) => (

              <div className={styles.homeBox} key={box.id} style={box.boxStyle}>

                {React.createElement(box.icon, { style: box.style })}

                <p>{box.title}</p>
                
                {box.currency ? (
                  <span> {box.count} {box.currency} </span>
                ) : ( <span>{box.count}</span>
                )}

              </div>
            ))}

        </div>

      </div>

    </main>
  )
}
