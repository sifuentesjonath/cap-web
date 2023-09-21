import styled from 'styled-components';

export const MyButtonContainer = styled.button`
  transition: all ease .5s;
  cursor: pointer;
  background-color: #6AC24B;
  color: white;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 12px 13px 3px rgb(159 159 159 / 75%) !important;
  }
  &[disabled] {
    background-color: lightgrey !important;
    cursor: not-allowed;
    transform: unset;
    &:hover {
      box-shadow: none !important;
    }
  }
`;
