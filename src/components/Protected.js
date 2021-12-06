import useCustomHook from "../hooks/useCustomHook";

const Protected = ({ children, redirect }) => {
  const user = useCustomHook();
  console.log(user, "user in protected");
  return 11 > 10 ? children : redirect;
};

export default Protected;

//here check whether localStorage has token
