/* eslint-disable react/jsx-props-no-spreading */
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { RouteContext } from "../../../contexts/contextRoutes";

function ModalLogin() {
  const { register, handleSubmit } = useForm({});

  const { onSubmitLogin } = useContext(RouteContext);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmitLogin)}>
        <input type="email" placeholder="Email" {...register("email")} />
        <input type="password" placeholder="Senha" {...register("password")} />

        <button type="submit">Fazer login</button>
      </form>

      <Link to="/">
        <button type="button">Voltar a Home</button>
      </Link>
    </>
  );
}

export default ModalLogin;
