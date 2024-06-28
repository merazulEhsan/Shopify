"use server";
import { signIn } from "@/auth";
import { addWishlist, removeWishlistProduct } from "@/data/queries";
import { revalidatePath } from "next/cache";

export async function login(formData) {
  try {
    const response = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });

    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function addToWishlist(uId, pId) {
  try {
    await addWishlist(uId, pId);
  } catch (error) {
    throw new Error(error);
  }
  revalidatePath("/wishlist");
}
export async function removeFromWishlist(uId, pId) {
  try {
    await removeWishlistProduct(uId, pId);
  } catch (error) {
    throw new Error(error);
  }
  revalidatePath("/wishlist");
}
