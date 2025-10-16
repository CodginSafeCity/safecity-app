import { useState } from "react";
import { getZoneControlEntitiesService } from "../../service/control-entity-service";
import { IAvailabilityZone } from "../../types/availability-zone";

const useListZone = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getZones = async (
    controlEntityId: string
  ): Promise<IAvailabilityZone[]> => {
    try {
      setIsLoading(true);
      const response = await getZoneControlEntitiesService(controlEntityId);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { getZones, isLoading };
};

export default useListZone;
