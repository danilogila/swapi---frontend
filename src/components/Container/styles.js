import styled from 'styled-components';

const Container = styled.div`
    width: 400px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

    border: 5px solid black;

    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);

    svg {
        font-size: 20px;
    }
`;

export default Container;