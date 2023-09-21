import { IOptionsProps } from '@/src/components/StyledSelect/SelectOnly';

// Form validations

export const validateAddress = {
	checkOnlyNumbers: (value) => !isOnlyNumbers(value) || "Address cannot be only numbers.",
}

export const validateUnit = {
	checkOnlyNumbers: v => isOnlyNumbers(v) || 'Unit cannot be only numbers.',
}

export const validatePostalCode = {}

export const validateProvidence = {}

export const validateCompanyName = {}

export const validateCurrentLeased = {}

export const validateCurrentEstimatedRent = {
	checkOnlyNumbers: v => isOnlyNumbers(v) || 'Invalid estimated rent.',
}

export const validateBedroom = {
	checkOnlyNumbers: v => isOnlyNumbers(v) || 'Bedrooms must be specified as a number.',
}

export const validateBathroom = {
	checkOnlyNumbers: v => isOnlyNumbers(v) || 'Bathroom must be specified as a number.',
}

// Helpers

const isOnlyNumbers = (value:string):boolean => {
	function isNumeric(value){
		return !isNaN(parseFloat(value)) && isFinite(value);
	}
	return isNumeric(value) ? true : false;
}

export const getTitleHoldersOptions = (titleHolders):IOptionsProps[] => {
	return titleHolders && titleHolders.length > 0
	? titleHolders?.map(titleholder => {
			return {
				value: titleholder.Id,
				label: `${titleholder.FirstName} ${titleholder.LastName}`,
			};
		})
	: []
}