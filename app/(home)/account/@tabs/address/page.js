import { useAuth } from "@/app/(home)/hooks/useAuth";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { getAddress } from "@/queries/account";
import { Edit } from "lucide-react";
import BillingModal from "../../_components/BillingModal";

const AddressPage = async () => {
  const { userId } = await useAuth();

  const address = await getAddress(userId);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {address?.map((address) => (
          <div
            key={address?._id}
            className="p-6 shadow rounded bg-white text-slate-700 dark:bg-cardBlack dark:text-slate-300"
          >
            <h3 className="text-lg font-medium capitalize mb-4 border-b border-gray-300 pb-2">
              Address Book
              <span className="ml-2">
                {address?.addressType === true && (
                  <span className="text-xs px-2 py-1 bg-green-500 rounded text-white">
                    Default
                  </span>
                )}
              </span>
            </h3>

            <div className="text-sm tracking-normal ">
              <div className="flex items-center justify-between">
                <p className="font-semibold">{address?.name}</p>
                <Dialog>
                  <DialogTrigger className="p-1 text-white bg-black border border-black rounded hover:bg-white hover:text-black transition ease-linear duration-300 dark:bg-primary dark:hover:bg-white ">
                    <Edit size="16" />
                  </DialogTrigger>
                  <BillingModal mode="edit" />
                </Dialog>
              </div>
              <p>(+880) {address?.mobile}</p>
              <p>
                {address?.detailAddress}, {address?.area},
              </p>
              <p>
                {address?.thana},{address?.district},{address?.division}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-end">
        <Dialog>
          <DialogTrigger className="px-6 py-2 text-sm text-white bg-black border border-black rounded hover:bg-white hover:text-black transition ease-linear duration-300 dark:bg-primary dark:hover:bg-white mt-5">
            Add New Address
          </DialogTrigger>
          <BillingModal mode="add" userId={userId} />
        </Dialog>
      </div>
    </>
  );
};

export default AddressPage;
