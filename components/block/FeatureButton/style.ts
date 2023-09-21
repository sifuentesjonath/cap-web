import { LightColors } from '@/containers/styles/colors';
import { FontFamilies } from '@/containers/styles/typography';
import styled from 'styled-components';


export const FeatureButtonContainer = styled.div`
  width: 263.86px;
  margin-bottom:10px;
  min-height: 56px;
  position: relative;
  border-radius: 11.4975px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;

  background-color: ${({ buttonActive}) => buttonActive 
    ? `${LightColors.Secondary}` 
    : `${LightColors.CondooLightGrey}`
  };
`;

export const TitlePosition = styled.div`
// position: absolute;
// left: 21.69%;
// right: 49.4%;
// top: 28.57%;
// bottom: 26.79%;
  width: 80%;
` 

export const ImagePosition = styled.div`
  position: relative;
  left: 4%;
  right: 83.63%;
  // top: 28.95%;
  top: 4.95%;
  // bottom: 28.5%;
`
export const Title = styled.h3`
  ${FontFamilies.outfitFont};
  width: 100%;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: ${({ buttonActive}) => buttonActive ? 'white' : 'black'};
`
