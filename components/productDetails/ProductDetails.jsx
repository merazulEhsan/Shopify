"use client";

import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCircleCheck, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartArrowDown, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

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
  } = product || {};

  const stars = new Array(rating).fill(0);

  const [selectSize, setSelectSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const value = localStorage.getItem("cart");
  const storage = JSON.parse(value);
  const [cart, setCart] = useState(storage || []);
  const router = useRouter();

  const handleAddToCart = () => {
    const cartItem = {
      product,
      price: quantity * discountPrice,
      quantity,
    };

    const index = cart.findIndex((cartItem) => cartItem?.product?.id === id);

    if (index === -1) {
      // Item not found in cart, add it
      const updatedCart = [...cart, cartItem];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      toast.success("Item added in your cart!");
    } else {
      // Item already exists in cart, update quantity
      toast.info("Item already exists in your cart!");
      const updatedCart = [...cart];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
    router.refresh("/layout");
  };

  return (
    <div className="container grid md:grid-cols-2 gap-6">
      <div className="">
        <Image
          width={500}
          height={500}
          src={thumbnail}
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
            />
          ))}
        </div>
      </div>

      <div className="text-left">
        <h2 className="text-2xl font-medium uppercase mb-2">{title}</h2>
        <div className="flex items-center mb-4">
          <div className="flex gap-1 text-sm text-gray-300">
            {stars.map((star, index) => (
              <span key={index} className="text-yellow-400">
                <FontAwesomeIcon icon={faStar} />
              </span>
            ))}
          </div>
          <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
        </div>
        <div className="space-y-2">
          <p className="text-gray-800 font-semibold space-x-2">
            <span>Availability: </span>
            <span className="text-green-600">In Stock</span>
          </p>
          <p className="space-x-2">
            <span className="text-gray-800 font-semibold">Brand: </span>
            <span className="text-gray-600">{brand}</span>
          </p>
          <p className="space-x-2">
            <span className="text-gray-800 font-semibold">Category: </span>
            <span className="text-gray-600">{category}</span>
          </p>
          <p className="space-x-2">
            <span className="text-gray-800 font-semibold">SKU: </span>
            <span className="text-gray-600">{sku}</span>
          </p>
        </div>
        <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
          <p className="text-xl text-primary font-semibold">${discountPrice}</p>
          <p className="text-base text-gray-400 line-through">${price}</p>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <h3 className="text-gray-800 font-semibold">Quantity:</h3>
          <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
            <button
              onClick={() => setQuantity((prev) => prev - 1)}
              className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
            >
              -
            </button>
            <div className="h-8 w-8 text-base flex items-center justify-center">
              {quantity}
            </div>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
            >
              +
            </button>
          </div>
        </div>

        <div className="mt-5 space-x-2">
          <RadioGroup
            onValueChange={setSelectSize}
            value={selectSize}
            className="flex"
          >
            <span className="text-gray-800 font-semibold">Size :</span>
            {size?.map((size, i) => (
              <div className="flex items-center space-x-2" key={i}>
                <RadioGroupItem value={size} id={`option-${i}`} />
                <Label htmlFor={`option-${i}`}>{size}</Label>
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
            className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary hover:border-primary transition"
          >
            <FontAwesomeIcon icon={faHeart} /> Wishlist
          </Link>
        </div>

        <div className="flex gap-3 mt-4 items-center">
          <p className=" font-medium font-roboto text-gray-600">Share :</p>
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

        <div className="mt-5 font-roboto text-sm text-gray-500 space-y-1">
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faCircleCheck} />{" "}
            <span>30 days easy returns</span>
          </div>
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faCircleCheck} />{" "}
            <span>Order yours before 2.30pm for same day dispatch</span>
          </div>
        </div>

        <div className="flex justify-between gap-3 items-center mt-5 px-6 py-3 bg-ghostWhite rounded text-sm">
          <p className="text-gray-600 text-pretty">
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
