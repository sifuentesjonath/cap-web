import styled from 'styled-components';
import { media } from '@/scss/media';
import { FontFamilies } from '@/containers/styles/typography';
import { LightColors } from '@/containers/styles/colors';

export const StepSendEmailsContainer = styled.div`
  height: 100%;
  padding: 32px 24px 16px 24px;
  ${FontFamilies.outfitFont};

  .instruction {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title,
  .sub-title {
    max-width: 320px;
  }
  .title {
    font-size: 30px;
    font-weight: 900;
    line-height: 30px;
    margin-bottom: 16px;
  }
  .sub-title {
    margin-bottom: 34px;
  }
  .btn-wrapper {
    padding-top: 8px;
    margin-right: auto;
    button {
      width: 158px;
    }
  }
  .agreements-container {}
  .email-items-container {
    max-height: 330px;
    overflow-y: auto;
  }
  @media (min-width: 660px) {
    .instruction,
    .agreements-container {
      width: 533px;
      margin: 0 auto;
    }
    .instruction {
      align-items: start;
    }
    .title {
      font-size: 36px;
      line-height: 40px;
      max-width: 533px;
    }
    .sub-title {
      max-width: 492px;
    }
  }
  // 
  @media (max-width: 1200px){
    .email-items-container {
      max-height: 200px;
    }
  }
  @media (max-height: 700px){
    .email-items-container {
      max-height: 120px;
    }
  }
  @media (min-width: 1200px) and (max-height: 700px){
    .email-items-container {
      max-height: 140px;
    }
  }
  @media (min-width: 1200px) and (min-height: 700px){
    .email-items-container {
      max-height: 200px;
    }
  }
  @media (min-height: 800px){
    .email-items-container {
      max-height: 40vh;
    }
  }
`;

//  == EmailFormItem Component ==

export const NumberOfTh = styled.p`
  ${FontFamilies.outfitFont};
  font-family: sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 17px;
  color: #00C092;
  padding-bottom: 30px;
`

export const TitleHolderLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${({ isMobile }) => isMobile && 
    `
      gap: 1rem;
      margin-bottom: 1rem;
    `
  }
  ${media.desktop}{
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
  }
  ${media.desktopLarge}{
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
  }
`;

export const TitleHolderContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  ${({ isMobile }) => isMobile && 
    `
      width: 100%;
      background-color: #F6F6F6;
      border-radius: 6px;
    `
  }
  .titleholder-name {
    display: flex;
    align-items: center;
    height: 52px;
    padding: 0 10px;
    border-radius: 6px;
    border: 0;
    ${media.tablet}{
      border-right: none;
      /* border: 1px solid #E1E1E1;  */
    }
    ${media.desktopLarge}{
      border-right: none;
      border: 1px solid #E1E1E1; 
    }
    ${media.desktop}{
      border-right: none;
      border: 1px solid #E1E1E1; 
    }
  }
`;

export const EmailContainer = styled.div`
  ${media.desktop}{
    display: flex;
    flex-direction: column;

    flex-grow: 1;
    margin-left: -6px;
    margin-right: 10px;
  }
  ${media.desktopLarge}{
    display: flex;
    flex-direction: column;

    flex-grow: 1;
    margin-left: -6px;
    margin-right: 10px;
  }

  .email-input-style {
    border-radius: 6px;
    font-family: outfit, sans-serif;
    border: 1px solid #E1E1E1; 
    height: 52px;
    width: 100%;
  }

`;

export const ThLabelContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`

export const TitleHolderLabel = styled.label`
  font-style: normal;
  font-size: 18px;
  line-height: 24px;
  color: #DADADA;
  @media (min-width: 1200px) {
    color: black;
  }
`

export const ThLabel = styled.h4`
  ${FontFamilies.outfitFont};
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  line-height: 24px;
`

export const ThLabel2 = styled.h4`
  ${FontFamilies.outfitFont};
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  text-align: left;
  ${media.tablet}{
    margin-left:20px;
    margin-bottom: 0px;
  }
`
