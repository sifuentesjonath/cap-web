import styled from 'styled-components';
import { media } from '@/scss/media';

const condooImage = `./images/condoo-city-green-cars.png`

export const LoginContainer = styled.div`
  background-color: #FBFBFB;
  .login-overlay {
    ${media.desktop}{
      position: absolute;
      background-image: url('${condooImage}');
      background-size: 58%;
      background-color: #FBFBFB;
      background-position: right center;
      background-repeat: no-repeat;
      height: 100%;
      width: 100%;
    }
    ${media.desktopSmall}{
      position: absolute;
      background-image: url('${condooImage}');
      background-size: 58%;
      background-color: #FBFBFB;
      background-position: right center;
      background-repeat: no-repeat;
      height: 100%;
      width: 100%;
    }
    ${media.desktopLarge}{
      position: absolute;
      background-image: url('${condooImage}');
      background-size: 58%;
      background-color: #FBFBFB;
      background-position: right center;
      background-repeat: no-repeat;
      height: 100%;
      width: 100%;
    }
  }
`;

export const LeftContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
`;
