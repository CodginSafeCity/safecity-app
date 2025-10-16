import { ApiResponse, httpRequest } from "@/lib/http-request";
import { IUser } from "../../../users/types/user";
import { RegisterUserControlEntityFormData } from "../../types/validation";
import { CreateZoneFormData } from "../types/validation";
import { IAvailabilityZone } from "../types/availability-zone";
import { IIncident } from "../../../tickets/types/ticket";

export const deleteControlEntityService = async (
  controlEntityId: string
): Promise<void> => {
  return httpRequest({
    url: `/control-entities/${controlEntityId}`,
    method: "DELETE",
  });
};

export const getUserControlEntitiesService = async (
  controlEntityId: string
): Promise<ApiResponse<IUser[]>> => {
  return httpRequest({
    url: `/control-entities/${controlEntityId}/users`,
    method: "GET",
  });
};

export const saveUserControlEntitiesService = async (
  controlEntityId: string,
  user: RegisterUserControlEntityFormData
): Promise<ApiResponse<IUser>> => {
  return httpRequest({
    url: `/control-entities/${controlEntityId}/users`,
    method: "POST",
    data: user,
  });
};

export const saveZoneControlEntitiesService = async (
  data: CreateZoneFormData
): Promise<ApiResponse<IAvailabilityZone>> => {
  return httpRequest({
    url: `/availability-zones`,
    method: "POST",
    data: data,
  });
};

export const getZoneControlEntitiesService = async (
  controlEntityId: string
): Promise<ApiResponse<IAvailabilityZone[]>> => {
  return httpRequest({
    url: `/control-entities/${controlEntityId}/availabilityZones`,
    method: "GET",
  });
};

export const viewZoneControlEntitiesService = async (
  id: string
): Promise<ApiResponse<IAvailabilityZone[]>> => {
  return httpRequest({
    url: `/availability-zones/${id}`,
    method: "GET",
  });
};

export const deleteZoneControlEntitiesService = async (
  id: string
): Promise<ApiResponse<IAvailabilityZone[]>> => {
  return httpRequest({
    url: `/availability-zones/${id}`,
    method: "DELETE",
  });
};

export const getIncidentsControlEntitiesService = async (
  controlEntityId: string
): Promise<ApiResponse<IIncident[]>> => {
  return httpRequest({
    url: `/control-entities/${controlEntityId}/incidents`,
    method: "GET",
  });
};
