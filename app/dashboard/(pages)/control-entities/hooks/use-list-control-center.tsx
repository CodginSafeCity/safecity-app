import { useState } from "react";
// import { controlCenters } from "../data/control-center";
import { IControlEntity } from "../types/control-entity";
import { getControlEntityService } from "../service/control-entity-service";

const useListControlCenters = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getControlCenters = async (): Promise<IControlEntity[]> => {
    setIsLoading(true);
    try {
      const response = await getControlEntityService();
      return response.data;
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { getControlCenters, isLoading };
};

export default useListControlCenters;
