import { useForm, UseFormReturn } from 'react-hook-form';
import ProfileFormType, { UserProfileTypeWithEmail } from './type';
import toForm from './toForm';
import getDefaultValues from './defaultValues';

interface IUseProfileForm extends UseFormReturn<ProfileFormType> {
	toForm: (profile:UserProfileTypeWithEmail) => ProfileFormType;
}
const useProfileForm = (profileDefaultValues: UserProfileTypeWithEmail):IUseProfileForm => {
	const defaultValues = profileDefaultValues ? toForm(profileDefaultValues) : getDefaultValues();
	const profileForm = useForm<ProfileFormType>({ defaultValues });
	
	return {
		...profileForm,
		toForm
	}
}

export default useProfileForm;