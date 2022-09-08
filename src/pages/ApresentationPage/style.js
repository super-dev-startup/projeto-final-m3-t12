import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  /* height: 65vh; */

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 0px;

    text-align: center;
  }
`;
export const StyledIntro = styled.div`
  width: 320px;
  margin-bottom: 0;
  .name {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    h3 {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 22px;
    }

    img {
      /* width: 30px; */
      height: 30px;
    }

    @media only screen and (max-width: 768px) {
      display: none;
    }

    @media (min-width: 1400px) {
      h3 {
        font-size: 22px;
      }

      img {
        height: 32px;
      }
    }

    @media (min-width: 1800px) {
      h3 {
        font-size: 24px;
      }

      img {
        height: 34px;
      }
    }

    @media (min-width: 2200px) {
      h3 {
        font-size: 26px;
      }
    }
  }

  h1 {
    margin-top: 0;
    font-size: 50px;
    font-family: 'Alata', sans-serif;
    font-weight: 400;

    @media only screen and (max-width: 768px) {
      font-size: 30px;
      margin-bottom: 0;
    }

    @media (max-width: 450px) {
      font-size: 25px;
    }

    @media (min-width: 1400px) {
      font-size: 52px;
    }

    @media (min-width: 1800px) {
      font-size: 54px;
    }

    @media (min-width: 2200px) {
      font-size: 56px;
    }
  }

  @media only screen and (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const StyledText = styled.div`
  width: 400px;
  margin-left: 50px;

  h2 {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 28px;
  }
  p {
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 27px;
  }

  @media only screen and (max-width: 768px) {
    margin: 0 auto;
    width: 100vw;
    max-width: 550px;
    h2 {
      font-size: 25px;
    }

    p {
      font-family: 'Inter', sans-serif;
      font-weight: 300;
      font-size: 24px;
    }
  }

  @media (max-width: 450px) {
    h2 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
    }
  }

  @media (min-width: 1400px) {
    h2 {
      font-size: 30px;
    }

    p {
      font-size: 29px;
    }
  }

  @media (min-width: 1800px) {
    h2 {
      font-size: 32px;
    }

    p {
      font-size: 31px;
    }
  }

  @media (min-width: 2200px) {
    h2 {
      font-size: 35px;
    }

    p {
      font-size: 33px;
    }
  }
`;

export const StyledWrapperInfo = styled.div`
  margin-left: 55px;
  margin-bottom: 60px;

  .TitleInfo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    p {
      font-family: 'Orbitron', sans-serif;
      font-size: 20px;
      font-weight: 500;
      color: #311768;
    }
  }

  .Info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 2px;

    p {
      font-family: 'Inter', sans-serif;
      margin-top: 0;
      font-weight: 700;
      font-size: 16px;

      @media (min-width: 1800px) {
        font-size: 18px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 0 20px;
    margin: 0 auto;
    max-width: 550px;
    justify-content: center;
    .TitleInfo {
      width: 99%;
      justify-content: space-between;

      p {
        font-size: 15px;
        margin-bottom: 5px;
      }
    }

    .Info {
      width: 99%;
      margin-left: 2px;
      justify-content: space-between;

      p {
        font-size: 13px;
      }
    }
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;

  box-sizing: border-box;

  width: 100%;
  /* margin: 10px; */
  .StledContainer {
    border: solid black 2px;
    text-align: center;
    font-family: 'Inter', sans-serif;

    width: 83px;
    padding: 5px;
    h1 {
      font-size: 25px;
      margin: 0;
      margin-top: 10px;
      font-family: 'Inter', sans-serif;
    }

    p {
      font-size: 10px;
    }
  }

  .StledContainerProject {
    background-color: black;
    color: white;
    text-align: center;
    font-family: 'Inter', sans-serif;
    padding: 5px;
    width: 83px;

    h1 {
      font-size: 25px;
      margin: 0;
      margin-top: 10px;
      font-family: 'Inter', sans-serif;
    }

    p {
      font-size: 10px;
    }
  }

  @media only screen and (min-width: 768px) {
    .StledContainerProject {
      background-color: #000000;
      color: white;
      text-align: center;
      padding: 10px;
      font-family: 'Inter', sans-serif;
      margin-bottom: 30px;
      width: 220px;

      h1 {
        font-size: 50px;
      }
      p {
        font-size: 15px;
        @media (min-width: 1800px) {
          font-size: 17px;
        }
      }
    }

    .StledContainer {
      border: solid black 2px;
      text-align: center;
      padding: 10px;
      font-family: 'Inter', sans-serif;
      margin-bottom: 30px;
      width: 220px;

      h1 {
        font-size: 50px;
        margin: 0;
        margin-top: 10px;
      }
      p {
        font-size: 15px;
        @media (min-width: 1800px) {
          font-size: 17px;
        }
      }
    }
  }
`;
