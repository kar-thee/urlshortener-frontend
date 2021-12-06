import axios from "axios";

const ResetPasswordFunc = (body) => {
  const response = axios.post(process.env.REACT_APP_RESETPASSWORD_API, body);
  return response;
};
export default ResetPasswordFunc;
