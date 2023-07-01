import { PiGraduationCap } from "react-icons/pi"
import { BsBookmark } from 'react-icons/bs';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import { FaRegUser } from 'react-icons/fa';

const homeData = [
    {
      id: 1,
      icon: PiGraduationCap,
      title: "Students",
      count: 243,
      style: { height: "38px", width: "48px", color: "#74C1ED" },
      boxStyle: { backgroundColor: "#F0F9FF" }
    },
    {
      id: 2,
      icon: BsBookmark,
      title: "Course",
      count: 13,
      style: { height: "38px", width: "28px", color: "#EE95C5" },
      boxStyle: { backgroundColor: "#fef6fb" }
    },
    {
      id: 3,
      icon: RiMoneyDollarBoxLine,
      title: "Payment",
      count: 556000,
      currency: "₺",
      style: { height: "38px", width: "40px", color: "#F6C762" },
      boxStyle: { backgroundColor: "#fefbec" }
    },
    {
      id: 4,
      icon: FaRegUser,
      title: "Users",
      count: 3,
      style: { height: "38px", width: "34px", color: "#9fff9f" },
      boxStyle: { backgroundColor: "#f0fff0" }
    }
  ];
  
  export default homeData;
  