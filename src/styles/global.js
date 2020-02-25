import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        min-height: 100%;
    }

    .App{
        height: 100vh;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    body{
        background-image: url("/yarn.jpg");
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, button{
        color: #e8e400;
        font-size: 14px;
        font-family: "Roboto", sans-serif;
    }

    button{
        cursor: pointer;
    }
`;
