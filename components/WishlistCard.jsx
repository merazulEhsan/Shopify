"use client";
import { removeFromWishlist } from "@/app/(home)/actions";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { toast } from "sonner";
import CartModal from "./customeUi/CartModal";
import { Button } from "./ui/button";
import { Dialog, DialogTrigger } from "./ui/dialog";

const WishlistCard = ({ wishlist, userId }) => {
  const handleRemove = async (pId, uId) => {
    await removeFromWishlist(pId, uId);
    toast.warning(`${wishlist?.title} removed from your wishlist!!`);
  };
  return (
    <div className="grid grid-flow-row  sm:grid-cols-12 justify-center items-center border-b gap-2 py-2 border-gray-300 rounded ">
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
        <h2 className="text-gray-800 dark:text-gray-300 font-medium uppercase">
          {wishlist?.title}
        </h2>
        <p className="text-gray-500 text-sm">
          Availability:{" "}
          <span className="dark:text-green-500 text-secondary">
            {wishlist?.stock === 0 ? "Out of Stock" : "In Stock"}
          </span>
        </p>
      </div>
      <div className="sm:col-span-2 text-lg font-semibold text-center dark:text-gray-300">
        ${wishlist?.discountPrice}
      </div>

      <Dialog>
        <DialogTrigger className="sm:col-span-2 ">
          <Button className="black-button"> Add to Cart</Button>
        </DialogTrigger>
        <CartModal product={wishlist} />
      </Dialog>

      <button
        onClick={() => handleRemove(wishlist?.id, userId)}
        className="sm:col-span-2 text-gray-500 dark:text-gray-300 cursor-pointer hover:text-primary space-x-1 text-center dark:hover:text-primary"
      >
        <FontAwesomeIcon icon={faTrash} />
        <span className="text-sm">Remove</span>
      </button>
    </div>
  );
};

export default WishlistCard;
