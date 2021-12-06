import React, { useState } from "react";
import * as yup from "yup";

import { toast } from "react-toastify";

import LogoCard from "../components/LogoCard";
import SigninCard from "../components/SigninCard";
import Spinner from "../../../helper/Spinner";

import SigninFunc from "../functions/SigninFunc";

const Signin = () => {
  const [loader, setLoader] = useState(false);

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
  const submitForm = async (values) => {
    setLoader(true);
    console.log(values);
    const body = {
      email: values.username,
      password: values.secret,
    };
    const { data } = await SigninFunc(body);
    setLoader(false);
    if (data.type === "success") {
      toast.success(`Welcome ${data.payLoad.name}`);
      //add this token,
    } else {
      toast.error(data.msg);
    }
  };

  if (loader) {
    return <Spinner />;
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center m-5">
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
