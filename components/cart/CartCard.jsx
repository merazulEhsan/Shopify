"use client";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";

const CartCard = ({
  item,
  onRemoveItem,
  onHanldeIncrement,
  onHanldeDecrement,
}) => {
  const [quan, setQuantity] = useState(item?.quantity);

  const handleQuantityIncrement = () => {
    onHanldeIncrement(item?.product?.id);
    setQuantity((prev) => prev + 1);
  };
  const handleQuantityDecrement = () => {
    onHanldeDecrement(item?.product?.id);
    setQuantity((prev) => prev - 1);
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 w-20 h-32 ">
      <td className="px-6 py-3">
        <Image
          src={item?.product?.thumbnail}
          alt="product 6"
          className="w-20 h-24"
          height={500}
          width={500}
        />
      </td>
      <th
        scope="row"
        className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <h2 className="text-gray-800 text-base font-medium text-wrap">
          {item?.product?.title}
        </h2>
        <p className="text-gray-500 text-sm">
          Availability:{" "}
          <span className="text-red-600">
            {/* {wishlist?.stock === 0 ? "Out of Stock" : "In Stock"} */} In
            Stock
          </span>
        </p>
      </th>
      <td className="px-6 py-4">
        <h1 className="sm:col-span-1 text-base font-semibold text-gray-800">
          ${item?.price * quan}
        </h1>
      </td>
      <td className="px-6 py-4">
        <div className="sm:col-span-2 flex border border-gray-300 text-gray-600 rounded-full w-max ">
          <div className="flex justify-center">
            <button
              onClick={handleQuantityDecrement}
              className="h-8 w-8 text-xl cursor-pointer select-none"
            >
              -
            </button>
            <div className="h-8 w-8 text-base flex items-center justify-center">
              {quan}
            </div>
            <button
              onClick={handleQuantityIncrement}
              className="h-8 w-8 text-xl cursor-pointer select-none"
            >
              +
            </button>
          </div>
        </div>
      </td>

      <td className="px-6 py-4">
        <button
          onClick={() => onRemoveItem(item?.product?.id)}
          className=" text-gray-500 cursor-pointer hover:text-primary space-x-1 "
        >
          <FontAwesomeIcon icon={faTrash} />
          <span className="text-sm">Remove</span>
        </button>
      </td>
    </tr>
  );
};

export default CartCard;
