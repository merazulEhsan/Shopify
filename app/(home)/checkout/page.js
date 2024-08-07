import { getAddress } from "@/queries/account";
import { generateOrderId } from "@/queries/orders";
import { redirect } from "next/navigation";
import { useAuth } from "../hooks/useAuth";
import BillingInfo from "./_components/BillingInfo";

const CheckOutPage = async () => {
  const { userId, session } = await useAuth();
  const orderId = await generateOrderId();
  const address = await getAddress(userId);

  if (!session) {
    redirect("/login");
  }

  return <BillingInfo uid={userId} oId={orderId} address={address} />;
};

export default CheckOutPage;
