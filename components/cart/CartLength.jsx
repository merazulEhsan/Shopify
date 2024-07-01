"use client";
import { useEffect, useState } from "react";

const CartLength = () => {
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cart");
    if (storedCartItems) {
      const cartItems = JSON.parse(storedCartItems);
      setCartLength(cartItems.length);
    }
  }, [cartLength]);

  return <span>{cartLength}</span>;
};

export default CartLength;
