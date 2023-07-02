import { IconType } from "react-icons";

interface NavbarType {
  id: number;
  icon: IconType;
  title: string;
  style: React.CSSProperties;
  href: string;
}

export default NavbarType;
