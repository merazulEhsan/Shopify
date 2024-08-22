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

export { createOrder, generateOrderId, getOrder };
