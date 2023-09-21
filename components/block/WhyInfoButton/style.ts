import styled from 'styled-components';
import { media } from '@/scss/media';
import Popup from 'reactjs-popup';
import { FontFamilies, TypographyDesktop } from '@/containers/styles/typography';

export const Information = styled.span`
font-family: Outfit;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 18px;
`

export const ImagePostion = styled.span`
position: relative;
`;

export const StyledPopup = styled(Popup)`
// use your custom style for ".popup-overlay"
&-overlay {
background: rgba(0, 0, 0, 0.5);

}
// use your custom style for ".popup-content"
&-content {
margin: auto;
background: rgb(255, 255, 255);
padding: 22px 26.31px 16px 23.8px;
${TypographyDesktop.SmallParagraph};
${FontFamilies.outfitFont};
font-weight: 500;
line-height: 18px;
}

&-arrow{
color: rgb(255, 255, 255);
}

[role='tooltip']&-content {
width: 200px;
${media.mobile}{
  width: 300px;
}
${media.tablet}{
}
box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px;
}

[data-popup='tooltip']&-overlay {
background: transparent;
}
`;