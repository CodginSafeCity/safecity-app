import { AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "./axios";

interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}
export const httpRequest = async ({
  url,
  method,
  data,
  params,
}: AxiosRequestConfig): Promise<any> => {
  const config: AxiosRequestConfig = {
    url,
    method,
    data,
    params,
  };

  try {
    const response: AxiosResponse<ApiResponse<any>> = await axios(config);
    return response.data;
  } catch (error: any) {
    // You can handle specific error cases here if needed
    throw error;
  }
};
