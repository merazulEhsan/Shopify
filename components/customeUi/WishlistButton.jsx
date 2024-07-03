"use client";
import { addToWishlist } from "@/app/actions";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const WishlistButton = ({ uId, pId, session }) => {
  const router = useRouter();

  async function handleSubmit() {
    if (!session) {
      router.push("/login");
      toast.warning("Must have login to make wishlist.");
    }
    await addToWishlist(uId, pId);
    toast.success("Item added in your wishlist");
  }
  return (
    <button
      onClick={handleSubmit}
      className="text-gray-800 text-lg w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-black hover:text-white transition shadow-md"
      title="add to wishlist"
    >
      <Heart />
    </button>
  );
};

export default WishlistButton;
