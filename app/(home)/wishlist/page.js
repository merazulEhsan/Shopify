import BreadCrumb from "@/components/BreadCrumb";
import WishlistCard from "@/components/WishlistCard";
import { getWishlist } from "@/data/queries";
import Link from "next/link";
import { redirect } from "next/navigation";
import { toast } from "sonner";
import { useAuth } from "../hooks/useAuth";

const Wishlist = async () => {
  const { session, userId } = await useAuth();
  const wishlist = await getWishlist(userId);

  if (!session) {
    redirect("/login");
    toast.warning("Must have login to make wishlist.");
  }

  return (
    <>
      <BreadCrumb value="My Wishlist" />
      <div className="container gap-6 pt-4 pb-16 dark:bg-customBlack ">
        {wishlist?.length !== 0 ? (
          <div className="space-y-4 max-w-6xl mx-auto">
            {wishlist?.map((wishlist) => (
              <WishlistCard
                key={wishlist.id}
                wishlist={wishlist}
                userId={userId}
              />
            ))}
            <div className="text-right pt-8">
              <Link
                href="/cart"
                className="px-10 py-3 text-center text-sm text-white bg-customBlack dark:bg-amber-400 dark:border-amber-500 dark:hover:bg-white dark:text-black
                border border-customBlack rounded uppercase font-roboto font-medium hover:bg-white hover:text-customBlack transition ease-linear duration-300"
              >
                Go to Cart
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-center my-24">
            <p className="text-2xl mb-6 font-poppins text-gray-600 font-semibold">
              No Wishlist Items Found
            </p>
            <Link
              href="/shop"
              className="px-10 py-3 text-center text-sm text-white bg-customBlack border border-customBlack rounded uppercase font-roboto font-medium hover:bg-white hover:text-customBlack transition ease-linear duration-300 dark:bg-primary dark:hover:bg-white"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Wishlist;
