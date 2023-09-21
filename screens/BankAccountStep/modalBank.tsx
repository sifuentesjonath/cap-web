import { getProfile, createBank } from '@/service/api';
import { ProfileType } from '@types';
import { FC, useCallback, useEffect } from 'react';
import {
  PlaidLinkOnSuccess,
  PlaidLinkOnSuccessMetadata,
  PlaidLinkOptions,
  usePlaidLink,
} from 'react-plaid-link';
import { useQuery, useQueryClient } from 'react-query';
import StyledLoader from '@components/element/StyledLoader';
import { useRouter } from 'next/router';
import { PlaidCreatorType } from '../../components/block/CondooPlaid/usePlaidCreator';
import openToast from '@components/element/StyledToast';

interface ILinkedBankAccountProps {
  linkToken: any;
  onNext: () => void;
  plaidCreator: PlaidCreatorType
}
const LinkedBankAccount:FC<ILinkedBankAccountProps> = ({ linkToken, onNext, plaidCreator }) => {
  const { Id, plaidCreator:createPlaid } = plaidCreator;
  const router = useRouter();
  const { step } = router.query;

  const queryClient = useQueryClient();

  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (public_token: string, metadata: PlaidLinkOnSuccessMetadata) => {
      try {
        const plaidResult = await createPlaid(Id, {public_token, metadata});
        queryClient.invalidateQueries('linkedBank');
        onNext();
      } catch (e) {
        console.error('Error ocurred while creating bank:', e);
        openToast('error', 'An error ocurred while linking your plaid account.')
        onNext();
      }
    },
    [queryClient]
  );

  const config: PlaidLinkOptions = {
    onSuccess,
    onExit: (err, metadata) => {},
    onEvent: (eventName, metadata) => {},
    token: linkToken,
    env: 'sandbox'
  };

  const { open, ready } = usePlaidLink(config);

  useEffect(() => {
    console.log({ready})
    ready && open();
  }, [ready, step]);


  return !ready ? <StyledLoader /> : <></>;
};

export default LinkedBankAccount;
