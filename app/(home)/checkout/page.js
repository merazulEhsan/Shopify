import BreadCrumb from "@/components/BreadCrumb";

import BillingAddress from "./_components/BillingAddress";
import OrderSummary from "./_components/OrderSummary";

const CheckoutPage = () => {
  return (
    <div className="bg-ghostWhite dark:bg-customBlack">
      <BreadCrumb value="Check Out" />
      <div className="container grid grid-cols-12 items-start pb-16 gap-6 ">
        <BillingAddress />
        <OrderSummary />
      </div>
    </div>
  );
};

export default CheckoutPage;
