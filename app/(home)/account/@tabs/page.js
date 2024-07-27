import { useAuth } from "@/app/(home)/hooks/useAuth";

import { getUserInfo } from "@/queries/account";
import PersonalDetails from "../_components/PersonalDetails";

const Profile = async () => {
  const { userId } = await useAuth();

  const userInfo = await getUserInfo(userId);
  return <PersonalDetails userInfo={userInfo} />;
};

export default Profile;
