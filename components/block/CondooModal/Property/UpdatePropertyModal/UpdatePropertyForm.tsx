import { FC, useState, useEffect } from 'react'
// Helpers
import { useQueryClient } from 'react-query';
import { getUnitBathroomOptionByValue } from '@components/block/CondooInputs/SelectBathrooms/bathOptions';
import { getUnitBedroomOptionByValue } from '@components/block/CondooInputs/SelectBedrooms/bedOptions';
import { getLeasedStatusOption } from '@components/block/CondooInputs/SelectLeaseStatus';
// Components
import Input from '@components/block/PropertyCardModalInput'
import openAdviseToast from '@components/element/StyledToastAdvise';
import Button from '@components/block/Button'
import StyledAutoPlaces from '@components/element/StyledAutoPlaces';
import StyledLoader from '@components/element/StyledLoader';
import usePropertyForm, { SubmitedPropertyStatusType } from '@/hooks/usePropertyApiHandler/usePropertyForm';
import SelectBedrooms from '@components/block/CondooInputs/SelectBedrooms';
import SelectBathrooms from '@components/block/CondooInputs/SelectBathrooms';
// Style
import { UpdatePropertyFormContainer } from './style'
// Types
import { SubmitHandler } from 'react-hook-form';
import { IAutoAddress } from '@components/element/StyledAutoAddress';
import { PropertyFormControlledInputsType } from '@/hooks/usePropertyApiHandler';
import { IProperty } from '@/containers/App/Properties/utils/types';
// Icon
import { PencilIcon } from '@heroicons/react/outline';

interface IUpdatePropertyFormProps {
	onCloseModal: () => void;
	property: IProperty;
}
const UpdatePropertyForm: FC<IUpdatePropertyFormProps> = ({
	onCloseModal,
	property,
}) => {
	const queryClient = useQueryClient();
	//
	const [isDisabled, setIsDisabled] = useState(true);
	const toggleDisabled = () => setIsDisabled(!isDisabled);
	const [isSubmitting, setIsSubmitting] = useState(false);
	// Form
	const [setApiAction, propertyForm, onSubmit] = usePropertyForm('update', true);
	const { register, setValue: setProperty, reset, getValues: getProperty, handleSubmit, } = propertyForm;
	// Form - Actions
	const handleOnSubmit: SubmitHandler<PropertyFormControlledInputsType> = async (property) => {
		try {
			setIsSubmitting(true);
			const submitedProperty: SubmitedPropertyStatusType = await onSubmit(property);
			const { status, message, data } = submitedProperty;
			openAdviseToast(status, message);
			if (status == 'success') {
				queryClient.invalidateQueries('getPropertiesAdmin');
				onCloseModal();
			}
		} catch (err) {
		} finally {
			setIsSubmitting(false)
		}
	}
	const onAddressSelect = (location: IAutoAddress) => {
		const { city, zip, state, country, street, address, lat, lng } = location;
		const propertyName = `${street} ${address}`;

		reset({
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
	const getPropertyValues = (property: IProperty): PropertyFormControlledInputsType => {
		const {
			Id, Name, Rent, UnitNumber, LeaseStatus,
			Address: { City, Country, AddressLine1, State, PostalCode, Latitude, Longitude },
			TitleHolderId
		} = property;

		const LeaseStatusOption = getLeasedStatusOption(LeaseStatus)

		const bathroom = property?.Unit?.NumberBathrooms?.toString();
		const BathroomOption = getUnitBathroomOptionByValue(bathroom);

		const bedroom = property?.Unit?.NumberBedrooms?.toString();
		const BedroomOption = getUnitBedroomOptionByValue(bedroom);

		const defaultValues: PropertyFormControlledInputsType = {
			Id: Id,
			Name: Name,
			TitleHolderId: {
				label: '',
				value: TitleHolderId.toString() ?? ''
			},
			Country: Country ?? '',
			State: State ?? '',
			City: City ?? '',
			StreetNumber: AddressLine1 ?? '',
			PostalCode: PostalCode ?? '',
			NumberUnits: UnitNumber ?? '',
			Rent: Rent ?? '',
			LeaseStatus: LeaseStatusOption,
			Latitude: Latitude ? parseFloat(Latitude) : 0,
			Longitude: Longitude ? parseFloat(Longitude) : 0,
			Bathrooms: BathroomOption,
			Bedrooms: BedroomOption,
		}
		return defaultValues;
	}
	useEffect(() => {
		reset(getPropertyValues(property));
		return () => { // Ensure that when modal is closed by clicking outside states are updated
			setIsDisabled(true);
			onCloseModal();
		}
	}, []);
	return (
		<UpdatePropertyFormContainer>
			{isSubmitting && <StyledLoader />}
			<form onSubmit={handleSubmit(handleOnSubmit)}>
				<div className='form-fields contain-select-list-menu'>
					<div className='field-box'>
						<StyledAutoPlaces isDisabled={isDisabled} className='input-style' placeHolder="Address" defaultValue={getProperty('Name')} onSelect={onAddressSelect} fontSize="14px" />
						<div className='input-double unified-input'>
							<Input type="text" disabled={isDisabled} placeholder='Unit' className='input-style' {...register('NumberUnits', { required: { value: true, message: 'This space is required' } })} />
							<Input type="text" disabled={isDisabled} placeholder='City' className='input-style' {...register('City', { required: { value: true, message: 'This space is required' }, })} />
						</div>
						<div className='input-double unified-input'>
							<Input type="text" disabled={isDisabled} placeholder='Postal Code' className='input-style' {...register('PostalCode', { required: { value: true, message: 'This space is required' }, })} />
							<Input type="text" disabled={isDisabled} placeholder='Province' className='input-style' {...register('State', { required: { value: true, message: 'This space is required' }, })} />
						</div>
					</div>
					<div className='field-box'>
						<div className='input-double select-input-style-width'>
							<SelectBedrooms isDisabled={isDisabled} value={getProperty('Bedrooms')} onChange={(option) => reset({ ...getProperty(), Bedrooms: option })} />
							<SelectBathrooms isDisabled={isDisabled} value={getProperty('Bathrooms')} onChange={(option) => reset({ ...getProperty(), Bathrooms: option })} />
						</div>
					</div>
				</div>
				<div className='buttons-container'>
					<button onClick={toggleDisabled} type='button' className='button-pencil-style rounded-full'>
						<PencilIcon className='pencil-icon' />
					</button>
					<Button width={182} height={45} bgColor={`#000000`} disabled={isDisabled} type='submit'>
						Save
					</Button>
				</div>
			</form>
		</UpdatePropertyFormContainer >
	)
}

export default UpdatePropertyForm