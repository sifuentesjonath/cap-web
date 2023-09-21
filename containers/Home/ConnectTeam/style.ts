import styled from 'styled-components';
import { media } from '@/scss/media';
import { FontFamilies, TypographyDesktop, TypographyMobile } from '@/containers/styles/typography';
import landingPageSpacing from '../utils/landingPageSpacing';
import { MainTitleAnimationStyle, SubTitleAnimationStyle } from '../utils/animationsAndStyles';

export const ConnectTeamContainer = styled.div`
padding: ${landingPageSpacing.smallScreen};

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 16px;

.section-image {
  width: 50vw;
}

.section-content-container {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 12px;
p {
${TypographyDesktop.Paragraph}
}
a {
  margin-right: auto;
}
}

@media (max-height: 600px) {
  .section-image {
    width: 40vh;
  }
}

@media (min-width: 810px){
  padding: 0 100px;
  .section-image {
    width: 30vw;
  }
}

@media (max-height: 450px) and (max-width: 1000px) {
  margin-bottom: 80px;
  flex-direction: row;
  .section-image {
    width: 180px;
  }
  .section-content-container {
    max-width: 320px;
  }
  h2 {
    font-size: 24px;
  }
  p {
    font-size: 12px;
  }
}

@media (max-width: 600px){
  padding-bottom: 97px;
}

@media (max-width: 380px){
  padding-bottom: 37px;
}

@media (min-width: 1000px) {
  flex-direction: row-reverse;
  gap: 24px;
  .section-content-container {
    align-items: flex-start;
    width: 320px;
  }
  .section-image {
    width: 400px;
  }
  h2 {
    width: 400px;
    line-height: 42px;
  }
  p {
    width: 380px;
    ${TypographyMobile.H2Normal} 
  }
}

@media (min-width: 1200px){
  .section-content-container{
    flex-grow: 0.1;
    justify-content: space-between;
  }
}
`;
  
export const MainTittle = styled.h2`
${MainTitleAnimationStyle};

${TypographyMobile.H0Small}
`;

export const SubTittle = styled.p`
${SubTitleAnimationStyle};
`;