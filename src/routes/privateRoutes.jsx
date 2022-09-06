// import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
// import { RouteContext } from "../contexts/contextRoutes";
import AdminPage from "../pages/AdminPage";

const PrivateRoutes = () => {
  // const { user } = useContext(RouteContext);
  const token = localStorage.getItem("accessToken");

  const location = useLocation();

  return token ? (
    <AdminPage />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default PrivateRoutes;
