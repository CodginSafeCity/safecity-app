import { controlCenters } from "../data/control-center";
import { ControlCenterWithId } from "../types/control-center";

const useListControlCenters = () => {
  const getControlCenters = async (): Promise<ControlCenterWithId[]> => {
    // fetch control centers from API
    return controlCenters;
  };

  return { getControlCenters };
};

export default useListControlCenters;
