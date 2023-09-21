import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// Type
import { PlaidLinkOnSuccessMetadata,} from 'react-plaid-link';
// Components
import CondooPlaid from '../';
import StyledLoader from '@components/element/StyledLoader';
// api service
import { getPlaidToken, getPlaidTokenUpdate } from '@/service/api';

interface IPlaidModalProps {
	plaidId: string;
	onSuccess: (public_token: string, metadata: PlaidLinkOnSuccessMetadata) => void;
	onFail: (status) => void;
	onExit?: () => void;
}
const PlaidModal: React.FC<IPlaidModalProps> = ({
	plaidId,
	onSuccess,
	onFail,
	onExit,
}) => {
	const router = useRouter();

	const [token, setToken] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const getUpdateToken = async () => {
			try {
				setIsLoading(true);
				const result = await getPlaidTokenUpdate(plaidId);
				setToken(result?.token);
			}
			catch(error) {
				console.error('Error ocurred while getting plaid token', error);
			}
			finally {
				setIsLoading(false);
			}
		};
		getUpdateToken();
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
