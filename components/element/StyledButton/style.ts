import styled from 'styled-components';

export const StyledButtonContainer = styled.div`
  button {
    width: 227px;
    height: 59px;
    background: #00C092;
    border-radius: 38px;
    font-size: 22px;

    transition: all ease 0.5s;
    cursor: pointer;
    background-color: #00C092;
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
  }
`;
