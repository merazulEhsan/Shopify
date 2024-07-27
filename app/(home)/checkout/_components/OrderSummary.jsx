"use client";

import { useCart } from "../../hooks/useCart";

const OrderSummary = () => {
  const { cartItems, subtotal, shipping, calculateTotal } = useCart();
  return (
    <div className="md:col-span-4 col-span-full shadow p-6 rounded bg-white dark:bg-cardBlack">
      <h4 className="text-gray-800 dark:text-gray-300 text-lg mb-4 font-medium uppercase border-b border-gray-200 pb-2">
        order summary
      </h4>
      <div className="space-y-2 text-sm">
        {cartItems?.map((item) => (
          <div
            key={item.id}
            className="flex justify-between gap-5 border-b border-gray-200 pb-2"
          >
            <div>
              <p className="text-gray-800 dark:text-gray-300 font-medium">
                {item?.title}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-500">
                Size: M
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-500">
              x{item?.quantity}
            </p>
            <p className="text-gray-800 dark:text-gray-300 font-medium">
              ${item?.price}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 dark:text-gray-300 font-medium py-3 uppercas text-sm">
        <p>Subtotal</p>
        <p>${calculateTotal()}</p>
      </div>

      <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 dark:text-gray-300 font-medium py-3 uppercas text-sm">
        <p>Sipping Cost</p>
        <p>${shipping}</p>
      </div>

      <div className="flex justify-between text-gray-800 dark:text-gray-300 font-medium py-3 uppercas text-sm">
        <p className="font-semibold">Total</p>
        <p>${subtotal}</p>
      </div>

      <button className="px-10 py-3 text-center text-sm text-white bg-black border border-black rounded uppercase font-roboto font-medium hover:bg-white hover:text-black transition ease-linear duration-300 dark:bg-primary dark:hover:bg-white w-full">
        Place order
      </button>
    </div>
  );
};

export default OrderSummary;
