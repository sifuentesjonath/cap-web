import { media } from '@/scss/media';
import styled from 'styled-components';

export const PersonalContainer = styled.div`
  height: 82vh;
  width: 100vw;
  @media (max-width: 1000px) or (max-height: 720px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px
  }
`;

export const SubContainer = styled.div`
  @media (min-width: 1000px) and (min-height: 720px){
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
`

export const Title = styled.h1`
  font-family: Degular, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 48px;
  margin-left:20px;
  margin-bottom:40px;
`  

export const Part = styled.span`
    font-family: Outfit;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
`

export const ImagePosition = styled.div`
  position:realtive;
  left:40px;
  margin-bottom:30px;

`