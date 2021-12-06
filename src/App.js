import "./App.css";

import { Route, Routes } from "react-router";

import UserProvider from "./context/UserProvider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navigation from "./components/Navigation";
import Home from "./components/Home";

import Signin from "./pages/public/views/Signin";
import Signup from "./pages/public/views/Signup";
import ForgotPassword from "./pages/public/views/ForgotPassword";
import ResetPassword from "./pages/public/views/ResetPassword";
import EmailActivation from "./pages/public/views/EmailActivation";
import Dashboard from "./pages/private/views/Dashboard";

import Protected from "./components/Protected";

function App() {
  return (
    <>
      <UserProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />

          <Route
            path="/resetPassword/:dataString"
            element={<ResetPassword />}
          />
          <Route
            path="/emailActivation/:activationId"
            element={<EmailActivation />}
          />

          <Route path="*" element={<Home />} />

          <Route
            path="/dashboard"
            element={
              <Protected redirect={<Home />}>
                <Dashboard />
              </Protected>
            }
          />
        </Routes>

        <ToastContainer />
      </UserProvider>
    </>
  );
}

export default App;
