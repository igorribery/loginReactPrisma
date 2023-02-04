import styled from "styled-components";

export const LoginForm = styled.form`
    width: 100%;

    span {
        display: block;
        font-size: 30px;
        color: azure;
        line-height: 1.2;
        text-align: center;
        font-weight: bold;
    }
    img {
        width: 90px;
    }
`;

export const WrapInput = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 5px;
    border-bottom: 1px solid #CCC;


    label {
        font-size: 17px;
        color: #FFF;
        margin-left: 3px;
    }


    input {
        margin-bottom: 37px;
        margin-top: 5px;
        box-sizing: border-box;
        border: 2px solid #ADADAD;
        font-size: 15px;
        color: #FFF;
        line-height: 1.2;
        border: none;
        display: block;
        width: 100%;
        height: 45px;
        border-radius: 10px;
        background-color: #000;
        padding: 0 5px;;
        outline: 0;
    }

    span {
        
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
        color: #ADADAD;
    }
`;

export const ContainerLoginFormBtn = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
    margin: 10px 0px;


    button {
        width: 50%;
        height: 50px;
        border: none;
        border-radius: 15px;
        color: #FFF;
        font-size: 17px;
        text-align: center;
        cursor: pointer;
        background: linear-gradient(90deg, #24d4fd, #b721ff);

        &:hover {
            background: linear-gradient(#b721ff, #24d4fd);
        }
    }
`;

export const TextCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;

    .link {
        font-size: 17px;
        padding-left: 10px;
        text-decoration-line: underline;
        color: #6A7DFE;
    }
    
    span {
        font-size: 17px;
        color: #ADADAD;
    }

`;