"use client";

import { CircleUser, KeyRound, MapPinnedIcon, NotepadText } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { icon: <CircleUser size="18" />, label: "Profile Info", href: "/account" },
  {
    icon: <MapPinnedIcon size="18" />,
    label: "Address",
    href: "/account/address",
  },
  {
    icon: <NotepadText size="18" />,
    label: "My Orders",
    href: "/account/myorders",
  },
  {
    icon: <KeyRound size="18" />,
    label: "Change Password",
    href: "/account/changepassword",
  },
];

function Menu() {
  const pathname = usePathname();
  return (
    <ul className="list-none sidebar-nav mb-0 mt-3" id="navmenu-nav">
      {menu.map((item, i) => (
        <li className="navbar-item account-menu" key={i}>
          <Link
            href={item.href}
            className={` flex items-center py-2 rounded px-3 ${
              pathname === item.href
                ? "bg-blue-50 dark:bg-slate-800 text-secondary "
                : "text-gray-800 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-customBlack"
            }`}
          >
            <div className="flex items-center gap-x-2 ">
              <span>{item?.icon}</span>
              <h6 className="mb-0 font-medium text-sm font-openSans ">
                {item?.label}
              </h6>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
