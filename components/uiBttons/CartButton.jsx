"use client";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const CartButton = ({ uId, product }) => {
  const router = useRouter();

  async function handleSubmit() {
    console.log(uId, product);
  }
  return (
    <button
      onClick={handleSubmit}
      className="text-gray-800 text-lg w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-black hover:text-white transition shadow-md"
      title="add to wishlist"
    >
      <FontAwesomeIcon icon={faCartArrowDown} />
    </button>
  );
};

export default CartButton;
