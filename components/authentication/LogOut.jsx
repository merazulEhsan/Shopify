"use client";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
const Logout = () => {
  return (
    <span
      onClick={() => signOut({ callbackUrl: "http://localhost:3000/login" })}
      className="flex items-center"
    >
      <LogOut className="mr-2 h-4 w-4" />
      <span>Log out</span>
    </span>
  );
};

export default Logout;
