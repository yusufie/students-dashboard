import Link from "next/link";
import Image from "next/image";
import styles from './navbar.module.css'

import { AiOutlineHome } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { PiGraduationCap, PiSlidersBold } from "react-icons/pi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { LuFileBarChart2 } from "react-icons/lu";
import { GoSignOut } from "react-icons/go";

function Navbar() {
  return (
    <aside className={styles.aside}>

      <div className={styles.asideHeader}>
        <h1>MANAGE COURSES</h1>
      </div>

      <div className={styles.asidePhotoContainer}>
        <Image
          src="/avatar.svg"
          alt="Picture of the author"
          width={128}
          height={128}
          className={styles.asidePhoto}
          priority
        />
      </div>

      {/* <div className=""> */}
      <h1 className={styles.asideName}>John Doe</h1>
      <p className={styles.asideRole}>Admin</p>
      {/* </div> */}

      <div className={styles.navbarMenu}>

        <div className={styles.navbarList}>

          <Link href="/">
            <div className={styles.navbarListItem}>
              <AiOutlineHome style={{ height: "20px", width: "20px" }} />
              <p>Home</p>
            </div>
          </Link>

          <Link href="/course">
            <div className={styles.navbarListItem}>
              <BsBookmark style={{ height: "17px", width: "17px" }} />
              <p>Course</p>
            </div>
          </Link>

          <Link href="/students">
            <div className={styles.navbarListItem}>
              <PiGraduationCap style={{ height: "20px", width: "20px" }} />
              <p>Students</p>
            </div>
          </Link>

          <Link href="/payment">
            <div className={styles.navbarListItem}>
              <RiMoneyDollarBoxLine style={{ height: "20px", width: "20px" }} />
              <p>Payment</p>
            </div>
          </Link>

          <Link href="/report">
            <div className={styles.navbarListItem}>
              <LuFileBarChart2 style={{ height: "20px", width: "20px" }} />
              <p>Report</p>
            </div>
          </Link>

          <Link href="/settings">
            <div className={styles.navbarListItem}>
              <PiSlidersBold style={{ height: "20px", width: "20px" }} />
              <p>Settings</p>
            </div>
          </Link>

        </div>

        <Link href="/login">
          <div className={styles.logout}>
            <p>Logout</p>
            <GoSignOut />
          </div>
        </Link>

      </div>

    </aside>
  );
}

export default Navbar;
