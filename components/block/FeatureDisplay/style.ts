import { media } from '@/scss/media';
import styled from 'styled-components';

export const FeatureDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  .informationColumn {
    border-left: solid 1px;
    width: 80%;
    height: auto;
    padding: 0 1rem;
  }
  
  ${media.desktop}{
    width: 90%;
    min-height: 567px;
    top: 100px;
    left: 32%;
    .buttonColumn {
      height: 567px;
    }
  }
`;

export const TitlePosition = styled.div`
  left:5px;
  bottom: 15px;
` 

export const ImagePosition = styled.div`
left: 25%;
bottom: 50px;
`
export const Title = styled.h4`
  font-family: degular-text, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15.809px;
  line-height: 16px;
`