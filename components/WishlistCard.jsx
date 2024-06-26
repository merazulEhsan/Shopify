import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const WishlistCard = ({ wishlist }) => {
  return (
    <div className="grid grid-flow-row sm:grid-flow-col items-center border-b sm:gap-6 gap-y-2  py-4  border-gray-300 rounded justify-around">
      <div className=" sm:w-20 h-24 mx-auto">
        <Image
          src={wishlist?.thumbnail}
          alt="product 6"
          className="w-full h-full"
          height={500}
          width={500}
        />
      </div>
      <div className="mx-auto">
        <h2 className="text-gray-800 text-lg font-medium uppercase">
          {wishlist?.title}
        </h2>
        <p className="text-gray-500 text-sm">
          Availability:{" "}
          <span className="text-red-600">
            {wishlist?.stock === 0 ? "Out of Stock" : "In Stock"}
          </span>
        </p>
      </div>
      <div className=" text-lg font-semibold text-center">
        ${wishlist?.discountPrice}
      </div>
      <div className="flex justify-center border border-gray-300 text-gray-600 rounded-full w-max">
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
      <div className="text-gray-500 cursor-pointer hover:text-primary text-center space-x-1">
        <FontAwesomeIcon icon={faTrash} />
        <span className="text-sm">Remove</span>
      </div>
    </div>
  );
};

export default WishlistCard;
