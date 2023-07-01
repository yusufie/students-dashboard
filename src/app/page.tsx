"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
// import useAuthStore from "@/store/authStore";
import dynamic from "next/dynamic";
import Head from 'next/head';
import './home.css';
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
      <>

      <Head>
        <link rel="preload" href="./home.css" as="style"
          onLoad={() => {
            "this.onload=null;this.rel='stylesheet'"
          }}
        />
      </Head>

    <main className="homePage">

        <Navbar />

      <div className="homeOverview">

        <Header />

        <div className="homeBoxes">

        {homeData.map((box) => (

              <div className="homeBox" key={box.id} style={box.boxStyle}>

                {React.createElement(box.icon, {
                  style: box.style
                })}
                <p>{box.title}</p>
                {box.currency ? (
                  <span> {box.count} {box.currency} </span>
                ) : (
                  <span>{box.count}</span>
                )}

              </div>
            ))}

        </div>

      </div>

    </main>
    </>
  )
}
