import { FC } from 'react';
import { useRouter } from 'next/router';
import { handleJumpToStep } from '@/containers/Setup/handleStep';
// Components
import StyledButton from '@components/element/StyledButton';
// Style / Icon
import WhyInfoButton from '@components/block/WhyInfoButton';
import {
  PersonalContainer,
  Title,
  SubContainer,
  SkipStepButton
} from './style';

interface ILinkAccountInfoProps {
  onNext: () => void,
  onPrev: () => void,
};

const WhyNeedMessage = `
	Why do we need this?
`;
const WhyMessage = `
	We will use this bank account to deposit cash surplus payments. 
	You can always update the selected account(s) once you are setup with Condoo.
`;

const LinkAccountInfo: FC<ILinkAccountInfoProps> = ({ onNext, onPrev }) => {
  const router = useRouter();

  const skipStep = async () => {
    const toStep = 6;
    await handleJumpToStep(router, toStep);
  }

  return (
    <PersonalContainer>
      <SubContainer>
        <Title> Please link your bank account. </Title>

        <WhyInfoButton whyMessage={WhyMessage} whyNeedMessage={WhyNeedMessage} />
        <StyledButton onClick={onNext} className="button-style">
          Link Account
        </StyledButton>

        <SkipStepButton onClick={skipStep}>Skip For Now</SkipStepButton>
      </SubContainer>
    </PersonalContainer>
  );
};

export default LinkAccountInfo;
