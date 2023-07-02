import { IconType } from "react-icons";

interface HomeType {
    id: number;
    icon: IconType;
    title: string;
    count: number;
    currency?: string;
    style: React.CSSProperties;
    boxStyle: React.CSSProperties;
}

export default HomeType;