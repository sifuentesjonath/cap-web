import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// Type
import { PlaidLinkOnSuccessMetadata,} from 'react-plaid-link';
// Components
import CondooPlaid from '../';
import StyledLoader from '@components/element/StyledLoader';
// api service
import { getPlaidToken } from '@/service/api';

interface IPlaidModalProps {
  onSuccess: (public_token: string, metadata: PlaidLinkOnSuccessMetadata) => void;
  onFail: (status) => void;
  onNext?: () => void;
  onExit?: () => void;
}
const PlaidModal: React.FC<IPlaidModalProps> = ({
  onNext,
  onSuccess,
  onFail,
  onExit,
}) => {
  const router = useRouter();
  const { step } = router.query;

  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getToken = async () => {
      try {
        setIsLoading(true);
        const result = await getPlaidToken();
        setToken(result?.token);
      }
      catch(error) {
        console.error('Error ocurred while getting plaid token', error);
        onFail(error);
      }
      finally {
        setIsLoading(false);
      }
    };
    getToken();
  }, []);

  return (
    <>
      {isLoading && <StyledLoader/>}
      {token && 
        <CondooPlaid 
          linkToken={token} 
          onSuccess={onSuccess}
          onFail={onFail}
          onExit={onExit}
        />
      }
    </>
  );
};

export default PlaidModal;
