import { useState } from "react";
import { getIncidentsControlEntitiesService } from "../../service/control-entity-service";
import { IIncident } from "@/app/dashboard/(pages)/tickets/types/ticket";

const useListIncident = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getIncidents = async (
    controlEntityId: string
  ): Promise<IIncident[]> => {
    try {
      setIsLoading(true);
      const response = await getIncidentsControlEntitiesService(
        controlEntityId
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { getIncidents, isLoading };
};

export default useListIncident;
