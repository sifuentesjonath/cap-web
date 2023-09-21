import { FC, useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
// Helpers / Types
import { PropertyFormControlledInputsType, toPropertyApiType, usePropertyApiHandler } from '@/hooks/usePropertyApiHandler'
import { getTitleHoldersOptions } from './forms'
import { SpecialInputsType } from './index'
// Component
import Button from '@components/block/Button'
import Input from '@components/block/PropertyCardModalInput'
import { IOptionsProps } from '@/src/components/StyledSelect/SelectOnly';
import StyledAutoAddress, { IAutoAddress } from '@components/element/StyledAutoAddress';
// Selectors
import SelectBedrooms from '../CondooInputs/SelectBedrooms';
import SelectBathrooms from '../CondooInputs/SelectBathrooms';
import SelectLeaseStatus from '../CondooInputs/SelectLeaseStatus';
import SelectTitleHolder from '../CondooInputs/SelectTitleHolder';
// Style
import {
	PropertyDetailsForm,
	FormGroup,
	FormLabelGroup,
	SelectOnlyStyle,
} from './style'
// Service api
import { getTitleholders } from '@/service/api';
import openAdviseToast from '@components/element/StyledToastAdvise';
import StyledLoader from '@components/element/StyledLoader';
import WhyInfoButton from '../WhyInfoButton';
import { useSelector } from 'react-redux';

interface IAddProppertyFormProps {
	onCloseModal: () => void;
}
const whyMessage = 'To add a new Title Holder, go to Account, and then click on the Title Holders tab.'
const AddProppertyForm:FC<IAddProppertyFormProps> = ({ onCloseModal }) => {
	const [titleHolderOptions, setTitleHolderOptions] = useState<IOptionsProps[]>();
	const [specialInputsData, setSpecialInputsData] = useState<SpecialInputsType>(null);
	const [isSubmiting, setIsSubmiting] = useState(false);
	const LoggedUser = useSelector((state:any) => state.auth.Email);
	const { 
		register,
		setValue,
		handleSubmit,
		getValues: getProperty,
		reset:resetForm
	} = useForm<PropertyFormControlledInputsType>({
		// FIXME: NumberUnits breaks code
		// defaultValues: {
		// 	Bathrooms:null,
		// 	Bedrooms:null,
		// 	City:'',
		// 	Country:'',
		// 	Id:null,
		// 	Latitude:null,
		// 	LeaseStatus:null,
		// 	Longitude:null,
		// 	Name:'',
		// 	NumberUnits:'',
		// 	PostalCode:'',
		// 	Rent:'',
		// 	State:'',
		// 	StreetNumber:'',
		// 	TitleHolderId:null
		// }
	});

	// == Form ==
	// const onUnitSelect = (unit: string) => {
	// 	const parsedUnit = unit?.replaceAll(/[^\d]/g, '');
	// 	return parsedUnit
	// }
	const onAddressSelect = (location: IAutoAddress) => {
		const { city, zip, state, country, street, address, lat, lng} = location;
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
	const handleCreate: SubmitHandler<PropertyFormControlledInputsType> = async (property) => {
		setIsSubmiting(true);
		
		try{
			const formatedPropertyState = toPropertyApiType(property);
			const propertyResult = await usePropertyApiHandler('create', formatedPropertyState);
			if(propertyResult.PropertyCreated){
				openAdviseToast('success', 'Your property was created!');
			}
		} catch(error) {
			openAdviseToast('failed', 'Something went wrong while trying to add your property. Please try again');
			return;
		} finally {
			onCloseModal();
			setIsSubmiting(false);
		}
	}

	// == TitleHolder ==
	const { data: titleholdersResult, isSuccess: isTitleHolders } = useQuery(
		['getTitleholders'], getTitleholders,
	);
	useEffect(() => {
		if(!isTitleHolders) return;

		// console.log('titleholders:', titleholdersResult);
		// setTitleholders(titleholdersResult);
		const options = getTitleHoldersOptions(titleholdersResult);
		setTitleHolderOptions(options);
	},[titleholdersResult])

	return (
		<PropertyDetailsForm onSubmit={handleSubmit(data => handleCreate({...data , isCreationInApp:true, LoggedUser}))}>

			{isSubmiting && <StyledLoader/>}

			<div style={{position: 'relative', left: '101%',marginTop: '62px'}}>
								<WhyInfoButton whyMessage={whyMessage}  isRight />
			</div>
			<FormGroup>
				<StyledAutoAddress defaultValue={getProperty('StreetNumber') ?? ''} onSelect={onAddressSelect}/>

				<FormLabelGroup>
					<label>
						<Input type='number'
							min={0}
							placeholder="Unit"
							className='input'
							{...register('NumberUnits',{
								required: {value: true, message: 'This space is required'},
								valueAsNumber: true,
							})}
						/>
						<Input type="text"
							placeholder='Postal Code'
							className='input'
							{...register('PostalCode',{
								required: {value: true, message: 'This space is required'},
							})}
						/>
					</label>
					<label>
						<Input type="text"
							placeholder='City'
							className='input'
							{...register('City',{
								required: {value: true, message: 'This space is required'},
							})}
						/>
						<Input
							type="text"
							placeholder='Providence'
							className='input'
							{...register('State',{
								required: {value: true, message: 'This space is required'},
							})}
						/>
					</label>
				</FormLabelGroup>
			</FormGroup>

			<FormGroup>
				<FormLabelGroup>
					<label>
						<SelectBedrooms 
							value={getProperty('Bedrooms')}
							onChange={(option) => resetForm({...getProperty(), Bedrooms: option})}
						/>
					</label>
					<label>
						<SelectBathrooms 
							value={getProperty('Bathrooms')} 
							onChange={(option) => resetForm({...getProperty(), Bathrooms: option})}
						/>
					</label>
				</FormLabelGroup>
			<FormLabelGroup>
	
					<div className='w-full'>
						<SelectOnlyStyle>
								<SelectTitleHolder titleHolderOptions={titleHolderOptions}
									value={getProperty('TitleHolderId')}
									onSelect={(option) => resetForm({...getProperty(), TitleHolderId: option})}
								/> 
							
							<SelectLeaseStatus 
								value={getProperty('LeaseStatus')}
								onSelect={(option) => resetForm({...getProperty(), LeaseStatus: option})}
							/>
						</SelectOnlyStyle>

						<Input
							type="text"
							className='input'
							placeholder='Current / Estimated Rent'
							{...register('Rent',{
								required: {value: true, message: 'This space is required'},
							})}
						/>
					</div>
				</FormLabelGroup>
			</FormGroup>

			<div className='pr-5 pb-5 flex gap-6' style={{position:'absolute', bottom:'-190%', left:'80%'}}>
				<Button type='submit' width={182} height={45} bgColor={`#000000`}>Create</Button>
			</div>
		</PropertyDetailsForm>
	)
}

export default AddProppertyForm