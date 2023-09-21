import { FC } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { dimensions } from '@/scss/media';
// Components
import CondooStepMarker from '@components/block/CondooStepMarker';

type Props = {
  onNext: () => void;
  onPrev: () => void;
};

const StepSignManagement: FC<Props> = ({ onNext, onPrev }: Props) => {
  const isMobile = useMediaQuery(`(${dimensions.mobile})`);
  const PartTitle = `${isMobile ? 'Step' : 'Part'} 3 of 3`;

  const titleMessage = `Sign the management agreement.`
  const descriptionMessage = `
    Read, review, and sign our management agreement. 
    Once completed, a copy is always available within your Condoo account.
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

export default StepSignManagement;
