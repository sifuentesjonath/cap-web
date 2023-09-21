import { media } from '@/scss/media';
import { AppBoxStyle } from '@/styles/app';
import styled from 'styled-components'

const fontFamily = `font-family: outfit, sans-serif;`
const grayBoxWidth = `866`;
const inputContainerWidth = `48`;

export const LabelContainer = styled.div`
  ${AppBoxStyle};
  ${fontFamily}
  width: 91%;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0px 24px 0px 24px;
  margin: 8px 0px 8px 0px;
  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }
  button {
    text-decoration-line: underline;
  }
`;

export const LabelContainerOpened = styled.div`
  max-width: 1148px;
  padding: 18px 23px 24px 17px;
  margin-bottom: 10px;
  border: 2px solid #EDEDED;
  border-radius: 16px;

  position: relative;

  span {
    ${fontFamily}
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
  }
  .buttonTop {
    background-color: #EDEDED;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    margin: 12px 12px;
    ${media.desktop}{
      margin: 24px 24px;
    }
    ${media.desktopLarge}{
      margin: 24px 24px;
    }
  }
  .buttonBottom {
    width: 152px;
    height: 45px;
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 0px 23px 24px 0px;
  }

`;

export const TitleHolderFormContainer = styled.form`
  margin-top: 32px;
  ${media.desktop}{
    margin-top: 0;
  }
  ${media.desktopLarge}{
    margin-top: 0;
  }
`;


export const LabelContainerBox = styled.div`
  ${AppBoxStyle};
  max-width: 666px;
  min-height: 223px;
  padding: 19px 32px 32px 32px;

  .title-info {
    font-weight: 700;
    font-size: 16px;
    line-height: 36px;
    margin-bottom: 17px;
  }
  label {
    font-size: 12px;
    line-height: 18px;
  }
  .companyTitle {
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 23px;
  }

`;

export const InputStyle = styled.div`
  width: ${inputContainerWidth}%;
  ${media.mobileSmall}{
    width: 100%;
  }
  ${media.mobile}{
    width: 100%;
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
`;

  export const TwoInputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const Separator = styled.hr`
  width: ${({ width }) => width ? width : `${grayBoxWidth}px`};
  border: 1px solid #C1C1C1;
  margin: 32px 0px 32px 0px;
`;