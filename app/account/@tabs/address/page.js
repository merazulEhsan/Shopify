import BillingModal from "@/components/customeUi/BillingModal";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Edit } from "lucide-react";

const AddressPage = () => {
  return (
    <>
      <div class="p-6 shadow rounded bg-white dark:bg-cardBlack">
        <h3 class="text-lg font-medium capitalize mb-4 border-b border-gray-300 pb-2">
          Billing Details
        </h3>

        <div className="text-sm tracking-normal ">
          <div className="flex items-center justify-between">
            <p> Mr. John Doe</p>
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

      <div className="text-end">
        <Dialog>
          <DialogTrigger className="px-6 py-2 text-sm text-white bg-black border border-black rounded hover:bg-white hover:text-black transition ease-linear duration-300 dark:bg-primary dark:hover:bg-white mt-5">
            Add New Address
          </DialogTrigger>
          <BillingModal />
        </Dialog>
      </div>
    </>
  );
};

export default AddressPage;
