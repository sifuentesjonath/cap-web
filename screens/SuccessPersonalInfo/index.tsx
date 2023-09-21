import React from 'react';
import { PersonalContainer, SubContainer } from './styles';
import AdviseContinue from '@components/block/AdviseContinue';

type Props = {
  onNext: () => void;
  onPrev: () => void;
  isMobile?: boolean;
};

const SuccessPersonalInfo: React.FC<Props> = ({ onNext, isMobile }: Props) => {
  return (
    <PersonalContainer>
      <SubContainer>
        <AdviseContinue
          onContinue={onNext}
        />
      </SubContainer>
    </PersonalContainer>
  );
};

export default SuccessPersonalInfo;
