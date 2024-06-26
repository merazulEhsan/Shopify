import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  sku: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discountPrice: {
    type: Number,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  reviews: {
    type: Array,
    required: false,
  },
  wishlist: {
    type: Array,
    required: false,
  },
  cart: {
    type: Array,
    required: false,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  image: {
    type: Array,
    required: true,
  },
});

export const productModel =
  mongoose?.models?.products || mongoose?.model("products", productSchema);
