import BreadCrumb from "@/components/BreadCrumb";
import {
  faCircleInfo,
  faClipboardList,
  faKey,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfilePage = () => {
  return (
    <div>
      <BreadCrumb value="Profile" />
      <main class="flex container mx-auto ">
        <div class="sm:w-60 min-h-screen w-14 transition-all ">
          <ul class="mt-11">
            <li class="hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center active text-gray-800">
              <FontAwesomeIcon icon={faUserPen} />

              <span class="ml-3 hidden sm:block  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">
                Profile
              </span>
            </li>
            <li class="hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center text-gray-800">
              <FontAwesomeIcon icon={faCircleInfo} />

              <span class="ml-3 hidden sm:block  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">
                Information
              </span>
            </li>

            <li class="hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center text-gray-800">
              <FontAwesomeIcon icon={faClipboardList} />

              <span class="ml-3 hidden sm:block  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">
                My Orders
              </span>
            </li>
            <li class="hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center text-gray-800">
              <FontAwesomeIcon icon={faKey} />

              <span class="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">
                Change Password
              </span>
            </li>
          </ul>
        </div>
        <section class="flex-1 bg-gray-900 bg-opacity-20"></section>
      </main>
    </div>
  );
};

export default ProfilePage;
