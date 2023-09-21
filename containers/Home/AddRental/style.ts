import { LightColors } from '@/containers/styles/colors';
import { TypographyDesktop, TypographyMobile } from '@/containers/styles/typography';
import styled from 'styled-components';
import { MainTitleAnimationStyle, SubTitleAnimationStyle } from '../utils/animationsAndStyles';
import landingPageSpacing from '../utils/landingPageSpacing';

const macbookandphoneimage = './images/macbook-and-phone.png';

export const AddRentalContainer = styled.div`
  padding: ${landingPageSpacing.smallScreen};
  margin: 40px 0 80px;

  .add-rental-container {
    display: flex;
    justify-content: center;
    gap: 30px;
    border-radius: 16px;
  }

  .add-rental-image {
    width: 180px;
  }

  .add-rental-content-container {
    display: flex;
    align-items: center;
  }
  .add-rental-elements {
    display: flex;
    max-width: 400px;
    flex-direction: column;
    gap: 12px;
  }

  h2 {
    ${MainTitleAnimationStyle};
    ${TypographyMobile.H0Small}
    font-size: 30px;

  }
  p {
    ${SubTitleAnimationStyle};
    ${TypographyDesktop.Paragraph};
  }

  @media (max-height: 450px) and (max-width: 1000px) {
    .add-rental-container {
      flex-direction: row !important;
    }
    .add-rental-image {
      width: 100px;
    }
    .add-rental-content-container {
      max-width: 300px;
    }
    h2 {
      font-size: 24px;
    }
    p {
      font-size: 12px;
    }
  }

  @media (max-width: 810px) {
    margin-top: 0;
    .add-rental-content-container {
      /* max-width: 480px; */
    }
    .add-rental-container {
      flex-direction: column;
      align-items: center;
    }
  }

  @media (min-width: 810px) {
    .add-rental-container{
      padding: 100px 0;
      background-color: ${LightColors.CondooLightGrey};
    }
    h2 {
      min-width: 345px;
      max-width: 470px;
    }
  }

  @media (min-width: 1200px){
    padding: ${landingPageSpacing.normalScreen};
    margin: 80px 0;
    .add-rental-image {
      content: url(${macbookandphoneimage});
      width: 580px;
    }
    .add-rental-container {
      padding: 120px 0;
    }
  }

  @media only screen and (min-width: 1200px) and (max-height: 600px){
    .add-rental-container { // avoid city animation overlay on small height screens
      margin-top: 240px;
      /* background-color: white; */
    }
  }

  @media (min-width: 1200px) and (min-width: 1600px){
    h2 {
      ${TypographyDesktop.H0}
      line-height: 42px;
      font-size: 2.7em;
      padding-bottom:12px;
    }
  }

  @media (min-width: 1800px){
    .add-rental-container {
      width: 1200px;
      margin: 0 auto;
    }
  }
`;