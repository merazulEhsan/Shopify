import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import QuantityButton from "./QuantityButton";

const CartCard = ({ item, removeFromCart }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  w-20 h-32 ">
      <td className="px-6 py-3">
        <Image
          src={item?.thumbnail}
          alt="product 6"
          className="w-20 h-24"
          height={500}
          width={500}
        />
      </td>
      <th
        scope="row"
        className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap "
      >
        <h2 className="text-gray-800 text-base font-medium text-wrap dark:text-gray-400">
          {item?.title}
        </h2>
        <p className="text-gray-500 text-sm">
          Availability:{" "}
          <span className="text-red-600">
            {/* {wishlist?.stock === 0 ? "Out of Stock" : "In Stock"} */} In
            Stock
          </span>
        </p>
      </th>
      <td className="px-6 py-4 ">
        <h1 className="sm:col-span-1 text-base font-semibold text-gray-800 dark:text-gray-400">
          ${item?.price * item?.quantity}
        </h1>
      </td>
      <td className="px-6 py-4">
        <div className="sm:col-span-2 flex border border-gray-300 text-gray-600 rounded-full w-max ">
          <QuantityButton id={item?.id} quantity={item?.quantity} />
        </div>
      </td>

      <td className="px-6 py-4">
        <button
          onClick={() => removeFromCart(item?.id, item?.title)}
          className=" text-gray-500 cursor-pointer hover:text-primary space-x-1 dark:hover:text-primary dark:text-gray-400"
        >
          <FontAwesomeIcon icon={faTrash} />
          <span className="text-sm ">Remove</span>
        </button>
      </td>
    </tr>
  );
};

export default CartCard;
