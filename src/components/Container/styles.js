import styled from 'styled-components';

const Container = styled.div`
    width: 380px;
    border-radius: 5px;
    border: 5px solid #e8e400;
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
