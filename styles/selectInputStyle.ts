import { css } from 'styled-components';
import { FontFamilies } from '@/containers/styles/typography';

const SelectInputStyle = css`
  .my-select {
    .custom__control {
      width: 100%;
      border: solid 1px #E1E1E1;
      border-radius: 10px;
      box-shadow: unset;
      height: 43px;
      .custom__value-container {
        // Style both placeholder & selected value
        .custom__placeholder
        .custom__single-value {
          ${FontFamilies.outfitFont};
          font-weight: 400;
        }
        .custom__placeholder {
          color: #A9A9A9;
        }
        .custom__single-value {
          color: black;
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

export default SelectInputStyle;