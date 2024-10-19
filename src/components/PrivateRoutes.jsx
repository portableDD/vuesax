import { Navigate, Outlet } from "react-router-dom";
import UseAuthStatus from "../hooks/UseAuthStatus";
import Spinner from "./Spinner";

const PrivateRoutes = () => {
  const { loggedIn, checkStatus } = UseAuthStatus();

  if (checkStatus) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-mainBgColor text-white">
        <Spinner />
      </div>
    );
  }

  return <div>{loggedIn ? <Outlet /> : <Navigate to={"/"} />}</div>;
};

export default PrivateRoutes;
