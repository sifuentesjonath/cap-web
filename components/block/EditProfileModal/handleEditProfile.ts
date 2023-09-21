import ProfileFormType from "@/hooks/form/useProfileForm/type";
import { DeepMap } from "react-hook-form";
import getDirtyFieldsOnly from '@/hooks/form/dirtyFields';

export const getProfileParamsDirtyFieldsOnly = (profileData: ProfileFormType, dirtyFields: DeepMap<ProfileFormType, true>) => {
	let dirtyProfileFields = getDirtyFieldsOnly<ProfileFormType>(profileData, dirtyFields);
	const 
		PhoneNumberId = profileData.PhoneNumberId,
		isPhoneNumberDirtyField = dirtyProfileFields.PhoneNumber;
	if(isPhoneNumberDirtyField) dirtyProfileFields = { ...dirtyProfileFields, PhoneNumberId };
	return dirtyProfileFields;
}