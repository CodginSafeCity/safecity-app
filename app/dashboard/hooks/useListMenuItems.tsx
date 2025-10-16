import { LayoutDashboard, User } from "lucide-react";
import { getMenuItems } from "../services/menu-service";

const useListMenuItems = () => {
  const showMenuItems = () => {
    const data = getMenuItems();
    // console.log("Menu Items:", data);

    return data;
  };
  return { showMenuItems };
};
export default useListMenuItems;
