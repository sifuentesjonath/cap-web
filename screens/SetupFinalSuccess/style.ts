import styled from 'styled-components';
import { media } from '@/scss/media';
import { FontFamilies, TypographyDesktop } from '@/containers/styles/typography';

export const SetupInfoStepContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: start;
  gap: 8px;

  ${media.mobile}{
    padding-left: 7%;
  }
  ${media.mobileSmall}{
    padding-left: 7%;
  }
  ${media.tablet}{
    padding-left: 37%;
    padding-top: 30px;
  }
  ${media.desktopSmall}{
    padding-left: 200px;
    padding-top: 30px;
  }
  ${media.desktop}{
    padding-left: 260px;
    padding-top: 80px;
  }
  ${media.desktopLarge}{
    padding-left: 380px;
    padding-top: 80px;
  }
  .step-pane {
    max-width: 702px;
    .info-icon {
      width: 37px !important;
    }
  }
  .button-style {
    font-size: 16px;
    margin-top: 1.25rem;
    margin-left: 1.25rem;
    height: 50px;
    width: 180px;
  }
  ${({ isMobile }) => isMobile && 
    `
      margin-top: 5.25rem;
    `
  }
`;

export const SubContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 4%;
  padding-bottom: 14%;
  ${media.mobile}{
    width: 80%;
  }
  ${media.mobileSmall}{
    width: 90%;
  }
  ${media.tablet}{
    width: 49%;
  }
  ${media.desktopSmall}{
    width: 35%;
  }
  ${media.desktop}{
    width: 33%;
  }
  ${media.desktopLarge}{
    width: 24%;
  }
`;

export  const ImagePosition = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.mobile}{
    display:none;
  }
  ${media.mobileSmall}{
    display:none;
  }
  ${media.tablet}{
    display:none;
  }
  ${media.desktopSmall}{
    width: 50%;
    right: 5%;
  }

  ${media.desktop}{
    width: 40%;
    right: 10%;
  }
  ${media.desktopLarge}{
    width: 34%;
    right: 15%;
  }

  ${media.mobileSmallHeight}{
    width: 35%;
  }
  flex-direction: row;
  right: 20%;
  top: 0;
`;

// w-14 flex flex-row items-center justify-start

export const InformationPosition = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  button {
    ${TypographyDesktop.ButtonTitle};
    ${FontFamilies.outfitFont};
    font-weight: 500;
    width: 183px;
    height: 44px;
  }
  a {
    width: 203px;
    padding: 10px 27px;
  }
  ${media.desktop}{
    padding-top: 24px;
  }
`

export const Title = styled.h1`
  ${TypographyDesktop.ParagraphLead};
  ${FontFamilies.outfitFont};
  font-weight: 800;
  font-size: 36px;
  line-height: 48px;
  margin-bottom: 20px;
  ${({ isMobile }) => isMobile && 
    `
      font-size: 32px;
    `
  }

`