import styled, { css } from 'styled-components';
import FormContainer from '../../formStyles'

const buttonPencilStyle = css`
  .button-pencil-style {
    background-color: #00C092;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
  }
  .pencil-icon {
    --tw-text-opacity: 1;
    color: rgba(255, 255, 255, var(--tw-text-opacity));
    width: 2rem;
    height: 100%;
  }
`

export const UpdatePropertyFormContainer = styled(FormContainer)`
  ${buttonPencilStyle};
  height: 80%; // TODO: Why is not triggering overflow the same way as the add property form?
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  .buttons-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  .unified-input {
    flex-direction: column;
  }

  @media (min-width: 800px){
    .buttons-container {
      button {
        margin: 0;
      }
      justify-content: end;
    }
    .unified-input {
      flex-direction: row;
    }
  }
`;

export const InformationContent = styled.div`
  display: flex;
  flex-direction: column;

  .property-information-container {
    display: flex;
    flex-direction: column;
    text-transform: capitalize;
    .sub-container {
      display: inline-grid;
      grid-template-columns: 1fr 2fr;
      column-gap: 1rem;
    }
    .info{
      text-align: left;
      font-size: 12px;
      font-weight: 600;
    }
    .value {
        text-align: left;
        font-size: 12px;
        font-weight: 600;
    }
  }

  @media (min-width: 800px){
    flex-direction: row;
    gap: 16px;
  }
`;