import { FontFamilies } from '@/containers/styles/typography';
import { media } from '@/scss/media';
import styled from 'styled-components';

export const SquareDataContainer = styled.div`
  width: auto;
  min-height: 305px;
  display: inline-block;
  border-left: solid;
  margin: 0 25.59px 0 0;
  padding-left: 8px;
  // padding: 27px 20px 60px;
  flex-direction: column;
  justify-content: space-between;
  ${media.mobile}{
    width: 98%;
  }
  ${media.mobileSmall}{
    width: 98%;
  }
`;

export const TitlePosition = styled.div`
  // position: static;
  // left:5%;
  // top: 75px;
` ;

export const ImagePosition = styled.div`
  // position: static;
  // left:5%;
  // top:15px;
  margin-bottom:15px;
`;
export const Title = styled.h4`
  ${FontFamilies.manropeFont};
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
`;

export const Information = styled.div`
  // position: static;
  // left:5%;
  // top: 85px;
  width: 200px;
  margin-top:30px;
`;

export const TextInfo = styled.h4`
  ${FontFamilies.outfitFont};
  font-style:normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;