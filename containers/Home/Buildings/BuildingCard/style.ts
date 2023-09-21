import styled from 'styled-components';
import { media } from '@/scss/media';

export const BuildingCardContainer = styled.div`
  min-width: 206.24px;
  min-height: 401.93px;
  background:  linear-gradient(0deg, #F8F8F8, #F8F8F8);
  border-width: 1px;
  border-radius: 11.4975px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  ${media.desktop}{
    top: 12px;
  }

  ${media.desktopLarge}{
    top: 12px;
  }
  .title-container {
    ${media.desktop}{
      left:5px;
      bottom: 15px;
    }
    align-self: center;
    padding: 0.6rem;
  }
`;


export const Title = styled.p`
  font-family: degular-text, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15.809px;
  line-height: 16px;
`;