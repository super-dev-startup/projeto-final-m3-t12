import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  margin-top: 190px;
  justify-content: center;
`;
export const StyledIntro = styled.div`
    width: 600px;
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500&family=Orbitron:wght@400;500&display=swap');

    .name{
        display: flex;
        flex-direction: row;
        
        img{   
            width: 40px;
            heigth: 3px;
            margin-left: 5px;
            margin-right: 5px;
        }      
    }

    h3{
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500&family=Orbitron:wght@400;500&display=swap');
        font-family: 'Inter', sans-serif;
        
    }

    h1{
        margin-top: 0;
        font-size: 80px;
        font-family: 'Inter', sans-serif;
        font-weight; 200;
    }
`;

export const StyledText = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500&family=Orbitron:wght@400;500&display=swap");
  width: 200px h2 {
    font-family: "Inter", sans-serif;
    font-size: 70px;
  }
  p {
    font-family: "Inter", sans-serif;
    font-size: 20px;
  }
`;

export const StyledWrapperInfo = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500&family=Orbitron:wght@400;500&display=swap");

  .TitleInfo {
    display: flex;
    flex-direction: row;
    color: #311768;
    font-family: "Orbitron", sans-serif;
    font-weight: 500;
    justify-content: space-around;
  }

  .Info {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-family: "Inter", sans-serif;
  }
`;

export const Section = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500&family=Orbitron:wght@400;500&display=swap");
  display: flex;
  flex-direction: row;
  justify-content: center;

  .StledContainer {
    border: solid black 2px;
    text-align: center;
    padding: 10px;
    font-family: "Inter", sans-serif;
    margin-bottom: 30px;
    width: 200px;
    h1 {
      font-size: 60px;
      margin: 0;
      margin-top: 10px;
    }
  }

  .StledContainerProject {
    background-color: black;
    color: white;
    font-family: "Inter", sans-serif;
    text-align: center;
    width: 200px;
    padding: 10px;
    margin-bottom: 30px;

    h1 {
      font-size: 60px;
      margin: 0;
      margin-top: 10px;
    }
  }
`;
