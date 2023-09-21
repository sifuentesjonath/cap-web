import Popup from 'reactjs-popup';
import styled from 'styled-components'

export const Container = styled(Popup)`
  &-overlay {
    background: rgba(0,0,0,.5);
  }
  &-content {
    background-color: #FBFBFB;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    height: 95%;
    width: 74%;
  }
`;

export const ModalContainer = styled.div`
  position: relative;
  height: 100%;
`;

export const ImageContainer = styled.div`
  height: 32%;
  width: 100%;
  position: relative;
  margin-bottom: 1rem;
  border-radius: 16px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  ${({ backgroundColor }) => backgroundColor && 
    `background-color: ${backgroundColor};`
  }
  .image-container {
    position: absolute;
    left: 50%;
    top: 35%;
    transform: translate(-50%, 0);
  }
  .image {
    position: relative;
    height: 50px;
    width: 30px;
  }
`;

export const ContentPosition = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
`;

export const PropertyDetailsForm = styled.form`
  display: flex;
  position:relative;
  gap: 3.5rem;
  width: 100%;
  justify-content: space-between;
  padding-right: 20rem;
  margin: 10px 0px 0px 10px;
  input {
    border-width: 1px;
    border-color: #E1E1E1;
    border-radius: 0.5rem;
    width: 100%;
    &:focus {
      border-color: #E1E1E1;
      box-shadow: 0px 10px 7px -10px rgba(22, 23, 24, 0.35),
        0px 10px 20px -15px rgba(22, 23, 24, 0.2);
    }
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 0.5rem;
`;

export const FormLabelGroup = styled.div`
  display: flex;
  width: 100%;
  gap: 0.75rem;
  label {
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 0.75rem
  }
`;

export const Separator = styled.hr`
  border-width: 1.8px;
  border-color: rgb(0 0 0);
  background: rgb(0 0 0);
`;

export const Title = styled.h3`
  font-family: degular-text, sans-serif;
  font-weight: 800;
  font-size: 40px;
  padding-left: 20px;
  color: #FFFFFF;
  text-shadow: 6px 6px 10px rgba(0, 0, 0, 0.1);
`;

export const PropertyAddress = styled.div`
  font-size: 16px;
  padding-right: 30px;
  padding-bottom: 6px;
  border-bottom: 3.8px solid #00C092;
`;


export const EditFormLabelGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 28%;
`;

export const EditFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  padding-bottom: 0.75rem;
`;

export const CardLabel = styled.div`
  display: flex;
  flex-direction: column;
  .info{
      font-size: 12px;
      font-weight: 600;
  }
  .value {
      text-align: left;
      font-size: 14px;
      font-weight: 600;
  }
  .capitalize {
    text-transform: capitalize;
  }

`;

export const LabelInputText = styled.h4`
  font-size: 12px;
  font-family: outfit, sans-serif;
  font-weight: 800;
  padding-bottom: 3px;
`;

export const SelectOnlyStyle = styled.div`
  .my-select {
    .custom__control {
      width: 100%;
      border: solid 1px #E1E1E1;
      border-radius: 10px;
      box-shadow: unset;
      height: 43px;
      margin-bottom: 6px;
      .custom__value-container {
        .custom__placeholder {
          color: black;
        }
        .custom__single-value {
          color: rgba(4, 4, 5, 0.8);
          font-weight: 500;
        }
      }
      .custom__indicators {
        .custom__indicator-separator {
          display: none;
        }
      }
      .custom__input {
        input:focus {
          box-shadow: unset !important;
        }
      }
    }
    .custom__menu {
      .custom__menu-list {
        padding: 12px;
        .custom__option {
          cursor: pointer;
          background-color: white;
          color: rgb(4, 4, 5);
          font-weight: normal;
          font-size: 14px;
          &:hover {
            background-color: rgba(4, 4, 5, 0.05);
            color: rgb(4, 4, 5);
          }
          &.custom__option--is-selected {
            background-color: rgba(4, 4, 5, 0.05);
          }
        }
      }
    }
  }
`