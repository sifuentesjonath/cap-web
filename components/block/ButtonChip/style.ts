import styled from 'styled-components';

export const ButtonContainer = styled.div`
  background: ${({isActive}) => isActive ? '#E0E0E0' : '#F9F9F9'};
  border-radius: 16px;

  padding: 10px 8px;

  .button-title-container {
    display: flex;
    flex-grow: 1;
  }
  .button-container {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 0.5rem;
  }
  @media (max-width: 660px) {
    .button-title-container {
      display: none;
    }
    .button-container {
      justify-content: center;
    }
  }
`;

export const ButtonTittle = styled.span`
  font-family: 'Outfit';
  font-weight: 400;
  font-size: 14px;
  line-height: 48px;
`;

export const ImageContainer = styled.div`
  height: 100%;
  display: flex;
`;