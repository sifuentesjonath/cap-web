/**
 * **bad**: Something bad happened that might need to retry request
 * **neutral**: A little retry or user can continue
*/
const BuildiumErrors = {
	// == Creation ==

	// -- Property -- 
	bad_propertyCreation: 'bad-creation-property-buildium-response-error',
	bad_propertyCreationBuildiumIdsMissing: 'bad-creation-property-buildiumIds-error',
	propertyCreationAlreadyExists: 'creation-property-already-exists-error',
	
	// -- Rental Owner --
	bad_rentalOwnerCreationAddressMissing: 'bad-creation-rentalowner-address-missing-error',
	bad_rentalOwnerCreationAddressNotValid: 'bad-creation-rentalowner-address-not-valid-error',
	bad_rentalOwnerCreationBuildiumIdsMissing: 'bad-creation-rentalowner-buildiumids-missing-error',
	rentalOwnerCreation: 'creation-rentalowner-buildium-response-error',

	// -- Unit --
	unitRefresh: 'creation-unit-buildium-response-error',
	unitIsEmpty: 'creation-get-unit-isempty-buildium-response-error',

	// == Update ==

	propertyUpdate: 'update-rentalowner-buildium-response-error',
	rentalOwnerUpdate: 'update-rentalowner-buildium-response-error',
	unitUpdate: 'update-unit-buildium-response-error',

	// == Delete ==
	// propertyDeletion: 'delete-property-buildium-response-error'
	
}

export const ClientBuildiumErrors = {
	buildiumFixTooManyAttempts: 'fix-buildium-too-many-attempts-error',
}

export default BuildiumErrors;