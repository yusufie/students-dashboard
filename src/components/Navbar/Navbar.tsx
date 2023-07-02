import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import styles from "./navbar.module.css";
import navbarData from "@/data/navbarData";
import { GoSignOut } from "react-icons/go";

function Navbar() {
  const pathname = usePathname();

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

      <h1 className={styles.asideName}>John Doe</h1>
      <p className={styles.asideRole}>Admin</p>

      <div className={styles.navbarMenu}>
        <div className={styles.navbarList}>
          {navbarData.map((nav, index) => (
            <Link href={nav.href} key={index}>
              <div
                className={`${styles.navbarListItem} ${
                  pathname === nav.href ? styles.active : ""
                }`}
              >
                {React.createElement(nav.icon, { style: nav.style })}
                <p>{nav.title}</p>
              </div>
            </Link>
          ))}
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
