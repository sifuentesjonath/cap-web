import { LightColors } from "@/containers/styles/colors";
import styled, { css } from "styled-components";

// == Input style ==

// Place Holder
// const placeHolderStyle = `
//   ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
//     color: #000000;
//     opacity: 1; /* Firefox */
//   }
//   :-ms-input-placeholder { /* Internet Explorer 10-11 */
//     color: #000000;
//   }
//   ::-ms-input-placeholder { /* Microsoft Edge */
//     color: #000000;
//   }
// `
// Input

const selectorsStyle = css`
  .my-select {
    .custom__control {
      width: 100%;
      border: solid 1px #E1E1E1;
      border-radius: 10px;
      box-shadow: unset;
      height: 43px;
      .custom__value-container {
        .custom__placeholder {
          color: black;
        }
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
          font-weight: normal;
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
`

export const MySelectContainer = styled.div`
  position: relative;
  ${({className}) => className ? className : selectorsStyle};

  .edit-input  {
    ${({className}) => className ? className : selectorsStyle};
    border: 1px solid ${LightColors.Secondary};
    border-radius: 8px;
    width: 100%;
  }

  .edit-icon,
  .update-icon {
    color: ${({isEditing}) => isEditing ?  'black': 'gray' };
    height: auto;
    width: 26px;
    position: absolute;
    top: 0;
    right: 35px;
    bottom: 0;
    margin: auto 0;
    cursor: pointer;
    :hover {
      color: black;
    }
  }

  .update-icon {
    width: 32px;
    right: 0;
    margin-right: 4px;
  }
`;
