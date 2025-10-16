import { useState } from "react";
import {
  getUserService,
  getUsersService,
} from "../(pages)/users/services/user-service";
import { IUser } from "../(pages)/users/types/user";

const useShowUser = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getUser = async (userId: string): Promise<IUser> => {
    try {
      setIsLoading(true);
      const { data } = await getUserService(userId);
      console.log("User fetched:", data);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { getUser, isLoading };
};

export default useShowUser;
