import { media } from '@/scss/media';
import styled from 'styled-components'

const buttonStyle = `
  width: 115px;
  height: 45px;
`;

// const labelWidth = `100`

export const ProfileContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 40px 32px 0px;
  overflow-y: auto;
  border: 0;
  ${media.desktopSmall}{
    padding: 40px 4% 0px 88px;
  }
  ${media.desktop}{
    padding: 40px 32px 0px 88px;
  }
  ${media.desktopLarge}{
    padding: 40px 32px 0px 88px;
  }
`;

const toggleItemsStyle = `
  .toggle-item-container {
    border-bottom: 4px;
    border-color: black;
    ${media.mobile}{
      display: flex;
      flex-direction: column;
      gap: 12px;
      justify-content: space-between;
    }
  }
  .toggle-item {
    ${media.mobileSmall}{
      padding: 0 8px;
      border-radius: 9999px;
      border: 0;
      text-align: center;
      height: 45px;
      font-size: 12px;
    }
    ${media.mobile}{
      padding: 0 8px;
      border-radius: 9999px;
      border: 0;
      text-align: center;
      height: 45px;
    }
    min-width: 140px;
    max-width: 180px;
    margin: 0px 8px;
    border-bottom: 3px solid #EDEDED;
    text-align: left;

    padding-right: 30px;
    padding-bottom: 8px;
  }
  .toggle-item-active{
    border-bottom: 3px solid #00C092;
    ${media.mobileSmall}{
      color: white;
      font-weight: 500;
      background-color: #00C092;
    }
    ${media.mobile}{
      color: white;
      font-weight: 500;
      background-color: #00C092;
    }
  }
`

export const TopPositionContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  margin-top: 64px;
  margin-bottom: 32px;
  .button {
    ${buttonStyle}
  }
  .add-button {
    ${media.mobileSmall}{
      font-size: 14px;
      width: 100%;
    }
    width: 169px;
    height: 45px;
  }
  ${media.mobile}{
    .add-button {
      position: absolute;
      right: 0;
    }
  }
  ${media.desktopSmall}{
    margin-top: 0;
  }
  ${media.desktop}{
    margin-top: 0;
  }
  ${media.desktopLarge}{
    margin-top: 0;
  }
  
  ${toggleItemsStyle}

`;


export const  ScrollableContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  ${({ titleHolderview }) => titleHolderview && `
    padding-right: 8px;
    max-height: calc(75vh - 30px);
    overflow-y: auto;
  `}
`