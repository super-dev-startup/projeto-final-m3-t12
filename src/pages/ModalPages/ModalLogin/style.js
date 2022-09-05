/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

import imgAdmin from '../../../assets/adminImage.png'

export const LoginPage = styled.div`
width: 100%;

background-image: url(${imgAdmin}); 
background-repeat: no-repeat;
background-position: right bottom;
background-size:700px 400px;

display: flex;
justify-content: center;
align-items: center;


`

export const FormLogin = styled.form`
min-width: 500px;
height: 75vh;

 

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

input{
    height: 25px;
    padding: 5px;
    margin: 10px;

    border-radius: 5px;
    border: 0.5px solid #a1a1a1;

}

button{
    margin: 10px;
    padding: 10px;

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
`