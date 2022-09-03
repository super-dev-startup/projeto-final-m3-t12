/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  @import url('https://fonts.googleapis.com/css2?family=Alata&family=Inter:wght@400;500;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  text-align: center;
  padding: 20px 15px;

  h1 {
    font: 400 40px/44px 'Alata';
  }

  @media (min-width: 768px) {
    h1 {
      font: 400 50px/44px 'Alata';
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: flex-start;

  margin: 50px auto;
  max-width: 1300px;

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

    margin-top: 80px;
    min-height: 500px;

    li {
      flex-direction: column;

      height: auto;
      max-width: 20%;
      min-width: 190px;

      /* box-shadow: none; */
    }
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
    height: 180px;

    img {
      width: 100%;
      height: 100%;

      object-fit: cover;
      object-position: left;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;

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
`;

export const SeeMore = styled(Link)`
  font: 500 18px/20px 'Inter';
  color: #311768;
  text-decoration: none;

  @media (min-width: 768px) {
    font: 500 20px/24px 'Inter';
  }
`;
