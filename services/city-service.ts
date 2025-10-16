import { httpRequest } from "../lib/http-request";

export const listCitiesService = async () => {
  return httpRequest({
    url: "/city",
    method: "GET",
  });
};
