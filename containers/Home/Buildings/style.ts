import styled from 'styled-components';
import { media } from '@/scss/media';
import { TypographyDesktop, TypographyMobile } from '@/containers/styles/typography';
import ScrollBarStyle from '@components/graphics/styled/ScrollBar';
import landingPageSpacing from '../utils/landingPageSpacing';

export const BuildingsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: ${landingPageSpacing.smallScreen};
  overflow-x: hidden;
  .buildings-container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    overflow-x: auto;
  }

  @media (min-width: 810px){
    .buildings-container {
      gap: 64px;
    }
  }
  @media (min-width: 1200px){
    margin: 80px 0;
    padding: ${landingPageSpacing.hugeScreen};
  }

  @media (max-height: 450px) and (max-width: 1000px) {
    /* padding: 0 60px; */
    h2 {
      font-size: 24px;
    }
  }
`;

export const MainTittle = styled.h2`
  ${TypographyMobile.H0Small}
  ${media.desktop}{
    ${TypographyDesktop.H0}
    line-height: 42px;
    font-size: 2.5em;
  }
`;

export const CondosContainer = styled(ScrollBarStyle)`
  display: flex;
  ${media.mobile}{
    gap: 16px;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    position: relative;
    -webkit-overflow-scrolling: touch;
  }
  
  ${media.mobileSmall}{
    gap: 16px;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    position: relative;
    -webkit-overflow-scrolling: touch;
  }

  ${media.tablet}{
    gap: 16px;
    white-space: nowrap;
    position: relative;
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
  }

  ${media.desktopSmall}{
    gap: 16px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  ${media.desktop}{
    gap: 32px;
    overflow-x: auto;
    width: 90;
  }

  ${media.desktopLarge}{
    gap: 32px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
`;
