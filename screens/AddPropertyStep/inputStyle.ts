import styled, { css } from 'styled-components';

const dimensions = css`
	height: 32px;
`

export const input = css`
	width: 100%;
  ${dimensions};
	border: 1px solid #E1E1E1;
	border-radius: 8px;
	box-shadow: unset;
	background-color: white;
	justify-content: center;
	padding: 0px 16px;
	min-height: 35px;
	&:focus {
		box-shadow: 
			0px 10px 7px -10px rgba(22, 23, 24, 0.35),
			0px 10px 20px -15px rgba(22, 23, 24, 0.2);
	}

	// Place Holder Style
	::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
		color: #000000;
		opacity: 1; /* Firefox */
	}
	:-ms-input-placeholder { /* Internet Explorer 10-11 */
		color: #000000;
	}
	::-ms-input-placeholder { /* Microsoft Edge */
		color: #000000;
	}
`

export const inputSelector = css`
  .custom__control {
    width: 100%;
    border: solid 1px #E1E1E1;
    border-radius: 10px;
    box-shadow: unset;
    ${dimensions};
    margin-bottom: 6px;
    .custom__value-container {
      .custom__placeholder {
        color: #000000;
        font-size: 0.875rem;
        line-height: 1.25rem;
      }
      .custom__single-value {
        color: rgba(4, 4, 5, 0.8);
        font-weight: 500;
      }
      padding: 0px 16px;
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
`