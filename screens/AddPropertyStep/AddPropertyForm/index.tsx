// WIP: Refactor of Add Property formulary...
// TODO: make InputContainer and DoubleInputContainer to styled components
import { FC, useState, Dispatch, SetStateAction, useRef, LegacyRef, KeyboardEvent } from 'react'
import { SubmitHandler, UseFormReturn } from 'react-hook-form';
import { useQueryClient } from 'react-query';
import {
	InputStyle,
	inputContainerStyle,
	inputContainerStyleDouble,
} from '../utils/AddProperty';
// Components
import Input from '@components/block/Input';
import StyledAutoPlaces, { locationInfo } from '@components/element/StyledAutoPlaces';
import SelectOnlyEditable from '@/src/components/StyledSelect/SelectOnlyEditable';
import { IOptionsProps } from '@/src/components/StyledSelect/SelectOnly';
import SelectBedrooms from '@components/block/CondooInputs/SelectBedrooms';
import SelectBathrooms from '@components/block/CondooInputs/SelectBathrooms';
import DeletePropertyButton from '../DeletePropertyButton'
// Style
import {
	LinkUnderline, PositionButton
} from './style'
import styles from './index.module.scss';
import Button from '@components/block/Button';
import { PositionButtonAdd } from '../style';
import { getPropertyControlledFormDefaultValues, PropertyFormControlledInputsType, PropertyFormType, PropertyHandlerType, toPropertyApiType, usePropertyApiHandler } from '@/hooks/usePropertyApiHandler';
// Service api
import { CreateTitleHolderParamsType, TitleHolderType } from '@/service/apiTypes';
import { createATitleHolder, updateATitleHolder } from '@/service/useApi';
import openAdviseToast from '@components/element/StyledToastAdvise';
import StyledLoader from '@components/element/StyledLoader';
import SelectLeaseStatus from '@components/block/CondooInputs/SelectLeaseStatus';
import { SubmitedPropertyStatusType } from '@/hooks/usePropertyApiHandler/usePropertyForm';
import useAnimationOnce from '@/hooks/useAnimationOnce';
import { animationButtonSaveProperty } from '../utils/animationsAndStyles';
import { PropertyStepAction, PropertyStepState } from '../PropertyStepReducer';
import handleFormatName from '@utils/handleTitleHolder/handleFormatName';
import validateSpecialCharacters from '@utils/validations/validateSpecialCharacters';

export type SpecialInputsType = {
	BedroomOption: IOptionsProps;
	BathroomOption: IOptionsProps;
	TitleHolderOption: IOptionsProps;
	LeaseStatusOption: IOptionsProps;
}

interface IAddPropertyFormProps {
	state: PropertyStepState,
	dispatch: Dispatch<PropertyStepAction>,

	onNext: () => void;
	onChangePlace: (location: locationInfo) => void;
	onSubmit: SubmitHandler<PropertyFormControlledInputsType>,
	onIsSubmitted: (property: PropertyFormControlledInputsType) => void;
	propertyForm: UseFormReturn<PropertyFormControlledInputsType>;
	propertyApiActionState: [
		propertyApi: PropertyHandlerType,
		setPropertyApi: Dispatch<SetStateAction<PropertyHandlerType>>
	];
}
const AddPropertyForm: FC<IAddPropertyFormProps> = (props) => {
	const {
		state, dispatch,
		propertyForm,
		onNext, onSubmit, onIsSubmitted, onChangePlace,
	} = props;

	const [propertyActionToApi, setPropertyActionToApi] = props.propertyApiActionState;
	const [isSubmitting, setIsSubmitting] = useState(false);

	const queryClient = useQueryClient();
	const advise = useRef(false);
	// == Property Form ==
	const {
		register,
		handleSubmit,
		clearErrors,
		reset: resetForm,
		setValue: setProperty,
		getValues: getProperty,
		formState: { errors },
	} = propertyForm;

	const onSelectAddress = (location: locationInfo) => {
		const { city, zip, state, street, address, country, lat, lng } = location;

		// set all values so form can use them
		setProperty('City', city);
		setProperty('PostalCode', zip);
		setProperty('State', state);
		setProperty('StreetNumber', `${street} ${address}`);
		setProperty('Latitude', lat);
		setProperty('Longitude', lng);
		setProperty('Country', country);
		setProperty('Name', `${street} ${address}`);
		clearErrors();
		// Send the arguments so the component that uses this form can manipulate them
		onChangePlace(location);
	}
	const onHandleSubmit: SubmitHandler<PropertyFormControlledInputsType> = async (property) => {
		try {
			setIsSubmitting(true);

			// Proceed to submit
			const submitedProperty: SubmitedPropertyStatusType = await onSubmit(property);
			const { status, message, data } = submitedProperty;
			// console.log({ status, message, data })

			if (status == 'success') {
				queryClient.invalidateQueries('getProperties');
				onIsSubmitted(property);
				ResetFormAndResetPropertyApi();
			}
			if (advise.current == false) {
				openAdviseToast(status, message);
				advise.current = true;
			}
		} catch (err) {

		} finally {
			advise.current = false;
			setIsSubmitting(false);
		}
	}
	const onDeleteProperty = () => onHandleSubmit(getProperty());

	const ResetFormAndResetPropertyApi = () => {
		resetForm(getPropertyControlledFormDefaultValues());
		setPropertyActionToApi('create');
	}

	// == TitleHolder ==
	const updateTitleHolderInput = (newTitleHolder: IOptionsProps) => {
		dispatch({ type: 'SET_SELECTED_TITLEHOLDER', payload: newTitleHolder }); // Update input
		setProperty('TitleHolderId', newTitleHolder); // Update form
	}
	const handleCreateTitleHolder = async value => {
		try {
			setIsSubmitting(true);
			// Format
			const canBeSplit = value.split(' ').length > 1;
			const FirstName = value.split(' ')[0];
			const LastName = canBeSplit ? value.split(' ')[1] : '';
			// validate special characters
			const isSpecialCharacters = validateSpecialCharacters(`${FirstName} ${LastName}`);
			if (isSpecialCharacters) {
				openAdviseToast('advise', 'Cannot create a new title holder with special characters, remove special characters and try again.')
				return
			}
			// Create new title holder
			const titleHolderParams: CreateTitleHolderParamsType = { FirstName, LastName, isCreationInSetup: true }
			const data = await createATitleHolder(titleHolderParams);
			// Check response 
			if (!data?.Id) throw ('Bad creation');
			// Show success
			const newTitleHolder: IOptionsProps = { label: `${data.FirstName} ${data.LastName}`, value: data.Id.toString() }
			updateTitleHolderInput(newTitleHolder);
			openAdviseToast('success', 'Created a Title holder')
		} catch (err) {
			openAdviseToast('failed', 'Something went wrong while creating your title holder')
			// console.error(err)
		} finally {
			queryClient.invalidateQueries('getTitleholders');
			setIsSubmitting(false);
		}
	};
	const [elementRef, canAnimate] = useAnimationOnce({
		root: null,
		rootMargin: '0px',
		threshold: .7
	});
	const updateTitleHolder = (editedTitleHolder: IOptionsProps) => {
		try {
			dispatch({ type: 'SET_IS_LOADING', payload: true })
			// validate special characters
			const isSpecialCharacters = validateSpecialCharacters(editedTitleHolder.label);
			if (isSpecialCharacters) {
				openAdviseToast('advise', 'Cannot create a new title holder with special characters, remove special characters and try again.')
				return
			}
			// Proceed with editing
			const titleHolder = state.titleHolders.find(({ Id }) => Id.toString() === editedTitleHolder.value);
			const { FirstName, LastName } = handleFormatName(editedTitleHolder.label);
			const newTitleHolder: TitleHolderType = { ...titleHolder, FirstName, LastName };
			const updateTitleHolder = {
				FirstName: newTitleHolder.FirstName,
				LastName: newTitleHolder.LastName,
				City: newTitleHolder?.Address?.City,
				Country: newTitleHolder?.Address?.Country,
				PostalCode: newTitleHolder?.Address?.PostalCode,
				State: newTitleHolder?.Address?.State,
				StreetNumber: newTitleHolder?.Address?.StreetNumber,
				Email: newTitleHolder.Email
			};
			updateATitleHolder(newTitleHolder.Id, updateTitleHolder)
				.then((titleholder) => {
					if (titleholder.Id) {
						updateTitleHolderInput(editedTitleHolder);
						openAdviseToast('success', 'Updated successfully');
						queryClient.invalidateQueries('getTitleholders');
					}
				});
		} catch (err) {
			openAdviseToast('failed', 'Something went wrong, try again')
		} finally {
			dispatch({ type: 'SET_IS_LOADING', payload: false })
		}
	}

	const pulseAnimation = `${canAnimate ? animationButtonSaveProperty : 'invisible'}`

	const preventEnterKeyToSubmitForm = (e: KeyboardEvent<HTMLFormElement>) => { if (e.key === 'Enter') e.preventDefault() }
	return (
		<form
			onSubmit={handleSubmit(formData => onHandleSubmit(formData))}
			className="flex flex-col w-full"
			onKeyDown={preventEnterKeyToSubmitForm}
		>
			{isSubmitting && <StyledLoader />}
			<div className={inputContainerStyle}>
				<StyledAutoPlaces
					className='input-style'
					height={InputStyle.height}
					placeHolder="Address"
					// onSelect={onChangePlace}
					onSelect={onSelectAddress}
					fontSize="14px"
					defaultValue={getProperty('Name') ?? null}
				// TODO: controlling changes on inputs shows warning of:
				// A component is changing a controlled input to be uncontrolled
				/>
			</div>
			<div className={inputContainerStyle}>
				<div className={` lg:h-10 ${styles['width-48']}`}>
					<Input
						height={InputStyle.height}
						placeholder="Unit (optional)"
						error={errors.NumberUnits}
						showErrorMsg={false}
						className='input-style'
						{...register('NumberUnits', {})} // No longer required
					/>
				</div>

				<div className={`h-10 lg:h-10 xl:h-10 ${styles['width-48']}`}>
					<Input
						height={InputStyle.height}
						placeholder="City"
						error={errors.City}
						showErrorMsg={false}
						className='input-style'
						{...register('City', {
							required: { value: true, message: 'required' },
						})}
					/>
				</div>
			</div>
			<div className={inputContainerStyle}>
				<div className={`h-10 lg:h-10 xl:h-10 ${styles['width-48']}`}>
					<Input
						height={InputStyle.height}
						placeholder="Postal Code"
						error={errors.PostalCode}
						showErrorMsg={false}
						className='input-style'
						{...register('PostalCode', {
							required: { value: true, message: 'required' },
						})}
					/>
				</div>
				<div className={`h-10 lg:h-10 xl:h-10 ${styles['width-48']}`}>
					<Input
						height={InputStyle.height}
						placeholder="Province"
						error={errors.State}
						showErrorMsg={false}
						className='input-style'
						{...register('State', {
							required: { value: true, message: 'required' },
						})}
					/>
				</div>
			</div>
			<div className={inputContainerStyle}>
				<div className={`h-10 lg:h-10 xl:h-10 ${styles['width-48']}`}>
					<SelectBedrooms
						value={getProperty('Bedrooms') ?? null}
						className='input-style-select'
						onChange={(option) => resetForm({ ...getProperty(), Bedrooms: option })}

					/>
				</div>
				<div className={`h-10 lg:h-10 xl:h-10 ${styles['width-48']}`}>
					<SelectBathrooms
						value={getProperty('Bathrooms') ?? null}
						className='input-style-select'
						onChange={(option) => resetForm({ ...getProperty(), Bathrooms: option })}
					/>
				</div>
			</div>

			<div className={inputContainerStyleDouble}>
				<SelectOnlyEditable
					className='input-style-create-select'
					placeholder="Name / Company on Title"
					value={state.selectedTitleHolder}
					onChange={updateTitleHolderInput}
					onEdit={updateTitleHolder}
					onCreateOption={handleCreateTitleHolder}
					options={state.titleHolderOptions}
				/>
			</div>
			<div className={inputContainerStyleDouble}>
				<SelectLeaseStatus
					value={getProperty('LeaseStatus')}
					onSelect={(option) => resetForm({ ...getProperty(), LeaseStatus: option })}
				/>
			</div>
			<div className={inputContainerStyleDouble}>
				<Input
					// type="number"
					height={InputStyle.height}
					min={0}
					placeholder="Current / Estimated Rate"
					error={errors.Rent}
					showErrorMsg={false}
					className='input-style'
					{...register('Rent', {
						required: { value: true, message: 'required' },
					})}
				/>
			</div>

			<div className='flex justify-between flex-row-reverse'>
				<PositionButton>
					<Button
						onClick={onNext}
						bgColor={'#00C092'}
						className="w-44 text-2xl font-medium rounded-3xl h-11"
						disabled={!state.canContinue}
					>
						Done
					</Button>
				</PositionButton>

				<PositionButtonAdd>
					<div className={`buttons`} ref={elementRef as LegacyRef<any>}>
						<LinkUnderline className={pulseAnimation} type="submit">+ Save property</LinkUnderline>
						{propertyActionToApi !== 'create' &&
							<DeletePropertyButton
								onClick={() => setPropertyActionToApi('delete')}
								onCancel={() => setPropertyActionToApi('update')}
								onConfirm={onDeleteProperty}
							/>
						}
					</div>
				</PositionButtonAdd>
			</div>
		</form>
	)
}

export default AddPropertyForm