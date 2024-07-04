import Image from "next/image";
import Menu from "./Menu";

const Sidebar = async () => {
  return (
    <div className="lg:w-1/4 ">
      <div className="relative">
        <div className="p-6 rounded-md shadow dark:shadow-cardBlack bg-white dark:bg-cardBlack">
          <div className="profile-pic text-center mb-5 ">
            <div>
              <div className="relative size-28 mx-auto">
                <Image
                  src="/assets/G-logo.png"
                  className="rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800"
                  id="profile-banner"
                  alt=""
                  width={112}
                  height={112}
                />
              </div>
              <div className="mt-4">
                <h5 className="text-lg font-semibold">John Doe</h5>
                <p className="text-slate-400">johndoe@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 dark:border-gray-700">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
