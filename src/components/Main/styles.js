import styled from 'styled-components';

const Info = styled.section`
    max-width: 700px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin: 80px auto;

    section {
        display: flex;
        align-items: center;

        h1 {
            font-size: 20px;
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-left: 10px;
        }

        svg {
            font-size: 20px;
        }
    }
`;

const SubmitButton = styled.button`

`;

export { Info, SubmitButton };