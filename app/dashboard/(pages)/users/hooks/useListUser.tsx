import { users } from "../data/users";
import { userListType } from "../types/user";

const useListUser = () => {
  const getUsers = async (): Promise<userListType[]> => {
    // fetch users from API
    return users;
  };

  return { getUsers };
};

export default useListUser;
