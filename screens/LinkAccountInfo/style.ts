import styled from 'styled-components';
import { media } from '@/scss/media';
import { FontFamilies, TypographyDesktop } from '@/containers/styles/typography';

export const PersonalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  @media (max-width: 1000px) or (max-height: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px
  }
`;

export const SubContainer = styled.div`
  .button-style {
    ${TypographyDesktop.ButtonTitle};
    ${FontFamilies.outfitFont};
    font-weight: 500;
    line-height: 22.68px;
    width: 158.94px;
    height: 44px;
    margin-top: 32px;
  }

  max-width: 435px;
  max-height: 290px;

  @media (max-height: 600px) {
    margin-top: 24px;
  }

  @media (max-width: 1000px){
    max-width: 328px;
  }

  @media (min-width: 1000px) and (min-height: 600px){
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
`

export const Title = styled.h1`
  ${TypographyDesktop.ParagraphLead};
  ${FontFamilies.outfitFont};
  font-weight: 900;
  margin-bottom: 40px;
  ${media.desktop}{
    line-height: 48px;
    margin-bottom: 40px;
    font-size: 36px;
    // margin-top:40%;
  }
  ${media.desktopLarge}{
    line-height: 48px;
    margin-bottom: 40px;
    font-size: 36px;
  }
  ${media.desktopSmall}{
    line-height: 48px;
    font-size: 36px;
  }
`

export const Part = styled.span`
    font-family: Outfit;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
`


export const SkipStepButton = styled.button`
  ${FontFamilies.outfitFont}
  font-weight: 500;
  font-size: 16px;
  text-decoration: underline;
  text-transform: capitalize;
  margin-top: 1rem;
`;