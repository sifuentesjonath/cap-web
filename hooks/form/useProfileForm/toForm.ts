import ProfileFormType, { UserProfileTypeWithEmail } from "@/hooks/form/useProfileForm/type";
import useDateString from "@/hooks/useDateString";

/** Convert userProfile to profileForm type */
const toForm = (userProfile: UserProfileTypeWithEmail): ProfileFormType => {
	return {
		FirstName: userProfile.FirstName,
		LastName: userProfile.LastName,
		Email: userProfile.Email,
		Country: userProfile.Address?.Country,
		State: userProfile.Address?.State,
		City: userProfile.Address?.City,
		Birthday: userProfile.Birthday && useDateString(userProfile.Birthday),
		PostalCode: userProfile.Address?.PostalCode.toString(),
		AddressLine1: userProfile.Address?.AddressLine1,
		PhoneNumber: userProfile.PhoneNumber?.[0]?.Number,
		PhoneNumberId: userProfile.PhoneNumber?.[0]?.Id, 
	}
}

export default toForm;