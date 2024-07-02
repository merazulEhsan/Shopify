import { ShoppingCart } from "lucide-react";

const CartButton = () => {
  return (
    <div
      className="text-gray-800 text-lg w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-black hover:text-white transition shadow-md"
      title="add to wishlist"
    >
      <ShoppingCart />
    </div>
  );
};

export default CartButton;
