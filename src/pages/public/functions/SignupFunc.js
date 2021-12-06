import axios from "axios";

const SignupFunc = async (body) => {
  try {
    const response = await axios.post(
      "http://localhost:4040/api/auth/signup",
      body
    );
    return response;
  } catch (e) {
    console.log(e.message);
    return e.response;
  }
};
export default SignupFunc;
