"use client";
import { useCart } from "@/app/hooks/useCart";
import Link from "next/link";
import CartCard from "./CartCard";
import SubTotalCard from "./SubTotalCard";

const CartTable = () => {
  const { cartItems, setCartItems, removeFromCart, calculateTotal } = useCart();

  return (
    <>
      {cartItems?.length !== 0 ? (
        <>
          <div className="md:col-span-9 col-span-12  rounded">
            <div className="space-y-4 ">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                  <thead className="text-xs text-gray-700 uppercase bg-whiteSmoke dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        image
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Product
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Quantity
                      </th>

                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems?.map((item) => (
                      <CartCard
                        item={item}
                        key={item?.id}
                        removeFromCart={removeFromCart}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <SubTotalCard calculateTotal={calculateTotal} />
        </>
      ) : (
        <div className=" col-span-12 text-center my-24">
          <p className="text-2xl mb-6 font-poppins text-gray-600 font-semibold">
            No Cart Items Found
          </p>
          <Link
            href="/shop"
            className="px-10 py-3 text-center text-sm text-white bg-black border border-black rounded uppercase font-roboto font-medium hover:bg-white hover:text-black transition ease-linear duration-300 dark:bg-primary dark:hover:bg-white "
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </>
  );
};

export default CartTable;
