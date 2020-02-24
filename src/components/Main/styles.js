import styled, { keyframes, css } from 'styled-components';

const Info = styled.div`
    display: flex;
    align-items: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #F2EAE4;
    
    section {
        width: 100%;
        padding: 20px;
        text-align: center;

        .planet-name {

        }
    }

    p {
        margin: 10px;
    }

    h1 {
        font-size: 20px;
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
    type: 'submit',
    disabled: props.loading,
}))`

    font-family: 'Roboto';
    padding: 15px 50px;
    text-transform: uppercase;
    font-weight: bold;

    font-size: 10px;

    color: #FFF;
    background: #FF8C69;
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
`;

export { Info, SubmitButton };