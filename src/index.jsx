import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import RouteProvider from "./contexts/contextRoutes";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteProvider>
        <App />
      </RouteProvider>
    </BrowserRouter>
  </React.StrictMode>
);
