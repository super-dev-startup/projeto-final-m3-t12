/* eslint-disable import/no-unresolved */

import styled from "styled-components"

const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 60px;

    background: #E3E3E3;
    box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.7);

    img {
        height: 15px;

        &:hover {
            cursor: pointer;
        }
    }

    ul {
        list-style: none;
        padding: 0;
        display: flex;
        gap: 20px;
        font-family: 'Inter', sans-serif;
    }

    a {
        text-decoration: none;

        &:visited {
            color: #000;
        }
    }

    li {
        font-size: 20px;

        &:hover {
            cursor: pointer;
        }
    }
    
`
export default HeaderDiv