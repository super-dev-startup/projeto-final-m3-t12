import { Routes, Route } from "react-router-dom";
import ApresentationPage from "../pages/ApresentationPage";
import AdminPage from "../pages/AdminPage";
import HomePage from "../pages/HomePage";
import ModalLogin from "../pages/ModalPages/ModalLogin";
import PrivateRoutes from "./privateRoutes";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />

      <Route path="/login" element={<ModalLogin />} />

      <Route path="/apresentation" element={<ApresentationPage />} />

      <Route
        path="/admin"
        element={
          <PrivateRoutes>
            <AdminPage />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};

export default Router;
