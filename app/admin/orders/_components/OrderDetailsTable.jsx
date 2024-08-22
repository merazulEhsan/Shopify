import Image from "next/image";

const OrderDetailsTable = ({ orderSummary }) => {
  return (
    <div className="md:col-span-9 col-span-12  rounded bg-white dark:bg-cardBlack mx-auto shadow p-6 mt-4">
      <div className="space-y-4 ">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right dark:text-gray-400 font-openSans text-slate-600">
            <thead className="text-xs text-slate-400 uppercase bg-ghostWhite dark:bg-gray-800 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Unit Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {orderSummary?.cartItems?.map((product) => (
                <tr
                  key={product.id}
                  className="bg-white border-b dark:bg-cardBlack dark:border-gray-700   "
                >
                  <td className="px-6 py-4 flex justify-start items-center gap-4">
                    <Image
                      className="w-10 h-10 rounded"
                      src={product?.thumbnail}
                      alt="Jese image"
                      width={500}
                      height={500}
                    />

                    <span className="font-medium hover:text-secondary cursor-pointer">
                      {product?.title}
                    </span>
                  </td>
                  <td className="px-6 py-4">Tk. {product?.discountPrice}</td>
                  <td className="px-6 py-4">{product?.quantity}</td>

                  <td className="px-6 py-4">
                    Tk. {product?.discountPrice * product?.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsTable;
