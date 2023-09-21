import { FC, useEffect, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import useErrorMessage from '@/hooks/useErrorMessage';
import useValidateEmail from '@/hooks/useValidateEmail';
import useTitleHoldersAsOptions, { ITitleHolderOption } from '@/hooks/useTitleHoldersAsOptions';
// Helpers / Types
import { PropertyFormControlledInputsType } from '@/hooks/usePropertyApiHandler'
import usePropertyForm, { SubmitedPropertyStatusType } from '@/hooks/usePropertyApiHandler/usePropertyForm'
import { IOptionsProps } from '@/src/components/StyledSelect/SelectOnly';
import { TitleHolderType } from '@/service/apiTypes';
// Component
import Button from '@components/block/Button'
import Input from '@components/block/PropertyCardModalInput'
import StyledAutoAddress, { IAutoAddress } from '@components/element/StyledAutoAddress';
import openAdviseToast from '@components/element/StyledToastAdvise';
import StyledLoader from '@components/element/StyledLoader';
import WhyInfoButton from '@/components/block/WhyInfoButton';
// Selectors
import SelectBedrooms from '@/components/block/CondooInputs/SelectBedrooms';
import SelectBathrooms from '@/components/block/CondooInputs/SelectBathrooms';
import SelectLeaseStatus from '@/components/block/CondooInputs/SelectLeaseStatus';
import SelectTitleHolder from '@/components/block/CondooInputs/SelectTitleHolder';
// Style
import { PropertyDetailsForm } from './style'
// Service api
import { getTitleholders } from '@/service/api';

interface IAddProppertyFormProps {
	onCloseModal: () => void;
}
const whyMessage = 'To add a new Title Holder, go to Account, and then click on the Title Holders tab.'
const AddProppertyForm: FC<IAddProppertyFormProps> = ({ onCloseModal }) => {
	const [isSubmiting, setIsSubmiting] = useState(false);
	const [titleHolderOptions, setTitleHolderOptions] = useState<ITitleHolderOption[]>();
	const queryClient = useQueryClient();
	const LoggedUser = useSelector((state: any) => state.auth.Email);

	// == Form ==

	const [setFormAction, propertyForm, onSubmit] = usePropertyForm('create', true);
	const {
		register,
		handleSubmit,
		getValues: getProperty,
		reset: resetForm,
	} = propertyForm;
	const handleOnSubmit: SubmitHandler<PropertyFormControlledInputsType> = async (property) => {
		setIsSubmiting(true);
		const submitedProperty: SubmitedPropertyStatusType = await onSubmit(property);
		const { status, message, data } = submitedProperty;

		openAdviseToast(status, message);

		if (status == 'success') {
			queryClient.invalidateQueries('getPropertiesAdmin');
			onCloseModal();
		}

		setIsSubmiting(false);
	}

	const onAddressSelect = (location: IAutoAddress) => {
		const { city, zip, state, country, street, address, lat, lng } = location;
		const propertyName = `${street} ${address}`;

		resetForm({
			...getProperty(),
			City: city,
			PostalCode: zip,
			State: state,
			Country: country,
			StreetNumber: propertyName,
			Latitude: lat,
			Longitude: lng,
			Name: propertyName
		})
	}

	// == TitleHolder ==

	const { data: titleholdersResult, isSuccess: isTitleHolders } = useQuery<TitleHolderType[]>(
		['getTitleholders'], getTitleholders,
	);

	useEffect(() => {
		resetForm({ ...getProperty(), LoggedUser }) // ensure logged user is in form
		if (!isTitleHolders) return;
		if (!Array.isArray(titleholdersResult)) return;

		const options = useTitleHoldersAsOptions(titleholdersResult);
		setTitleHolderOptions(options);
	}, [titleholdersResult]);

	return (
		<PropertyDetailsForm>
			{isSubmiting && <StyledLoader />}

			<form onSubmit={handleSubmit(handleOnSubmit)}>
				<div className='form-fields contain-select-list-menu'>
					<div className='field-box'>
						<StyledAutoAddress defaultValue={getProperty('StreetNumber') ?? ''} onSelect={onAddressSelect} />
						<div className='input-double'>
							<Input type='text' placeholder="Unit (optional)" className='input' {...register('NumberUnits', {})} />
							<Input type="text" placeholder='City' className='input' {...register('City', { required: { value: true, message: 'This field is required' } })} />
						</div>
						<div className='input-double'>
							<Input type="text" placeholder='Postal Code' className='input' {...register('PostalCode', { required: { value: true, message: 'This space is required' }, })} />
							<Input type="text" placeholder='Province' className='input' {...register('State', { required: { value: true, message: 'This space is required' }, })} />
						</div>
					</div>
					<div className='field-box'>
						<div className='input-double select-input-style-width'>
							<SelectBedrooms value={getProperty('Bedrooms')} onChange={(option) => resetForm({ ...getProperty(), Bedrooms: option })} />
							<SelectBathrooms value={getProperty('Bathrooms')} onChange={(option) => resetForm({ ...getProperty(), Bathrooms: option })} />
						</div>
						<div className='titleholder-input'>
							<SelectTitleHolder titleHolderOptions={titleHolderOptions} value={getProperty('TitleHolderId')} onSelect={(option) => resetForm({ ...getProperty(), TitleHolderId: option })} />
							<WhyInfoButton whyMessage={whyMessage} isRight />
						</div>
						<SelectLeaseStatus value={getProperty('LeaseStatus')} onSelect={(option) => resetForm({ ...getProperty(), LeaseStatus: option })} />
						<Input type="text" placeholder='Current / Estimated Rent' {...register('Rent', { required: { value: true, message: 'This space is required' } })} />
					</div>
				</div>
				<div className='buttons-container'>
					<Button type='submit' width={182} height={45} bgColor={`#000000`}>Create</Button>
				</div>
			</form>
		</PropertyDetailsForm>
	)
}

export default AddProppertyForm