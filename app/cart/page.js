import CartTable from "@/app/cart/_components/CartTable";
import BreadCrumb from "@/components/BreadCrumb";
import { redirect } from "next/navigation";
import { useAuth } from "../hooks/useAuth";

const CartPage = async () => {
  const { session, userId } = await useAuth();

  if (!session) {
    redirect("/login");
    toast.warning("Must have login to make wishlist.");
  }
  return (
    <>
      <BreadCrumb value="Shopping Cart" />
      <div className="container grid grid-cols-12  items-start justify-between pb-16 pt-4 gap-6">
        <CartTable />
      </div>
    </>
  );
};

export default CartPage;
