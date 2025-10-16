import { useState } from "react";
import { IIncident } from "../types/ticket";
import { getIncidentsByUserService } from "../services/incident-service";

type Props = {
  userId: string;
};
const useUserListTickets = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getUserTickets = async (userId: string): Promise<IIncident[]> => {
    try {
      const response = await getIncidentsByUserService(userId);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { getUserTickets, isLoading };
};

export default useUserListTickets;
