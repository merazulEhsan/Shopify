import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  mobile: {
    required: false,
    type: Number,
  },

  address: {
    name: {
      type: String,
    },
    mobile: {
      type: Number,
    },
    email: {
      type: String,
    },
    area: {
      type: String,
    },
    division: {
      type: String,
    },
    district: {
      type: String,
    },
    thana: {
      type: String,
    },
    address: {
      type: String,
    },
  },

  profilepic: {
    required: false,
    type: String,
  },
});

export const userModel =
  mongoose?.models?.users ?? mongoose?.model("users", userSchema);
