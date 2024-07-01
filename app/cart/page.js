import BreadCrumb from "@/components/BreadCrumb";
import CartTable from "@/components/cart/CartTable";

const CartPage = () => {
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
