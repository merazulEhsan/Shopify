"use client";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";

const CartCard = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead class="text-xs text-gray-700 uppercase bg-whiteSmoke dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="p-4"></th>
            <th scope="col" class="px-6 py-3">
              Product
            </th>
            <th scope="col" class="px-6 py-3">
              Price
            </th>
            <th scope="col" class="px-6 py-3">
              Quantity
            </th>

            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 w-20 h-32 ">
            <td class="px-6 py-3">
              <Image
                src="/assets/products/product6.jpg"
                alt="product 6"
                className="w-20 h-24"
                height={500}
                width={500}
              />
            </td>
            <th
              scope="row"
              class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <h2 className="text-gray-800 text-base font-medium">
                Lorem ipsum dolor sit.
              </h2>
              <p className="text-gray-500 text-sm">
                Availability:{" "}
                <span className="text-red-600">
                  {/* {wishlist?.stock === 0 ? "Out of Stock" : "In Stock"} */}{" "}
                  In Stock
                </span>
              </p>
            </th>
            <td class="px-6 py-4">
              <h1 className="sm:col-span-1 text-base font-semibold text-gray-800">
                {/* ${wishlist?.discountPrice * quantity} */}1000
              </h1>
            </td>
            <td class="px-6 py-4">
              <div className="sm:col-span-2 flex border border-gray-300 text-gray-600 rounded-full w-max ">
                <div className="flex justify-center">
                  <button
                    onClick={() => setQuantity((prev) => prev - 1)}
                    className="h-8 w-8 text-xl cursor-pointer select-none"
                  >
                    -
                  </button>
                  <div className="h-8 w-8 text-base flex items-center justify-center">
                    {quantity}
                  </div>
                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="h-8 w-8 text-xl cursor-pointer select-none"
                  >
                    +
                  </button>
                </div>
              </div>
            </td>

            <td class="px-6 py-4">
              <div className=" text-gray-500 cursor-pointer hover:text-primary space-x-1 ">
                <FontAwesomeIcon icon={faTrash} />
                <span className="text-sm">Remove</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="text-end mt-5">
        <button className="sm:col-span-2 px-6 py-2 text-center text-sm text-white bg-black border border-black rounded uppercase font-roboto font-medium hover:bg-white hover:text-black transition ease-linear duration-300">
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartCard;
