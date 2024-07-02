import { useAuth } from "@/app/hooks/useAuth";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogTrigger } from "./ui/dialog";
import CartButton from "./uiBttons/CartButton";
import CartModal from "./uiBttons/CartModal";
import WishlistButton from "./uiBttons/WishlistButton";

const ProductCard = async ({ product }) => {
  const { userId, session } = await useAuth();

  const {
    thumbnail,
    title,
    description,
    rating,
    id,
    category,
    price,
    discountPrice,
  } = product || {};
  const stars = new Array(rating).fill(0);

  return (
    <div className="dark:bg-cardBlack rounded-md group hover:shadow p-4">
      <div className="relative overflow-hidden ">
        <div className="h-60 lg:w-60 dark:bg-cardBlack mx-auto overflow-clip rounded-md">
          <Image
            width={500}
            height={500}
            className="h-full w-full group-hover:scale-110 transition ease-linear duration-500 object-contain"
            src={thumbnail}
            alt={title}
            quality={100}
          />
        </div>
        <div className="absolute inset-4 space-y-2 opacity-0 group-hover:opacity-100 duration-200 ease-in transition content-center">
          <Link
            href={`/details/${id}`}
            className="text-gray-800 text-lg w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-black hover:text-white transition shadow-md"
            title="view product"
          >
            <Eye />
          </Link>

          <WishlistButton session={session} uId={userId} pId={id} />
          <Dialog>
            <DialogTrigger>
              <CartButton />
            </DialogTrigger>
            <CartModal product={product} />
          </Dialog>
        </div>
      </div>

      <div className=" px-2.5">
        <p className="text-sm text-gray-600 dark:text-gray-400 font-medium my-2">
          {category}
        </p>
        <Link href={`/details/${id}`}>
          <h4 className="uppercase font-medium text-base mb-2 text-gray-800 hover:text-secondary transition dark:text-gray-300 dark:hover:text-secondary">
            {title}
          </h4>
        </Link>
        <div className="flex items-center">
          <div className="flex gap-1 text-xs text-gray-300">
            {stars.map((star, index) => (
              <span key={index} className="text-yellow-400">
                <FontAwesomeIcon icon={faStar} />
              </span>
            ))}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-300 ml-3">
            (150) Reviews
          </div>
        </div>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-base text-secondary font-semibold">
            ${discountPrice}
          </p>
          <p className="text-sm text-primary line-through">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
