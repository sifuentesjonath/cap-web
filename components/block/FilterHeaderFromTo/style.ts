import styled from 'styled-components'

const inputHeight = `44px`
const h4Style = `{
  font-family: outfit, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  padding-bottom: 10px;
}`

export const FilterHeaderContainer = styled.div`
  width: 100%;
  height: 131px;
  background: #F9F9F9;
`;

export const LabelTittles = styled.h4`
  font-size: 16px;
  line-height: 18px;
  padding-bottom: 10px;
`;

export const LabelWithFilterInput = styled.div`
  width: 28%;
  // margin-left: 32px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 { ${h4Style} }
`;

export const SelectWithInputStyle = styled.div`
  .my-select {
    .custom__control {
      width: 100%;
      border: solid 0px #E1E1E1;
      border-radius: 10px;
      box-shadow: unset;
      height: ${inputHeight};
      .custom__value-container {
        // .custom__placeholder {
        // }
        .custom__single-value {
          color: rgba(4, 4, 5, 0.8);
          font-weight: 500;
        }
      }
      .custom__indicators {
        .custom__indicator-separator {
          display: none;
        }
      }
      .custom__input {
        input:focus {
          box-shadow: unset !important;
        }
      }
    }
    .custom__menu {
      .custom__menu-list {
        padding: 12px;
        .custom__option {
          cursor: pointer;
          background-color: white;
          color: rgb(4, 4, 5);
          font-weight: bold;
          font-size: 14px;
          &:hover {
            background-color: rgba(4, 4, 5, 0.05);
            color: rgb(4, 4, 5);
          }
          &.custom__option--is-selected {
            background-color: rgba(4, 4, 5, 0.05);
          }
        }
      }
    }
  }

`;

export const LabelDoubleInputsContainer = styled.div`
  width: 20%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 { ${h4Style} }
`;

export const DoubleInputsPosition = styled.label`
  width: 100%;
  display: flex;
  gap: 10px;
`;

export const DoubleInputStyle = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;

  .my-input {
    // width: 50%;
      height: ${inputHeight};
    border-radius: 10px;
    box-shadow: unset;
    background-color: white;
    justify-content: center;
    padding: 0px 14px;
    min-height: 35px;
    // input, select, textarea{
    //   color: #000000;
    // }

    // &:focus {
    //   box-shadow: 0px 10px 7px -10px rgba(22, 23, 24, 0.35),
    //     0px 10px 20px -15px rgba(22, 23, 24, 0.2);
    // }
  }
`;

export const ExtraButtonsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;
