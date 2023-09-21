import { UserProfileType } from "@/service/apiTypes";

type ProfileFormType = {
	Id?: number;
	FirstName?: string;
	LastName?: string;
	Email?: string;
	PhoneNumber?: string;
	PhoneNumberId?: number;
	AddressLine1?: string;
	Birthday?: Date;
	Unit?: string;
	City?: string;
	State?: string;
	Country?: string;
	PostalCode?: string;
}

export interface UserProfileTypeWithEmail extends UserProfileType {
	Email?: string;
}

export default ProfileFormType;