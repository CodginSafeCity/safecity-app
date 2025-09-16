import { AxiosRequestConfig } from "axios";
import axios from "./axios";

export const httpRequest = async ({
  url,
  method,
  data,
  params,
}: AxiosRequestConfig): Promise<any> => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const headers = token ? { Authorization: `Bearer ${token}` } : {};

  const config: AxiosRequestConfig = {
    url,
    method,
    data,
    params,
    headers,
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};
