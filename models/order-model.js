import mongoose, { Schema } from "mongoose";

const oederSchema = new Schema({
  uid: { type: String },
  date: { type: String },
  orderId: { type: String },
  status: { type: String },

  billingAddress: {
    fullName: { type: String },
    phone: { type: Number },
    email: { type: String },
    division: { type: String },
    district: { type: String },
    thana: { type: String },
    area: { type: String },
    detailAddress: { type: String },
    note: { type: String },
  },
  orderSummary: {
    cartItems: { type: Array },
    shippingFee: { type: Number },
    subtotal: { type: Number },
    total: { type: Number },
    payMethod: { type: String },
  },
});

export const orderModel =
  mongoose?.models?.orders || mongoose?.model("orders", oederSchema);
