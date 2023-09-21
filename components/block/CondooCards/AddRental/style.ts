import styled from 'styled-components';
import { media } from '@/scss/media';
const macBookAndPhoneImage = './images/macbook-and-phone.png';
const iphonePropertiesImage = './images/iphone-properties.png';

export const AddRentalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  ${media.tablet}{
    flex-direction: row;
    min-height: 540px;
  }
  
  ${media.desktopSmall}{
    flex-direction: row;
    height: calc( 80vh );
    border-radius: 16px;
    background-color: ${({ backgroundColor }) => backgroundColor ?? ''};
    gap: 40px;
    justify-content: center;
  }

  ${media.desktop}{
    background-color: ${({ backgroundColor }) => backgroundColor ?? ''};
    border-radius: 16px;
    flex-direction: row;
    gap: 40px;
    justify-content: center;
  }
  ${media.desktopLarge}{
    background-color: ${({ backgroundColor }) => backgroundColor ?? ''};
    border-radius: 16px;
    flex-direction: row;
    gap: 40px;
    justify-content: center;
  }
`;

export const SectionOverlay = styled.div`
  ${media.mobile}{
    height: 400px;
  }
  
  ${media.mobileSmall}{
    height: 400px;
  }
  ${media.mobileSmall}{
    height: 400px;
  }
  
  background-image: url('${iphonePropertiesImage}');
  background-size: 150px;
  background-position: center;
  background-repeat: no-repeat;

  ${media.tablet}{
    background-size: 200px;
    background-position: center;
    width: 50%;
  }
  
  ${media.desktopSmall}{
    background-size: 200px;
    background-position: center;
    background-image: url('${iphonePropertiesImage}');
    background-size: auto 74%;
    width: 55%;
  }

  ${media.desktop}{
    display: flex;
    width: 48%;
    background-image: url('${macBookAndPhoneImage}');
    background-size: auto 74%;
    background-position: center;
    background-repeat: no-repeat;
    height: calc(95vw * 0.4);
    max-height: 760px;
  }

  ${media.desktopLarge}{
    display: flex;
    width: 730px;
    background-size: 720px;
    background-position: center;
    background-repeat: no-repeat;
    height: calc(36vw);
    max-height: 760px;
    background-image: url('${macBookAndPhoneImage}');
  }
  `;

export const RentalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  gap: 1rem;

  ${media.mobileSmall}{
    padding-top: 3rem;
    justify-content: center;
    bottom: 50px;
    position: relative;
    width: 100%;
  }

  ${media.tablet}{
    padding: 0;
    justify-content: center;
    bottom: 50px;
    position: relative;
    width: 50%;
  }

  ${media.desktopSmall}{
    padding-top: 0;
    justify-content: center;
    left:5%;
    position: relative;
    /* width: 40%; */
    width: 490px;
  }
  ${media.desktop}{
    padding-top: 0;
    justify-content: center;
    position: relative;
    /* width: 44%; */
    width: 490px;
  }
  ${media.desktopLarge}{
    padding-top: 0;
    justify-content: center;
    position: relative;
    /* width: 44%; */
    width: 490px;
  }
`;

export const PhoneImagePosition = styled.div`
  position: relative;
  height: 260px;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  padding-left: 2rem;
`;