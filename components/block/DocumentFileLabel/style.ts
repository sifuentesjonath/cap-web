import { FontFamilies } from '@/containers/styles/typography';
import styled from 'styled-components';

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #F7F8F9;
  border-radius: 16px;
  gap: 20px;
  padding: 0 1rem;
  .filename-container {
    flex: 1 1 0%;
  }
  .download-icon-container {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  /* @media (max-width: ) */
  @media (max-width: 660px){
    /* min-width: 380px; */
    padding: 0 8px;
    gap: 4px;
    span {
      font-size: 12px;
    }
    .filename-container {
      flex: .8;
    }
    .download-icon-container {
      margin: 0 auto;
    }
  }
  @media only screen and (min-width: 1000px){
    width: 85%;
    padding: 0 2rem;
  }
`;

export const EmptyLabelContainer = styled(LabelContainer)`
  padding: 0 1.5rem;
  .message {
    ${FontFamilies.outfitFont};
    font-size: 18px;
    color: #A8A8A8;
  }
`;

export const ImageContainer = styled.div`
  padding: 10px;
`;

export const FileTypeText = styled.span`
  font-size: 10px;
  background-color: #E5E5E5;
  border-radius: 4px;
  color: #C1C1C1;
  padding: 3px 4px 3px 4px;
`;

export const FileNameText = styled.span`
  font-family: outfit, sans-serif;
  font-size: 18px;
  line-height: 28px;
  font-weight: 600;
  text-align: left;
  @media (max-width: 815px){
    font-size: 14px;
  }
  @media only screen and (min-width: 815px) and (max-width: 1000px){
    font-size: 16px;
  }
`;

export const Text = styled.span`
  color: #000000;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
`;

export const DateText = styled(Text)`
  display: block;
  min-width: 40px;
`;

export const ViewText = styled(Text)`
  font-size: 16px;
  text-decoration-line: underline;
`;

export const Tag = styled.div`
  width: 215.35px;
  padding-left: 10px;
  padding-right: 8px;
  background: #c1c1c161;
  border-radius: 4px;
`;

export const TagText = styled.h4`
  color:black;
`