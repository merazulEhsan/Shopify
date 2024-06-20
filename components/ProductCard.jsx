import {
  faCartShopping,
  faEye,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const ProductCard = () => {
  return (
    <div className="bg-white rounded group">
      <div className="relative">
        <div className="h-80 lg:w-60 xl:w-72 overflow-hidden">
          <Image
            width={500}
            height={500}
            className="h-full w-full group-hover:scale-110 transition ease-linear duration-200"
            src="/assets/products/product6.jpg"
            alt="product 1"
            quality={100}
          />
        </div>
        <div className="absolute inset-0 space-y-2 opacity-0 group-hover:opacity-100 duration-200 ease-in transition content-center left-3">
          <Link
            href="#"
            className="text-gray-800 text-lg w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-black hover:text-white transition"
            title="view product"
          >
            <FontAwesomeIcon icon={faEye} />
          </Link>
          <Link
            href="#"
            className="text-gray-800 text-lg w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-black hover:text-white transition shadow"
            title="add to wishlist"
          >
            <FontAwesomeIcon icon={faHeart} />
          </Link>
          <Link
            href="#"
            className="text-gray-800 text-lg w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-black hover:text-white transition shadow "
            title="add to cart"
          >
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </div>
      </div>
      <div className="pt-4 pb-3 ">
        <p className="text-sm text-gray-600 font-medium">Headphones</p>
        <Link href="#">
          <h4 className="uppercase font-medium text-base mb-2 text-gray-800 hover:text-secondary transition">
            Guyer Chair
          </h4>
        </Link>
        <div className="flex items-center">
          <div className="flex gap-1 text-xs text-yellow-400">
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
          </div>
          <div className="text-xs text-gray-500 ml-3">(150)</div>
        </div>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-base text-secondary font-semibold">$45.00</p>
          <p className="text-sm text-primary line-through">$55.90</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
