import { FontFamilies } from '@/containers/styles/typography';
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
  min-height: 120px;
  background: #F9F9F9;
  display: flex;
  align-items: center;
  padding: 1rem 3rem;
  gap: 2.5rem;
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

  h4 { 
    ${h4Style};
  }
`;

export const SelectWithInputStyle = styled.div`
  width: 100%;
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
  width: 30%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 { 
    ${h4Style};
  }
`;

export const DoubleInputsPosition = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
  gap: 10px;
  input {
    width: 200px;
  }
  .date-input-container {
    display: grid;
  }
  .date-label {
    padding: 0;
    margin: auto 0;
    min-width: 40px;
  }
  @media (max-width: 550px){
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    .date-input-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 550px){
    .date-input-container {
      grid-template-rows: repeat(2, 1fr);
    }
  }
`;

export const ExtraButtonsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  margin-top: 12px;
  button {
    ${FontFamilies.poppinsFont};
    font-weight: 600;
    font-size: 14px;
  }
`;

export const DatePickerStyle = `
  border-color: white;
  border-width: 1px;
  border-radius: 10px;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  outline: 2px solid transparent;
  outline-offset: 2px;
  width: 8.4rem;
  height: 2.8rem;
  --tw-border-opacity: 1;
  background-color: white;
  font-weight: 300;
  font-size: 0.90rem;
  line-height: 1rem;
`;
