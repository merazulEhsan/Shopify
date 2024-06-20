import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const BestSellerCard = () => {
  return (
    <div className="flex items-center gap-6 py-4 bg-white w-full cursor-pointer group border-b border-gray-200">
      <div className="rounded w-36 h-36 overflow-clip">
        <Image
          width={500}
          height={500}
          className="group-hover:scale-110 transition ease-linear duration-200 h-full w-full"
          src="/assets/products/product8.jpg"
          alt="product 1"
          quality={100}
        />
      </div>
      <div className="font-roboto">
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
          <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
        </div>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-base text-secondary font-semibold">$45.00</p>
          <p className="text-sm text-primary line-through">$55.90</p>
        </div>
      </div>
    </div>
  );
};

export default BestSellerCard;
