import axios from "axios";
import { Outlet } from "react-router-dom";
import AuthNavbar from "./AuthNavbar";

const Auth = () => {
  axios.defaults.headers.common.Authorization = ""
  return (
    <>
      <AuthNavbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Auth;
