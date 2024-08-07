import { useAuth } from "@/app/(home)/hooks/useAuth";
import { getOrder } from "@/queries/orders";
import OrderRow from "./_components/OrderRow";

const MyOrders = async () => {
  const { userId } = await useAuth();
  const myOrder = await getOrder(userId);

  return (
    <>
      {myOrder?.length === 0 ? (
        <div className="p-6 bg-white dark:bg-cardBlack mx-auto shadow min-h-72  rounded-md">
          <div className="p-6 border border-gray-300 dark:border-gray-500 w-full h-60 flex items-center justify-center rounded-md">
            <p className="text-sm ">You have no order yet!</p>
          </div>
        </div>
      ) : (
        <div className="md:col-span-9 col-span-12  rounded bg-white dark:bg-cardBlack mx-auto shadow p-10">
          <div className="space-y-4 ">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                <thead className="text-xs text-gray-700 uppercase bg-ghostWhite dark:bg-gray-800 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Order Id
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Total
                    </th>

                    <th scope="col" className="px-6 py-3">
                      View
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {myOrder?.reverse().map((item) => (
                    <OrderRow item={item} key={item?.id} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyOrders;
