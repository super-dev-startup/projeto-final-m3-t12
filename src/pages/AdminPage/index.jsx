/* eslint-disable react/button-has-type */
import { useContext } from "react";
import { RouteContext } from "../../contexts/contextRoutes";

function AdminPage() {
  const { Logout } = useContext(RouteContext);

  return (
    <>
      <h2>Admin Page</h2>

      <button onClick={Logout}>Sair</button>
    </>
  );
}

export default AdminPage;
