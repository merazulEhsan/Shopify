import { auth } from "@/auth";
import { userModel } from "@/models/user-model";
import { dbConnect } from "@/services/dbConnection";

export const useAuth = async () => {
  await dbConnect();
  const session = await auth();

  const user = await userModel?.findOne({ email: session?.user?.email }).lean();

  const userId = user?._id.toString();

  return { userId, session };
};
