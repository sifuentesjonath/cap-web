import styled, { css } from 'styled-components';

export const AuthInputStyle = css`
  .input-style {
    height: 60px;
    min-height: 35px;

    background-color: #F6F6F6;;

    font-family: outfit, sans-serif;

    font-weight: 400;
    font-size: 16px;
    line-height: 18px;

    border: 0px;
    border-radius: 32px;

    padding: 0px 22px;
    &:focus {
      box-shadow: 0px 10px 7px -10px rgba(22, 23, 24, 0.35),
          0px 10px 20px -15px rgba(22, 23, 24, 0.2);
    }
  }

  placeholder-style {
    font-family: outfit, sans-serif;
    --tw-text-opacity: 1;
    color: rgba(0, 0, 0, var(--tw-text-opacity));
  }
`;