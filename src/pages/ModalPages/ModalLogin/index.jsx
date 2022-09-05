/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { RouteContext } from "../../../contexts/contextRoutes";
import { FormLogin, LoginPage } from "./style";

function ModalLogin() {
  const { register, handleSubmit } = useForm({});

  const { onSubmitLogin } = useContext(RouteContext);
  return (
    <LoginPage imgUrl='../../../assets/adminImage.png'>
      
      

      <FormLogin onSubmit={handleSubmit(onSubmitLogin)}>

        <h2>Login</h2>

        <input type="email" placeholder="Digite seu email" {...register("email")} />
        <input type="password" placeholder="Digite sua senha" {...register("password")} />

        <button type="submit" className="btnLogin">Fazer login</button>

        <Link to="/">
        <a>Voltar a Home</a>
      </Link>
      </FormLogin>

      
    </LoginPage>
  );
}

export default ModalLogin;
