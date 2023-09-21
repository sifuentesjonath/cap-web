import styled from 'styled-components';

export const YearTextContainer = styled.div`
display: flex;
margin: 20px 0px 10px 0px;
span{
  font-family: outfit, sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  line-height: 36px;
  color: black;
}
@media (max-width: 1000px){
  margin: 0;
}
`;

export const DocumentFileLabelContainer = styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem
`;

export const Separator = styled.hr`
margin-top: 30px;
width: 98%;
`;