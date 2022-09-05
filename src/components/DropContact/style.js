/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const DropDownContact = styled.div`

.dropdown-menu {
    
    ul{
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    li{
       a{
        color: #000;
        text-align: center;
       }
    }
    }
}

.dropdown-menu.active{
    opacity: 1;
    visibility: visible;
    transform: translateY(10px);
    transform: translateX(-50px);

   
    transition: 1.2s ease;
  }
  
  .dropdown-menu.inactive{
    opacity: 0;
    visibility: hidden;
    transform: translateX(-10px);
    transition: 500ms ease;
  }

  .menu-trigger{
    
    img{
        padding: 10px;
        background: #000;

        border-radius: 50%;
     
        width: 41px;
        heigth: 41px;
    }
  }
`