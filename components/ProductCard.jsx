import {
  faCartArrowDown,
  faEye,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
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
    <div className="bg-white rounded group hover:shadow">
      <div className="relative overflow-hidden">
        <div className="h-80 lg:w-60 xl:w-72">
          <Image
            width={500}
            height={500}
            className="h-full w-full group-hover:scale-110 transition ease-linear duration-200 object-contain"
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
            <FontAwesomeIcon icon={faEye} />
          </Link>
          <Link
            href="#"
            className="text-gray-800 text-lg w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-black hover:text-white transition shadow-md"
            title="add to wishlist"
          >
            <FontAwesomeIcon icon={faHeart} />
          </Link>
          <Link
            href="#"
            className="text-gray-800 text-lg w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-black hover:text-white transition shadow-md "
            title="add to cart"
          >
            <FontAwesomeIcon icon={faCartArrowDown} />
          </Link>
        </div>
      </div>

      <div className="pt-4 pb-3 px-2">
        <p className="text-sm text-gray-600 font-medium">{category}</p>
        <Link href={`/details/${id}`}>
          <h4 className="uppercase font-medium text-base mb-2 text-gray-800 hover:text-secondary transition">
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
          <div className="text-xs text-gray-500 ml-3">(150)</div>
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
