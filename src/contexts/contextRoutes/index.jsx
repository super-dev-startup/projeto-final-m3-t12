import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";

export const RouteContext = createContext({});

const RouteProvider = ({ children }) => {
  const [user, setUser] = useState();

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const LoadUser = async () => {
      const token = localStorage.getItem("accessToken");

      if (token) {
        try {
          api.defaults.headers.common.Authorization = `Bearer ${token}`;
        } catch (error) {
          return error;
        }
        setLoading(false);
      } else {
        setLoading(false);
      }
    };
    LoadUser();
  }, [user]);
  
  const onSubmitLogin = (data) => {
    api
      .post("/login", data)
      .then((response) => {
        setUser(response.data.user);
        localStorage.setItem("accessToken", response.data.accessToken);
        navigate(`/admin`, { replace: true });
      })
      .catch((response) => response);
  };

  const Logout = () => {
    localStorage.clear();
    setUser();
    window.location.reload();
  };



  return (
    <RouteContext.Provider value={{ user, loading, onSubmitLogin, Logout}}>
      {children}
    </RouteContext.Provider>
  );
};

export default RouteProvider;
