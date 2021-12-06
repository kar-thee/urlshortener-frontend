import React from "react";
import * as yup from "yup";

import LogoCard from "../components/LogoCard";
import ResetPasswordCard from "../components/ResetPasswordCard";

const ResetPassword = () => {
  const initialFormValues = {
    secret: "",
    confirmSecret: "",
  };

  const yupValidation = yup.object().shape({
    secret: yup
      .string()
      .required("Necessary")
      .min(8, "Seriously, do you think this is secure?"),
    confirmSecret: yup
      .string()
      .required("Necessary")
      .min(8, "do you think this is it?")
      .oneOf([yup.ref("secret")], "Passwords are not same"),
  });

  const submitForm = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center m-4">
          <LogoCard />
          <ResetPasswordCard
            initialFormValues={initialFormValues}
            yupValidation={yupValidation}
            submitForm={submitForm}
          />
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
