import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/lib/data-utils";
import { orderModel } from "@/models/order-model";
import { dbConnect } from "@/services/dbConnection";

async function createOrder(orderSubInfo, data, order) {
  await dbConnect();
  await orderModel?.create({
    uid: orderSubInfo?.uid,
    status: orderSubInfo?.status,
    date: orderSubInfo?.date,
    orderId: orderSubInfo?.orderId,
    billingAddress: data,
    orderSummary: order,
  });
}

async function getOrder(uid) {
  await dbConnect();

  const orderlist = await orderModel?.find({ uid }).lean();
  return orderlist;
}

async function generateOrderId() {
  await dbConnect();
  const id = await orderModel?.find().lean();
  return id?.length;
}

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

export { createOrder, generateOrderId, getAllOrder, getOrder, getOrderById };
