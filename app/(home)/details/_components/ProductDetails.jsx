"use client";

import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCircleCheck, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

import { useCart } from "@/app/(home)/hooks/useCart";
import { useState } from "react";
import { RadioGroup } from "../../../../components/ui/radio-group";
import QuantityButton from "../../cart/_components/QuantityButton";
import RatingStars from "./RatingStars";

const ProductDetails = ({ product }) => {
  const {
    title,
    thumbnail,
    description,
    rating,
    image,
    category,
    sku,
    price,
    discountPrice,
    brand,
    size,
    id,
    quantity,
  } = product || {};

  const { addToCart } = useCart();

  const [selectSize, setSelectSize] = useState(null);
  const [thumb, setThumb] = useState(thumbnail);

  const handleAddToCart = () => {
    const addItem = {
      title,
      thumbnail,
      description,
      rating,
      image,
      category,
      sku,
      price,
      discountPrice,
      brand,
      size: selectSize,
      id,
      quantity,
    };
    addToCart(addItem);
  };

  return (
    <div className="container grid md:grid-cols-2 gap-6 mt-4">
      <div className="">
        <Image
          width={500}
          height={500}
          src={thumb}
          alt="product"
          className="object-contain"
        />
        <div className="grid grid-cols-5 gap-4 mt-4">
          {image?.map((image, index) => (
            <Image
              key={index}
              width={500}
              height={500}
              src={image}
              alt={title}
              className="w-full cursor-pointer border border-gray-300"
              onClick={() => setThumb(image)}
            />
          ))}
        </div>
      </div>

      <div className="text-left">
        <h2 className="text-2xl font-medium uppercase mb-2">{title}</h2>
        <div className="flex items-center mb-4 space-x-2">
          <span className="text-blue-600 text-sm bg-blue-50 px-2 rounded-sm">
            In-Stock
          </span>
          <div className="flex gap-1 text-sm text-gray-300">
            <RatingStars rating={rating} />
          </div>
          <div className="text-xs text-gray-500 ml-3 dark:text-gray-300 ">
            (150 Reviews)
          </div>
        </div>
        <div className="space-y-2">
          <p className="space-x-2">
            <span className="text-gray-800 dark:text-gray-500  font-semibold">
              Brand:{" "}
            </span>
            <span className="text-gray-600 dark:text-gray-300 ">{brand}</span>
          </p>
          <p className="space-x-2">
            <span className="text-gray-800 dark:text-gray-500  font-semibold">
              Category:{" "}
            </span>
            <span className="text-gray-600 dark:text-gray-300 ">
              {category}
            </span>
          </p>
          <p className="space-x-2">
            <span className="text-gray-800 dark:text-gray-500  font-semibold">
              SKU:{" "}
            </span>
            <span className="text-gray-600 dark:text-gray-300 ">{sku}</span>
          </p>
        </div>
        <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
          <p className="text-xl text-primary font-semibold">${discountPrice}</p>
          <p className="text-base text-gray-400 line-through">${price}</p>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <h3 className="text-gray-800 dark:text-gray-500  font-semibold">
            Quantity:
          </h3>
          <div className="flex border border-gray-300 text-gray-600 dark:border-gray-500 divide-x divide-gray-300 w-max rounded-full">
            <QuantityButton id={id} quantity={quantity} />
          </div>
        </div>

        <div className="mt-5 space-x-2">
          <RadioGroup className="flex">
            <span className="text-gray-800 dark:text-gray-500  font-semibold">
              Size :
            </span>
            {size?.map((size, i) => (
              <div className="flex items-center space-x-2" key={i}>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    id={`size-${size}`}
                    value={size}
                    onClick={() => setSelectSize(size)}
                    className="hidden"
                  />
                  <label
                    htmlFor={`size-${size}`}
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 dark:text-gray-300 dark:border-gray-500 "
                  >
                    {size}
                  </label>
                </div>
                {/* <RadioGroupItem value={size} id={`option-${i}`} />
                <Label htmlFor={`option-${i}`}>{size}</Label> */}
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="mt-4 flex gap-3 border-b border-gray-200 pb-5 pt-5">
          <button
            onClick={handleAddToCart}
            className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
          >
            <FontAwesomeIcon icon={faCartArrowDown} /> Add to cart
          </button>
          <Link
            href="#"
            className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary hover:border-primary transition dark:border-gray-400 dark:text-gray-400 dark:hover:text-primary dark:hover:border-primary"
          >
            <FontAwesomeIcon icon={faHeart} /> Wishlist
          </Link>
        </div>

        <div className="flex gap-3 mt-4 items-center">
          <p className=" font-medium font-roboto text-gray-600 dark:text-gray-500 ">
            Share :
          </p>
          <Link
            href="#"
            className="text-gray-400 hover:text-gray-600 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
          >
            <i className="fa-brands fa-facebook-f"></i>
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-gray-600 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </div>

        <div className="mt-5 font-roboto text-sm text-gray-500 dark:text-gray-300 space-y-1">
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faCircleCheck} />{" "}
            <span>30 days easy returns</span>
          </div>
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faCircleCheck} />{" "}
            <span>Order yours before 2.30pm for same day dispatch</span>
          </div>
        </div>

        <div className="flex justify-between gap-3 items-center mt-5 px-6 py-3 bg-ghostWhite rounded text-sm dark:bg-gray-800">
          <p className="text-gray-600 dark:text-gray-300  text-pretty">
            Guaranteed safe & secure checkout
          </p>
          <Image
            className="w-1/2 md:w-3/5"
            height={500}
            width={500}
            src="/assets/methods.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
