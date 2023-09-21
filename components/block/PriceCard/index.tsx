import React from 'react';
import FlipNumbers from 'react-flip-numbers';
// Components
import Button from '@components/block/Button';
import Link from '@components/element/Link';
import PriceCardItems from '@components/block/PriceCardItems';
import cellPhoneCondoo from '@/public/images/cell-phone-condoo.png'
import Image from 'next/image';

import {
  PriceCardContainer,
  ImagePosition,
  CardStrip,
  CardTittle,
  TittleTextBelow,
  Divider
} from './style';
import paths from '@utils/paths';

export function newlineText(text: string) {
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

export interface IPriceCardProps {
  title: string;
  percent: string;
  description?: string;
  isPopular?: boolean;
  isSelected: boolean;
  options: IOption[];
  onGetStartedClick?: () => void;
  className?: string;
}

const PriceCard: React.FC<IPriceCardProps> = ({
  title,
  percent,
  description,
  isSelected,
  options,
  onGetStartedClick,
}) => {

  return (
    <PriceCardContainer
      isSelected={isSelected}
      className={`${isSelected ? 'border-primary' : 'border-black'}`}
    >
      <div>
        <CardStrip isSelected={isSelected}>
          <h2>{title}</h2>
          <ImagePosition>
            <Image src={cellPhoneCondoo} />
          </ImagePosition>
        </CardStrip>

        <CardTittle isSelected={isSelected}>
          {percent.length !== 0 ? (
            <>
              <FlipNumbers
                height={40}
                width={45}
                duration={1}
                color='black'
                background="white"
                play
                numberStyle=""
                perspective={300}
                numbers={percent} /> <p className='percentage'> % </p>
              <p className='mo-style'>/ mo</p>
            </>
          ) : (
            <h1 className={`description`}>{description}</h1>
          )}
        </CardTittle>

        <TittleTextBelow isSelected={isSelected}>of gross rent</TittleTextBelow>

        <Divider isSelected={isSelected} />

        <PriceCardItems isSelected={isSelected} options={options} />
      </div>

      <div className='mx-auto'>
        <Link type='button' to={paths.signUp}>Get Started</Link>
      </div>
    </PriceCardContainer>
  );
};

export default PriceCard;
