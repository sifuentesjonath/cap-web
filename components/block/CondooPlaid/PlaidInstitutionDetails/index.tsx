import { FC, useState } from 'react'
import { PlaidInstitutionDetailsType } from '@/service/apiTypes'
import { useQueryClient } from 'react-query';
// Components
import Input from '@components/block/PropertyCardModalInput'
import PlaidModal from '../PlaidModal';
import UpdatePlaidModal from '../UpdatePlaidModal';
// Icons
import { PencilIcon } from '@heroicons/react/outline';
import {
	InstitutionDetailsContainer,
	InputStyle,
} from './style'
import { PlaidLinkOnSuccessMetadata } from 'react-plaid-link';
import openAdviseToast from '@components/element/StyledToastAdvise';

type PlaidIdentity = {
	accounts:[ 
		{ 
			account_id: string,
			balances: {
				available: number,
				current: number,
				iso_currency_code: string,
				limit: null,
				unofficial_currency_code: null
			},
			mask: string;
			name: string;
			official_name: string;
			owners: any[];
			subtype: string;
			type: string;
		}
	]
}
interface IPlaidInstitutionDetails {
	plaidId: string;
	onUpdate: (public_token: string, metadata: PlaidLinkOnSuccessMetadata) => void;
	identity: PlaidIdentity;
	details: PlaidInstitutionDetailsType;
}
const PlaidInstitutionDetails:FC<IPlaidInstitutionDetails> = ({ plaidId, onUpdate, identity, details }) => {
	const { name, logo, primary_color, country_codes } = details;
	const [openPlaid, setOpenPlaid] = useState(false);
	const [isLogo, setIsLogo] = useState<boolean>(true)
	const queryClient = useQueryClient();

	// == Metadata ==
	const getInstitutionLogo = () => {
		if(!logo){
			if(!isLogo) return;

			setIsLogo(false)
			openAdviseToast('advise', `Bank logo is not available right now`);
		}

		return `data:image/png;base64,${logo}`;
	}

	const bankLogoOrMessage = getInstitutionLogo();
	//@ts-ignore
	const mask = identity?.accounts??[0].mask? identity.accounts[0].mask :'';
	const maskPlaceholder = `••••••••${mask}`;

	// == Handle Plaid ==

	const onPlaidFail = (status) => {
		openAdviseToast('failed', 'An error ocurred while trying to connect to Plaid');
		setOpenPlaid(false);
	}

	const closePlaidAndUpdate = (public_token: string, metadata: PlaidLinkOnSuccessMetadata)  => {
		setOpenPlaid(false);
		onUpdate(public_token, metadata);
	}

	return (
		<InstitutionDetailsContainer>
			<div className='flex gap-3 items-center mb-3'>
				{isLogo &&
					<img className='institution-logo' src={bankLogoOrMessage} />
				}
				<span className='capitalize'>{name}</span>
			</div>
			<InputStyle>
				<Input disabled={true} placeholder={maskPlaceholder}/>
				<button type='button' onClick={() => setOpenPlaid(true)}>
					<PencilIcon className='w-8 h-8'/>
				</button>
			</InputStyle>

			{openPlaid ? (
				<PlaidModal 
					onSuccess={closePlaidAndUpdate} 
					onFail={onPlaidFail} 
					onExit={() => setOpenPlaid(false)}
				/>
				// <UpdatePlaidModal plaidId={plaidId}
				// 	onSuccess={onPlaidUpdate} 
				// 	onFail={onPlaidFail} 
				// 	onExit={() => setOpenPlaid(false)}
				// />
			): null}
		</InstitutionDetailsContainer>
	)
}

export default PlaidInstitutionDetails