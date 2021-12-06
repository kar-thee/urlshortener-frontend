import axios from "axios";

const SigninFunc = (body) => {
  const response = axios.post(process.env.REACT_APP_SIGNIN_API, body);
  return response;
};
export default SigninFunc;
