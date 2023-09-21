import styled from 'styled-components'
import FormContainer from '../../formStyles'

export const PropertyDetailsForm = styled(FormContainer)`
  height: 100%; // Allow scrollable form-fields container
  .buttons-container {
    button {
      margin: auto;
    };
  }
  @media (min-width: 1550px){
    .buttons-container {
      button {
        margin: auto;
      };
    }
  }
`;