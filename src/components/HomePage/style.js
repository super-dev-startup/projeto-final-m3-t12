import styled from 'styled-components';

export const HomeSection = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100wh;

  position: relative;

  /* background-color: red; */

  h2 {
    font: 400 40px/24px 'Alata';
  }

  h3 {
    font: 400 24px/24px 'Alata';
  }

  .DropDown {
    position: absolute;
    right: 20px;
    bottom: 20px;
    z-index: 1;
  }

  figure {
    width: 40%;
    img {
      width: 100%;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .DropDown {
      bottom: 0px;
    }
  }
`;

export const SectionInfo = styled.section`
  display: flex;
  flex-direction: column;

  /* background-color: red; */

  .HomeInfo {
    @media (min-width: 1400px) {
      h2 {
        font-size: 50px;
      }

      h3 {
        font-size: 30px;
      }
    }

    @media (min-width: 1800px) {
      h2 {
        font-size: 55px;
      }

      h3 {
        font-size: 35px;
      }
    }

    @media (min-width: 2200px) {
      h2 {
        font-size: 60px;
      }

      h3 {
        font-size: 40px;
      }
    }

    @media (max-width: 530px) {
      max-width: 80%;
      margin: 0 auto;
    }
  }

  .HomeCategory {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 20px;

    h6 {
      font: 700 14px/14px 'Jura';
    }

    img {
      height: 31px;
    }

    @media (max-width: 768px) {
      margin: 0 auto;

      h6 {
        font-size: 12px;
      }

      img {
        height: 20px;
      }
    }

    @media (min-width: 1400px) {
      h6 {
        font-size: 18px;
      }

      img {
        height: 34px;
      }
    }

    @media (min-width: 1800px) {
      h6 {
        font-size: 20px;
      }

      img {
        height: 36px;
      }
    }

    @media (min-width: 2200px) {
      h6 {
        font-size: 24px;
      }

      img {
        height: 40px;
      }
    }
  }

  .HomeButton {
    display: flex;
    width: 250px;
    border: 0.5px solid black;

    .btnWhite {
      display: flex;
      align-content: center;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      width: 50%;

      background-color: #fff;
      color: #000;
      font: 500 13px/16px 'Inter';
    }

    .btnBlack {
      display: flex;
      align-content: center;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 10px 0px;
      width: 50%;

      background-color: #000;
      color: #fff;
      font: 500 13px/16px 'Inter';
    }

    @media (max-width: 530px) {
      .btnWhite {
        width: 80px;
        height: 50%;
      }
      .btnBlack {
        width: 80px;
        height: 50%;
      }

      flex-direction: column;
      width: 80px;
      height: 150px;
      margin-left: 40px;
    }

    @media (min-width: 1400px) {
      width: 400px;
      .btnWhite,
      .btnBlack {
        font: 500 20px/18px 'Inter';
        padding: 14px 0px;
      }
    }

    @media (min-width: 1800px) {
      width: 450px;
      .btnWhite,
      .btnBlack {
        font: 500 24px/20px 'Inter';
        padding: 16px 0px;
      }
    }

    @media (min-width: 2200px) {
      width: 500px;
      .btnWhite,
      .btnBlack {
        font: 500 28px/22px 'Inter';
        padding: 18px 0px;
      }
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    align-items: flex-start;
  }
`;
