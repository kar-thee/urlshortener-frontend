import React from "react";

const EmailActivationCard = () => {
  return (
    <>
      <div className="col-md-7 col-lg-6 col-sm-12 border justify-content-center align-content-center card">
        <div className="card-body">
          <div className="text-center">
            <h3 className="display-3">Email Activation Successful</h3>
            <p className="display-6 p-4 m-4"> please SignIn</p>
          </div>
          <div className="p-sm-3 d-flex justify-content-end">
            <a href="/signin" className="btn btn-outline-secondary">
              Click here here to proceed
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailActivationCard;
