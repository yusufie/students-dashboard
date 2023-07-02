import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineBookmark } from "react-icons/hi";
import { PiGraduationCap, PiSlidersBold } from "react-icons/pi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { LuFileBarChart2 } from "react-icons/lu";

import NavbarType from '@/types/NavbarType'
  

const navbarData: NavbarType[] = [
    {
        id: 1,
        icon: AiOutlineHome,
        title: "Home",
        style: { height: "20px", width: "20px" },
        href: "/",
    },
    {
        id: 2,
        icon: HiOutlineBookmark,
        title: "Course",
        style: { height: "20px", width: "20px" },
        href: "/course",
    },
    {
        id: 3,
        icon: PiGraduationCap,
        title: "Students",
        style: { height: "20px", width: "20px" },
        href: "/students",
    },
    {
        id: 4,
        icon: RiMoneyDollarBoxLine,
        title: "Payment",
        style: { height: "20px", width: "20px" },
        href: "/payment",
    },
    {
        id: 5,
        icon: LuFileBarChart2,
        title: "Reports",
        style: { height: "20px", width: "20px" },
        href: "/report",
    },
    {
        id: 6,
        icon: PiSlidersBold,
        title: "Settings",
        style: { height: "20px", width: "20px" },
        href: "/settings",
    },
];

export default navbarData;