import Image from "next/image";
import { Toaster } from "sonner";
import "../globals.css";
import AdminSideBarMenu from "./_components/AdminSideBarMenu";

function Layout({ children }) {
  return (
    <html>
      <body className="bg-ghostWhite">
        <div className="h-full">
          <div className="h-[60px] lg:pl-60 fixed inset-y-0 w-full z-50 shadow bg-white">
            Nav
          </div>
          <div className="lg:flex h-full w-60 flex-col fixed inset-y-0 z-50 bg-white shadow px-4">
            <div className="flex items-center space-x-1 py-3">
              <Image
                src="/logo.svg"
                alt="logo"
                height={35}
                width={35}
                quality={100}
              />
              <span className="text-4xl font-roboto font-black">Shopify.</span>
            </div>
            <AdminSideBarMenu />
          </div>
          <main className="lg:pl-60 pt-[60px] h-full py-6">{children}</main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}

export default Layout;
