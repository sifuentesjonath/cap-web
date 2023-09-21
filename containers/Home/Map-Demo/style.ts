import styled from 'styled-components';
import { media } from '@/scss/media';
import landing1 from '@/public/images/landing-1.png';
import landingPageSpacing from '../utils/landingPageSpacing';
import { MapChipsAnimationStyle } from '../utils/animationsAndStyles';

const mapDesktop = './images/map-demo.png';
const mapPhone = './images/map-demo-phone.png';

export const MapContainer = styled.div`
padding: ${landingPageSpacing.smallScreen};
margin: 24px 0;
display: flex;
justify-content: center;

.map-image-container {
  position: relative;
}
.condo-chip {
  position: absolute;
  width: 186px;
  height: 84px;
  ${MapChipsAnimationStyle};
}

// == Condo Chips {
.one-condo-chip {
  bottom: 34px;
  left: 347px;
}

.two-condo-chip {
  top: 65px;
  left: 100px;
}

.five-condo-chip {
  top: 75px;
  right: 238px;
}
// == }

@media (max-width: 1200px) {
  display: none;
}

@media (min-width: 1200px) {
	padding: ${landingPageSpacing.hugeScreen};
  margin: 40px 0 120px;
  .map-image { 
    content: url(${mapDesktop});
    height: 500px;
  }
}

@media (min-width: 2000px) {
	padding: ${landingPageSpacing.hugeScreen};
}

`;