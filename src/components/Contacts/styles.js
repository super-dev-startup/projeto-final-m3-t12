/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.section`
  @import url('https://fonts.googleapis.com/css2?family=Alata&family=Inter:wght@300;400;500;600&display=swap');

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
  }

  @media (min-width: 1400px) {
    h1 {
      font-size: 60px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  width: 100%;
  margin: 50px auto;

  input,
  textarea {
    padding-left: 20px;
    border-radius: 8px;
    border: 1.2px solid #311768;
    height: 40px;
    width: 100%;
    max-width: 500px;
    font: 300 16px/16px 'Inter';

    @media (min-width: 1400px) {
      max-width: 700px;
      height: 60px;
      font-size: 20px;
    }
  }

  textarea {
    height: 55px;
    padding-top: 8px;
  }

  button {
    width: 120px;
    margin: 0 auto;
    color: white;
    padding: 10px;
    background-color: #504a96;
    border-radius: 8px;
    border: none;
    font: 500 16px/16px 'Inter';
  }

  span {
    width: 100%;
    max-width: 500px;
    color: #c50101;
    font: 300 12px/16px 'Inter';
    text-align: left;
  }

  @media (min-width: 500px) {
    button {
      width: 200px;
      padding: 12px;
    }
  }
  @media (min-width: 1400px) {
    button {
      width: 300px;
      padding: 18px;
      font-size: 22px;
    }
  }
`;
