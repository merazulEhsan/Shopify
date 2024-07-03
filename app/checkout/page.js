import BreadCrumb from "@/components/BreadCrumb";
import BillingModal from "@/components/customeUi/BillingModal";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import { Edit } from "lucide-react";

const CheckoutPage = () => {
  return (
    <div className="bg-ghostWhite dark:bg-customBlack">
      <BreadCrumb value="Check Out" />
      <div class="container grid grid-cols-12 items-start pb-16 gap-6 ">
        <div class="md:col-span-8 col-span-full p-8 shadow rounded bg-white dark:bg-cardBlack">
          <h3 class="text-lg font-medium capitalize mb-4 border-b border-gray-300 pb-2">
            Billing Details
          </h3>

          <div className="text-sm tracking-normal ">
            <div className="flex items-center justify-between">
              <p>Deliver to : Mr. John Doe</p>
              <Dialog>
                <DialogTrigger className="p-1 text-white bg-black border border-black rounded hover:bg-white hover:text-black transition ease-linear duration-300 dark:bg-primary dark:hover:bg-white ">
                  <Edit size="16" />
                </DialogTrigger>
                <BillingModal />
              </Dialog>
            </div>
            <p>(+880) 1777093703</p>
            <p>Karatia Bazar, Tangail Sadar Karatia, Tangail - Town, Dhaka</p>
            <p>Email to john@gmail.com</p>
          </div>
        </div>

        <div class="md:col-span-4 col-span-full shadow p-6 rounded bg-white dark:bg-cardBlack">
          <h4 class="text-gray-800 dark:text-gray-300 text-lg mb-4 font-medium uppercase border-b border-gray-200 pb-2">
            order summary
          </h4>
          <div class="space-y-2">
            <div class="flex justify-between">
              <div>
                <h5 class="text-gray-800 dark:text-gray-300 font-medium">
                  Italian shape sofa
                </h5>
                <p class="text-sm text-gray-600 dark:text-gray-500">Size: M</p>
              </div>
              <p class="text-gray-600 dark:text-gray-500">x3</p>
              <p class="text-gray-800 dark:text-gray-300 font-medium">$320</p>
            </div>
            <div class="flex justify-between">
              <div>
                <h5 class="text-gray-800 dark:text-gray-300 font-medium">
                  Italian shape sofa
                </h5>
                <p class="text-sm text-gray-600 dark:text-gray-500">Size: M</p>
              </div>
              <p class="text-gray-600 dark:text-gray-500">x3</p>
              <p class="text-gray-800 dark:text-gray-300 font-medium">$320</p>
            </div>
            <div class="flex justify-between">
              <div>
                <h5 class="text-gray-800 dark:text-gray-300 font-medium">
                  Italian shape sofa
                </h5>
                <p class="text-sm text-gray-600 dark:text-gray-500">Size: M</p>
              </div>
              <p class="text-gray-600 dark:text-gray-500">x3</p>
              <p class="text-gray-800 dark:text-gray-300 font-medium">$320</p>
            </div>
            <div class="flex justify-between">
              <div>
                <h5 class="text-gray-800 dark:text-gray-300 font-medium">
                  Italian shape sofa
                </h5>
                <p class="text-sm text-gray-600 dark:text-gray-500">Size: M</p>
              </div>
              <p class="text-gray-600 dark:text-gray-500">x3</p>
              <p class="text-gray-800 dark:text-gray-300 font-medium">$320</p>
            </div>
          </div>

          <div class="flex justify-between border-b border-gray-200 mt-1 text-gray-800 dark:text-gray-300 font-medium py-3 uppercas">
            <p>subtotal</p>
            <p>$1280</p>
          </div>

          <div class="flex justify-between border-b border-gray-200 mt-1 text-gray-800 dark:text-gray-300 font-medium py-3 uppercas">
            <p>shipping</p>
            <p>Free</p>
          </div>

          <div class="flex justify-between text-gray-800 dark:text-gray-300 font-medium py-3 uppercas">
            <p class="font-semibold">Total</p>
            <p>$1280</p>
          </div>

          <button class="px-10 py-3 text-center text-sm text-white bg-black border border-black rounded uppercase font-roboto font-medium hover:bg-white hover:text-black transition ease-linear duration-300 dark:bg-primary dark:hover:bg-white w-full">
            Place order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
