import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import { usePlaidCreator } from '@components/block/CondooPlaid/usePlaidCreator'
import { useQuery, useQueryClient } from 'react-query'
// api service
import { getPlaidIdentity, getPlaidInstitution } from '@/service/api'
// type
import { TitleHolderType } from '@/service/apiTypes'
import { PlaidLinkOnSuccessMetadata } from 'react-plaid-link'
// Components
import PlaidModal from '@components/block/CondooPlaid/PlaidModal'
import openAdviseToast from '@components/element/StyledToastAdvise'
// Style / Images
import PlaidLogo from '@/public/images/plaid_logo.svg'
import PlaidInstitutionDetails from '@components/block/CondooPlaid/PlaidInstitutionDetails'
import { LittleLoader } from '@components/element/LittleLoader'

interface IPlaidDetailsDisplayProps {
	titleHolder: TitleHolderType;
}
const PlaidDetailsDisplay: FC<IPlaidDetailsDisplayProps> = ({ titleHolder: { Plaid, Id: titleHolderId } }) => {
	const [openPlaid, setOpenPlaid] = useState<boolean>(false);
	const [plaidInstituionDetails, setPlaidInstituionDetails] = useState(null);
	const [plaidIdentity, setPlaidIdentity] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const queryClient = useQueryClient();

	useEffect(() => {
		const getPlaidTitleHolderDetails = async () => {
			try {
				setIsLoading(true);
				const plaidIdentity = await getPlaidIdentity(Plaid?.Id);
				const plaidInstitutionDetails = await getPlaidInstitution(Plaid?.Id);
				setPlaidIdentity(plaidIdentity);
				setPlaidInstituionDetails(plaidInstitutionDetails);
			} catch (error) {
				return 'error'
			} finally {
				setIsLoading(false);
			}
		}
		/** Validate the Id as we provide the option to create titleholder first and then its plaid account */
		if (!openPlaid && Plaid?.Id) getPlaidTitleHolderDetails();
	}, [Plaid, openPlaid]);

	const onPlaidCreation = async (public_token: string, metadata: PlaidLinkOnSuccessMetadata) => {
		try {
			const { Id: TitleHolderId, plaidCreator: createPlaid } = usePlaidCreator('titleholder', titleHolderId.toString());
			const plaidResult = await createPlaid(TitleHolderId, { public_token, metadata });
			queryClient.invalidateQueries('getTitleholders');
			openAdviseToast('success', 'Plaid account linked correctly.');
		} catch (error) {
			openAdviseToast('failed', 'An error ocurred while trying to link the Plaid account to the Title holder');
		} finally {
			setIsLoading(false);
		}
	}
	const onPlaidUpdate = async (public_token: string, metadata: PlaidLinkOnSuccessMetadata) => {
		try {
			setIsLoading(true);
			const { Id: TitleHolderId, plaidCreator: updatePlaid } = usePlaidCreator('titleholder-update', titleHolderId.toString());
			const plaidResult = await updatePlaid(TitleHolderId, { public_token, metadata });

			//@ts-ignore
			if (!plaidResult.ok) throw plaidResult;

			openAdviseToast('success', 'The plaid account linked to this title holder was updated.');
			queryClient.invalidateQueries('getTitleholders');
		} catch (error) {
			openAdviseToast('failed', 'An error ocurred while trying to link the Plaid account to the Title holder');
		} finally {
			setIsLoading(false);
		}
	}

	const onPlaidFail = () => openAdviseToast('failed', 'An error ocurred while trying to connect to Plaid');
	const onPlaidExit = () => { }

	return (
		!isLoading ?
			<>
				{plaidInstituionDetails && (
					<PlaidInstitutionDetails
						onUpdate={onPlaidUpdate}
						plaidId={Plaid.Id.toString()}
						identity={plaidIdentity}
						details={plaidInstituionDetails}
					/>
				)}

				{!Plaid && (
					<div className='h-full flex flex-col justify-center items-center gap-4'>
						<span className='font-bold'>Add a plaid account for this Title holder</span>

						<button className='shadow-lg rounded-full p-2 px-5 hover:bg-gray-200'
							type='button' onClick={() => setOpenPlaid(true)}
						>
							<Image src={PlaidLogo} />
						</button>
					</div>
				)}

				{openPlaid ? (
					<PlaidModal onSuccess={onPlaidCreation} onFail={onPlaidFail} onExit={onPlaidExit} />
				) : null}
			</> :

			<LittleLoader />

	)
}

export default PlaidDetailsDisplay