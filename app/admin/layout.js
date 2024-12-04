import SearchBox from "@/components/SearchBox";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Toaster } from "sonner";
import "../globals.css";
import AdminSideBarMenu from "./_components/AdminSideBarMenu";

function Layout({ children }) {
  return (
    <html>
      <body className="bg-ghostWhite">
        <div className="h-full">
          <div className="h-[80px] flex justify-between items-center fixed inset-y-0 w-full z-50  bg-ghostWhite px-6">
            <Link href="/">
              <div className="flex items-center space-x-1">
                <Image
                  src="/logo.svg"
                  alt="logo"
                  height={35}
                  width={35}
                  quality={100}
                />
                <span className="text-3xl font-roboto font-black">
                  Shopify.
                </span>
              </div>
            </Link>
            <SearchBox />
            <div>
              <Button
                size="icon"
                className="bg-transparent text-slate-500 border hover:bg-secondary/20 hover:text-secondary transition duration-300 ease-linear"
              >
                <Bell size={18} />
              </Button>
            </div>
          </div>
          <div className="lg:flex h-full w-64 flex-col z-10 fixed inset-y-0 px-4">
            <AdminSideBarMenu />
          </div>
          <main className="pl-60 pt-[80px] h-auto py-6">{children}</main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}

export default Layout;
