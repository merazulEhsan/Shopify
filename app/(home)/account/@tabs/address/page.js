import { useAuth } from "@/app/(home)/hooks/useAuth";
import { getAddress } from "@/queries/account";
import { MapPin, MoveRight } from "lucide-react";
import Link from "next/link";
import AddressForm from "./_components/AddressForm";

const AddressPage = async () => {
  const { userId } = await useAuth();

  const address = await getAddress(userId);

  return (
    <>
      {!address ? (
        <AddressForm mode="Add New" uId={userId} />
      ) : (
        <div className="">
          <div className="flex items-center gap-3">
            <MapPin color="gray" />
            <h1 className="text-xl font-poppins font-semibold dark:text-slate-300">
              Addresses
            </h1>
          </div>
          <p className="text-sm mb-4 text-gray-400">
            The following addresses will be used on the checkout page by
            default.
          </p>
          <div className="md:w-1/2 p-8 shadow rounded bg-white text-slate-700 dark:bg-cardBlack dark:text-slate-300">
            <div className="">
              <h1 className="text-lg font-medium mb-4 border-b border-gray-300 pb-2">
                {address?.name}
              </h1>
            </div>

            <div className="text-sm tracking-normal font-poppins space-y-2">
              <div className="grid grid-cols-12">
                <span className="text-gray-400 col-span-4">Email:</span>
                <span className="col-span-8"> {address?.email}</span>
              </div>
              <div className="grid grid-cols-12">
                <span className="text-gray-400 col-span-4">Phone Number:</span>
                <span className="col-span-8">(+880) {address?.mobile}</span>
              </div>
              <div className="grid grid-cols-12">
                <span className="text-gray-400 col-span-4">Address:</span>
                <span className="col-span-8">{address?.address}</span>
              </div>
              <div className="grid grid-cols-12">
                <span className="text-gray-400 col-span-4">Area:</span>
                <span className="col-span-8">{address?.area}</span>
              </div>
              <div className="grid grid-cols-12">
                <span className="text-gray-400 col-span-4">Thana/Upzila:</span>
                <span className="col-span-8"> {address?.thana}</span>
              </div>
              <div className="grid grid-cols-12">
                <span className="text-gray-400 col-span-4">City/District:</span>
                <span className="col-span-8"> {address?.district}</span>
              </div>
              <div className="grid grid-cols-12">
                <span className="text-gray-400 col-span-4">Division:</span>
                <span className="col-span-8"> {address?.division}</span>
              </div>
            </div>
            <Link
              href="/account/address/addressedit"
              className="text-blue-500 font-semibold flex items-center text-sm mt-5 gap-2"
            >
              <span>EDIT</span>
              <MoveRight size="20" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default AddressPage;
