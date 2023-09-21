import styled from 'styled-components';
import { media } from '@/scss/media';
import { TypographyDesktop, TypographyMobile } from '@/containers/styles/typography';

export const FeaturesContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  ${media.tablet}{
    height: auto;
  }
  ${media.desktop}{
    height: auto;
    padding-left: 18%;
    padding-right: 13%;
    padding-bottom: 3%;
  }
  ${media.desktopLarge}{
    height: auto;
    width: 900px;
    margin: 0 auto;
  }
`;

export const SectionOverlay = styled.div`
  width: 100%;
  margin-bottom: 1rem;

  display: flex;
  flex-direction: column;
  gap: 8px;

  .feature-heading {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .features-container {
    ${media.mobile}{
      width: 100%;
    }
    ${media.desktop}{
      width: 100%;
    }
  }
  
  @media (min-width: 1200px){
    max-width: 950px;
  }
`;

export const MainTittle = styled.h2`
  ${TypographyMobile.H0Small}

  ${media.desktop}{
    ${TypographyDesktop.H0}
    line-height:  42px;
    font-size: 2.5em;
  }
  ${media.desktopSmall}{
    ${TypographyDesktop.H0}
    line-height: 42px;
    font-size: 2.5em;
  }

  ${media.mobile}{
    ${TypographyDesktop.H0}
    line-height:  42px;
    font-size: 2.5em;
  }

  @media (max-height: 450px) and (max-width: 1000px) {
    font-size: 24px;
  }
`

export const SubTittle = styled.p`
  ${TypographyDesktop.Paragraph}

  ${media.tablet} { 
    ${TypographyMobile.H2Normal} 
    line-height: 28px;
  }
  ${media.desktop}{ 
    ${TypographyDesktop.Paragraph} 

  @media (max-height: 450px) and (max-width: 1000px) {
    font-size: 12px;
  }
}
`