import { Navigate, useLocation } from "react-router-dom";

import AdminPage from "../pages/AdminPage";

const PrivateRoutes = () => {
  const token = localStorage.getItem("accessToken");

  const location = useLocation();

  return token ? (
    <AdminPage />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default PrivateRoutes;
