import { replaceMongoIdInArray } from "@/lib/data-utils";
import { userModel } from "@/models/user-model";
import { dbConnect } from "@/services/dbConnection";

async function getUserInfo(id) {
  await dbConnect();
  const user = await userModel?.findById(id).lean();

  return user;
}

async function updateProfileDetails(email, updateData) {
  await dbConnect();
  await userModel?.findOneAndUpdate({ email: email }, updateData);
}

async function createAddress(id, data) {
  await dbConnect();
  const user = await userModel?.findById(id);
  if (user) {
    user?.address?.push(data);
  }
  user.save();
}

async function getAddress(id) {
  await dbConnect();
  const user = await userModel?.findById(id).lean();
  const address = user?.address;

  return replaceMongoIdInArray(address);
}

async function updateBillingAddress(id, addressId, data) {
  await dbConnect();
  const user = await userModel?.findById(id).lean();
  const update = await user?.findOneAndUpdate(id);
  console.log(update);
}

export {
  createAddress,
  getAddress,
  getUserInfo,
  updateBillingAddress,
  updateProfileDetails,
};
