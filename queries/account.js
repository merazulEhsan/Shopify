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
  await userModel?.findByIdAndUpdate({ _id: id }, { address: data });
}

async function getAddress(id) {
  await dbConnect();
  const user = await userModel?.findById(id).lean();
  const address = user?.address;

  return address;
}

async function updateBillingAddress(id, data) {
  console.log(id);
  await dbConnect();
  await userModel?.findByIdAndUpdate({ _id: id }, { address: data });
}

export {
  createAddress,
  getAddress,
  getUserInfo,
  updateBillingAddress,
  updateProfileDetails,
};
