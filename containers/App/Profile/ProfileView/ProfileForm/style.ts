import { media } from '@/scss/media';
import { AppBoxStyle } from '@/styles/app';
import styled from 'styled-components';

const fontFamily = `font-family: outfit, sans-serif;`
const formStyles = `
  input {
    border-width: 0px;
    // width: 100%;
    // text-color: #000000;
  }
`;
const buttonStyle = `
  width: 115px;
  height: 45px;
`;
const grayBoxWidth = `888px`;
const inputContainerWidth = `
`;

export const ProfilePictureContainer = styled.div`
  position: relative;
  ${AppBoxStyle}
  ${fontFamily}
  max-width: ${grayBoxWidth};
  height: 112px;
  display: flex;
  align-items: center;
  gap: 21px;
  padding: 32px 0px 32px 32px;
  a {
    text-decoration-line: underline;
    line-height: 24px;
  }
  button {
    height: 1.5rem;
    width: 1.5rem;
    ${media.mobileSmall}{
      position: absolute;
      right: 4%;
      top: 50%;
      transform: translateY(-50%);
      height: 50px;
      width: 50px;
    }
    ${media.mobile}{
      position: absolute;
      right: 4%;
      top: 50%;
      transform: translateY(-50%);
      height: 50px;
      width: 50px;
    }
    ${media.tablet}{
      position: absolute;
      right: 4%;
      top: 50%;
      transform: translateY(-50%);
      height: 50px;
      width: 50px;
    }
  }
`;

export const Divider = styled.hr`
  width: ${({ width }) => width ? width : `${grayBoxWidth}`};
  border: 1px solid #C1C1C1;
  margin: 32px 0px 32px 0px;
`;


export const ProfileFormContainer = styled.form`
  max-width: ${grayBoxWidth};
`;

export const NamesAndPassWordContainer = styled.div`
  ${AppBoxStyle}
  max-width: ${grayBoxWidth};
  min-height: 110px;
  padding: 32px 32px 40px 32px;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

export const TwoInputContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const InputStyle = styled.div`
  position: relative;
  width: 100%;
  ${media.tablet}{
    width: 48%;
  }
  ${media.desktopSmall}{
    width: 48%;
  }
  ${media.desktop}{
    width: 48%;
  }
  ${media.desktopLarge}{
    width: 48%;
  }
  
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    ${fontFamily}
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
  .my-input {
    width: 100%;
    height: 50px;
    border-width: 0px;
    border-radius: 10px;
    box-shadow: unset;
    background-color: white;
    justify-content: center;
    padding: 0px 14px;
    min-height: 35px;
  }
  .input-style {
    --tw-placeholder-opacity: 1;
    color: rgba(169, 169, 169, var(--tw-placeholder-opacity));
    --tw-text-opacity: 1;
    color: rgba(0, 0, 0, var(--tw-text-opacity))
  }

  .unselectable {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
  }
`;

export const ContactDetailsAndAddressContainer = styled.div`
  ${AppBoxStyle}
  max-width: ${grayBoxWidth};
  min-height: 489px;
  padding: 25px 32px 32px 32px;
`;

export const ContactDetailsFormContainer = styled.div`
  ${formStyles}
  margin-top: 15px;
`;

export const BottomPositionContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 38px;
  button {
    ${buttonStyle}
  }
`
