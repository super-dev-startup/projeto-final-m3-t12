import styled, { css } from 'styled-components';

export const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 100vh;

  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;

  background-color: rgba(18, 18, 18, 0.2);
  /* padding: 0px 13px; */

  .modal-box {
    background-color: #1e1a4e;
    width: 100%;
    max-width: 375px;
    border-radius: 25px;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      height: 80px;
      padding: 10px 16px;
      background-color: var(--color-gray-2);

      h1 {
        font: 400 24px/44px 'Alata';
        color: white;
        margin: auto;

        @media (min-width: 768px) {
          font-size: 40px;
        }
      }

      @media (min-width: 768px) {
        height: 90px;
      }
    }

    @media (min-width: 768px) {
      max-width: 400px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 11px;
  width: 80%;
  padding: 18px 25px;
  margin: 0 auto;

  label {
    font: 500 20px/5px 'Inter';
    color: #fff;
    margin-top: 3px;
  }

  input {
    padding: 9px 13px;
    background-color: #fff;
    border-radius: 8px;
    border: 1px solid #ececec;
    width: 100%;

    font: 400 13px/21px 'Inter';
    color: #000;

    &:focus {
      border: 1px solid #ececec;
    }
  }

  @media (min-width: 768px) {
    gap: 15px;

    label {
      font: 400 12.18/0px 'Inter';
    }

    input {
      font: 400 16.24px/26.4px 'Inter';
    }
  }
`;

export const ErrorMsg = styled.span`
  font: 400 12px/18px 'Inter';
  color: #f00;
`;

export const Send = styled.button`
  border: none;
  border-radius: 4px;
  width: 50%;
  padding: 4px 0px;
  margin: 5px auto;
  cursor: pointer;

  color: #000;
  font: 500 12.8px/21.1px 'Inter';

  ${({ errors }) =>
    errors.name?.message
      ? css`
          background-color: #868686;
          cursor: not-allowed;
        `
      : css`
          background-color: #fff;
        `}

  @media (min-width: 768px) {
    font: 500 16px/26.4px 'Inter';
    margin: 10px auto;
  }
`;
