import { listCitiesService } from "@/services/city-service";
import { ICity } from "@/types/city";
import { useState } from "react";

export default function useListCity() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const listCities = async (): Promise<ICity[]> => {
    setIsLoading(true);
    try {
      const response = await listCitiesService();
      return response.data;
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, listCities };
}
