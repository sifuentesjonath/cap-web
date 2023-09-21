/**
 * If Number of Properties = 1, 2, or 3 --> Nine percent (9%)
 * If Number of Properties = 4,5,6, or 7 --> Seven percent (7%)
 * If Number of Properties > 7 (8, 9, 10, ….) --> Five percent (5%)
 */
enum PropertyFees {
	smallPropertiesFee = 6,
	mediumPropertiesFee =5,
	morePropertiesFee = 4,
}

/** Returns property fee percentage number depending on the number of properties given */
const usePropertyFee = (numberOfProperties: number) => {
	if(isNaN(numberOfProperties))
		return PropertyFees.smallPropertiesFee;

	if(numberOfProperties <= 3) 
		return PropertyFees.smallPropertiesFee;

	if(numberOfProperties > 3 && numberOfProperties <= 7) 
		return PropertyFees.mediumPropertiesFee;

	if(numberOfProperties > 7)
		return PropertyFees.morePropertiesFee;
}

export default usePropertyFee;