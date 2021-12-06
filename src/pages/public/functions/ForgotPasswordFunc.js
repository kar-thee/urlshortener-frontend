import axios from "axios";

const ForgotPasswordFunc = (body) => {
  const response = axios.post(process.env.REACT_APP_FORGOTPASSWORD_API, body);
  return response;
};
export default ForgotPasswordFunc;
