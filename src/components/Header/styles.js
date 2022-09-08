

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5px 60px;

  background: #fff;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);

  h1 {
    font: 400 18px/20px 'Inter';
    color: #311768;
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 30px;
  }

  a {
    text-decoration: none;

    &:visited {
      color: #000;
    }
  }

  li {
    font-size: 20px;

    &:hover {
      cursor: pointer;
    }
  }

  @media (min-width: 450px) {
    h1 {
      font: 400 21px/20px 'Inter';
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    h1 {
      font: 400 24px/20px 'Inter';
    }
  }

  @media (min-width: 1400px) {
    h1 {
      font: 400 26px/22px 'Inter';
    }
  }

  @media (min-width: 1800px) {
    h1 {
      font: 400 30px/26px 'Inter';
    }
  }

  @media (min-width: 2200px) {
    h1 {
      font: 400 36px/30px 'Inter';
    }
  }
`;
export default HeaderDiv;

export const StyledLink = styled(Link)`
  font: 400 14px/16px 'Inter';

  @media (min-width: 450px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1400px) {
    font-size: 22px;
  }

  @media (min-width: 1800px) {
    font-size: 24px;
  }

  @media (min-width: 2200px) {
    font-size: 26px;
  }
`;
