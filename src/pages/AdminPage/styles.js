import styled from 'styled-components';

const DashboardDiv = styled.div`
  * {
    font-family: 'Inter';
    box-sizing: border-box;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  .superContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .infos {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 18px;
    }

    button {
      background: #1e1a4e;
      color: #fff;
      border: none;
      padding: 5px 12px;
      border-radius: 4px;
      font: 500 13px 'Inter';
    }

    @media (min-width: 1400px) {
      h1 {
        font-size: 30px;
      }

      button {
        font-size: 18px;
      }
    }
  }

  .form-apresentation {
    h3 {
      margin: 20px auto;
      font-size: 24px;
    }

    width: 500px;
    display: flex;
    flex-direction: column;

    text-align: start;
    align-items: flex-start;
    gap: 5px;

    padding: 15px 40px;
    background: #fff;
    border-radius: 8px;

    margin-bottom: 50px;
    border: 2px solid #1e1a4e;

    label {
      display: flex;
      justify-content: space-between;
      gap: 5px;

      width: 100%;
      background: #fff;
      padding: 6px;
      border: 1px solid white;
      border-radius: 5px;
    }

    input {
      width: 300px;
      border: 1px #0000;
      height: 25px;
      font-size: 14px;
      color: #000000;

      border: 1px solid #1e1a4e;
    }

    textarea {
      width: 300px;
      color: #000000;
      border: 1px solid #1e1a4e;
    }

    .btnSubmit {
      background: #1e1a4e;
      color: #fff;
      font-weight: 500;
      font-size: medium;

      width: 200px;
      height: 40px;
      border-radius: 4px;
      margin: 20px auto;

      &:hover {
        background: #351d68f2;
        cursor: pointer;
      }
    }

    @media (max-width: 768px) {
      width: 300px;
      padding: 0 5px;

      h3 {
        font-size: 18px;
      }

      label {
        font-size: 12px;
      }

      input {
        width: 100%;
        font-size: 12px;
      }
    }

    @media (min-width: 1400px) {
      width: 700px;

      label {
        font-size: 18px;
        font-weight: 500;
      }

      input,
      textarea {
        width: 400px;
        font-size: 16px;
        height: 40px;
        border-radius: 4px;
      }
    }
  }

  .services {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    h3 {
      margin: 10px auto;
    }

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 15px 30px;
    background: #fff;
    border-radius: 8px;

    margin-bottom: 30px;
    border: 2px solid #1e1a4e;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;

      li {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 4px;

        padding: 0;
        width: 100%;
        border: 1px solid #1e1a4e;

        figure {
          width: 100px;

          img {
            width: 100%;
          }
        }

        div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;

          span {
            padding: 5px;
            background-color: #1e1a4e;
            color: #fff;
            border-radius: 4px;
            font: 500 10px 'Inter';
          }

          h2 {
            font-size: 14px;
          }

          h2 + span {
            background-color: black;
            cursor: pointer;
          }
        }
      }
    }
    @media (min-width: 768px) {
      h3 {
        font-size: 24px;
        margin: 30px auto;
      }
      ul {
        gap: 15px;

        li {
          figure {
            width: 200px;
          }
          div {
            span {
              padding: 5px;
              background-color: #1e1a4e;
              color: #fff;
              border-radius: 4px;
              font: 500 16px 'Inter';
            }

            h2 {
              margin: 10px 0;
            }

            h2 + span {
              background-color: black;
            }
          }
        }
      }
    }
  }
`;

export default DashboardDiv;
