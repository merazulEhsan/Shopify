import { getUserExist } from "@/data/queries";
import { userModel } from "@/models/user-model";
import { dbConnect } from "@/services/dbConnection";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { data } = await request.json();

  const hashPassword = await bcrypt.hash(data.password, 5);

  const newUser = {
    name: data.name,
    email: data.email,
    password: hashPassword,
  };

  try {
    await dbConnect();

    const userExist = await getUserExist(data?.email);

    if (userExist) {
      return new NextResponse("User already created with this email", {
        status: 203,
      });
    }

    await userModel.create(newUser);
    return new NextResponse("User created successfully", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
