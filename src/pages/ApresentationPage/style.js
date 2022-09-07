import styled from "styled-components";


export const Main = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  height: 65vh;

  @media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    margin: 0px;
    margin-top: 0px;
  }
`
export const StyledIntro = styled.div`
    width: 320px;
    margin-bottom: 0;  
    .name{
        display: flex;
        flex-direction: row;

        h3{
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            font-size: 22px;
        }
        
        img{   
            width: 30px;
            height: 30px;
            margin-top: 18px;
            margin-left: 25px;
            margin-right: 25px;
        } 

        @media only screen and (max-width: 800px) {
          display: none;
        }
        
    }

    h1{
        margin-top: 0;
        font-size: 50px;
        font-family: 'Alata', sans-serif;
        font-weight; 400;

        @media only screen and (max-width: 800px) {
          font-size: 30px;
          margin-bottom: 0;
        }
    }  
    
    @media only screen and (max-width: 800px) {
      width: 90%;
      margin: 20px;
    }

    
`;

export const StyledText = styled.div`
  width: 400px;
  margin-left: 50px;
  
  h2 {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 28px;
  }
  p {
    font-family: "Inter", sans-serif;
    font-weight: 300;
    font-size: 27px;
  }

  @media only screen and (max-width: 800px) {
    margin: 20px;
    width: 90%;
    h2 {
      font-size: 25px;
      margin-bottom: 3px;
    }

    p {
      font-family: "Inter", sans-serif;
      font-weight: 300;
      font-size: 24px;
      margin-top: 0px;
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

    p{
        
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

    p{
      font-family: "Inter", sans-serif;
      font-weight: 500;
      margin-top: 0;
      font-weight: 700;
    }
  }


  @media only screen and (max-width: 800px) {
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
    justify-content: center;
    .TitleInfo {
      width: 99%;
      justify-content: space-between;

      p{
       font-size: 15px;
       margin-bottom: 5px;
      }
      
    }

    .Info {
      width: 99%;
      margin-left: 2px;
      justify-content: space-between;

      p{
        font-size: 13px;
       }
    }
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 300px;
  margin: 10px;
  .StledContainer {
  border: solid black 2px;
  text-align: center;
  padding: 10px;
  font-family: "Inter", sans-serif;
  margin-bottom: 30px;
  width: 220px;

  width: 83px;
  padding: 5px; 
  h1 {
    font-size: 25px;
    margin: 0;
    margin-top: 10px;
    font-family: "Inter", sans-serif;
  }

    p{
      font-size: 10px;
    }
 }
 
}

.StledContainerProject {
  background-color: black;
  color: white;
  text-align: center;
  padding: 10px;
  font-family: "Inter", sans-serif;
  margin-bottom: 30px;
  width: 220px;
  padding: 5px;
  width: 83px;
  h1 {
   
    font-size: 25px;
    margin: 0;
    margin-top: 10px;
    font-family: "Inter", sans-serif;
  }

  p{
    font-size: 10px;
  }
}
 

  @media only screen and (min-width: 800px) {
    width: 100%;
  
    .StledContainerProject {
      background-color: black;
      color: white;
      text-align: center;
      padding: 10px;
      font-family: "Inter", sans-serif;
      margin-bottom: 30px;
      width: 220px;
    
      h1{
        font-size: 50px;
      }
      p{
        font-size: 15px;
      }
    }
    
    .StledContainer {
      border: solid black 2px;
      text-align: center;
      padding: 10px;
      font-family: "Inter", sans-serif;
      margin-bottom: 30px;
      width: 220px;
  
      h1 {
        font-size: 50px;
        margin: 0;
        margin-top: 10px;
        
      }
      p{
        font-size: 15px;
      }
  
    }
  
`;
