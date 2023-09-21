import styled from 'styled-components'

// Property Card
export const Card = styled.div`
  height: 309px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background: #F9F9F9;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
  cursor:pointer;

  @media (max-width: 600px) {
    width: 300px;
  }
  @media (min-width: 600px) {
    width: 350px;
  }
`;

export const CardDivision = styled.div`
  height: 50%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  .text {
    font-family: outfit, sans-serif;
  }
`;

export const ImageAndIconsContainer = styled.div`
  width: 100%;
  height: 50%;
  position: relative;
  padding: 10px 10px 0px 10px;
  border-radius: inherit;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  ${({ backgroundColor }) => backgroundColor && 
    `background-color: ${backgroundColor};`
  }
`;

export const ImagePosition = styled.div`
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, 0);
  .image {
    position: relative;
    height: 50px;
    width: 30px;
  }
`;

export const CardTextLabel = styled(CardDivision)`
  background: #F9F9F9;
  border-radius: 0 0 16px 16px;
  margin-bottom: 10px;
`;

export const IconsContainer = styled.div`
  width: 100%;
  position: absolute;
  z-index: 20;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 12px 8px 0px 10px;
`;

// export const ImageSize = styled.div`
// `;

export const IconsLabel = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;

  padding: 0px 10px 0px 10px;
  border-radius: 41px;
  background-color: #F9F9F9;
`;

export const IconLabelText = styled.h4`
  font-size: 14px;
  line-height: 24px;
`;

export const IconPosition = styled.div`
  display: flex;
  h4 {
    padding-left: 4px;
  }
`;

export const CardTittle = styled.h3`
  cursor: pointer;
  font-family: degular-text, sans-serif;
  font-size: 19px;
  font-weight: 800;
  text-align: left;
  :hover {
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

export const TextContainer = styled.div`
  display: flex;
  font-family: outfit, sans-serif;
  width: 100%;
  flex-direction: column;
`;

export const TextLabel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  > * {
    &:first-child {
      width: 50%;
      font-size: 12px;
      font-weight: 600;
    }
    &:last-child {
      width: 100%;
      text-align: left;
      font-size: 14px;
      font-weight: 600;
      text-transform: capitalize;
    }
  }
`;
