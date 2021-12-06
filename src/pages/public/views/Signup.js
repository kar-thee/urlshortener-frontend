import React, { useState } from "react";
import * as yup from "yup";

import { toast } from "react-toastify";

import LogoCard from "../components/LogoCard";
import SignupCard from "../components/SignupCard";
import Spinner from "../../../helper/Spinner";

import SignupFunc from "../functions/SignupFunc";

const Signup = () => {
  const [loader, setLoader] = useState(false);

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
    setLoader(true);
    console.log(values);
    const body = {
      name: values.name,
      email: values.username,
      password: values.secret,
    };
    const { data, status } = await SignupFunc(body);
    setLoader(false);
    if (status === 200) {
      toast.success("Registration Successful");
      console.log(data);
      //data=>{token,user}
      //user=>{email,id,name}
      //add data.token and data.user to localStorage via custom hook
    } else {
      toast.warning(data.msg);
      console.log(data);
    }
  };

  if (loader) {
    return <Spinner />;
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center m-5 ">
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
