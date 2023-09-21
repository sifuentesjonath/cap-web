import styled from 'styled-components';
import { media } from '@/scss/media';
import { TypographyDesktop, TypographyMobile } from '@/containers/styles/typography';
import landingPageSpacing from '../utils/landingPageSpacing';
const landing4Mobile = './images/graphic-distribution-phone.png';
const landing4 = './images/graphic-distribution.png';

export const WatchContainer = styled.div`
display: flex;
padding: ${landingPageSpacing.smallScreen};
margin: 24px 0;

h2 {
  font-size: 32px;
}

.watch-content-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.watch-image {
  width: 100%;
}
@media (max-height: 450px) and (max-width: 1000px) {
  h2 {
    font-size: 24px;
    margin: auto 0;
  }
  .watch-content-container {
    flex-direction: row;
  }
}
@media (min-width: 810px) {
  padding: ${landingPageSpacing.hugeScreen};
  h2 {
    max-width: 690px;
  }

}
@media (min-width: 1000px) {
  margin-top: 140px;
  margin-bottom: 80px;
  .watch-image {
    content: url('./images/graphic-distribution.png');
  }
}

@media (min-width: 1200px){
  .watch-content-container {
    width: 1200px;
    margin: 0 auto;
  }
}
`;

export const MainTittle = styled.h2`
${TypographyMobile.H0Small};
`;