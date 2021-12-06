import "./App.css";
import Navigation from "./components/Navigation";
import Signin from "./pages/public/views/Signin";
import Signup from "./pages/public/views/Signup";
import ForgotPassword from "./pages/public/views/ForgotPassword";
import ResetPassword from "./pages/public/views/ResetPassword";
import EmailActivation from "./pages/public/views/EmailActivation";

function App() {
  return (
    <>
      <Navigation />
      <div>
        <Signup />
      </div>
    </>
  );
}

export default App;
