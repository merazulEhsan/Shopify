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
    <nav className=" md:block hidden border-t border-gray-300 dark:border-gray-700 shadow dark:bg-cardBlack">
      <div className="container flex ">
        <div className="px-16 bg-secondary hover:bg-black flex items-center cursor-pointer relative group transition ease-linear duration-300">
          <span className="text-white">
            <FontAwesomeIcon icon={faBarsStaggered} />
          </span>
          <span className="capitalize ml-4 text-white font-poppins py-4">
            All Categories
          </span>

          <div
            className="absolute z-50 left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible w-[600px]"
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

        <div className="flex items-center justify-between flex-grow md:pl-12 py-1.5 text-base font-medium  ">
          <div className="flex items-center  capitalize ">
            <Link
              href="/"
              className="text-gray-800 dark:text-white hover:text-secondary dark:hover:text-secondary rounded px-3 py-2 transition"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-gray-800 dark:text-white hover:text-secondary dark:hover:text-secondary rounded px-3 py-2 transition"
            >
              Shop
            </Link>
            <Link
              href="#"
              className="text-gray-800 dark:text-white hover:text-secondary dark:hover:text-secondary rounded px-3 py-2 transition"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-gray-800 dark:text-white hover:text-secondary dark:hover:text-secondary rounded px-3 py-2 transition"
            >
              Contact us
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
