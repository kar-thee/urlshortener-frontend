import React from "react";
import * as yup from "yup";

import LogoCard from "../components/LogoCard";
import SigninCard from "../components/SigninCard";

const Signin = () => {
  const initialFormValues = {
    username: "",
    secret: "",
  };
  const yupValidation = yup.object().shape({
    username: yup
      .string()
      .email()
      .required("Necessary,this is how we will know You are a VIP"),
    secret: yup
      .string()
      .required("Necessary,this is how you verify you are a VIP")
      .min(8, "Seriously, do you think this is it?"),
  });
  const submitForm = (values) => {
    console.log(values);
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center m-4">
          <LogoCard />
          <SigninCard
            initialFormValues={initialFormValues}
            yupValidation={yupValidation}
            submitForm={submitForm}
          />
        </div>
      </div>
    </>
  );
};

export default Signin;
