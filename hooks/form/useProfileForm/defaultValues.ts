import ProfileFormType, { UserProfileTypeWithEmail } from "@/hooks/form/useProfileForm/type";
import useDateString from "@/hooks/useDateString";

/** ProfileForm default values */
const getDefaultValues = (): ProfileFormType => {
	return {
		FirstName: '',
		LastName: '',
		Email: '',
		Country: '',
		State: '',
		City: '',
		Birthday: null,
		PostalCode: '',
		AddressLine1: '',
		PhoneNumber: '+1', // set Canada flag by default in phoneNumber input 
		PhoneNumberId: null,
	}
}

export default getDefaultValues;