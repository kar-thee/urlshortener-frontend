import { useContext } from "react";

import { UserContext } from "../context/UserProvider";

const useCustomHook = () => {
  const user = useContext(UserContext);

  return user;
};

export default useCustomHook;
