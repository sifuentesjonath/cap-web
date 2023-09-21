import { TypographyDesktop, TypographyMobile } from '@/containers/styles/typography';
import { media } from '@/scss/media';
import styled from 'styled-components';

export const FeatureCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TitlePosition = styled.div`` 

export const ImageContainer = styled.div`
  background-color: #C4C4C4;
  border-radius: 9px;
`
export const Title = styled.label`
  ${TypographyMobile.H0Small}
  ${media.desktop}{
    ${TypographyDesktop.H4}
    line-height: 42px;
    font-size: 2.5em;
  }
`
export const Information = styled.p`
  ${TypographyDesktop.Paragraph}
  ${media.tablet} { 
    ${TypographyMobile.H2Normal} 
    line-height: 28px;
  }
  ${media.desktop} {
    ${TypographyDesktop.Paragraph} 
  }
`

export const InformationPosition = styled.div``

export const ButtonPosition =styled.div`
  margin-top: 1rem;
`