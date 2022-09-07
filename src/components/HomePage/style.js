import styled from 'styled-components';

export const HomeSection = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 86vh;
  

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
    width: 50vh;
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

  .HomeInfo {
    .title {
      h2 {
        font-size: 50px;
      }
    }

    .info {
      line-height: 2px;

      h4 {
        font-size: 30px;
        font-weight: 400;
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
        height: 24px;
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
  }

  @media (max-width: 768px) {
    justify-content: center;
    align-items: flex-start;
  }
`;
