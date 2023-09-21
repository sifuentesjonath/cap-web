import { FC } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { dimensions } from '@/scss/media';
// Component
import CondooStepMarker from '@components/block/CondooStepMarker';

interface ITellUsPropertiesProps {
  onNext: () => void;
  onPrev: () => void;
};

const TellUsProperties: FC<ITellUsPropertiesProps> = ({ onNext }) => {
  const isMobile = useMediaQuery(`(${dimensions.mobile})`);
  const PartTitle = `${isMobile ? 'Step' : 'Part'} 2 of 3`;

  const titleMessage = `Tell us about your properties.`
  const descriptionMessage = `
    Let us know some basic information about your properties, 
    such as the address, unit size, name/company on title, and rent.
  `

  return (
    <CondooStepMarker 
      partIndicator={PartTitle}
      title={titleMessage}
      description={descriptionMessage}
      onClick={onNext}
    />
  );
};

export default TellUsProperties;
