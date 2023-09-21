/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useCallback, useMemo, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@react-hook/media-query';
import { useQueryClient } from 'react-query';
// Helper
import { getSetupStep, handleGoNextStep, handleGoPreviousStep, handleRelocateUserInStep } from './handleStep';
// Steps
import SetupInfoStep from '@screens/SetupInfoStep';
import PersonalDetailsStep from '@screens/PersonalDetailsStep';
import FirstNameStep from '@screens/FirstNameStep';
import LinkAccountInfo from '@screens/LinkAccountInfo';
import BankAccountStep from '@screens/BankAccountStep';
import SuccessPersonalInfo from '@screens/SuccessPersonalInfo';
import TellUsProperties from '@screens/TellUsProperties';
import AddPropertyStep from '@screens/AddPropertyStep';
import StepSignManagement from '@screens/StepSignManagement';
import StepSendEmails from '@screens/StepSendEmails';
import SetupFinalSuccess from '@screens/SetupFinalSuccess';
// Components
import ProgressBar from '@components/block/ProgressBar';
// Style / Icon
import { ProgressBarContainer, StepsContainer } from './style';
import GoBack from '@/public/images/goback.svg'
import Image from 'next/image';
import useProfileData, { QUERY_KEY_NAME as profileQueryKeyName } from '@/service/useApi/Profile/useProfileData';

export interface ISetupProps { }
const Setup: FC<ISetupProps> = props => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const step = getSetupStep(router);
  const isMobile = useMediaQuery(`(max-width: 660px)`);

  const { data: profile } = useProfileData();

  const handleNext = useCallback(async () => {
    // await handleGoNextStep(profile, router);
    // await queryClient.invalidateQueries(profileQueryKeyName);
    router.push(`/setup?step=${step + 1}`)
  }, [queryClient, router.query, step, profile?.Step]);

  const handlePrev = useCallback(async () => {
    // await handleGoPreviousStep(profile, router);
    // await queryClient.invalidateQueries(profileQueryKeyName);
    router.push(`/setup?step=${step - 1}`)
  }, [queryClient, router.query, step, profile?.Step]);

  const steps = useMemo(() => {
    return [
      <SetupInfoStep onNext={handleNext} key={1} />,
      <PersonalDetailsStep onPrev={handlePrev} onNext={handleNext} key={2} />,
      <FirstNameStep onPrev={handlePrev} onNext={handleNext} key={3} profile={profile} />,
      <LinkAccountInfo onPrev={handlePrev} onNext={handleNext} key={4} />,
      <BankAccountStep onPrev={handlePrev} onNext={handleNext} key={5} />,
      <SuccessPersonalInfo isMobile={isMobile} onPrev={handlePrev} onNext={handleNext} key={6} />,
      <TellUsProperties onPrev={handlePrev} onNext={handleNext} key={7} />,
      <AddPropertyStep onPrev={handlePrev} onNext={handleNext} key={8} profile={profile} />,
      <StepSignManagement onPrev={handlePrev} onNext={handleNext} key={9} />,
      <StepSendEmails onPrev={handlePrev} onNext={handleNext} key={10} />,
      <SetupFinalSuccess onPrev={handlePrev} key={11} />
    ];
  }, [handleNext, handlePrev, profile]);

  // useEffect(() => handleRelocateUserInStep(profile, router), [profile, profile?.Step]);

  const canShowProgressBar = Boolean(step) && step !== 0;
  const completedPercent = (step / (steps.length - 1)) * 100;
  const isASetupStep = step !== 0 && step !== 10;
  const currentStepProgressMessage = `Step ${step} out of ${steps.length - 1}`;

  const buttonGoBackWidth = isMobile ? 80 : 120;
  return (
    <StepsContainer isMobile={isMobile} className="h-full bg-opacity-20 flex flex-col">
      {canShowProgressBar &&
        <ProgressBarContainer>
          <ProgressBar isMobile={isMobile} color='#00C092' completed={completedPercent} />
          <div className="progress-text">{currentStepProgressMessage}</div>
        </ProgressBarContainer>
      }

      {isASetupStep &&
        <div className="btn-back-wrapper" onClick={handlePrev}>
          <Image src={GoBack} alt="Bullet 1" className="btn-back" />
          <span>Go back</span>
        </div>
      }
      {steps[step]}
    </StepsContainer>
  );
};

export default Setup;
