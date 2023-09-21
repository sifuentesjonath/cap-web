import styled from 'styled-components';

export const MarkerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00BF92;
  border: 2px solid #00BF92;
  box-sizing: border-box;
  border-radius: 8px;
  min-width: 100px;
  min-height: 30px;
  color: white;
  padding: 0 15px;
  font-family: outfit;
  font-weight: bold;
  &:hover {
    box-shadow: 0px 8px 7px 1px rgb(159 159 159 / 75%) !important;
    cursor: pointer;
  }
`;
export const MarkerPopupContainer = styled.div`
  .property-value {
    font-size: 10px;
    margin-top: 8px;
  }
`;
