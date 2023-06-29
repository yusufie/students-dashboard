"use client";
import React from "react";
import { useRouter } from "next/navigation";

import Navbar from "@/components/Navbar"
import Header from "@/components/Header";
import { PiGraduationCap } from "react-icons/pi"
import { BsBookmark } from 'react-icons/bs';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import { FaRegUser } from 'react-icons/fa';


export default function Home() {

  const router = useRouter();

  // Check if the user is authenticated
  const isLoggedIn = true; // Replace with your authentication check logic

  // If the user is not logged in, redirect them to the login page
  if (!isLoggedIn) {
    router.push("/login");
    return null;
  }



  return (
    
    <main className="homePage">

      <div className="">
        <Navbar />
      </div>

      <div className="homeOverview">

        <Header />

        <div className="homeBoxes">

          <div className="studentsBox">
            <PiGraduationCap style={{height:"38px", width:"48px", color:"#74C1ED"}}/>
            <p className="mt-4">Students</p>
            <span className="number">243</span>
          </div>

          <div className="coursesBox">
            <BsBookmark style={{height:"38px", width:"28px", color:"#EE95C5"}} />
            <p className="mt-4">Course</p>
            <span className="number">13</span>
          </div>

          <div className="paymentsBox">
            <RiMoneyDollarBoxLine style={{height:"38px", width:"40px", color:"#F6C762"}}/>
            <p className="mt-4">Payment</p>
            <span className="number"> 556,000₺</span>
          </div>

          <div className="usersBox">
            <FaRegUser style={{height:"38px", width:"34px", color:"#9fff9f"}} />
            <p className="mt-4">Users</p>
            <span className="number">3</span>
          </div>

        </div>

      </div>

    </main>
  )
}
