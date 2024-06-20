import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  faBagShopping,
  faBars,
  faBarsStaggered,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import SearchBox from "../SearchBox";

const Header = () => {
  return (
    <header className="py-4 shadow-sm bg-white">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center space-x-1">
            <Image
              src="/logo.svg"
              alt="logo"
              height={35}
              width={35}
              quality={100}
            />
            <span className="text-4xl font-roboto font-black">Shopify.</span>
          </div>
        </Link>

        <SearchBox />

        <div className="md:flex items-center space-x-4 font-roboto hidden">
          <Link
            href="/wishlist"
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className="text-xs leading-3">Wishlist</div>
            <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs border-2 border-white">
              0
            </div>
          </Link>
          <a
            href="#"
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <FontAwesomeIcon icon={faBagShopping} />
            </div>
            <div className="text-xs leading-3">Cart</div>
            <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs border-2 border-white">
              0
            </div>
          </a>
          <a
            href="#"
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="text-xs leading-3">Account</div>
          </a>
        </div>

        {/* Mobile Responsive */}
        <div className="block md:hidden p-2">
          <Sheet>
            <SheetTrigger asChild>
              <FontAwesomeIcon icon={faBarsStaggered} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <Link href="/">
                    <div className="flex items-center space-x-1">
                      <Image
                        src="/logo.svg"
                        alt="logo"
                        height={35}
                        width={35}
                        quality={100}
                      />
                      <span className="text-4xl font-roboto font-black">
                        Shopify.
                      </span>
                    </div>
                  </Link>
                </SheetTitle>
                <SheetDescription>
                  <div className="px-5 py-2 bg-secondary flex items-center cursor-pointer relative group ">
                    <span className="text-white">
                      <FontAwesomeIcon icon={faBars} />
                    </span>
                    <span className="capitalize ml-4 text-white font-normal text-base font-poppins">
                      All Categories
                    </span>
                  </div>
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-2 text-gray-800 font-roboto font-medium">
                <a href="/" className="bg-ghostWhite px-4 py-2 rounded-sm">
                  Home
                </a>
                <a href="/" className="bg-ghostWhite px-4 py-2 rounded-sm">
                  Shop
                </a>
                <a href="/" className="bg-ghostWhite px-4 py-2 rounded-sm">
                  About Us
                </a>
                <a href="/" className="bg-ghostWhite px-4 py-2 rounded-sm">
                  Contact
                </a>
                <a href="/" className="bg-ghostWhite px-4 py-2 rounded-sm">
                  Shoping Cart
                </a>
                <a href="/" className="bg-ghostWhite px-4 py-2 rounded-sm">
                  Wishlist
                </a>
                <a href="/" className="bg-ghostWhite px-4 py-2 rounded-sm">
                  My Account
                </a>
                <a href="/" className="bg-ghostWhite px-4 py-2 rounded-sm">
                  Profile
                </a>
              </div>
              <SheetFooter>
                <SheetClose asChild></SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
