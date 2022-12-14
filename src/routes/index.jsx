import { Routes, Route } from "react-router-dom";
import ApresentationPage from "../pages/ApresentationPage";

import Layout from "../components/Layout";

import AdminPage from "../pages/AdminPage";
import HomePage from "../components/HomePage";
import ModalLogin from "../pages/ModalPages/ModalLogin";
import PrivateRoutes from "./privateRoutes";
import Contacts from "../components/Contacts";
import Services from "../components/Services";
import PortfolioComp from "../components/PortfolioComp";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<ModalLogin />} />
        <Route path="apresentation" element={<ApresentationPage />} />
        <Route path="login" element={<ModalLogin />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:id" element= {<PortfolioComp/>}/>
        <Route
          path="admin"
          element={
            <PrivateRoutes>
              <AdminPage />
            </PrivateRoutes>
          }
        />
      </Route>
    </Routes>
  );
};

export default Router;
