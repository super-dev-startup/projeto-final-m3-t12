/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const HomeSection = styled.main`

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    height: 100vh;
    margin-top: 70px;
    

    .DropDown{
    position: absolute;
    right: 10px;
    bottom: 150px;
    }

    @media (max-width: 768px){
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .DropDown{
            position: absolute;
            left: 80%;
            bottom: -50px;
        }
        
    }
`

export const SectionInfo = styled.section`
display: flex;
flex-direction: column;

.HomeInfo{

    .title{

        h2{
            font-size: 50px;
        }
    }

    .info{
        
        line-height: 2px;

        h4{
            font-size: 30px;
            font-weight: 400;
        }

    }
 
}

.HomeCategory{
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 40px;

    h6{
        font-size: 18px;
        font-weight: 400;
    }

    img{
        width: 22px;
        height: 31px
    }

}

.HomeButton{
    display: flex;
    flex-direction: row;

    .btnWhite{
        width: 100px;

        background-color: #fff;
        color: #000

        border: solid 0.5px;
    }

    .btnBlack{
        width: 150px;
        padding: 15px 20px;

        background-color: #000;
        color: #fff;

        border: solid 0.5px;
    }
}

@media (max-width: 768px){
    justify-content: center;
    align-items: center;
}



`
