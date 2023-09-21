import React, { FC } from 'react';
import styled from 'styled-components';
import { media } from '@/scss/media'
// Icons
import { FaCheckCircle, FaPlusCircle } from 'react-icons/fa';
import { TypographyDesktop } from '@/containers/styles/typography';

function newlineText(text: string) {
  const newText = text.split('\n').map((str, _i) => (
    <span key={_i}>
      {str}
      <br />
    </span>
  ));

  return newText;
}

export type IOption =
  | {
      title: string;
      type?: undefined;
      description?: string;
    }
  | {
      title: string;
      type: string;
      description?: string;
    }
  | {
      title: string;
      type: string;
      description: string;
    };

interface IPriceCardItemsProps {
  options: IOption[];
  isSelected: boolean;
}
const PriceCardItems:FC<IPriceCardItemsProps> = props => {
  const {options, isSelected} = props;
  return (
    <CardContent>
      {options.map((option, index) => (
        <CardItems isSelected={isSelected} key={index}>
          {option.type ? (
            <FaPlusCircle size={16}/>
          ) : (
            <FaCheckCircle size={16}/>
          )}
          <p className='items-text'>
            {newlineText(option.title)}

            {option.description && (
              <p className='description'>
                ({option.description})
              </p>
              )
            }
          </p>
        </CardItems>
      ))}
    </CardContent>
  )
}

const CardContent = styled.div`
  ${media.desktop}{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  ${media.desktopLarge}{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CardItems = styled.div`
  display: flex;
  text-transform: capitalize;

  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  .items-text {
    margin-left: 1rem;
    font-weight: 400;
    width: 91.666667%;
    font-size: 0.8rem;
    line-height: 1.25;
  }
  .description {
    ${TypographyDesktop.SmallParagraph};
    // font-size: 0.75rem;
    // line-height: 1rem;
    color: #A7A7A7;
  }

  color: #000000;
  
  ${media.desktop} {
    flex-direction: row;
  }
  ${media.desktopLarge} {
    flex-direction: row;
  }
`;

export default PriceCardItems
