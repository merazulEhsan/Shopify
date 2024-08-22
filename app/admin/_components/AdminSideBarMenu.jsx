"use client";

import {
  Gift,
  LayoutDashboardIcon,
  NotebookText,
  Settings,
  ShoppingCart,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  {
    icon: <LayoutDashboardIcon size="18" />,
    label: "Dashboard",
    href: "/admin",
  },
  {
    icon: <Gift size="18" />,
    label: "Products",
    href: "/admin/products",
  },
  {
    icon: <ShoppingCart size="18" />,
    label: "Categories",
    href: "/admin/categories",
  },
  {
    icon: <NotebookText size="18" />,
    label: "Orders",
    href: "/admin/orders",
    subHref: "/admin/orders/",
  },
  {
    icon: <Sparkles size="18" />,
    label: "Reviews",
    href: "/admin/reviews",
  },
  {
    icon: <Settings size="18" />,
    label: "Site Setting",
    href: "/admin/settings",
  },
];

function AdminSideBarMenu() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <ul className="list-none sidebar-nav mb-0 mt-3" id="navmenu-nav">
      {menu.map((item, i) => (
        <li className="navbar-item account-menu" key={i}>
          <Link
            href={item.href}
            className={`flex items-center py-2 my-1 rounded px-3 ${
              pathname === item?.href
                ? "bg-blue-100 dark:bg-slate-800 text-secondary"
                : "text-slate-800 dark:text-slate-300"
            }`}
          >
            <div className="flex items-center gap-x-2 ">
              <span>{item?.icon}</span>
              <h1 className="mb-0 font-medium font-openSans text-[15px]">
                {item?.label}
              </h1>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default AdminSideBarMenu;
