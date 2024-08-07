"use client";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { CartContext } from "../context";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [shipping, setShipping] = useState(60);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cart");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const addToCart = (item) => {
    const updatedCart = [...cartItems];
    const existingItem = updatedCart.find(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItem) {
      existingItem.quantity += item.quantity;
      toast.info("Item already exists in your cart!");
    } else {
      updatedCart.push(item);
      toast.success("Item added in your cart!");
    }
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const removeFromCart = (itemId, title) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.warning(`${title} removed from your cart`);

    setCartItems(updatedCart);
  };

  const quantityIncrement = (itemId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item?.quantity + 1 };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };
  const quantityDecrement = (itemId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item?.quantity - 1 };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const calculateTotal = () => {
    return cartItems?.reduce((total, item) => {
      return total + item.quantity * item.discountPrice;
    }, 0);
  };

  const subtotal = calculateTotal() + parseInt(shipping);

  const clearCart = () => {
    setCartItems([]);
    localStorage.clear();
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        quantityIncrement,
        quantityDecrement,
        calculateTotal,
        shipping,
        setShipping,
        subtotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
