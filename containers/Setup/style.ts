import styled from 'styled-components';
import { media } from '@/scss/media';
import { FontFamilies } from '../styles/typography';

const buttonBackStyleForDesktop = `
  cursor: pointer;
  border-radius: 7px;
  &:hover {
    box-shadow: 0px 4px 19px 3px rgb(159 159 159 / 75%) !important;
  }

  bottom: 6%;
  left: 3%;
  z-index:9999;
  z-index: 1;
`

export const StepsContainer = styled.div`
  height: 100%;
  position: relative;
  // Text style
  span {
    ${FontFamilies.outfitFont};
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    margin-left: 8px;
  }
  
  .btn-back-wrapper {
    width: 120px;
    position: absolute;
    padding: 4.5px 8px;

    display: flex;
    justify-content: center;

    ${media.mobileSmall}{
      bottom: 3%;
      left: 2%;
    }
    ${media.mobile}{
      bottom: 3%;
      left: 2%;
    }
    ${media.tablet}{
      bottom: 3%;
      left: 2%;
    }

    ${media.desktopSmall}{
      ${buttonBackStyleForDesktop}
    }
    ${media.desktop}{
      ${buttonBackStyleForDesktop}
    }
    ${media.desktopLarge}{
      ${buttonBackStyleForDesktop}
    }
  }
`;

export const ProgressBarContainer = styled.div`
  margin-top: 80px;
  .progress-text {
    margin-top: 1%;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
    height: 10px;
    text-align: center;
  }
`;
