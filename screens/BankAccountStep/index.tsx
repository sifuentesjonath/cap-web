import React, { useCallback, useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
// Next
import { useRouter } from 'next/router';
// Plaid handle
import PlaidModal from '@components/block/CondooPlaid/PlaidModal';
import { PlaidLinkError, PlaidLinkOnSuccess, PlaidLinkOnSuccessMetadata } from 'react-plaid-link';
import { PlaidCreatorType, usePlaidCreator } from '@components/block/CondooPlaid/usePlaidCreator';
// Components
import openAdviseToast from '@components/element/StyledToastAdvise';
// Types
import { getTitleholders } from '@/service/api';
import { TitleHolderType } from '@/service/apiTypes';

interface IBankAccountStepProps {
  onPrev: () => void;
  onNext: () => void;
}

const BankAccountStep: React.FC<IBankAccountStepProps> = ({
  onPrev,
  onNext,
}) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { step } = router.query;
  const [userTitleHolder, setUserTitleHolder] = useState<TitleHolderType>(null);
  
  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (public_token: string, metadata: PlaidLinkOnSuccessMetadata) => {
      try {
        const { Id, plaidCreator:createPlaid } = usePlaidCreator('titleholder', userTitleHolder.Id.toString());
        const plaidResult = await createPlaid(Id, { public_token, metadata });

        //@ts-ignore
        const isCreated = plaidResult?.Id ? true : false;
        if(isCreated){
          openAdviseToast('success', 'Your plaid account has been successfully linked!');
        }

        queryClient.invalidateQueries('linkedBank');
        onNext();
      } catch (e) {
        // console.error('Error ocurred while creating bank:', e);
        openAdviseToast('failed', 'An error ocurred while linking your plaid account. Please try again');
        onPrev();
      }
    },
    [queryClient, userTitleHolder] 
  );

  const showPlaidError = (status: PlaidLinkError) => {
    // console.log('Error', status)
    openAdviseToast('failed', 'An error ocurred while linking your plaid account.');
    onPrev();
  }

  // Get the user titleholder that is going to have plaid id:
  const { data: titleholdersResult, isSuccess: isTitleHolders } = useQuery<TitleHolderType[]>(
    ['getTitleholders'], getTitleholders,
  );
  useEffect(() => {
    if(!isTitleHolders) return;

    const userTitleholder = titleholdersResult[0];
    setUserTitleHolder(userTitleholder);
  }, [titleholdersResult])

  return (
    <PlaidModal 
      onSuccess={onSuccess} 
      onFail={showPlaidError}
      onExit={onPrev}
    />
  );
};

export default BankAccountStep;
