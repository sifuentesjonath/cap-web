import styled from 'styled-components';

export const StyledDatePickerContainer = styled.div`
  flex: 1;
  .my-datepicker {
    width: ${props => props.width};
    border: 1px solid #6AC24B;
    box-sizing: border-box;
    border-radius: 18px;
    background: transparent;
  }
`;
