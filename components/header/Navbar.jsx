import { useAuth } from "@/app/(home)/hooks/useAuth";
import { getUserInfo } from "@/queries/account";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LogIn } from "lucide-react";
import Link from "next/link";
import DropDownAccount from "./DropDownAccount";

const Navbar = async () => {
  const { userId, session } = await useAuth();

  const userInfo = await getUserInfo(userId);

  return (
    <nav className="md:block hidden border-t border-gray-300 dark:border-gray-700  dark:bg-cardBlack bg-nav">
      <div className="container flex items-center h-14">
        <div className="px-2 bg-white rounded-full h-10 hover:bg-secondary/25 flex items-center cursor-pointer relative group transition ease-linear duration-300">
          <div className="text-white w-8 h-8 text-center rounded-full bg-secondary p-1">
            <FontAwesomeIcon size="sm" icon={faBarsStaggered} />
          </div>
          <span className="capitalize mx-4 font-medium text-slate-600 font-openSans text-sm hover:text-secondary">
            All Categories
          </span>

          <div
            className="absolute z-50 left-0 top-12 bg-white shadow-md divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible w-[600px]"
            style={{ width: "260px" }}
          >
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img
                src="assets/images/icons/sofa.svg"
                alt="sofa"
                className="w-5 h-5 object-contain"
              />
              <span className="ml-6 text-gray-600 text-sm">Sofa</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img
                src="assets/images/icons/terrace.svg"
                alt="terrace"
                className="w-5 h-5 object-contain"
              />
              <span className="ml-6 text-gray-600 text-sm">Living Room</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img
                src="assets/images/icons/bed.svg"
                alt="bed"
                className="w-5 h-5 object-contain"
              />
              <span className="ml-6 text-gray-600 text-sm">Bedroom</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img
                src="assets/images/icons/office.svg"
                alt="Outdoor"
                className="w-5 h-5 object-contain"
              />
              <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img
                src="assets/images/icons/outdoor-cafe.svg"
                alt="outdoor"
                className="w-5 h-5 object-contain"
              />
              <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img
                src="assets/images/icons/bed-2.svg"
                alt="Mattress"
                className="w-5 h-5 object-contain"
              />
              <span className="ml-6 text-gray-600 text-sm">Mattress</span>
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between flex-grow md:pl-6 py-1.5">
          <div className="flex items-center font-openSans font-medium text-sm tracking-wide">
            <Link
              href="/"
              className="text-slate-700 dark:text-slate-300 hover:text-secondary dark:hover:text-secondary px-4 py-1.5 transition hover:bg-secondary/20  rounded-full"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-slate-700 dark:text-slate-300 hover:text-secondary dark:hover:text-secondary px-4 py-1.5 transition hover:bg-secondary/20  rounded-full"
            >
              Shop
            </Link>
            <Link
              href="#"
              className="text-slate-700 dark:text-slate-300 hover:text-secondary dark:hover:text-secondary px-4 py-1.5 transition hover:bg-secondary/20  rounded-full"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-slate-700 dark:text-slate-300 hover:text-secondary dark:hover:text-secondary px-4 py-1.5 transition hover:bg-secondary/20  rounded-full"
            >
              Contact
            </Link>
          </div>
          {session?.user ? (
            <div className="  flex items-center gap-4">
              <DropDownAccount user={userInfo} />
            </div>
          ) : (
            <Link
              href="/login"
              className="flex items-center hover:text-secondary px-3 py-2 rounded transition"
            >
              <LogIn className="mr-2 h-4 w-4" />
              <span>Log In</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
