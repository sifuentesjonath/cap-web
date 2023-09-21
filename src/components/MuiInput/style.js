import styled from 'styled-components';

export const MyInputContainer = styled.div`
  width: 100%;
  .my-input {
    width: 100%;
    height: ${props => props.height || 60}px;
    border: solid 2px #6ac24b;
    border-radius: 20px;
    box-shadow: unset;
    background-color: white;
    justify-content: center;
    padding: 0px 14px;
    min-height: 35px;
    &:focus {
      box-shadow: 0px 10px 7px -10px rgba(22, 23, 24, 0.35),
        0px 10px 20px -15px rgba(22, 23, 24, 0.2);
    }
  }
`;
