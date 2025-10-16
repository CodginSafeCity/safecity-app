import { useState } from "react";
import { IIncident } from "../types/ticket";
import { getIncidentsService } from "../services/incident-service";

const useListTickets = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getTickets = async (): Promise<IIncident[]> => {
    try {
      const response = await getIncidentsService();
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { getTickets, isLoading };
};

export default useListTickets;
