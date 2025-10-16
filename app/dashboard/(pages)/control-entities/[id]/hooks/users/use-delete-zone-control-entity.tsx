import { useState } from "react";
import { deleteZoneControlEntitiesService } from "../../service/control-entity-service";
import { IAvailabilityZone } from "../../types/availability-zone";

const useDeleteZone = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const deleteZone = async (zoneId: string): Promise<void> => {
    try {
      setIsLoading(true);
      await deleteZoneControlEntitiesService(zoneId);
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { deleteZone, isLoading };
};

export default useDeleteZone;
