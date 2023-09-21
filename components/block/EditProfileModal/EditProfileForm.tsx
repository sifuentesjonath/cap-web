import { FC, useEffect, useState } from 'react'
// Hooks
import useProfileForm from '@/hooks/form/useProfileForm';
import { useQueryClient } from 'react-query';
import { useAppSelector } from '@redux/hook';
import useProfileData, { useUpdateProfileData, QUERY_KEY_NAME as profileQueryKeyName } from '@/service/useApi/Profile/useProfileData';
import useErrorMessage from '@/hooks/useErrorMessage';
// Helpers
import { validateEmail } from '@utils/index';
// Components
import Input from '@components/block/PropertyCardModalInput';
import Button from '@components/block/Button';
import StyledAutoAddress from '@components/element/StyledAutoAddress';
import PhoneNumberInput from '@components/element/PhoneNumberInput';
import openAdviseToast from '@components/element/StyledToastAdvise';
// Type
import { UserProfileType } from '@/service/apiTypes';
import ProfileFormType from '@/hooks/form/useProfileForm/type';
import { SubmitHandler } from 'react-hook-form';
// Style
import {
	EditProfileFormContainer,
	StyledInputs,
	ButtonPosition,
} from './style'
import { getProfileParamsDirtyFieldsOnly } from './handleEditProfile';
import validateSpecialCharacters from '@utils/validations/validateSpecialCharacters';

interface IEditProfileForm {
	userProfile: UserProfileType;
	onExit: () => void;
}
const EditProfileForm: FC<IEditProfileForm> = ({ userProfile, onExit }) => {
	const LoggedUser = useAppSelector((state: any) => state.auth.Email);
	const queryClient = useQueryClient();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const { isFetching } = useProfileData({ refetchOnWindowFocus: false });

	const onSubmitSuccess = () => {
		queryClient.invalidateQueries(profileQueryKeyName).then(() => {
			setIsSubmitting(false);
			openAdviseToast('success', 'Your profile was updated successfully');
			onExit();
		});
	}
	const useUpdateProfile = useUpdateProfileData(onSubmitSuccess, (err) => { throw (err) });

	const {
		control,
		watch,
		register,
		handleSubmit,
		setValue: setProfile,
		formState: { dirtyFields, touchedFields, errors }
	} = useProfileForm({ ...userProfile, Email: LoggedUser });

	const onSubmitEditProfile: SubmitHandler<ProfileFormType> = async formData => {
		// setIsSubmitting(true);
		const profileParams = getProfileParamsDirtyFieldsOnly(formData, dirtyFields);
		try {
			useUpdateProfile.mutate(profileParams);
		} catch (error) {
			// console.error('[Update Profile - error] - ', error);
			const errorMessage = useErrorMessage(error, 'An error ocurred while trying to update your profile, try again later.');
			openAdviseToast('failed', errorMessage);
		} finally {
			// setIsSubmitting(false);
		}
	}

	const setProfileConfig = {
		shouldDirty: true // Enable setProfile to mark as dirty field when updated
	}

	useEffect(() => { }, [isFetching])
	const capitalizeFirstLetter = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

	return (
		<EditProfileFormContainer onSubmit={handleSubmit(onSubmitEditProfile)}>
			<StyledInputs>
				<div className='block'>
					<Input
						className='input capitalize'
						placeholderStyle='placeHolderStyle'
						placeholder='First Name'
						error={errors.FirstName}
						{...register('FirstName', {
							validate: (text) => validateSpecialCharacters(text) ? 'Special characters are not valid' : null,
							setValueAs: (text) => capitalizeFirstLetter(text),
						})}
					/>
					<Input
						className='input capitalize'
						placeholderStyle='placeHolderStyle'
						placeholder='Last Name'
						error={errors.LastName}
						{...register('LastName', {
							validate: (text) => validateSpecialCharacters(text) ? 'Special characters are not valid' : null,
							setValueAs: (text) => capitalizeFirstLetter(text),
						})}
					/>
				</div>

				<div className='block' >
					<Input
						className='input-disabled'
						placeholderStyle='placeHolderStyle'
						placeholder='Email'
						disabled={true}
						{...register('Email', {
							validate: value =>
								validateEmail(value)
									? true : 'Email address is not valid',
						})}
					/>
					<PhoneNumberInput
						name='PhoneNumber'
						control={control}
						rules={{
							required: true,
						}}
					/>
				</div>

				<StyledAutoAddress defaultValue={userProfile?.Address?.AddressLine1 ?? null}
					onSelect={(address) => {
						setProfile('AddressLine1', `${address.street} ${address.address}`, setProfileConfig);
						setProfile('City', address.city, setProfileConfig);
						setProfile('State', address.state, setProfileConfig);
						setProfile('Country', address.country, setProfileConfig)
						setProfile('PostalCode', address.zip, setProfileConfig);
					}}
				/>

				<div className='block'>
					{/* <Input
						className='input'
						placeholderStyle='placeHolderStyle'
						placeholder='Unit'
						{...register('Unit', {})}
					/> */}
					<Input
						defaultValue={''}
						className='input'
						placeholderStyle='placeHolderStyle'
						placeholder='City'
						{...register('City', {})}
					/>
				</div>

				<div className='block'>
					<Input
						className='input'
						placeholderStyle='placeHolderStyle'
						placeholder='Province'
						{...register('State', {})}
					/>
					<Input
						className='input'
						placeholderStyle='placeHolderStyle'
						placeholder='Country'
						{...register('Country', {})}
					/>
				</div>

				<div className='block w-1/2'>
					<Input
						className='input'
						placeholderStyle='placeHolderStyle'
						placeholder='Postal Code'
						{...register('PostalCode', {})}
					/>
				</div>
			</StyledInputs>

			<ButtonPosition>
				<Button
					type='submit'
					className='button-style'
					bgColor='#000000'
					isLoading={isFetching}
				>
					Save
				</Button>
			</ButtonPosition>

		</EditProfileFormContainer>
	)
}

export default EditProfileForm