import { Heart, Keyboard, ShoppingCart, User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Logout from "../authentication/LogOut";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const DropDownAccount = ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-2">
          <Avatar className="h-10 w-10">
            <AvatarImage src="" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="text-gray-600 dark:text-gray-400 leading-none font-roboto">
            <p className="text-xs">Hello, {user?.name}</p>
            <p className="text-sm cursor-pointer font-medium">
              Your Account <FontAwesomeIcon icon={faChevronDown} size="xs" />
            </p>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52 bg-white dark:bg-cardBlack dark:border-gray-800 px-4">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/profile">
            <DropdownMenuItem className="dark:hover:text-customBlack">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/cart">
            <DropdownMenuItem className="dark:hover:text-customBlack">
              <ShoppingCart className="mr-2 h-4 w-4" />
              <span>Cart</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/wishlist">
            <DropdownMenuItem className="dark:hover:text-customBlack">
              <Heart className="mr-2 h-4 w-4" />
              <span>Wishlist</span>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem className="dark:hover:text-customBlack">
            <Keyboard className="mr-2 h-4 w-4" />
            <span>Keyboard shortcuts</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem className="dark:hover:text-customBlack">
          <Logout />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownAccount;
