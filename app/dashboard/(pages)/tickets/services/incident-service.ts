import { ApiResponse, httpRequest } from "@/lib/http-request";
import { IIncident } from "../types/ticket";
import { CreateTicketFormData } from "../types/validation";

export const getIncidentsService = async (): Promise<
  ApiResponse<IIncident[]>
> => {
  return httpRequest({
    url: "/incidents",
    method: "GET",
  });
};

export const getIncidentsByUserService = async (
  userId: string
): Promise<ApiResponse<IIncident[]>> => {
  return httpRequest({
    url: `/incidents/user/${userId}`,
    method: "GET",
  });
};

export const createIncidentService = async (
  data: CreateTicketFormData
): Promise<ApiResponse<IIncident>> => {
  return httpRequest({
    url: "/incidents",
    method: "POST",
    data,
  });
};

export const showIncidentService = async (
  incidentId: string
): Promise<ApiResponse<IIncident>> => {
  return httpRequest({
    url: "/incidents",
    method: "GET",
  });
};

export const updateIncidentService = async (
  incidentId: string,
  data: Partial<CreateTicketFormData>
): Promise<ApiResponse<IIncident>> => {
  return httpRequest({
    url: `/incidents/${incidentId}`,
    method: "PUT",
    data,
  });
};
