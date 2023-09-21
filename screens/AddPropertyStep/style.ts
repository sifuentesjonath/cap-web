import styled, { css } from 'styled-components';
import { media } from '@/scss/media';
import { FontFamilies, TypographyDesktop } from '@/containers/styles/typography';
import { input, inputSelector } from './inputStyle';

export const AddPropertyContainer = styled.div`
  /* overflow-y: auto; */
  height: 70%;
  width: 85%;
  ${media.mobileSmall}{
    width: 100%;
    height: 76%;
    display: flex;
    justify-content: center;
    padding-top: 24px;
  }
  ${media.mobile}{
    width: 100%;
    height: 76%;
    display: flex;
    justify-content: center;
    padding-top: 24px;
  }
  ${media.tablet}{
    width: 100%;
    height: 76%;
    display: flex;
    justify-content: center;
    padding-top: 24px;
  }
  ${media.desktopSmall}{
    margin-left: auto;
    margin-right: auto;
    padding-left: 12px;
    padding-top: 24px;
  }
  ${media.desktop}{
    margin-left: auto;
    margin-right: auto;
    padding-left: 12px;
    padding-top: 24px;
  }
  ${media.desktopLarge}{
    margin-left: auto;
    margin-right: auto;
    padding-left: 12px;
    padding-top: 24px;
  }
`;

export const AddPropertySubContainer = styled.div`
  display: flex;
  gap: 8px;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  ${media.mobileSmall}{
    padding-left: 16px;
    padding-right: 16px;

    flex-direction: column-reverse;
  }
  ${media.mobile}{
    padding-left: 16px;
    padding-right: 16px;

    flex-direction: column-reverse;
  }
  ${media.tablet}{
    padding-left: 16px;
    padding-right: 16px;

    flex-direction: column-reverse;
  }
`;

export const InformationContainer = styled.div`
  position: relative;
  .title-container {
    display: flex;
    ${media.mobile}{
      h1 {
        width: 70%;
      }
    }
    ${media.tablet}{
      justify-content: space-between;
      padding-left: 80px;
      padding-right: 80px;
    }
    ${media.desktopSmall}{
      h1 {
        width: 70%;
      }
      margin-bottom: 8px;
    }
  }
  ${media.mobileSmall}{
    height: 100%;
    padding-top: 8px;
  }
  ${media.mobile}{
    height: 100%;
    padding-top: 8px;
  }
  ${media.desktopSmall}{
    width: 44%;
  }
  ${media.desktop}{
    width: 44%;
  }
  ${media.desktopLarge}{
    width: 44%;
  }
`;

export const ClearButton = styled.div`
  position: absolute;
  top: 10%;
  right: 12%;
  ${media.mobileSmall}{
    top: 2%;
    right: 0;
  }
  ${media.mobile} {
    position: static;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: end;
  }
  ${media.tablet} {
    position: static;
    margin-left: auto;
    display: flex;
    align-items: end; // NOTE: use static to all of the queries instead (?
  }
  ${media.desktopSmall} {
    position: static;
    margin-left: auto;
    display: flex;
    align-items: end; // NOTE: use static to all of the queries instead (?
  }
  ${media.desktop} {
    position: static;
    margin-left: auto;
    display: flex;
    align-items: end; // NOTE: use static to all of the queries instead (?
  }
  ${media.desktopLarge} {
    position: static;
    margin-left: auto;
    display: flex;
    align-items: end; // NOTE: use static to all of the queries instead (?
  }
`;

export const MapContainer = styled.div`
  height: 100%;
  width: 50%;
  overflow-y: hidden;
  
  display: flex;
  margin-left: auto;
  margin-right: auto;
  ${media.mobileSmall}{
    // display: none;
    // visibility: hidden;
    width: 100%;
    min-height: 130px;
    padding-left: 8px;
    padding-right: 8px;
  }
  ${media.mobile}{
    width: 100%;
    min-height: 160px;
    padding-left: 8px;
    padding-right: 8px;
  }
  ${media.tablet}{
    width: 100%;
    min-height: 170px;
    padding-left: 80px;
    padding-right: 80px;
  }
  ${media.desktop}{
    width: 55%;
  }
`;

export const FormContainer = styled.div`
  ${media.mobileSmall}{
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }
  ${media.mobile}{
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
  }
  ${media.tablet}{
    padding-left: 80px;
    padding-right: 80px;
  }
  ${media.desktop}{
    height: 53vh;
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    padding: 8px;
  }
  .input-style {
    ${input};
  }
  .input-style-select {
    ${inputSelector};
  }
  .input-style-create-select{
    ${inputSelector};
  }
`;

export const PositionButton = styled.div`
${media.desktop}{
  position: static;
}
${media.mobile}{
  position: static;
}
  position: absolute;
  left:5%;
`

export const PositionButtonAdd = styled.div`
  .buttons {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: space-between;
    ${media.mobileSmall}{
      width: 180px;
      justify-content: space-between;
      gap: 8px;
    }
    ${media.mobile}{
      width: 200px;
      gap: 16px;
    }
    ${media.tablet}{
      width: 200px;
      gap: 16px;
    }
    ${media.desktopSmall}{
      width: 200px;
      gap: 16px;
    }
    ${media.desktop}{
      gap: 24px;
    }
    ${media.desktopLarge}{
      gap: 32px;
    }
  }

  ${media.mobileSmall}{
    left: 0;
  }
  ${media.mobile}{
    padding-top: 10px;
    position: static;
  }
  ${media.tablet}{
    left: 0;
  }
  ${media.desktopSmall}{
    position: static;
  }
  ${media.desktop}{
    position: static;
  }
  ${media.desktopLarge}{
    position: static;
  }
  position: relative;
  left:70%;
  `

export const LinkUnderline = styled.button`
  font-family: Outfit , sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 29px;
  text-align: right;
  text-decoration-line:underline;
  ${({ icon }) => icon &&
    `
      height: 30px;
      width: 30px;
    `
  }
`

export const Title = styled.h1`
  ${FontFamilies.outfitFont};
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  ${media.desktop}{
    margin-bottom: 2rem;
    font-size: 34px;
    line-height: 38px;
    // margin-top: 1rem;
    width: 80%;
    margin-bottom: 6px;
  }
  ${media.mobileSmall}{
    font-size: 20px;
  }
  ${media.mobile}{

  }
`