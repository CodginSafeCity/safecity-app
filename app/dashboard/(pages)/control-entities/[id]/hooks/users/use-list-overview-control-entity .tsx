import { useState } from "react";
import { IUser } from "@/app/dashboard/(pages)/users/types/user";
import {
  getOverviewControlEntitiesService,
  getUserControlEntitiesService,
} from "../../service/control-entity-service";
import { IOvreView } from "../../types/overview";

const useListOverview = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getOverview = async (controlEntityId: string): Promise<IOvreView[]> => {
    try {
      setIsLoading(true);
      const response = await getOverviewControlEntitiesService(controlEntityId);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { getOverview, isLoading };
};

export default useListOverview;
