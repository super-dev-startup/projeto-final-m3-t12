/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";

export const RouteContext = createContext({});

// eslint-disable-next-line react/function-component-definition, react/prop-types
const RouteProvider = ({ children }) => {
  const [user, setUser] = useState();

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const LoadUser = async () => {
      const token = localStorage.getItem("accessToken");

      if (token) {
        try {
          // eslint-disable-next-line dot-notation
          api.defaults.headers["Authorization"] = `Bearer ${token}`;
          const { data } = await api.get(`/users/admin`);
          setUser(data);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log(error);
        }
        setLoading(false);
      } else {
        setLoading(false);
      }
    };
    LoadUser();
  }, [user]);

  const onSubmitLogin = (data) => {
    console.log(data);
    api
      .post("/login", data)
      .then((response) => {
        console.log(response);
        setUser(response.data.user);
        localStorage.setItem("accessToken", response.data.accessToken);
        navigate(`/admin`, { replace: true });
      })
      .catch((response) => console.log(response));
  };

  const Logout = () => {
    localStorage.clear();
    setUser();
    window.location.reload();
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <RouteContext.Provider value={{ user, loading, onSubmitLogin, Logout }}>
      {children}
    </RouteContext.Provider>
  );
};

export default RouteProvider;
