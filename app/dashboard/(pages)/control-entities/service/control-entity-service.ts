import { ApiResponse, httpRequest } from "@/lib/http-request";
import { IControlEntity } from "../types/control-entity";
import { ControlCenterFormData } from "../types/validation";

export const getControlEntityService = async (): Promise<
  ApiResponse<IControlEntity[]>
> => {
  return httpRequest({
    url: "/control-entities",
    method: "GET",
  });
};

export const createControlEntityService = async (
  data: Partial<ControlCenterFormData>
): Promise<ApiResponse<IControlEntity>> => {
  return httpRequest({
    url: `/control-entities`,
    method: "POST",
    data,
  });
};

export const updateControlEntityService = async (
  controlEntityId: string,
  data: Partial<ControlCenterFormData>
): Promise<ApiResponse<IControlEntity>> => {
  return httpRequest({
    url: `/control-entities/${controlEntityId}`,
    method: "PUT",
    data,
  });
};

export const deleteControlEntityService = async (
  controlEntityId: string
): Promise<void> => {
  return httpRequest({
    url: `/control-entities/${controlEntityId}`,
    method: "DELETE",
  });
};
