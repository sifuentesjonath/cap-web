import styled from 'styled-components';
import { media } from '@/scss/media';
export const CondooContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 35%;
  height: 100%;
  padding-top: 4%;
  background-color: #FFFFFF;
  /* overflow-y: hidden; */
  span, a {
    font-family: outfit, sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 48px;
  }
  ${({ isMobile }) => isMobile && 
    `
      width: 100%;
      padding-left: 4%;
      padding-right: 4%;
      padding-top: 10%;
      height: 87vh;
      justify-content: space-between;
    `
  }
  ${media.tablet}{
    justify-content: center;
  }
  ${media.desktop}{
    justify-content: start;
    width: 40%;
  }
  ${media.desktopSmall}{
    justify-content: start;
    width: 40%;
  }
  ${media.desktopLarge}{
    justify-content: start;
    width: 40%;
  }
`;

export const CondooLogoPosition = styled.div`
  margin: 0 auto;
  margin-bottom: 50px;
`;

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 34px;
  text-align: center;

  h1 {
    font-family: degular, sans-serif;
    font-weight: 900;
    font-size: 28px;
    width: 100%;
    ${media.desktop}{
      font-size: 42px;
      line-height: 48px;
    }

    ${media.desktopLarge}{
      font-size: 42px;
      line-height: 48px;
    }
  }
  @media (max-height: 450px){
    margin: 0;
  }
`;

export const FormPosition = styled.div`
  width: 391px;
`;

export const AccountQuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    text-decoration: underline;
    margin-bottom: 2px;
    font-weight: 500;
  }
  .inline-sign-up {
    display: flex;
    gap: 8px;
    span {
      font-weight: 400;
    }
  }
  @media (max-height: 450px){
    flex-direction: row;
    gap: 24px;
  }
`;
