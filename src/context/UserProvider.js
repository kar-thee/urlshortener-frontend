import React, { createContext } from "react";

import useAuth from "../hooks/useAuth";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [authCheck, token, updateToken] = useAuth();

  return (
    <UserContext.Provider value={(authCheck, token, updateToken)}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
