import styled from "styled-components";

const LayoutDiv = styled.div`
    box-sizing: border-box;
    height: 100vh;
    border: 20px solid #c0c6eb;
    
    .div-layout-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        
        main {
            overflow: auto;

        }
    }

`

export default LayoutDiv