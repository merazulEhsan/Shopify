import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/lib/data-utils";
import { orderModel } from "@/models/order-model";
import { dbConnect } from "@/services/dbConnection";

async function getAllOrder() {
  await dbConnect();

  const orderlist = await orderModel?.find().lean();
  return replaceMongoIdInArray(orderlist);
}
async function getOrderById(id) {
  await dbConnect();

  const order = await orderModel?.findById(id).lean();
  return replaceMongoIdInObject(order);
}
async function changeStatus(id, data) {
  console.log(id, data);
  await dbConnect();
  await orderModel?.findByIdAndUpdate(id, data);
}

export { changeStatus, getAllOrder, getOrderById };
