import { Routes, Route } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import HomePage from "../pages/HomePage";
import ModalLogin from "../pages/ModalPages/ModalLogin";
import PrivateRoutes from "./privateRoutes";

// eslint-disable-next-line react/function-component-definition, arrow-body-style
const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />

      <Route path="/login" element={<ModalLogin />} />

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

