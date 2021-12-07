import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

import useAuth from "../../../hooks/useAuth";
import useUser from "../../../hooks/useUser";

import getAnalysisData from "../functions/getAnalysisData";

import Spinner from "../../../helper/Spinner";

const Dashboard = () => {
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();
  const [token] = useAuth();
  const [{ idActivated }] = useUser();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
    const getAllData = async () => {
      setLoader(true);
      const { data } = await getAnalysisData(token);
      setLoader(false);
      if (data.type === "success") {
        toast.success(data.msg);
      } else {
        toast.error(data.msg);
      }
    };
    if (idActivated) {
      getAllData();
    }
  }, [idActivated, navigate, token]);

  if (!idActivated) {
    return (
      <>
        <div className="card d-flex justify-content-center align-items-center m-5 p-5">
          <h3 className="lead text-warning display-2 p-5">
            Sorry your account is not activated...kindly Activate.
          </h3>
        </div>
      </>
    );
  }

  if (loader) {
    return <Spinner />;
  }

  return (
    <div>
      <>This is dashboard</>
    </div>
  );
};

export default Dashboard;
