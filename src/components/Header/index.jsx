import React from "react";

import HeaderDiv, { StyledLink } from "./styles";

const Header = () => {
  return (
    <HeaderDiv>
      <h1>TYLER FOTOGRAPHER</h1>
      <nav>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/apresentation">About</StyledLink>
          </li>
          <li>
            <StyledLink to="/services">Works</StyledLink>
          </li>
        </ul>
      </nav>
    </HeaderDiv>
  );
};

export default Header;
