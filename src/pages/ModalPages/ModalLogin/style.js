import styled from 'styled-components';

export const LoginPage = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;

    img {
      display: none;
    }
  }

  @media (min-width: 768px) {
    img {
      height: 400px;
    }
  }
`;

export const FormLogin = styled.form`
  padding: 30px;

  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  border: 1.5px solid #1e1a4e;
  border-radius: 4px;

  h1 {
    font: 700 24px/20px 'Inter';
    color: #1e1a4e;
    margin: 15px auto;
  }

  div {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    height: 20px;
    padding: 5px;
    margin: 10px auto;

    border-radius: 4px;
    border: 0.5px solid #1e1a4e;

    &::placeholder {
      color: #504a96;
    }
  }

  button {
    margin: 10px auto;
    padding: 10px;
    width: 180px;

    border-radius: 5px;

    background: #504a96;
    color: #fff;

    border: none;
  }

  button:hover {
    cursor: pointer;
    background: #000;
    color: #fff;
  }

  a {
    text-decoration: none;
    color: #000;
    font-weight: bold;

    margin-top: 60px;
  }

  a:hover {
    cursor: pointer;
    color: #504a96;
  }

  @media (min-width: 768px) {
    width: 400px;
    /* height: 400px; */

    div {
      width: 300px;
      margin: 0 auto;
      /* background-color: red; */

      display: flex;
      flex-direction: column;
    }

    input {
      width: 100%;
      height: 40px;
      border-width: 1.5px;
      font-size: 20px;
    }
    h1 {
      font-size: 34px;
      margin: 30px auto;
    }

    button {
      padding: 15px;
      width: 300px;
      margin-top: 15px;
      font-size: 20px;
    }
  }

  @media (min-width: 1400px) {
    width: 600px;
    /* height: 400px; */

    div {
      width: 500px;
    }

    input {
      max-width: 400px;
      height: 50px;
      font-size: 22px;
    }
    h1 {
      font-size: 38px;
      margin: 40px auto;
    }

    button {
      padding: 15px;
      width: 400px;
      margin-top: 15px;
      font-size: 24px;
    }
  }

  @media (min-width: 1400px) {
    width: 500px;
    height: 500px;

    justify-content: space-between;
    border-width: 1.5px;

    div {
      width: 500px;
    }

    input {
      max-width: 450px;
      height: 50px;
      font-size: 24px;
      padding-left: 15px;
      border-width: 1.5px;
    }
    h1 {
      font-size: 40px;
      margin-top: 30px;
      margin-bottom: 0;
    }

    button {
      font-size: 24px;
    }
  }

  @media (min-width: 2200px) {
    width: 600px;
    height: 500px;

    justify-content: space-between;
    border-width: 2px;
    /* height: 400px; */

    div {
      width: 600px;
    }

    input {
      max-width: 500px;
      height: 70px;
      font-size: 28px;
      padding-left: 20px;
      border-width: 2px;
    }
    h1 {
      font-size: 45px;
      margin-top: 30px;
      margin-bottom: 0;
    }

    button {
      font-size: 28px;
    }
  }
`;

export const ErrorMsg = styled.span`
  font: 400 12px/18px 'Inter';
  color: #f00;
  width: 100%;
  max-width: 400px;
  margin: 5px 0;

  @media (min-width: 768px) {
    font-size: 17px;
  }

  @media (min-width: 1400px) {
    font-size: 21px;
    max-width: 450px;
  }

  @media (min-width: 2200px) {
    font-size: 24px;
    max-width: 500px;
  }
`;
