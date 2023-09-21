import { FC } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
// Components
import CondooStepMarker from '@components/block/CondooStepMarker';
// Style
import { dimensions } from '@/scss/media';

interface IPersonalDetailsProps {
  onNext: () => void;
  onPrev: () => void;
};
const PersonalDetails: FC<IPersonalDetailsProps> = ({ onNext, onPrev }) => {
  const isMobile = useMediaQuery(`(${dimensions.mobile})`);
  const PartTitle = `${isMobile ? 'Step' : 'Part'} 1 of 3`;

  const titleMessage = `Add your details.`;
  const descriptionMessage = `Tell us about yourself. If you hold your properties through a company, we'll need information on that.`;

  return (
    <CondooStepMarker
      partIndicator={PartTitle}
      title={titleMessage}
      description={descriptionMessage}
      onClick={onNext}
    />
  );
};

export default PersonalDetails;
