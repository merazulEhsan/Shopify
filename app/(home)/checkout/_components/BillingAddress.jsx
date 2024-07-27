import { useAuth } from "@/app/(home)/hooks/useAuth";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { getAddress } from "@/queries/account";
import { Edit } from "lucide-react";
import BillingModal from "../../account/_components/BillingModal";

const BillingAddress = async () => {
  const { userId } = await useAuth();
  const address = await getAddress(userId);
  const billingAddress = address?.find((bill) => bill.addressType === true);

  return (
    <div className="md:col-span-8 col-span-full p-8 shadow rounded bg-white dark:bg-cardBlack">
      <h3 className="text-lg font-medium capitalize mb-4 border-b border-gray-300 pb-2">
        Billing Details
      </h3>

      <div className="text-sm tracking-normal ">
        <div className="flex items-center justify-between">
          <p>Deliver to : {billingAddress?.name}</p>
          <Dialog>
            <DialogTrigger className="p-1 text-white bg-black border border-black rounded hover:bg-white hover:text-black transition ease-linear duration-300 dark:bg-primary dark:hover:bg-white ">
              <Edit size="16" />
            </DialogTrigger>
            <BillingModal
              billingAddress={billingAddress}
              mode="edit"
              uId={userId}
            />
          </Dialog>
        </div>
        <p>(+880) {billingAddress?.mobile}</p>
        <p>
          {billingAddress?.detailAddress},{billingAddress?.district}
        </p>
        <p>
          {billingAddress?.area}, {billingAddress?.thana}
        </p>
      </div>
    </div>
  );
};

export default BillingAddress;
