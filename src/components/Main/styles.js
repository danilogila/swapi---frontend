import styled, { keyframes, css } from 'styled-components';

const Info = styled.div`
    display: flex;
    align-items: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .planet-name-container {
        width: 100%;
        padding: 35px 20px 35px 20px;
        text-align: center;

        h1 {
            font-size: 2.5rem;
            border-bottom: 3px solid #e8e400;
            border-radius: 3px;
            padding: 5px;
        }

        p{
            font-size: 2.5rem;
        }

        hr{
            background-color: #e8e400;
            margin-top: 15px;
        }
    }

    .planet-information-container{
        width: 100%;
        padding: 20px 10px;

        p {
            font-size: 0.9rem;
            margin: 0px;
            padding: 8px 10px;
            font-weight: 600;

            &:last-child{
                text-align: center;
                padding: 20px 0px 0px 0px;
            }

            span {
                color: inherit;
                font-weight: lighter;
            }
        }

    }

    svg {
        font-size: 20px;
    }
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(360deg)
    }
`;

const SubmitButton = styled.button.attrs(props => ({
    disabled: props.loading,
}))`

    font-family: 'Roboto';
    padding: 15px 50px;
    text-transform: uppercase;
    font-weight: bold;

    font-size: 10px;

    color: black;
    background: #e8e400;
    border: 0;
    margin-left: 10px;
    border-radius: 4px;

    display: block;
    margin: 10px auto;

    ${props =>
        props.loading &&
        css`
            svg {
                animation: ${rotate} 2s linear infinite;
            }
        `}

    &:hover{
        background-color: #fcfa72;
    }
`;

export { Info, SubmitButton };
