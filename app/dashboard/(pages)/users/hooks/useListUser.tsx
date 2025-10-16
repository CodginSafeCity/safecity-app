import { getUsersService } from "../services/user-service";
import { useState } from "react";
import { IUser } from "../types/user";

const useListUser = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getUsers = async (): Promise<IUser[]> => {
    try {
      setIsLoading(true);
      const { data } = await getUsersService();
      // console.log("Users fetched:", data);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { getUsers, isLoading };
};

export default useListUser;
