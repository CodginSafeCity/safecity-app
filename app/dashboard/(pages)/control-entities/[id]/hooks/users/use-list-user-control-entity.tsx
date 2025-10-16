import { useState } from "react";
import { IUser } from "@/app/dashboard/(pages)/users/types/user";
import { getUserControlEntitiesService } from "../../service/control-entity-service";

const useListUser = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getUsers = async (controlEntityId: string): Promise<IUser[]> => {
    try {
      setIsLoading(true);
      const response = await getUserControlEntitiesService(controlEntityId);
      return response.data;
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
