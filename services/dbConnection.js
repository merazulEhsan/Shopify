import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);

    return connect;
  } catch (error) {
    console.log(error);
  }
};

export { dbConnect };
