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

          <li className="navbarListItem">
          <AiOutlineHome />
            <p>Home</p>
          </li>

          <li className="navbarListItem">
            <BsBookmark />
            <p>Course</p>
          </li>

          <li className="navbarListItem">
            <PiGraduationCap />
            <p>Students</p>
          </li>

          <li className="navbarListItem">
            <RiMoneyDollarBoxLine />
            <p>Payment</p>
          </li>

          <li className="navbarListItem">
            <LuFileBarChart2 />
            <p>Report</p>
          </li>

          <li className="navbarListItem">
            <PiSlidersBold />
            <p>Settings</p>
          </li>
        </ul>

      </div>

      <div className="logout">
        <p>Logout</p>
        <GoSignOut />
      </div>

    </div>
  )
}

export default Navbar