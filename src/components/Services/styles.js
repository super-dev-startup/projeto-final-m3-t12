
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  text-align: center;
  padding: 20px 15px;

  h1 {
    font: 400 40px/44px 'Alata';
  }

  @media (min-width: 768px) {
    h1 {
      font: 400 50px/44px 'Alata';
    }
    height: 400px;
  }

  @media (min-width: 1400px) {
    h1 {
      font: 400 65px/44px 'Alata';
    }
    height: 550px;
  }

  @media (min-width: 1800px) {
    h1 {
      font: 400 75px/44px 'Alata';
    }
    height: 550px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: flex-start;

  margin: 40px auto;
  width: 100%;
  max-width: 1300px;
  padding: 0;

  li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;

    width: 100%;
    max-width: 400px;
    height: 100px;

    border: 0.2px solid #dfdfdf;
    border-radius: 2px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;
    margin-top: 20px;

    li {
      flex-direction: column;

      height: auto;
      max-width: 20%;
      min-width: 150px;

      /* box-shadow: none; */
    }
  }

  @media (min-width: 1400px) {
    max-width: 1500px;
  }

  @media (min-width: 1800px) {
    max-width: 1800px;
  }
`;

export const Image = styled.figure`
  background-color: #bbbbbb;
  overflow: hidden;
  border-radius: 2px;

  img {
    height: 100%;
    width: 100%;
  }

  min-width: 150px;
  height: 100%;

  @media (min-width: 768px) {
    width: 100%;
    height: 120px;

    img {
      width: 100%;
      height: 100%;

      object-fit: cover;
      object-position: left;
    }
  }

  @media (min-width: 1400px) {
    height: 150px;
  }

  @media (min-width: 1800px) {
    height: 200px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;

  text-align: left;
  padding: 2px 0;

  height: 100%;

  h2 {
    font: 600 20px/20px 'Inter';
  }

  span {
    font: 500 14px/15px 'Inter';
    color: #fff;
    background-color: #311768;
    padding: 2px 14px;
    border-radius: 2px;
  }

  @media (min-width: 768px) {
    height: 100px;
    width: 100%;

    span {
      font: 500 18px/18px 'Inter';
      padding: 4px 24px;
    }

    h2 {
      font: 600 22px/22px 'Inter';
    }
  }

  @media (min-width: 1400px) {
    height: 130px;

    span {
      font: 500 22px/22px 'Inter';
      padding: 4px 24px;
    }

    h2 {
      font: 600 25px/25px 'Inter';
    }
  }

  @media (min-width: 1800px) {
    height: 150px;

    span {
      font: 500 26px/26px 'Inter';
      padding: 4px 24px;
    }

    h2 {
      font: 600 30px/30px 'Inter';
    }
  }
`;

export const SeeMore = styled(Link)`
  font: 500 18px/20px 'Inter';
  color: #311768;
  text-decoration: none;

  @media (min-width: 768px) {
    font: 500 20px/24px 'Inter';
  }

  @media (min-width: 1400px) {
    font: 500 24px/28px 'Inter';
  }

  @media (min-width: 1800px) {
    font: 500 25px/34px 'Inter';
  }
`;
