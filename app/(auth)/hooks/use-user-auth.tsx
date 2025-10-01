import { userAuth } from "../data/user-auth";

export default function useUserAuth() {
  const getUserProfile = () => {
    const data = userAuth;

    console.log("Retrieved User Profile:", data);
    return data;
  };

  return { getUserProfile };
}
