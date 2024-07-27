"use client";

import { useCart } from "@/app/(home)/hooks/useCart";
import { useState } from "react";

const QuantityButton = ({ id, quantity }) => {
  const { quantityIncrement, quantityDecrement } = useCart();
  const [quan, setQuantity] = useState(quantity);

  const handleQuantityIncrement = () => {
    setQuantity((prev) => prev + 1);
    quantityIncrement(id);
  };
  const handleQuantityDecrement = () => {
    quantityDecrement(id);
    setQuantity((prev) => prev - 1);
  };
  return (
    <div className="flex justify-center">
      <button
        disabled={quan === 1}
        onClick={handleQuantityDecrement}
        className="h-8 w-8 text-xl cursor-pointer select-none"
      >
        -
      </button>
      <div className="h-8 w-8 text-base flex items-center justify-center dark:text-gray-400">
        {quan}
      </div>
      <button
        onClick={handleQuantityIncrement}
        className="h-8 w-8 text-xl cursor-pointer select-none"
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
