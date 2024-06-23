import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" md:block hidden border-t border-gray-300 shadow bg-ghostWhite">
      <div className="container flex py-1.5">
        <div className="px-16 rounded bg-secondary flex items-center cursor-pointer relative group ">
          <span className="text-white">
            <FontAwesomeIcon icon={faBars} />
          </span>
          <span className="capitalize ml-4 text-white font-poppins">
            All Categories
          </span>

          <div
            className="absolute z-50 left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible w-[600px]"
            style={{ width: "300px" }}
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

        <div className="flex items-center justify-between flex-grow md:pl-12 py-3 text-base font-medium font-roboto">
          <div className="flex items-center space-x-6 capitalize">
            <Link
              href="/"
              className="text-gray-800 hover:text-secondary transition"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-gray-800 hover:text-secondary transition"
            >
              Shop
            </Link>
            <Link
              href="#"
              className="text-gray-800 hover:text-secondary transition"
            >
              About us
            </Link>
            <Link
              href="#"
              className="text-gray-800 hover:text-secondary transition"
            >
              Contact us
            </Link>
          </div>
          <Link
            href="/login"
            className="text-gray-800 hover:text-secondary transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
