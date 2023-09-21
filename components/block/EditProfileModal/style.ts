import { LightColors } from '@/containers/styles/colors';
import { BoxProps } from '@material-ui/core';
import styled from 'styled-components'

const fontFamily = `font-family: outfit, sans-serif`;

export const ImagePosition = styled.div`
  height: 30%;
  width: 100%;
  position: relative;
  .title {
    position: absolute;
    bottom: 1rem;
    left: 0.75rem;
    color: #FFFFFF;
    ${fontFamily};
    font-weight: 400;
    font-size: 48px;
    line-height: 48px;
  }
`;

export const Content = styled.div`
  height: 57.5%;
  display: flex;
  flex-direction: column;
  padding: 0px 32px 0px 32px;
`;

export const Separator = styled.hr`
  width: ${({ width }) => width ? width : `100%`};
  border: 1px solid #000000;
  margin: 20px 0px 15px 0px;
`;

export const EditProfileFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 13px;
  padding: 0px 500px 146px 1.5px;
  input {
    border-width: 1px;
    border-color: #E1E1E1;
    border-radius: 0.5rem;
    width: 100%;
    &:focus {
      border-color: #E1E1E1;
      box-shadow: 0px 10px 7px -10px rgba(22, 23, 24, 0.35),
        0px 10px 20px -15px rgba(22, 23, 24, 0.2);
    }
    font-family: outfit, sans-serif;
    --tw-text-opacity: 1;
  }
`;

export const StyledInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .block {
    display: flex;
    gap: 5px;
  }
  .input {
    ${(width:string) => width !== '' ? width : '100%'};
    ${fontFamily};
    height: 40px;
    border: 0px solid #E1E1E1;
    border-width: 1px;
    border-radius: 10px;
    box-shadow: unset;
    background-color: white;
    justify-content: center;
    padding: 0px 14px;
    min-height: 35px;
    ${fontFamily}
    --tw-placeholder-opacity: 1;
    color: rgba(0, 0, 0, var(--tw-placeholder-opacity));

    --tw-text-opacity: 1;
    color: rgba(0, 0, 0, var(--tw-text-opacity));
  }

  .PhoneInput {
    width: 100%;
  }

  .input-disabled {
    ${(width:string) => width !== '' ? width : '100%'};
    ${fontFamily};
    height: 40px;
    border: 0px solid #E1E1E1;
    border-width: 1px;
    border-radius: 10px;
    box-shadow: unset;
    background-color: ${LightColors.NeutralLightGrey};
    justify-content: center;
    padding: 0px 14px;
    min-height: 35px;
    ${fontFamily}
    --tw-placeholder-opacity: 1;
    color: rgba(0, 0, 0, var(--tw-placeholder-opacity));

    --tw-text-opacity: 1;
    color: rgba(0, 0, 0, var(--tw-text-opacity));
  }

  .placeHolderStyle {
    ${fontFamily}
    --tw-placeholder-opacity: 1;
    color: rgba(0, 0, 0, var(--tw-placeholder-opacity));

    --tw-text-opacity: 1;
    color: rgba(0, 0, 0, var(--tw-text-opacity));
  }
`;

export const InformationLabel = styled.div`
  // padding-bottom: 6px;
  margin-bottom: 9px;
  span {
    ${fontFamily};
    border-bottom: 3.8px solid #00C092;
  }
`;

export const ButtonPosition = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  margin-right: 20px;
  margin-bottom: 20px;

  .button-style {
    width: 135px;
  }
`;

export const ImageContainer = styled.div`
  height: 30%;
  width: 100%;
  position: relative;
  margin-bottom: 1rem;
  border-radius: 16px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  ${({ backgroundColor }) => backgroundColor && 
    `background-color: ${backgroundColor};`
  }
  .image-container {
    position: absolute;
    left: 50%;
    top: 35%;
    transform: translate(-50%, 0);
  }
  .image {
    position: relative;
    height: 50px;
    width: 30px;
  }
  .title {
    position: absolute;
    bottom: 1rem;
    left: 0.75rem;
    color: #FFFFFF;
    ${fontFamily};
    font-weight: 400;
    font-size: 48px;
    line-height: 48px;
  }
`;

export const styleToContainerBox :any |React.ComponentType<BoxProps> = {
  '& .PhoneInputCountryIcon':{
    borderRadius: '3px !important', //eslintIgnore
  }
}