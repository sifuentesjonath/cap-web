import React, { FC, useState, useMemo, useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useRouter } from 'next/router';
// Types
import { PlaidLinkOnSuccessMetadata } from 'react-plaid-link';
// Component
import ProfileModal, { IProfileModalProps } from '@components/block/ProfileModal';
import ProgressBar from '@components/block/ProgressBar';
// Steps
import AddInformationStep, { AddTitleHolderInputs } from '@screens/AddInformationStep';
import PlaidModal from '@components/block/CondooPlaid/PlaidModal'
import AdviseContinue from '@/components/block/AdviseContinue';
// api service
import { getProfile, createBank } from '@/service/api';
import { TitleHolderType } from '@/service/apiTypes';
import { usePlaidCreator } from '@components/block/CondooPlaid/usePlaidCreator';
import openAdviseToast from '@components/element/StyledToastAdvise';
// Icons
// import { ArrowCircleLeftIcon } from '@heroicons/react/solid';

interface IAddTitleHolderModalProps extends IProfileModalProps {
  userProfile: any;
  onOpenModal: () => void;
}
const TitleHolderModal: FC<IAddTitleHolderModalProps> = ({
  userProfile,
  openModal,
  onCloseModal,
  onOpenModal,
}) => {
  const [titleHolder, setTitleHolder] = useState<TitleHolderType>(null);
  const [continueMessage, setContinueMessage] = useState<string>('Titleholder Successfully Added!');
  const [step, setStep] = useState<number>(0);
  // Step movement
  const router = useRouter();
  const queryClient = useQueryClient();
  // const step: any = router.query?.step || '0';

  const handleNext = () => setStep(step => step + 1);
  const handlePrev = () => setStep(step => step - 1);

  // Plaid Modal behavior

  const onPlaidSuccess = async (public_token: string, metadata: PlaidLinkOnSuccessMetadata) => {
    try {
      if (!titleHolder?.Id) throw ('Something went wrong while creating a title holder');

      const { plaidCreator: createPlaid, Id } = usePlaidCreator('titleholder', titleHolder.Id.toString());
      const plaidResult = await createPlaid(Id, { public_token, metadata });
      return plaidResult;
    }
    catch (e) {
      openAdviseToast('failed', e.message);
    }
  }

  // Plaid handling
  const onNextOpenPlaidModal = () => { onCloseModal(); handleNext(); }
  const onNextClosePlaidModal = () => { handleNext(); onOpenModal(); }

  const onSuccesAndGoNextStep = async (public_token: string, metadata: PlaidLinkOnSuccessMetadata) => {
    const plaidResult = await onPlaidSuccess(public_token, metadata);
    onNextClosePlaidModal();
  }

  const onPlaidExit = () => finishModalProcess();

  const onPlaidFail = (status) => {
    setContinueMessage('An error ocurred.')
    onNextClosePlaidModal();
  }

  // Modal handling
  const finishModalProcess = () => {
    router.push('/app/profile');
    setStep(0);
    queryClient.invalidateQueries('getTitleholders');
    onCloseModal();
  }

  // Steps
  const steps = useMemo(() => {
    // TODO: onCloseModal should not be a prop as these are the screens of the modal, not the modal.
    return [
      <AddInformationStep setState={setTitleHolder} onNext={onNextOpenPlaidModal} onCloseModal={onCloseModal} key={1} />,
      <PlaidModal
        onExit={onPlaidExit}
        onFail={onPlaidFail}
        onSuccess={(public_token, metadata) => onSuccesAndGoNextStep(public_token, metadata)}
        key={2}
      />,
      <AdviseContinue onContinue={finishModalProcess} title={continueMessage} key={3} />,
    ]
  }, [onNextOpenPlaidModal, onNextClosePlaidModal]);

  // Progressbar
  const completedPercent = (step / (steps.length - 1)) * 100;

  useEffect(() => {
  }, [step, openModal, onOpenModal, continueMessage])

  return (
    <>
      {step != 1 ?
        <ProfileModal
          openModal={openModal}
          onCloseModal={onCloseModal}
        >
          {Boolean(step) && step !== 0 ? (
            <div className='flex flex-col'>
              <ProgressBar color='#00C092' completed={completedPercent} />
              <span className='mx-auto'>Step {step + 1} out of {steps.length}</span>
            </div>
          ) : null}

          {steps[step]}

        </ProfileModal>
        :
        <>
          {steps[step]}
        </>
      }
    </>
  )
}

export default TitleHolderModal
