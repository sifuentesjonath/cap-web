import styled from 'styled-components';
import { media } from '@/scss/media';
import { TypographyDesktop } from '@/containers/styles/typography';

export const PriceCardContainer = styled.div`
  width: 275px;
  max-height: 571px;
  position: relative;

  background: white;

  border: 1px solid #E1E1E1;
  border-radius: 8px;
  box-shadow: 0px 0px 29px rgba(157, 151, 151, 0.16);
  border-radius: 24px;

  padding: 27px 20px 23px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .btn-select {
    margin-top: 10px;
    width: 55%;
  }

  ${({ isSelected }) => !isSelected ? 'display: none;' : '' };
  
  ${media.desktop}{
    .btn-select {
      width: 40%;
    }
    width: 37rem;
    height: 24rem;
  }
  ${media.desktopLarge}{
    .btn-select {
      width: 40%;
    }
    width: 37rem;
    height: 24rem;
  }
`;

export const ImagePosition = styled.div`
  ${media.desktop}{
    padding-top: 10%;
    right: 0;
    padding-right: 2%;
    width: 30%;
  }
  ${media.desktopLarge}{
    padding-top: 10%;
    right: 0;
    padding-right: 2%;
    width: 30%;
  }
  position: absolute;
  width: 30%;
  padding-top: 10%;
  left: 70%;
`;

export const CardStrip = styled.div`
  height: 43px;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  margin-top: 7%;

  display: flex;
  align-items: center;
  justify-content: center;

  text-transform: uppercase;

  h2 {
    width: 100%;
    padding-left: 1.5rem;
    ${TypographyDesktop.H3};
    font-family: degular, sans-serif;
  }

  background-color: #EDEDED;
`;

export const CardTittle = styled.div`
  display: flex;
  margin-top: 3.9rem;

  font-family: degular, sans-serif;
  font-weight: 500;

  .percentage {
    font-size: 3rem;
    line-height: 1;
  }
  .mo-style {
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .description {
    width: 58.333333%;
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  color: #000000;
  
  section, span { // TODO: Fix blurry text of FlipNumber
    transform: translateZ(0);
    -webkit-font-smoothing: subpixel-antialiased;
    transform: perspective(-1px);
  }
`;

export const TittleTextBelow = styled.p`
  ${TypographyDesktop.SmallParagraph};

  font-weight: 400;
  margin-top: 0.5rem;

  color: #000000;
`;

export const Divider = styled.div`
  height: 0.125rem;
  width: 100%;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;

  background-color: #000000
`;
