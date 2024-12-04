import { getAllOrder } from "@/queries/adminQueries/orders";
import OrderContent from "./_components/OrderContent";

const OrdersPage = async () => {
  const allOrders = await getAllOrder();

  return (
    <div className="px-4">
      <div className="py-6">
        <h1 className="text-2xl font-openSans font-semibold">Order List</h1>
      </div>

      <div className="md:col-span-9 col-span-12  rounded-md bg-white dark:bg-cardBlack mx-auto shadow p-10">
        <OrderContent allOrders={allOrders} />
      </div>
    </div>
  );
};

export default OrdersPage;
