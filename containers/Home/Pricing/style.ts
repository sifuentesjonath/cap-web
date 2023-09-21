import styled from 'styled-components';
import { media } from '@/scss/media';
import { FontFamilies, TypographyDesktop } from '@/containers/styles/typography';

export const PricingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  padding-top: 32px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    ${TypographyDesktop.H1};
    ${FontFamilies.outfitFont};
    font-size: 48px;
    font-weight: 900;

    line-height: 48px;
    text-align: center;
  }
  h2 {
    ${TypographyDesktop.Paragraph}
    ${FontFamilies.poppinsFont};
    line-height: 24px;
    text-align: center;
    font-size: 0.8rem;
  }

  ${media.desktop}{
    align-items: center;
    h2 {
      text-align: center;
    }
  }
  ${media.desktopLarge}{
    align-items: center;
    h2 {
      text-align: center;
    }
  }
`;


export const UnitsSelectorContainer = styled.div`

  flex-direction: column;
  align-items: center;

  .select-message {
    padding-top:30px;
    margin-bottom: 8px;
    display: flex;
    justify-content: center;
    font-size: 0.9rem;
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
  }
  .selector {
    width: 260px;
    ${media.desktop}{
      width: 482px;
    }
    ${media.desktopLarge}{
      width: 482px;
    }
  }
`;

export const PriceCardsPosition = styled.div`
  ${media.desktop}{
    padding-bottom: 0.6rem;
    margin-top: 50pxrem;
  }
  ${media.desktopLarge}{
    padding-bottom: 0.6rem;
    margin-top: 50pxrem;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 3.9rem;
`;

export const QuestionContainerPosition = styled.div`
  ${media.desktop}{
    height: 287px; //NOTE: figma design says it's 287px of height but is too small for image to fit in
  }
  ${media.desktopLarge}{
    height: 287px; //NOTE: figma design says it's 287px of height but is too small for image to fit in
  }
  margin-bottom: 26px;
  margin-top: 26px;
  margin-right: 26px;
  height: 450px;
  width: 78%;
  
  ${media.mobileSmall}{
    height: 287px; //NOTE: figma design says it's 287px of height but is too small for image to fit in
    margin-left:28px;
  }
`;

export const QuestionContainer = styled.div`
  ${media.desktop}{
    flex-direction: row;
    justify-content: center;
    gap: 120px;
    position: relative;
    left: 20px;
    top:10px;
  }
  ${media.desktopLarge}{
    flex-direction: row;
    justify-content: center;
    gap: 120px;
    position: relative;
    left: 20px;
    top:10px;
  }

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  
  background: #FBFBFB;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 24px;

  h2 {
    ${media.desktop}{
      font-size: 48px;
      line-height: 48px;
    }
    ${media.desktopLarge}{
      font-size: 48px;
      line-height: 48px;
    }
    font-family: degular, sans-serif;
    font-weight: 900;
    font-size: 32px;
    line-height: 38px;
  }
  button {
    font-family: outfit, sans-serif;
    width: 178px;
    margin-bottom: 30px;
  }
  .image {
    ${media.tablet}{
      // width: 23%;
      // height: 30%;
    }
    ${media.desktop}{
      padding: 0;
      padding-top: 8px;
      width: 340px;
      position:relative;
    }
    ${media.desktopLarge}{
      padding: 0;
      padding-top: 8px;
      width: 340px;
      position:relative;
    }
    display: flex;
    align-items: center;
    padding-top: 50px;
    width: 200px;
    height: 180px;
  }
  .content {
    h2 {
      ${TypographyDesktop.H1};
      ${FontFamilies.outfitFont};
      font-size: 24px;
      font-weight: 900;
    }
    a {
      margin: 0 auto;
    }
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-left: 3%;
    margin-right: 3%;
    gap: 24px;
  }
`;
