import React, { FC } from 'react';
// Components
import FeatureCard from '@/components/block/FeatureCard'
import FeatureDesktopView from './FeatureDesktopView';
import FeatureMobileView from './FeatureMobileView';
// Style
import { useMediaQuery } from '@react-hook/media-query';
import { dimensions } from '@/scss/media';
import { FeatureDisplayContainer } from './style';

export interface FeatureCard {
  name: string;
  information: string;
  image: StaticImageData;
  labelIcon: { disabled: StaticImageData, enabled: StaticImageData }
}

interface IFeatureDisplayProps {
  cards: FeatureCard[];
}
const FeatureDisplay: FC<IFeatureDisplayProps> = ({ cards }) => {
  const isDesktop = useMediaQuery(`(${dimensions.desktop})`);
  const isTabletOrMobile = !isDesktop;

  return (
    <FeatureDisplayContainer isMobile={!isTabletOrMobile}>
      {isDesktop
        ? <FeatureDesktopView cards={cards} />
        : <FeatureMobileView cards={cards} />
      }
    </FeatureDisplayContainer>
  );
};

export default FeatureDisplay;
