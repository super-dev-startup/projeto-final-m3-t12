import styled from "styled-components";

export const StyledIntro = styled.div(`
    width: 300px;

    h3{
        margin-top: 45px; 
    }

    h1{
        font-size: 50px;
    }
`)

export const StyledText = styled.div(`
    width: 450px

    p{
        font-size: 20px
    }
`)

export const StyledWrapperInfo = styled.div(`
    .TitleInfo{
        display: flex;
        flex-direction: row;
        color: #311768;
    }

    .Info{
        display: flex;
        flex-direction: row;
    }
`)

export const Section = styled.section(`
    display: flex;
    flex-direction: row;
    justify-content: center;

    .StledContainer{
        border: solid black 3px;
        text-align: center;
        padding: 10px;
        margin-bottom: 30px;
    }
    
    .StledContainerProject{
        background-color: black;
        color: white;
        text-align: center;
        padding: 10px;
        margin-bottom: 30px;
    }
`)
