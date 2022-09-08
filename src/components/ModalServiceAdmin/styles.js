import styled from "styled-components";

const ModalService = styled.div`
    width: 95vw;
    height: 80vh;
    position: fixed;

    display: flex;
    justify-content: center;
    align-items: center;
    
    color: #fff;
    font-size: large;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 600;

    .modalDivService {
        background: gray;
        border-radius: 15px;
        padding: 20px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        width: 70%;
        max-width: 900px;
        height: 60%;
        box-sizing: border-box;

        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            width: 80%;
            height: 80%;
            
            label {
                display: flex;
                flex-direction: column;
                gap: 5px;
            }

            input {
                border-radius: 3px;
                height: 26px;
                padding: 1px 6px;
                font-size: medium;
                border: #fff;
            }
            
            div {
                width: 100%;
                display: flex;
                justify-content: space-between;
            }
            
            .portfolioDiv {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
        }
    }
`
export default ModalService