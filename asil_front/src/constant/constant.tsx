import { ReactNode } from "react";
import { FiMonitor } from "react-icons/fi";
import { HiIdentification } from "react-icons/hi2";
import { FaUser, FaUsers, FaQuestionCircle } from "react-icons/fa";

export type MenuItem = {
  icon: ReactNode;
  text: string;
  path: string;
};

export const menuItems: MenuItem[] = [
  {
    icon: <FiMonitor />,
    text: "Ana Sayfa",
    path: "/homepage",
  },
  {
    icon: <HiIdentification />,
    text: "Gruplar",
    path: "/groups",
  },
  {
    icon: <FaUser />,
    text: "Liderler",
    path: "/leaders",
  },
  {
    icon: <FaUsers />,
    text: "Öğrenciler",
    path: "/students",
  },
  {
    icon: <FaQuestionCircle />,
    text: "Form Kuralları",
    path: "/form-rules",
  },
];

export const footerItems: MenuItem[] = [
  {
    icon: <FaQuestionCircle />,
    text: "Hakkımızda",
    path: "/about",
  },
  {
    icon: <FaQuestionCircle />,
    text: "İletişim",
    path: "/contact",
  },
];
