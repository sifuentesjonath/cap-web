import styled from 'styled-components';
import { media } from '@/scss/media';
import { TypographyDesktop, TypographyMobile } from '@/containers/styles/typography';
import landingPageSpacing from '../utils/landingPageSpacing';
import ScrollBarStyle from '@components/graphics/styled/ScrollBar';


export const SecurityContainer = styled(ScrollBarStyle)`
display: flex;
padding: ${landingPageSpacing.smallScreen};
margin: 64px 0;
h2 {
  ${TypographyMobile.H0Small};
}

.security-content-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  width: 100%;
}
.squares-container {
  display: flex;
  overflow-x: auto;
  width: 100%;
}

@media (min-width: 1200px){
  padding: ${landingPageSpacing.hugeScreen};
  h2 {
    ${TypographyDesktop.H0}
    line-height: 42px;
    font-size: 2.5em;
  }
  .security-content-container {
    gap: 24px;
  }
}

@media (min-width: 1600px){
  justify-content: center;
  .security-content-container {
    width: auto;
  }
}

`;

export const MainTittle = styled.h2`
`;

export const ButtonPosition = styled.div`
  
`;