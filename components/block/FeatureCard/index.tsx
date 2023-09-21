import React from 'react';
import Image from 'next/image';
import { Cards, getCardImage } from '@components/block/FeatureDisplay/cards';
// Style
import {
  FeatureCardContainer,
  ImageContainer,
  TitlePosition,
  Title,
  InformationPosition,
  Information,
  ButtonPosition
} from './style';
import Link from '@components/element/Link';
import paths from '@utils/paths';
import { FeatureCard as featureCard } from '../FeatureDisplay';

interface IFeatureCardProps {
  card: featureCard;
}
const FeatureCard: React.FC<IFeatureCardProps> = ({
  card
}) => {
  const { name, information, image } = card;

  const anchorName: string = "Get Started"

  return (
    <FeatureCardContainer>
      <ImageContainer>
        <Image priority alt={`${name} feature`} src={image} layout="responsive" />
      </ImageContainer>

      <TitlePosition>
        <Title>{name}</Title>
      </TitlePosition>

      <InformationPosition>
        <Information>{information}</Information>

        <ButtonPosition>
          <Link type='button' to={paths.signUp}>{anchorName}</Link>
        </ButtonPosition>
      </InformationPosition>
    </FeatureCardContainer>
  );
};

export default FeatureCard;
