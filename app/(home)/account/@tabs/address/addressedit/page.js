import { useAuth } from "@/app/(home)/hooks/useAuth";
import { getAddress } from "@/queries/account";
import AddressForm from "../_components/AddressForm";

const AddressEditPage = async () => {
  const { userId } = await useAuth();

  const address = await getAddress(userId);
  return <AddressForm mode="Edit" address={address} uId={userId} />;
};

export default AddressEditPage;
