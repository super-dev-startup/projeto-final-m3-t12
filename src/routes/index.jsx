import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import ApresentationPage from "../pages/ApresentationPage";
=======
import Layout from "../components/Layout";
>>>>>>> 22c2178c2e5ae20a0220acc41d352ebfe6588779
import AdminPage from "../pages/AdminPage";
import HomePage from "../pages/HomePage";
import ModalLogin from "../pages/ModalPages/ModalLogin";
import PrivateRoutes from "./privateRoutes";

const Router = () => {
  return (
    <Routes>
<<<<<<< HEAD
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
=======
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<ModalLogin />} />
        <Route
          path="admin"
          element={
            <PrivateRoutes>
              <AdminPage />
            </PrivateRoutes>
          }
        />
      </Route>
>>>>>>> 22c2178c2e5ae20a0220acc41d352ebfe6588779
    </Routes>
  );
};

export default Router;
