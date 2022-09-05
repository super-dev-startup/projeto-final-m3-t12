/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

// import imgAdmin from '../../../assets/adminImage.png'

export const LoginPage = styled.div`
width: 100%;
heigth: 100vh;

margin: 0 20px;

display: flex;
justify-content: center;
align-items: center;

@media (max-width: 768px){
    flex-direction: column;
    justify-content: center;

    img{
        display: none;
    }
}
`

export const FormLogin = styled.form`
min-width: 50%;
height: 75vh;

padding: 30px;

margin-top: 30px;

background: #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

-webkit-box-shadow: 12px 12px 0px 0px #000000; 
box-shadow: 5px 5px 10px 0px #000000;

h6{
    font-size: 18px;
    text-align: flex-start;
}

input{
    height: 20px;
    max-width: 300px;
    padding: 5px;
    margin: 10px;

    border-radius: 5px;
    border: 0.5px solid #a1a1a1;

}

button{
    margin: 10px;
    padding: 10px;
    max-width: 250px;

    border-radius: 5px;

    background: #504A96;
    color: #fff;
    
    border: none;
}

button:hover{
    cursor: pointer;
    background: #000;
    color: #fff;
}

a{
    text-decoration: none;
    color: #000;
    font-weight: bold;

    margin-top: 60px;
}

a:hover{
    cursor: pointer;
    color: #504A96;
}

@media (max-width: 768px){
    max-height: 70vh;
    margin: 20px;
}
`