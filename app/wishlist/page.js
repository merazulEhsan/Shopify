import BreadCrumb from "@/components/BreadCrumb";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Wishlist = () => {
  return (
    <>
      <BreadCrumb value="Wishlist" />
      <div className="container gap-6 pt-4 pb-16 ">
        <div className="space-y-4 max-w-6xl mx-auto">
          <div className="flex items-center justify-between border-b gap-6 py-4 border-gray-300 rounded">
            <div className="w-20 h-24">
              <Image
                src="/assets/products/product9.jpg"
                alt="product 6"
                className="w-full h-full"
                height={500}
                width={500}
              />
            </div>
            <div className="w-1/4">
              <h2 className="text-gray-800 text-lg font-medium uppercase">
                Sofa
              </h2>
              <p className="text-gray-500 text-sm">
                Availability: <span className="text-red-600">Out of Stock</span>
              </p>
            </div>
            <div className=" text-lg font-semibold">$320.00</div>
            <div className="flex border border-gray-300 text-gray-600 rounded-full w-max">
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                -
              </div>
              <div className="h-8 w-8 text-base flex items-center justify-center">
                4
              </div>
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                +
              </div>
            </div>
            <button className=" px-6 py-2 text-center text-sm text-white bg-black border border-black rounded uppercase font-roboto font-medium hover:bg-white hover:text-black transition ease-linear duration-300">
              add to cart
            </button>

            <div className="text-gray-500 cursor-pointer hover:text-primary">
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>
          <div className="flex items-center justify-between border-b gap-6 py-4 border-gray-300 rounded">
            <div className="w-20 h-24">
              <Image
                src="/assets/products/product10.jpg"
                alt="product 6"
                className="w-full h-full"
                height={500}
                width={500}
              />
            </div>
            <div className="w-1/4">
              <h2 className="text-gray-800 text-lg font-medium uppercase">
                Sofa
              </h2>
              <p className="text-gray-500 text-sm">
                Availability: <span className="text-red-600">Out of Stock</span>
              </p>
            </div>
            <div className=" text-lg font-semibold">$320.00</div>
            <div className="flex border border-gray-300 text-gray-600 rounded-full w-max">
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                -
              </div>
              <div className="h-8 w-8 text-base flex items-center justify-center">
                4
              </div>
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                +
              </div>
            </div>
            <button className=" px-6 py-2 text-center text-sm text-white bg-black border border-black rounded uppercase font-roboto font-medium hover:bg-white hover:text-black transition ease-linear duration-300">
              add to cart
            </button>

            <div className="text-gray-500 cursor-pointer hover:text-primary">
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>
          <div className="text-right">
            <Link
              href="/cart"
              className="px-10 py-3 text-center text-sm text-white bg-black border border-black rounded uppercase font-roboto font-medium hover:bg-white hover:text-black transition ease-linear duration-300"
            >
              Go to Cart
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
