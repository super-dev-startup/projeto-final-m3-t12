import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Vector.png";
import HeaderDiv from "./styles";

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
            <Link to="/apresentation">About</Link>
          </li>
          <li>
            <Link to="/services">Works</Link>
          </li>
        </ul>
      </nav>
    </HeaderDiv>
  );
};

export default Header;
