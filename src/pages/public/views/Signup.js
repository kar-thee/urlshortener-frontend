import React from "react";
import * as yup from "yup";

import LogoCard from "../components/LogoCard";
import SignupCard from "../components/SignupCard";

import SignupFunc from "../functions/SignupFunc";

const Signup = () => {
  const initialFormValues = {
    name: "",
    username: "",
    secret: "",
  };
  const yupValidation = yup.object().shape({
    name: yup
      .string()
      .required("Necessary,this is how we will call you hereafter")
      .min("3", "are you kidding me?"),
    username: yup
      .string()
      .email()
      .required("Necessary,this is how we will know You are a VIP"),
    secret: yup
      .string()
      .required("Necessary,this is how you verify you are a VIP")
      .min(8, "Seriously, do you think this is enough?"),
  });
  const submitForm = async (values) => {
    console.log(values);
    const body = {
      name: values.name,
      email: values.username,
      password: values.secret,
    };
    const response = await SignupFunc(body);
    console.log(response);
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center m-3 ">
          <LogoCard />
          <SignupCard
            initialFormValues={initialFormValues}
            yupValidation={yupValidation}
            submitForm={submitForm}
          />
        </div>
      </div>
    </>
  );
};

export default Signup;
