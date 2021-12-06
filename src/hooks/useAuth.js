import { useState, useEffect } from "react";

// const user = createContext(null);
// const userContext = useContext(user)
const useAuth = () => {
  const [tokenState, setTokenState] = useState(() => {
    const initalValue = localStorage.getItem("token");
    return initalValue || null;
  });

  useEffect(() => {
    localStorage.setItem("token", tokenState);
  }, [tokenState]);

  const updateToken = (newValue) => {
    return setTokenState(newValue);
  };
  const authCheck = () => {
    return tokenState !== null ? true : false;
  };
  return [authCheck, tokenState, updateToken];
};

export default useAuth;
