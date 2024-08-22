"use server";

import { changeStatus } from "@/queries/adminQueries/orders";
import { revalidatePath } from "next/cache";

export async function updateStatus(id, data) {
  try {
    await changeStatus(id, data);
  } catch (error) {
    throw new Error(error);
  }
  revalidatePath("/admin/orders", "/admin/orders/orderDetails/[slug]");
}
