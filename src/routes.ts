import { FaHome, FaUsers, FaBell, FaUserMd } from "react-icons/fa";
import { AiFillWechat } from "react-icons/ai";
import { HiLightBulb } from "react-icons/hi";
import { TbFolderFilled } from "react-icons/tb";
import { MdRestaurantMenu, MdThumbsUpDown } from "react-icons/md";
import { RiFilePaper2Line } from "react-icons/ri";
import { AiOutlineBars } from "react-icons/ai";
import SettingsIcon from "@/assets/icons/settings.svg";
import WriteIcon from "@/assets/icons/writing.svg";

import type { IconType } from "react-icons";

export interface IRoute {
  path: string;
  name: string;
  iconType: "external" | "svg-component";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: IconType | any;
}

const routes: IRoute[] = [
  {
    path: "/dashboard",
    name: "Dashboard",
    iconType: "external",
    icon: FaHome,
  },
  {
    path: "/clients",
    name: "Client Management",
    iconType: "external",
    icon: FaUsers,
  },
  {
    path: "/experts",
    name: "Experts Management",
    iconType: "external",
    icon: FaUserMd,
  },
  {
    path: "/notifications",
    name: "Notifications",
    iconType: "external",
    icon: FaBell,
  },
  {
    path: "/chats",
    name: "Chat",
    iconType: "external",
    icon: AiFillWechat,
  },
  {
    path: "/purchases",
    name: "Purchase Record",
    iconType: "external",
    icon: RiFilePaper2Line,
  },
  {
    path: "/feedback",
    name: "Feedback",
    iconType: "external",
    icon: MdThumbsUpDown,
  },
  {
    path: "/users",
    name: "User Management",
    iconType: "svg-component",
    icon: SettingsIcon,
  },
  {
    path: "/service",
    name: "Service Programme",
    iconType: "external",
    icon: AiOutlineBars,
  },
  {
    path: "/meals",
    name: "Meal Item",
    iconType: "external",
    icon: MdRestaurantMenu,
  },
  {
    path: "/suggestions",
    name: "Suggested Meals",
    iconType: "external",
    icon: HiLightBulb,
  },
  {
    path: "/blog",
    name: "Blog",
    iconType: "svg-component",
    icon: WriteIcon,
  },
  {
    path: "/admins",
    name: "Admin Management",
    iconType: "external",
    icon: TbFolderFilled,
  },
  {
    path: "/account",
    name: "Account",
    iconType: "external",
    icon: FaUserMd,
  },
];

export default routes;
