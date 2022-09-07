/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Portfolio = styled.section`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

height: 100%;

@media (max-width: 769px){
  heigth: 70vh;

  margin: 70px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`

export const ItemsWraper = styled.div`
width: 70vw;
`

export const Items = styled.div`
display: flex;
align-items: center;
flex-direction: row;

overflow-x: hidden;
scroll-snap-type: x mandatory;

width: 80%;
margin-left: 75px;

@media (max-width: 769px){
  margin-left: 50px;
}


`

export const Item = styled.div`
flex: none;

display: flex; 
justify-content: center;

width: 100%; 
scroll-snap-align: start;

  img{

    width: 100%;
  

    object-fit: cover;
  }
`;

export const InfoItem = styled.aside`

 width: 30%;

 height: 70vh;

 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;

 gap: 50px;

 border-left: solid 1px #000;

 h3{
  font-size: 28px;
 }

 button{
  background: #000;
  color: #fff;
  padding: 10px;
 }

 button:hover{
  background: #fff;
  color: #000;

  border: solid 0.5px;
 }

 @media (max-width: 769px){
  border: none;
  gap: 10px;
 }


`