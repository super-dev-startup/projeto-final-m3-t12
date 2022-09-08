import styled from 'styled-components';

const ModalService = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  background-color: rgba(196, 196, 196, 0.45);

  .modalDivService {
    background: #ffffff;
    border-radius: 15px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 90%;
    max-width: 450px;
    box-sizing: border-box;

    h3 {
      color: #1e1a4e;
      font: 600 26px 'Inter';
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 90%;
      /* height: 80%; */

      label {
        display: flex;
        flex-direction: column;
        gap: 5px;
        color: #1e1a4e;
      }

      input {
        border-radius: 4px;
        height: 26px;
        padding: 1px 6px;
        font-size: medium;
        border: 1px solid #1e1a4e;
      }

      div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 10px;
        flex-direction: column;

        @media (max-width: 768px) {
        }
      }

      .portfolioDiv {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      button {
        padding: 10px;
        background-color: #1e1a4e;
        border: none;
        color: #fff;
        border-radius: 4px;
        margin-top: 20px;
      }
    }
  }
`;
export default ModalService;
