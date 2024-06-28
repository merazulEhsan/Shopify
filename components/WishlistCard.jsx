"use client";
import { removeFromWishlist } from "@/app/actions";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

const WishlistCard = ({ wishlist, userId }) => {
  const [quantity, setQuantity] = useState(1);

  const handleRemove = async (pId, uId) => {
    await removeFromWishlist(pId, uId);
    toast.warning(`${wishlist?.title} removed from your wishlist!!`);
  };
  return (
    <div className="grid grid-flow-row  sm:grid-cols-12 justify-center items-center border-b gap-2 py-2 border-gray-300 rounded">
      <div className="sm:col-span-1 w-32 sm:w-20 h-24 mx-auto">
        <Image
          src={wishlist?.thumbnail}
          alt="product 6"
          className="w-full h-full"
          height={500}
          width={500}
        />
      </div>
      <div className=" sm:col-span-5 text-pretty">
        <h2 className="text-gray-800 font-medium uppercase">
          {wishlist?.title}
        </h2>
        <p className="text-gray-500 text-sm">
          Availability:{" "}
          <span className="text-red-600">
            {wishlist?.stock === 0 ? "Out of Stock" : "In Stock"}
          </span>
        </p>
      </div>
      <div className="sm:col-span-2 text-lg font-semibold text-center">
        ${wishlist?.discountPrice * quantity}
      </div>

      <button className="sm:col-span-2 px-6 py-2 text-center text-sm text-white bg-black border border-black rounded uppercase font-roboto font-medium hover:bg-white hover:text-black transition ease-linear duration-300">
        add to cart
      </button>
      <button
        onClick={() => handleRemove(wishlist?.id, userId)}
        className="sm:col-span-2 text-gray-500 cursor-pointer hover:text-primary space-x-1 text-center"
      >
        <FontAwesomeIcon icon={faTrash} />
        <span className="text-sm">Remove</span>
      </button>
    </div>
  );
};

export default WishlistCard;
