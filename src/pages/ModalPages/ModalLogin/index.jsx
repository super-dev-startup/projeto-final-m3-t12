import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import loginResolver from "../../../validators/login";
import { RouteContext } from "../../../contexts/contextRoutes";
import { FormLogin, LoginPage, ErrorMsg } from "./style";

function ModalLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginResolver),
  });

  const { onSubmitLogin } = useContext(RouteContext);
  return (
    <LoginPage>
      <FormLogin onSubmit={handleSubmit(onSubmitLogin)}>
        <h1>Login</h1>

        <div>
          <input
            type="email"
            placeholder="type your e-mail"
            {...register("email")}
          />
          <ErrorMsg>{errors.email?.message}</ErrorMsg>

          <input
            type="password"
            placeholder="type your password"
            {...register("password")}
          />
          <ErrorMsg>{errors.password?.message}</ErrorMsg>
        </div>

        <button type="submit" className="btnLogin">
          login
        </button>
      </FormLogin>
    </LoginPage>
  );
}

export default ModalLogin;
