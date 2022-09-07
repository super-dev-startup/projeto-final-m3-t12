import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { HiUser } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { RouteContext } from "../../../contexts/contextRoutes";
import { FormLogin, LoginPage } from "./style";
import image from "../../../assets/admin-img.png";

function ModalLogin() {
  const { register, handleSubmit } = useForm({});

  const { onSubmitLogin } = useContext(RouteContext);
  return (
    <LoginPage imgUrl="../../../assets/adminImage.png">
      
      <img src={image} alt="" />

      <FormLogin onSubmit={handleSubmit(onSubmitLogin)}>
        <h6>login as admin user</h6>

        <div>
          <input
            type="email"
            placeholder="type your e-mail"
            {...register("email")}
          />
          <HiUser />
        </div>

        <div>
          <input
            type="password"
            placeholder="type your password"
            {...register("password")}
          />
          <RiLockPasswordFill />
        </div>

        <button type="submit" className="btnLogin">
          login
        </button>

        <Link to="/">back to Home</Link>
      </FormLogin>
    </LoginPage>
  );
}

export default ModalLogin;
