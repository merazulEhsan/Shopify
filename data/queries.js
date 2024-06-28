import { userModel } from "@/models/user-model";
import mongoose from "mongoose";
const {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} = require("@/lib/data-utils");
const { productModel } = require("@/models/product-model");
const { dbConnect } = require("@/services/dbConnection");

// Get all Product
async function getAllProducts() {
  await dbConnect();
  const products = await productModel?.find().lean();
  return replaceMongoIdInArray(products);
}

// Product By Id
async function getProductById(id) {
  await dbConnect();
  const product = await productModel?.findById(id).lean();
  return replaceMongoIdInObject(product);
}

// Registration user exist or not
async function getUserExist(email) {
  await dbConnect();
  const user = await userModel?.find().lean();
  const findUser = user.find((user) => user.email === email);

  return findUser;
}

// add to wishlist
async function addWishlist(uId, pId) {
  await dbConnect();
  const user = await userModel?.findById(uId);
  const product = await productModel?.findById(pId);

  if (product) {
    const isUserInWishlist = await product?.wishlist?.find(
      (id) => id.toString() === uId
    );
    if (isUserInWishlist) {
      product?.wishlist?.pull(
        new mongoose.Types.ObjectId(user?._id.toString())
      );
    } else {
      product?.wishlist?.push(
        new mongoose.Types.ObjectId(user?._id.toString())
      );
    }
  }
  product.save();
}

// get all wishlist
async function getWishlist(uId) {
  await dbConnect();

  const product = await getAllProducts();
  const wishlist = product?.filter((data) =>
    data?.wishlist?.find((id) => id.toString() === uId)
  );

  return replaceMongoIdInArray(wishlist);
}

async function removeWishlistProduct(id, uId) {
  await dbConnect();
  const user = await userModel?.findById(uId);
  const product = await productModel?.findById(id);

  if (product) {
    const isUserInWishlist = await product?.wishlist?.find(
      (id) => id.toString() === uId
    );
    if (isUserInWishlist) {
      product?.wishlist?.pull(
        new mongoose.Types.ObjectId(user?._id.toString())
      );
    }
  }
  product.save();
}

export {
  addWishlist,
  getAllProducts,
  getProductById,
  getUserExist,
  getWishlist,
  removeWishlistProduct,
};
