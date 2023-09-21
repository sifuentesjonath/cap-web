import { AddressType } from "@types";

export const getEmptyAddress = ():AddressType => {
	const emptyAddress:AddressType = {
		City: '', 
		Country: '', 
		PostalCode: '', 
		State: '', 
		StreetNumber: '', 
		NumberUnits: 0,
		AddressLine1: '',
	}
	return emptyAddress;
}