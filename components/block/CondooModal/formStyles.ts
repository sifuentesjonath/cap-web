import styled, { css } from 'styled-components'

const inputStyling = css`
  input {
    border-width: 1px;
    border-color: #E1E1E1;
    border-radius: 0.5rem;
    &:focus {
      border-color: #E1E1E1;
      box-shadow: 0px 10px 7px -10px rgba(22, 23, 24, 0.35),
        0px 10px 20px -15px rgba(22, 23, 24, 0.2);
    }
  }
  .my-input {
    height: 43px;
  }

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

const Form = styled.div`
  height: 60%; // Allow scrollable form-fields container
  form {
    ${inputStyling};
    display: flex;
    flex-direction: column;
    padding-top: 8px;
    gap: 12px;
    height: 100%;
  };
  .form-fields {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    gap: 8px;
  };
  .field-box {
    display: flex;
    flex-direction: column;
    gap: 12px;
  };
  .input-double {
    display: flex;
    gap: 12px;
  };
  .select-input-style-width {
    input {
      width: 100%;
    }
  }
  .titleholder-input {
    div:first-child {
      width: 100%;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  };
  .contain-select-list-menu {
    .custom__menu,
    .custom__menu-list {
      max-height: 120px;
    }
  }
  
  @media (min-height: 600px) {
    .form-fields {
      height: 90%;
    }
  }

  @media (min-width: 800px){
    .form-fields {
      flex-direction: row;
    }
    .contain-select-list-menu {
      .custom__menu,
      .custom__menu-list {
        max-height: 230px;
      }
    }
    button {
      margin: 0;
      margin-top: auto;
      margin-left: auto;
    }
  }

  @media (min-width: 1200px){
    .form-fields {
      width: 720px;
    }
  }

  @media (min-width: 1550px){
    .form-fields {
      margin: 0;
      overflow-y: hidden;
    }
    .form-fields {
      height: 400px;
    }
  }
`;

export default Form