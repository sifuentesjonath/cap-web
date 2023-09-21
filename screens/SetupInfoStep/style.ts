import styled from 'styled-components';
import { media } from '@/scss/media';
import { FontFamilies, TypographyDesktop, TypographyMobile } from '@/containers/styles/typography';
import { LightColors } from '@/containers/styles/colors';

export const SetupInfoStepContainer = styled.div`
  height: 100%;
  overflow-y: hidden;

  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.mobile}{
    margin: 0;
  }
  .image-position {
    display: none;
    visibility: hidden;
    height: 100%;
    width: 100%;
  }
  ${media.desktopSmall}{
    margin: 1rem;
    padding: 0;
    display: flex;
    align-items: center;
    flex-direction: row;
    .image-position{
      display: flex;
      width:50%;
      visibility: visible;
      justify-content: center;
      align-items: center;
      padding-right: 36px;
    }
  }
  ${media.desktop}{
    margin: 3rem;
    margin-top: 8%;
    flex-direction: row;
    align-items: center;
    flex-direction: row;
    .image-position{
      display: flex;
      width:76%;
      visibility: visible;
      justify-content: center;
      align-items: center;
    }
  }
  ${media.desktopLarge}{
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 1380px;
    margin: auto;
    .image-position{
      display: flex;
      visibility: visible;
      justify-content: center;
      align-items: center;
      padding-right: 96px;
    }
  }
`;

const infoItemPosition = `
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const InformationPosition = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 7%;
  padding-right: 7%;

  button {
    ${TypographyMobile.H2Normal};
    ${FontFamilies.outfitFont};
    font-weight: 500;
    width: 158.4px;
  }
  .infoitem-container {
    ${infoItemPosition}
  }
  ${media.tablet}{
    height: 80%;
    margin:48px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  
  ${media.desktopSmall}{
    button {
      ${TypographyMobile.H2Normal};
      ${FontFamilies.outfitFont};
      font-weight: 500;
      width: 158.4px;
      margin-top: 12px;
      margin-bottom: 84px;
    }
    height: auto;
    margin-top: 5rem;
    width: 52%;
    justify-content: center;
    padding-top: 32px;
    padding-bottom: 32px;
    padding-right: 0;
    padding-left: 77px;
    gap:0;
    .itemContent {
      margin-bottom:0.5rem;
    }
  }


  ${media.desktop}{
    height: auto;
    margin-top: -2rem;
    justify-content: center;
    padding-left: 30px;
    min-width: 636px;
    gap:0;
    .button-style {
      width: 140px;
      height: 50px;
    }
  }
  ${media.desktopLarge}{
    height: auto;
    justify-content: center;
    gap:0;
    margin-top: 3rem;
    width: 100%;
    padding-top: 32px;
    padding-bottom: 64px; 
  }
`;

export const Title = styled.h1`
  ${TypographyMobile.H1};
  ${FontFamilies.outfitFont};
    font-weight: 900;
    margin-bottom: 24px;

  ${media.tablet}{
    ${TypographyDesktop.H1};
  }
  ${media.mobile}{
    width: 100%;
    font-size: 28px;
    padding-top: 90px;
  }

  ${media.desktop}{
    ${TypographyDesktop.H2};
    ${FontFamilies.outfitFont};
    font-weight: 900;
  }

  ${media.desktopSmall}{
    ${TypographyDesktop.H2};
    ${FontFamilies.outfitFont};
    font-weight: 900;
  }
  
  ${media.desktopLarge}{
    ${TypographyDesktop.H2};
    ${FontFamilies.outfitFont};
    font-weight: 900;
  }

`;

// == InfoItem ==

export const InfoItemTitle = styled.h3`
  ${TypographyDesktop.ParagraphTitle};
  ${FontFamilies.degularFont};
  font-weight: 600;
  margin-left:5px;
`;

export const InfoItemContent = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 0%;
  padding-left: 24px;
`;

export const ImagePosition = styled.div`
  display:flex;
  align-items: center;
  width: 40px;
  flex-direction: row;
`;

export const InfoItemDescription = styled.div`
  ${TypographyDesktop.Paragraph}
  ${FontFamilies.outfitFont};
  color: ${LightColors.DescriptionText};
`;
