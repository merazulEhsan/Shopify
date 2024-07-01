"use client";
import { useContext } from "react";
import { CartContext } from "../context";

export const useCart = () => {
  return useContext(CartContext);
};
