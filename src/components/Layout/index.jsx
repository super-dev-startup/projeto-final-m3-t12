import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import LayoutDiv from "./styles";

const Layout = () => {
  return (
    <LayoutDiv>
      <div className="div-layout-container">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </LayoutDiv>
  );
};

export default Layout;
