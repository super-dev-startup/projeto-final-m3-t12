import React from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import logo from "../../assets/Vector.png";
import HeaderDiv from "./styles";

// const navigate = useNavigate();

const Header = () => {
  return (
    <HeaderDiv>
      <img src={logo} alt="" />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">About</Link>
          </li>
          <li>
            <Link to="/admin">Works</Link>
          </li>
        </ul>
      </nav>
    </HeaderDiv>
  );
};

export default Header;
