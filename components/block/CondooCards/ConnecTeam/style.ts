import styled from 'styled-components';
import { media } from '@/scss/media';
import { FontFamilies, TypographyDesktop, TypographyMobile } from '@/containers/styles/typography';

const landing3 = './images/iphone-profile.png';

const ConnectTeamImage = `
  background-image: url('${landing3}');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 266px;
  height: 54%;

  ${media.mobileSmall}{
    height: 54%;
  }

  ${media.mobileSmallHeight}{
    height: 450px;
  }

  ${media.tablet}{
    background-position: center;
    align-items: center;
    background-size: auto 90%;
  }
  ${media.desktopSmall}{
    background-size: calc(70vw * 0.35);
    background-position: center;
    background-repeat: no-repeat;
    height: calc(100vw * 0.38);
  }
  ${media.desktop}{
    background-size: calc(70vw * 0.40);
    background-position: center;
    background-repeat: no-repeat;
    height: calc(100vw * 0.38);
  }
  ${media.desktopLarge}{
    background-size: calc(70vw * 0.40);
    background-position: center;
    background-repeat: no-repeat;
    height: calc(100vw * 0.38);
  }
`;

export const ConnectTeamContainer = styled.div`
  /* min-height: 600px; */
  min-height: 500px;
  ${media.mobileSmall}{
  }
  ${media.mobile}{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  ${media.tablet}{
    display: flex;
    flex-direction: column;
  }
  ${media.desktop}{
      height: calc( 80vh - 50px );
      display: flex;
      justify-content: center;
      flex-direction: row-reverse;
  }
  ${media.desktopSmall }{
      height: calc(70vh);
      display: flex;
      justify-content: center;
      padding-right:180px;
      flex-direction: row-reverse;
  }
  ${media.desktopLarge}{
      height: calc( 100vh - 50px );
      display: flex;
      justify-content: center;
      flex-direction: row-reverse;
  }
`;

export const SectionOverlay = styled.div`
  ${ConnectTeamImage}
  ${media.tablet}{
    min-height: 400px;
  }
  ${media.desktopSmall}{
    width: 100%;
    height: 100%;
  }
  ${media.desktop}{
    width: 32%;
    height: 100%;
  }
  ${media.desktopLarge}{
    width: 30%;
    height: 100%;
  }
`;

const Content = `.content {
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  padding-right: 8px;
}`;

export const SectionContent = styled.div`
  ${Content}
  padding-top: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  button {
    ${TypographyDesktop.Paragraph}
    width: 7rem;
    // margin-bottom:24px;
  }

  ${media.tablet}{
    padding-left: 6rem;
    padding-right: 9rem;
    padding-bottom: 3rem;
    button {
      width: 10rem;
    }
  }

  ${media.desktopSmall}{
    padding-left: 8rem;
    padding-top: 9rem;
    position: relative;
    // bottom: 85px;
    button {
      width: 10rem;
    }
  }
  ${media.desktop}{
    width: 33%;
    justify-content: center;
    flex-grow: 0.3;
    // gap: 8px;
    // position: relative;
    // bottom:60px;
    // padding: 0 0 5rem 0;
    h4 {
      width: 100%;
    }
    button {
      width: 10rem;
    }
  }
  ${media.desktopLarge}{
    width: 23%;
    -webkit-box-pack: center;
    justify-content: center;
    // bottom: 60px;
    position: relative;
    // padding: 0px 0px 11rem;
    h4 {
      width: 76%;
    }
    button {
      width: 10rem;
    }
  }
`;

export const MainTittle = styled.h1`
  ${TypographyMobile.H0Small}
  ${media.mobile}{
    // padding-left: 10px;
  }
  ${media.mobileSmall}{
    // padding-left: 10px;
  }
  ${media.desktop}{
    ${TypographyDesktop.H0}
    line-height: 42px;
    font-size: 2.5em;
  }
  ${media.desktopSmall}{
    ${FontFamilies.outfitFont}
    line-height: 30 px;
  }
`

export const SubTittle = styled.h4`
  ${TypographyDesktop.Paragraph}
  ${media.mobile}{
    // padding-left: 10px;
  }
  ${media.mobileSmall}{
    padding-left: 10px;
  }
  ${media.tablet} { 
    ${TypographyMobile.H2Normal} 
    line-height: 28px;
  }
  ${media.desktopLarge}{ 
    width:76%;
  }
  ${media.desktopSmall}{ 
    width:98%;
  }
`