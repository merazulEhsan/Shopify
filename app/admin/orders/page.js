import { getAllOrder } from "@/queries/orders";
import OrderRow from "./_components/OrderRow";

const OrdersPage = async () => {
  const allOrders = await getAllOrder();
  console.log(allOrders);

  return (
    <div className="px-4">
      <div className="py-6">
        <h1 className="text-2xl font-openSans font-semibold">Order List</h1>
      </div>

      <div className="md:col-span-9 col-span-12  rounded bg-white dark:bg-cardBlack mx-auto shadow p-10">
        <div className="space-y-4 ">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
              <thead className="text-xs text-slate-400 uppercase bg-ghostWhite dark:bg-gray-800 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Order Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Customer
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {allOrders
                  ?.map((order) => <OrderRow key={order?.id} order={order} />)
                  .reverse()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
