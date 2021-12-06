import React from "react";
import EmailActivationCard from "../components/EmailActivationCard";

import LogoCard from "../components/LogoCard";

const EmailActivation = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center m-4">
          <LogoCard />
          <EmailActivationCard />
        </div>
      </div>
    </>
  );
};

export default EmailActivation;
