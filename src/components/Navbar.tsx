import Link from "next/link";
import { AiOutlineHome } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';
import { PiGraduationCap, PiSlidersBold } from 'react-icons/pi';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import { LuFileBarChart2 } from 'react-icons/lu';
import { GoSignOut } from 'react-icons/go';


function Navbar() {
  return (
    <div className='navbar'>

      <div className="navbarHeader">
        <h1>MANAGE COURSES</h1>
      </div>

      <div className="navbarPhotoContainer">
        <div className="navbarPhoto"></div>
      </div>

      {/* <div className=""> */}
        <h1 className="navbarName">John Doe</h1>
        <p className="navbarRole">Admin</p>
      {/* </div> */}

      <div className="navbarMenu">

        <ul className="navbarList">

          <Link href="/">
            <li className="navbarListItem">
            <AiOutlineHome />
              <p>Home</p>
            </li>
          </Link>

          <Link href="/course">
            <li className="navbarListItem">
              <BsBookmark />
              <p>Course</p>
            </li>
          </Link>
          
          <Link href="/students">
            <li className="navbarListItem">
              <PiGraduationCap />
              <p>Students</p>
            </li>
          </Link>

          <Link href="/payment">
          <li className="navbarListItem">
            <RiMoneyDollarBoxLine />
            <p>Payment</p>
          </li>
          </Link>

          <Link href="/report">
          <li className="navbarListItem">
            <LuFileBarChart2 />
            <p>Report</p>
          </li>
          </Link>

          <Link href="/settings">
          <li className="navbarListItem">
            <PiSlidersBold />
            <p>Settings</p>
          </li>
          </Link>

        </ul>

      </div>

      <Link href="/login">
        <div className="logout">
          <p>Logout</p>
          <GoSignOut />
        </div>
      </Link>

    </div>
  )
}

export default Navbar