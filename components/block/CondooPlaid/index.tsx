import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { env } from "process";
// Components
import StyledLoader from '@components/element/StyledLoader';
// Plaid usage
import {
  PlaidLinkOptions,
  usePlaidLink,
  PlaidLinkOnSuccessMetadata,
  PlaidLinkError,
  PlaidLinkOnExitMetadata,
} from 'react-plaid-link';

const CondooPlaid = ({ 
  linkToken, 
  onSuccess,
  onExit,
  onFail,
}) => {
  const router = useRouter();

  const onPlaidSuccess = (public_token:string, metadata:PlaidLinkOnSuccessMetadata) => {
    onSuccess(public_token, metadata);
  }

  const onPlaidExit = (status:PlaidLinkError, metadata:PlaidLinkOnExitMetadata) => {
    if(status != null) {
      // console.log('Plaid modal failed: ', status);
      onFail && onFail(status);
      return;
    }
    onExit && onExit();
  }

  const config: PlaidLinkOptions = {
    onSuccess: (public_token, metadata) => onPlaidSuccess(public_token, metadata),
    onExit: (status, metadata) => onPlaidExit(status,metadata),
    onEvent: (eventName, metadata) => {},
    token: linkToken,
    env: env.PLAID_ENVIRONMENT,
  };

  const { open, ready } = usePlaidLink(config);

  useEffect(() => {
    // console.log({ready})
    ready && open();
  }, [ready]);

  return !ready ? <StyledLoader /> : <></>;
};

export default CondooPlaid;
