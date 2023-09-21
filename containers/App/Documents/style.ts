import { FontFamilies } from '@/containers/styles/typography';
import SelectInputStyle from '@/styles/selectInputStyle';
import styled, { css } from 'styled-components';

const h4Style = `{
  font-family: outfit, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  padding-bottom: 10px;
}`

export const DocumentsContainer = styled.div`
  .property-filter-container {
    width: 100%;
    min-height: 120px;
    background: #F9F9F9;
    padding: 1rem 3rem;
  }
  .property-filter {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .property-filter-button {
    margin-top: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    align-items: center;
  }
  @media (max-width: 1000px){
    padding-top: 5rem;
  }
  @media (min-width: 1600px){
    .property-filter {
      width: 1150px;
      margin: 0 auto;
    }
    .property-filter-button {
      margin-right: 40px;
    }
  }
`;

export const PropertyFilterContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 { 
    ${h4Style};
  }
  .select-property-input {
    ${SelectInputStyle};
  }
`;

export const Container = styled.div`
  height: 81vh;
  width: 100%;
  .button-position {
    height: 100%;
    display: flex;
    align-items: center;
    margin-top: 24px;
  }
  @media (max-width: 1000px){
    height: 76vh;
  }
`;

export const ButtonsAndScrollableContainer = styled.div`
  height: calc(99% - 100px);
  width: 92%;
  padding-left: 48px;
  .documents-container {
    margin-top: 10px;
    height: 93%;
    overflow-y: auto;
  }
  @media (max-width: 660px) {
    padding: 0;
    margin: 0 auto;
    flex-direction: column;
  }
  @media (max-width: 1000px){
    display: flex;
    .documents-container {
      padding: 16px;
      width: 100%;
      overflow-y: auto;
    }
  }
  @media (min-width: 1600px){
    width: 1150px;
    margin: 0 auto;
    padding: 0;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  padding-top: 2rem;
  gap: 0.5rem;
  flex-wrap: wrap;
  .button-frame {
    height: 70px;
    width: 200px;
  }
  @media (max-width: 660px) {
    flex-direction: row;
  }
  @media only screen and (min-width: 660px) and (max-width: 1000px) {
    width: 224px;
    flex-direction: column;
  }
`;

export const ScrollableContainer = styled.div`
`;

