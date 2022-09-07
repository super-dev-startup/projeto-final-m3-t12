import styled from "styled-components";

const DashboardDiv = styled.div`

    font-family: Verdana, Geneva, Tahoma, sans-serif;

    display: flex;
    flex-direction: column;
    align-items: center;
    

    .infos {
        display: flex;
        gap: 20px;
        justify-content: center;
        align-items: center;
    }

    .form-apresentation {
        width: 70%;
        display: flex;
        flex-direction: column;

        text-align: center;
        align-items: center;
        gap: 10px;

        padding: 15px 40px;
        background: #32196621;
        border-radius: 10px;

        margin-bottom: 50px;

        box-shadow: 0px 0px 15px -3px #000000;

        label {
            #text {
                font-weight: 600;
            }
            display: flex;
            height: 25px;
            width: 100%;
            font-family: Verdana, Geneva, Tahoma, sans-serif;

            background: #ffff;
            align-items: center;
            justify-content: space-between;

            padding: 6px;
            border: 1px solid white;
            border-radius: 5px;
        }

        input {
            width: 600px;
            border: 1px #0000;
            height: 25px;
            font-size: 14px;
            color: #000000a1;
        }

        .textarea {
            height: max-content;
            font-family: Verdana, Geneva, Tahoma, sans-serif;

            textarea {
                height: auto;
                resize: vertical;
                color: #000000a1;
                border: none;
            }
        }

        .btnSubmit {
            background: #351d68bf;
            color: #ffff;
            font-weight: 600;
            font-size: medium;

            width: 200px;
            height: 40px;
            border-radius: 4px;

            &:hover {
                background: #351d68f2;
                cursor: pointer;
            }
        }

    }

    .services {
        width: 70%;
        display: flex;
        flex-direction: column;

        align-items: center;
        
        padding: 15px 40px;
        background: #32196621;
        border-radius: 10px;

        margin-bottom: 70px;
        box-shadow: 0px 0px 15px -3px #000000;
        
        ul {
            margin: 0;
            min-height: fit-content;
            margin-bottom: 50px;
            row-gap: 40px;
        }
    }
`

export default DashboardDiv