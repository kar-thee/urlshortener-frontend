import React from "react";
import * as yup from "yup";

import LogoCard from "../components/LogoCard";
import ForgotPasswordCard from "../components/ForgotPasswordCard";

const ForgotPassword = () => {
  const initialFormValues = {
    username: "",
  };
  const yupValidation = yup.object().shape({
    username: yup
      .string()
      .email()
      .required("Necessary,this is how we will know You are part of us"),
  });
  const submitForm = (values) => {
    console.log(values);
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center m-4">
          <LogoCard />
          <ForgotPasswordCard
            initialFormValues={initialFormValues}
            yupValidation={yupValidation}
            submitForm={submitForm}
          />
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
