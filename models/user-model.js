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

  address: [
    {
      name: {
        required: false,
        type: String,
      },
      mobile: {
        required: false,
        type: Number,
      },
      area: {
        required: false,
        type: String,
      },
      division: {
        required: false,
        type: String,
      },
      district: {
        required: false,
        type: String,
      },
      thana: {
        required: false,
        type: String,
      },
      detailAddress: {
        required: false,
        type: String,
      },
      addressType: {
        required: false,
        type: Boolean,
      },
    },
  ],

  profilepic: {
    required: false,
    type: String,
  },
});

export const userModel =
  mongoose?.models?.users ?? mongoose?.model("users", userSchema);
