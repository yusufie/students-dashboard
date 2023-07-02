"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
// import useAuthStore from "@/store/authStore";
import dynamic from "next/dynamic";
import styles from './page.module.css'
import Navbar from "@/components/Navbar/Navbar"
import Header from "@/components/Header/Header";
import homeData from "@/data/homeData";

const useAuthStore:any = dynamic(() => import("@/store/authStore"), {
  ssr: false,
});
export default function Home() {
  const router = useRouter();
  const isLoggedIn = useAuthStore((state: any) => state.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) {
    return null;
  }

  return (

    <main className={styles.homePage}>

        <Navbar />

      <div className={styles.homeOverview}>

        <Header />

        <div className={styles.homeBoxes}>

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
